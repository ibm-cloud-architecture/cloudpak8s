#!/bin/bash

CUR_DIR=$(cd $(dirname $0); pwd)

VERSION="v2.9.1"
SUBJECT="/CN=kubernetes.helm"

set -x

export TILLER_NAMESPACE=kube-system

mkdir -p ${CUR_DIR}/helm
cd ${CUR_DIR}/helm
CUR_DIR=$(cd $(dirname $0); pwd)

cp_bin=$(which cp)

# TODO: ensure oc whoami is admin?

# NOT going to be done in production... VM template would already
curl -s https://storage.googleapis.com/kubernetes-helm/helm-${VERSION}-linux-amd64.tar.gz | tar xz
${cp_bin} -f ./linux-amd64/helm /usr/local/bin/ /usr/bin/

# generate key for ca
openssl genrsa -out ca.key.pem 4096

# generate cert from key for ca
openssl req -key ca.key.pem -new -x509 \
    -days 7300 -sha256 \
    -out ca.cert.pem \
    -extensions v3_ca \
    -subj "${SUBJECT}"

# generate key for tiller
openssl genrsa -out tiller.key.pem 4096

# generate csr for tiller
openssl req -new -sha256 \
    -key tiller.key.pem \
    -out tiller.csr.pem \
    -subj "${SUBJECT}"

# sign csr for tiller
openssl x509 -req -days 7300 \
    -CA ca.cert.pem \
    -CAkey ca.key.pem \
    -CAcreateserial \
    -in tiller.csr.pem \
    -out tiller.cert.pem

# generate key for helm
openssl genrsa -out helm.key.pem 4096

# generate csr for helm
openssl req -new -sha256 \
    -key helm.key.pem \
    -out helm.csr.pem \
    -subj "${SUBJECT}"

# sign csr for helm
openssl x509 -req -days 7300 \
    -CA ca.cert.pem \
    -CAkey ca.key.pem \
    -CAcreateserial \
    -in helm.csr.pem \
    -out helm.cert.pem

oc get project ${TILLER_NAMESPACE} 2>/dev/null
[[ $? -ne 0 ]] && oc new-project ${TILLER_NAMESPACE}
oc project ${TILLER_NAMESPACE}

# create service account "tiller"
oc create -f - <<EOF
apiVersion: v1
kind: ServiceAccount
metadata:
  name: ${TILLER_NAMESPACE}
  namespace: ${TILLER_NAMESPACE}
EOF

# create role "tiller"
oc create -f - <<EOF
kind: Role
apiVersion: v1
metadata:
  name: ${TILLER_NAMESPACE}
rules:
- apiGroups:
  - ""
  resources:
  - configmaps
  verbs:
  - create
  - get
  - list
  - update
  - delete
- apiGroups:
  - ""
  resources:
  - namespaces
  verbs:
  - get
EOF

# bind tiller role to tiller service account
oc create -f - <<EOF
kind: RoleBinding
apiVersion: v1
metadata:
  name: ${TILLER_NAMESPACE}
roleRef:
  name: ${TILLER_NAMESPACE}
  namespace: ${TILLER_NAMESPACE}
subjects:
- kind: ServiceAccount
  name: ${TILLER_NAMESPACE}
EOF

# just to be safe
oc adm policy add-cluster-role-to-user cluster-admin "system:serviceaccount:${TILLER_NAMESPACE}:tiller"
oc adm policy add-cluster-role-to-user cluster-admin "system:serviceaccount:${TILLER_NAMESPACE}:default"

helm init \
    --tiller-tls \
    --tiller-tls-cert ${CUR_DIR}/tiller.cert.pem \
    --tiller-tls-key ${CUR_DIR}/tiller.key.pem \
    --tiller-tls-verify \
    --tls-ca-cert ${CUR_DIR}/ca.cert.pem \
    --service-account ${TILLER_NAMESPACE} \
    --tiller-namespace ${TILLER_NAMESPACE}

sleep 10

oc rollout status deploy tiller-deploy -w

sleep 10

${cp_bin} -f ${CUR_DIR}/ca.cert.pem $(helm home)/ca.pem
${cp_bin} -f ${CUR_DIR}/helm.cert.pem $(helm home)/cert.pem
${cp_bin} -f ${CUR_DIR}/helm.key.pem $(helm home)/key.pem

helm version --tls --tiller-namespace=${TILLER_NAMESPACE}

[[ $? -eq 0 ]] && exit 0

exit 1

# to uninstall:
# oc delete all -n tiller --all
# oc delete sa/tiller role/tiller rolebinding/tiller#
# oc delete project tiller
# rm -f $(helm home)/*.pem
# rm -f  /usr/local/bin/helm /usr/bin/helm
