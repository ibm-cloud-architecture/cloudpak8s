#!/bin/bash
PROJECT=$1
echo -------------------------------------
echo POD
oc get -n $PROJECT Pod
echo -------------------------------------
echo PVC
oc get -n $PROJECT pvc
echo -------------------------------------
echo SERVICE
oc get -n $PROJECT Service
echo -------------------------------------
echo STATEFULSET
oc get -n $PROJECT StatefulSet
echo -------------------------------------
echo DAMEONSET
oc get -n $PROJECT DaemonSet
echo -------------------------------------
echo DEPLOYMENT
oc get -n $PROJECT Deployment
echo -------------------------------------
echo REPLICASET
oc get -n $PROJECT replicaset
echo -------------------------------------
echo IMAGESTREAM
oc get -n $PROJECT imagestream
echo -------------------------------------
echo ROUTE
oc get -n $PROJECT route
echo -------------------------------------
echo CONFIGMAP
oc get -n $PROJECT ConfigMap
echo -------------------------------------
echo CLIENT
oc get -n $PROJECT Client
echo -------------------------------------
echo JOB
oc get -n $PROJECT Job
echo -------------------------------------
echo SERVICEACCOUNT
oc get -n $PROJECT ServiceAccount
echo -------------------------------------
echo ROLEBINDING
oc get -n $PROJECT RoleBinding
echo -------------------------------------
echo ROLE
oc get -n $PROJECT Role
echo -------------------------------------
echo PODDISRUPTIONBUDGET
oc get -n $PROJECT PodDisruptionBudget
echo -------------------------------------
echo CLUSTERROLEBINDING
#oc get -n $PROJECT ClusterRoleBinding
echo -------------------------------------
echo INGRESS
oc get -n $PROJECT Ingress
echo -------------------------------------
echo MONITORINGDASHBOARD
oc get -n $PROJECT MonitoringDashboard
echo -------------------------------------
echo SECRET
oc get -n $PROJECT secret