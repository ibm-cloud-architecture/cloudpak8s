(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),s=a("NmYn"),r=a.n(s),i=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),u=a.n(p),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,s=void 0===o?[]:o;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=s.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},w=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,s=o.baseUrl,r=o.subDirectory,c=s+"/edit/"+o.branch+r+"/src/pages"+t;return s?Object(m.b)("div",{className:"bx--row "+w.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:w.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),j=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),l=n.replace(c,a);return Object(m.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=s,t),j.listItem)},Object(m.b)(i.Link,{className:j.link,to:""+l},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:j.list},s))))))},t}(o.a.Component),A=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,s=t.frontmatter,b=void 0===s?{}:s,d=t.relativePagePath,p=t.titleType,u=b.tabs,w=b.title,O=b.theme,j=b.description,k=b.keywords,v=Object(N.a)().interiorTheme,x=Object(i.useStaticQuery)("2456312558").site.pathPrefix,S=x?n.pathname.replace(x,""):n.pathname,M=u?S.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",I=O||v;return Object(m.b)(l.a,{tabs:u,homepage:!1,theme:I,pageTitle:w,pageDescription:j,pageKeywords:k,titleType:p},Object(m.b)(h,{title:o?Object(m.b)(o,null):w,label:"label",tabs:u,theme:I}),u&&Object(m.b)(y,{title:w,slug:S,tabs:u,currentTab:M}),Object(m.b)(A.a,{padded:!0},a,Object(m.b)(g,{relativePagePath:d})),Object(m.b)(f.a,{pageContext:t,location:n,slug:S,tabs:u,currentTab:M}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},F8N8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n,o=a("wx14"),s=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),l=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),b={_frontmatter:c},d=i.a;function p(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)(d,Object(o.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Scalability Overview"),Object(r.b)("p",null,"One of the major advantages of a cloud platform such as Open Shift Container Platform is the capability to scale up resources to deal with additional load and to scale down to conserve resources when there is less load.\nIn this document we will detail some of the tasks relevant to scalability in OpenShift."),Object(r.b)("p",null,"In practice, make sure to test the scalability capabilities of your infrastructure and ensure that your procedures are suitable. For example, attempt to roll out additional nodes gradually and don’t burst out with hundreds of new nodes simultaneously. This will needlessly strain the provisioning capabilties of your infrastructure and you may hit rate-limits set by your cloud provider."),Object(r.b)("p",null,"Additionally, take into account the actual availability zones your clusters require - don’t perform all your scaling in one physical location."),Object(r.b)("p",null,"In this document, we will focus on the Master Nodes scalability and Worker Nodes scalability.  "),Object(r.b)("p",null,"Note that there are two basic patterns to deploy OpenShift infrastructure:  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"User Provisioned Infrastructure (UPI) is when the resources are provisioned externally and OpenShift uses them."),Object(r.b)("li",{parentName:"ul"},"Installer Provisioned Infrastructure (IPI) is when the OpenShift installer programmatically creates the resources.\nThe choice between UPI and IPI is done as part of the overall OpenShift architecture during Day 0 planning.")),Object(r.b)("h2",null,"Day 1 Platform"),Object(r.b)("p",null,"Care must be taken during the initial design and deployment of the OpenShift cluster to allow the cluster to expand. For example, set the cluster classless inter-domain routing (CIDR) to be large enough to accept the number of nodes you expect to grow into."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Day 1 Operations tasks for Scalability:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#set-the-cluster-network-cidr"},"Set the cluster network CIDR")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#set-the-pod-capacity-of-nodes"},"Set the pod capacity of Nodes"))),Object(r.b)("h2",null,"Day 2 Platform"),Object(r.b)("p",null,"During regular Day 2 operations the cluster may scale up, based on ",Object(r.b)("a",{parentName:"p",href:"../Capacity"},"Capacity")," requirements."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#add-worker-nodes"},"Add Worker Nodes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#add-worker-nodes-manually"},"Add Worker Nodes Manually")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#add-master-nodes"},"Add Master Nodes"))),Object(r.b)("h2",null,"Day 1 Application"),Object(r.b)("p",null,"For the purposes of this section, scaling the application is considered to be part of application management and deployment and is not covered here, but in ",Object(r.b)("a",{parentName:"p",href:"../BuildDeploy"},"Build & Deploy"),"."),Object(r.b)("h2",null,"Day 2 Application"),Object(r.b)("p",null,"For the purposes of this section, scaling the application is considered to be part of application management and deployment and is not covered here, but in ",Object(r.b)("a",{parentName:"p",href:"../BuildDeploy"},"Build & Deploy"),"."),Object(r.b)("h2",null,"Mapping to Personas"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Persona"),Object(r.b)("th",{parentName:"tr",align:null},"Task"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"SRE"),Object(r.b)("td",{parentName:"tr",align:null},"Set the cluster network CIDR")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"SRE"),Object(r.b)("td",{parentName:"tr",align:null},"Set the pod capacity of Nodes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"SRE"),Object(r.b)("td",{parentName:"tr",align:null},"Add Worker Nodes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"SRE"),Object(r.b)("td",{parentName:"tr",align:null},"Add Worker Nodes Manually")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"SRE"),Object(r.b)("td",{parentName:"tr",align:null},"Add Master Nodes")))),Object(r.b)("a",{name:"set-the-cluster-network-cidr"}),Object(r.b)("h2",null,"Set the cluster network CIDR"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing"},"CIDR")," setting defines the maximum size of the overall OpenShift network."),Object(r.b)(l,{mdxType:"InlineNotification"},"The default clusterNetwork cidr 10.128.0.0/14 cannot be used if the cluster size is more than 500 nodes. It must be set to 10.128.0.0/12 or 10.128.0.0/10 to get to larger node counts beyond 500 nodes."),Object(r.b)("p",null,"More information can be found in the ",Object(r.b)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.3/scalability_and_performance/recommended-install-practices.html"},"OpenShift 4.3 documentation"),"."),Object(r.b)("a",{name:"set-the-pod-capacity-of-nodes"}),Object(r.b)("h2",null,"Set the pod capacity of Nodes"),Object(r.b)(l,{mdxType:"InlineNotification"},"The OpenShift Container Platform node configuration file contains important options. For example, two parameters control the maximum number of pods that can be scheduled to a node: podsPerCore and maxPods."),Object(r.b)("p",null,"In Kubernetes, a pod that is holding a single container actually uses two containers. The second container is used to set up networking prior to the actual container starting. Therefore, a system running 10 pods will actually have 20 containers running."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"maxPods")," sets the number of pods the node can run to a fixed value, regardless of the properties of the node."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"podsPerCore")," sets the number of pods the node can run based on the number of processor cores on the node."),Object(r.b)("p",null,"Setting podsPerCore to 0 disables this limit. The default is 0. podsPerCore cannot exceed maxPods."),Object(r.b)("p",null,"When both options are in use, the lower of the two values limits the number of pods on a node. "),Object(r.b)("p",null,"More information about configuring these settings can be found in the ",Object(r.b)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.3/scalability_and_performance/recommended-host-practices.html#recommended-node-host-practices_"},"OpenShift 4.3 documentation"),"."),Object(r.b)("a",{name:"add-worker-nodes"}),Object(r.b)("h2",null,"Add Worker Nodes"),Object(r.b)("p",null,"To manage high volume workload with your applications, the OpenShift can be scaled by adding more worker nodes manually or by the AutoScaler.  There are two ways to add worker nodes; 1). adding worker nodes manually or 2). adding worker node by AutoScaler. We will talk about those ways. You also would like to understand that there will be different ways to add worker node manually. It depends on how you create you cluster environment. We will discuss several cases such as a). Cluster in IPI (AWS, Azure, GCP), b). Cluster in UPI (VMware and Bere Metal), and c). Cluster in IBM Cloud.  "),Object(r.b)("a",{name:"add-worker-nodes-manually"}),Object(r.b)("h3",null,"Add Worker Nodes manually"),Object(r.b)("p",null,"We will start discussing how to add worker nodes manually.  As mentioned, the steps will be different depends on the cluster environment.  We will cover 3 scenarios such as AWS for IPI, VMware for UPI, and IBM Cloud.  "),Object(r.b)("h3",null,"Add Worker Nodes in IPI (AWS, Azure)"),Object(r.b)("p",null,"To add worker nodes in IPI, you would need to know about the resources ",Object(r.b)("strong",{parentName:"p"},"Machine")," and ",Object(r.b)("strong",{parentName:"p"},"MachineSet"),". It is based on the Kubernets Cluster API.  You can find the information about the Cluster API in the following URL."),Object(r.b)("p",null,"Kubernetes Cluster API:",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cluster-api"},"https://github.com/kubernetes-sigs/cluster-api"),"   "),Object(r.b)("h3",null,"The Machine resource"),Object(r.b)("p",null,"The Machine is the resource which describes the status of nodes.\nWhen you deploy your cluster in IPI, the Installer automatically creates the Machine resource for the Master and Worker nodes."),Object(r.b)("p",null,"Run the ",Object(r.b)("inlineCode",{parentName:"p"},"oc get machines")," command to obtain the Machine resource information. You need to be a user which has cluster admin permission."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ oc get machines -n openshift-machine-api\nNAME                                     STATE     TYPE        REGION      ZONE         AGE\ncsmo1aws-fsdjv-master-0                  running   m4.xlarge   us-west-1   us-west-1b   43h\ncsmo1aws-fsdjv-master-1                  running   m4.xlarge   us-west-1   us-west-1c   43h\ncsmo1aws-fsdjv-master-2                  running   m4.xlarge   us-west-1   us-west-1b   43h\ncsmo1aws-fsdjv-worker-us-west-1b-mkdqf   running   m4.large    us-west-1   us-west-1b   43h\ncsmo1aws-fsdjv-worker-us-west-1b-p24nk   running   m4.large    us-west-1   us-west-1b   43h\ncsmo1aws-fsdjv-worker-us-west-1c-pm2bj   running   m4.large    us-west-1   us-west-1c   43h\n$ \n")),Object(r.b)("p",null,"The Machine is defined as the resource in the Machine API project called ",Object(r.b)("strong",{parentName:"p"},"openshift-machine-api"),".\nAs you see in the command output above, the Machines are created per nodes (both Master and Worker)."),Object(r.b)("p",null,"There are a several options to display the output of ",Object(r.b)("strong",{parentName:"p"},"oc get machines")," command. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'$ oc get machines -n openshift-machine-api -o jsonpath=\'{range .items[*]}{"\\n"}{.metadata.name}{"\\t"}{.spec.providerSpec.value.instanceType}{end}{"\\n"}\'\n\ncsmo1aws-fsdjv-master-0 m4.xlarge\ncsmo1aws-fsdjv-master-1 m4.xlarge\ncsmo1aws-fsdjv-master-2 m4.xlarge\ncsmo1aws-fsdjv-worker-us-west-1b-mkdqf  m4.large\ncsmo1aws-fsdjv-worker-us-west-1b-p24nk  m4.large\ncsmo1aws-fsdjv-worker-us-west-1c-pm2bj  m4.large\n$ \n')),Object(r.b)("p",null,"For your reference, further examples are available ",Object(r.b)("a",{parentName:"p",href:"./scalability_command_examples.md#oc-get-machines"},"here"),"."),Object(r.b)("p",null,"You can specify ",Object(r.b)("strong",{parentName:"p"},"-o yaml")," option with the oc get machine command, you can find the meta date such as Machine name and Label as well as the spec information."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ oc get machine/<machine_name> -n openshift-machine-api -o yaml\n")),Object(r.b)("h3",null,"The Machine Set resource"),Object(r.b)("p",null,"The MachineSet is the resource which makes a group of the Machine resource in the ",Object(r.b)("strong",{parentName:"p"},"openshift-machine-api")," project. The MachineSet is also created by the Installer automatically.\nThe cluster administrator can add or remove the Machine by increasing or decresing the number of replicas of the MachineSet.\nYou can find out the Machine Set information by issuing the oc get machineset command as follow."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ oc get machinesets -n openshift-machine-api\nNAME                               DESIRED   CURRENT   READY   AVAILABLE   AGE\ncsmo1aws-fsdjv-worker-us-west-1b   2         2         2       2           2d12h\ncsmo1aws-fsdjv-worker-us-west-1c   1         1         1       1           2d12h\n$\n")),Object(r.b)("p",null,"You can also get the MachineSet information as the YAML format with the ",Object(r.b)("strong",{parentName:"p"},"-o yaml")," option for the oc get machineset command."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ oc get machineset/<machineset_name> -n openshift-machine-api -o yaml\n")),Object(r.b)("p",null,"You can get detailed information of the machinesets by executing ",Object(r.b)("strong",{parentName:"p"},"oc describe machinesets")," command. You can find some examples of the use of ",Object(r.b)("a",{parentName:"p",href:"./scalability_command_examples.md#oc-describe-machine"},"oc commands"),"."),Object(r.b)("p",null,"The MachineSet for the Machine of Worker nodes is created automatically in the ",Object(r.b)("strong",{parentName:"p"},"Availability Zone")," which you specify during the cluster installation."),Object(r.b)("p",null,"You can find out on which Availability Zone is used if you see the ",Object(r.b)("strong",{parentName:"p"},"providerSpec"),".  You may need to add the new MachineSet if a new Region or new Availability Zone is added in your Cloud provider.  "),Object(r.b)("h3",null,"Adding / Removing Machine"),Object(r.b)("p",null,"To add the Machine to a specific Availability Zone, you can run the ",Object(r.b)("strong",{parentName:"p"},"oc scale")," command.  It will increase the number of replica of MachineSet. The following is an example to add two worker nodes."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ oc scale machineset csmo1aws-fsdjv-worker-us-west-1c --replicas=2 -n openshift-machine-api\nmachineset.machine.openshift.io/csmo1aws-fsdjv-worker-us-west-1c scaled\n$\n")),Object(r.b)("p",null,"By the command above, the number of replica of the MachineSet will become 2.  The worker nodes and Machine in the availability zone in the MachineSet will be 2 as well."),Object(r.b)("p",null,"If you removed applications/services or decrease workload for some reason, you may want to reduce number of worker nodes.  If that’s the case, then you can run oc scale command and specify appropriate number of replicas as follow. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ oc scale machineset csmo1aws-fsdjv-worker-us-west-1b --replicas=1 -n openshift-machine-api\nmachineset.machine.openshift.io/csmo1aws-fsdjv-worker-us-west-1b scaled\n$\n")),Object(r.b)("p",null,"In this case, the number of replica will be 1."),Object(r.b)("p",null,"After you execute the command, you can verify the result with the commands such as ",Object(r.b)("strong",{parentName:"p"},"oc get machines")," and/or ",Object(r.b)("strong",{parentName:"p"},"oc get nodes"),".  "),Object(r.b)("p",null,"In our example above, the number of workers on us-west-1b zone is 1 and the number of workers on us-west-1c zone is 2."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ oc get machines -n openshift-machine-api\nNAME                                     STATE     TYPE        REGION      ZONE         AGE\ncsmo1aws-fsdjv-master-0                  running   m4.xlarge   us-west-1   us-west-1b   2d13h\ncsmo1aws-fsdjv-master-1                  running   m4.xlarge   us-west-1   us-west-1c   2d13h\ncsmo1aws-fsdjv-master-2                  running   m4.xlarge   us-west-1   us-west-1b   2d13h\ncsmo1aws-fsdjv-worker-us-west-1b-gx8d2   running   m4.xlarge   us-west-1   us-west-1b   4m33s\ncsmo1aws-fsdjv-worker-us-west-1c-5sr2w   running   m4.xlarge   us-west-1   us-west-1c   17m\ncsmo1aws-fsdjv-worker-us-west-1c-x8gxr   running   m4.xlarge   us-west-1   us-west-1c   6m38s\n$\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ oc get nodes\nNAME                                         STATUS   ROLES    AGE     VERSION\nip-10-0-129-227.us-west-1.compute.internal   Ready    master   2d13h   v1.14.6+cebabbf4a\nip-10-0-136-11.us-west-1.compute.internal    Ready    worker   57s     v1.14.6+cebabbf4a\nip-10-0-139-19.us-west-1.compute.internal    Ready    master   2d13h   v1.14.6+cebabbf4a\nip-10-0-146-131.us-west-1.compute.internal   Ready    worker   3m8s    v1.14.6+cebabbf4a\nip-10-0-146-194.us-west-1.compute.internal   Ready    worker   13m     v1.14.6+cebabbf4a\nip-10-0-151-108.us-west-1.compute.internal   Ready    master   2d13h   v1.14.6+cebabbf4a\n$ \n")),Object(r.b)("ul",null),Object(r.b)("h3",null,"Adding / Removing worker nodes via Web Console"),Object(r.b)("p",null,"You can also add/remove worker nodes via Web Console."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Login with the cluster admin permission")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to Compute —> Machine Sets\n",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABsUlEQVQoz52Q204TURSG5ykMyKHlMPY0TY+SognBCyTEFihGCYnaCKhpfDoegVsvveMBiEarlDotc9h7f66ZaQuJN+pKvvxrrZ3977WX1aivUSpVyGaz5OxlsitpYYnMcpqM6NLCHKn7MywKqbnZWBdmkzzS+Zl7rCzOU8xlcDI2lpMvksnmsZ0quZ1jVrc62E875HfeUm6dCKdUdm+p7b2jLlTkrNbuUjv4SLH1nvJ+N1bLqa6Ttos8ax/x3Q1wFfRuoC86AtwxwzGjO3nUH5iEa52oVX74mJTtsHfwkvPPl5x9+sK3vjgip0Zc0QlRPuFOz4QeqEBq6etQJqw0ZEKH3fYhF5cDLr76/LoJicKIZxAEeJ43rk3cC0MV96I6ykOlUEqjtMYqlNZIrRZo7r+g/9PF9zVDL4yJ4ke/R6/vSq3QcsEYHZtcD30x0uNHTHwWYdXXN3lQqPL88BVXV0OZTuPKhF6gYsPBcMBg5DOSh/T0solrpc2fhk+2W9QfbfL6+IN8zycJM/3iv4bVlN01NrbonHZlL4nhZJLbvf091nazTbWxwdGbk6nh/0w2id8OD4JEw81zaAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"scalability_aws_1",title:"scalability_aws_1",src:"/static/46967b040e81d8fe997e740f880f4aad/3cbba/scalability_aws_1.png",srcSet:["/static/46967b040e81d8fe997e740f880f4aad/7fc1e/scalability_aws_1.png 288w","/static/46967b040e81d8fe997e740f880f4aad/a5df1/scalability_aws_1.png 576w","/static/46967b040e81d8fe997e740f880f4aad/3cbba/scalability_aws_1.png 1152w","/static/46967b040e81d8fe997e740f880f4aad/82b59/scalability_aws_1.png 1437w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select MachineSet on the list and click it")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click on X machine under the ",Object(r.b)("strong",{parentName:"p"},"Desired Count")," on the ",Object(r.b)("strong",{parentName:"p"},"Overview")," tab in the ",Object(r.b)("strong",{parentName:"p"},"Machine Set Details")," page\n",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.208333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1klEQVQoz52SbW8SQRSF9y/QQqFg05LGsIKlQElp0GqNQaM1aZtU0lj1PxjfwC4NGjT1g/GDYPyX7b6xLzOzxztTIK2BL97kycnM7j05d2a0fE7HZqWCW/kCsitZZBZTSCeTSKeSSlMLC0jMzyE+F5swL4nFkIjHsSj/ScSxvLSk0PR8EYXbJazezGHr8SEOW33svfmB/bc/cdT+hZcnfRxf4ZXRx+vOQOmxMcCLzh80230cnfxG89MAWnlzG2sbdWSyOlqdHgQAx2fwWIT/KTK8i1L1DjIrObxvnSIIyNC2CBu2ZWHouhCcg3NGegkfISZwBL6PMPChrZNZoVTDDUr4oX0Kn5Oh45BxAMZkI4cQEaIoIhUzkd8lWpHGXStvIb2cQ9voklGIiwtTJZSmLiWUalFaaS5LNv5b4z1tp7GL+s4j6MUqur0ztckYH6UTSmUCqeOmcZppaE/3m2jsHqBaf4Av377j3DRhOZ4ymFaXjbNNtSd7z/HsoIly7R4+fz2D7bhwhyGNyeiQmUo7GUklHDHLsLb9EPX7Dazq6zC6PXi+gOcFo3EFaYQrNteY+mw2KFmF3qK8lHcfDZiU7tz2YA8DheX6MB1f6Ri5tknlBYbhdf4CKczBKbBAetsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"scalability_aws_2",title:"scalability_aws_2",src:"/static/a4f71cb1e0bab66f96c7eb7c7601c9bd/3cbba/scalability_aws_2.png",srcSet:["/static/a4f71cb1e0bab66f96c7eb7c7601c9bd/7fc1e/scalability_aws_2.png 288w","/static/a4f71cb1e0bab66f96c7eb7c7601c9bd/a5df1/scalability_aws_2.png 576w","/static/a4f71cb1e0bab66f96c7eb7c7601c9bd/3cbba/scalability_aws_2.png 1152w","/static/a4f71cb1e0bab66f96c7eb7c7601c9bd/fcddc/scalability_aws_2.png 1438w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"On the Edit Count window, type the replica number which you want to have and click on Save button\n",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABj0lEQVQoz4WSTWsTURSGBwTXbScf42T6gTMZkzQ2dbRG/Cfu3enGJJP5vjNUUGhX6kL3XRRx3V1BbUJ+RRZJ8x8EcfF4czHSiuiFh3MPnPPcd3G1dquN6zawbYe6bWPv7NBqNjl42KX76DGe94BO555ir7NPZ9/DceqYhsGWZWGZJpu1Gg3XVWglvcT6hs5aqUrZ9bhRcXjy9DmLyznT6ZTZbMZ8PudSslgs+PH9G8XrY25WbczdLpXGASX3vkKve2jVWxbregW32WYQ5zzrBZycfuRf5+z8ghfDiOzwFVH+8hqaYW6ytlHmTqPFUA75gwHv3r5hMpkwGo0Yj8eK5f3L1ws+fPqMOHpPkUYUuaAQmaoiTRBZilYxalIoE0rhQArjJCUMQ3q9Hv1+H9/35UPDX/ik0VAuJmRCXCfLFFq5aqqES2EQhERRRJIk5HlOURSqrlC9RCx7KRFXWM1oprWNXjZo7u4RRrFKmKbpb3Ecx6ou+6vyP1lJte3bDkZti7vyOwRBoJZXCf+29D9+AkQ6brRqbOg9AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"scalability_aws_3",title:"scalability_aws_3",src:"/static/41a618b9910b576d14e86241eebf7042/3cbba/scalability_aws_3.png",srcSet:["/static/41a618b9910b576d14e86241eebf7042/7fc1e/scalability_aws_3.png 288w","/static/41a618b9910b576d14e86241eebf7042/a5df1/scalability_aws_3.png 576w","/static/41a618b9910b576d14e86241eebf7042/3cbba/scalability_aws_3.png 1152w","/static/41a618b9910b576d14e86241eebf7042/a882e/scalability_aws_3.png 1439w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"\nIn our example, we updated the replica number from 1 to 2 for the csmo1aws-fsdjv-worker-us-west-1c Machine Set.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once it’s done, then the worker nodes will be added/removed.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.208333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB0klEQVQoz52S7W4SQRSG9xaoIBRsWhIVpK2FQltKbVJjWm20VkPTVKtehEYtFLDGGo3R+EMw3iXuLgv7yePMLusn/eNJnryzM+e8e05mlFwmy3JhkSu5WdIzaVKTCZLxOMlEnEmhifMxohMTgshIg/W5SIRYNBrkxKJMT035KLPzBYqlMhcvZVm9tUf1qM3u00/ce/aZg9oXHh23OfyNx402T5odXw8bHR42v7Ffa3Nw/JX9egdlobTG/GKFC+ksteZbPKBnOgycIf8TSn5JGq6SSmd4/rKFZQlDXRPo6JpG3zDwXBfXcYQGuCO8n7hYpoltmSiFpWsslCqkZjK8qLUwXWHY6wljC8eRhS7D4dDH87wzCXNGHZaFoRi5cSKMbLrfVXTRoSn+Gpqrquqby5CFf0e4p1wtVpgrlElOZziqv/I3ZWeOY/sGci07kBoWhd2MQ1nb2GJl/QaX54rUW6/paipab+AbjIug8GxTZaf6gM3b9ylVNnjz7gOabmD0bTGm4+M4cswgmRACHWt4c6fK9t098ivrnL7/SF/cymBgiXHlmJ7QISOLfxj7bK5v3WFze5dcfpnmySmqYdHVB2iGiS6QqvZ+EX7LM3mBtv0nPwBaX8FJYDRESAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"scalability_aws_5",title:"scalability_aws_5",src:"/static/7fcbeca679e6daf4775d1223aceae16d/3cbba/scalability_aws_5.png",srcSet:["/static/7fcbeca679e6daf4775d1223aceae16d/7fc1e/scalability_aws_5.png 288w","/static/7fcbeca679e6daf4775d1223aceae16d/a5df1/scalability_aws_5.png 576w","/static/7fcbeca679e6daf4775d1223aceae16d/3cbba/scalability_aws_5.png 1152w","/static/7fcbeca679e6daf4775d1223aceae16d/fcddc/scalability_aws_5.png 1438w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"\nAs you see above, the Desired Count becomes 2 in our case.",Object(r.b)("br",{parentName:"p"}),"\n","You can also find out that there is a new node created in the us-west-1c zone.\n",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACAElEQVQoz6WR7W4SQRiF9wIasBig2lAwRrsVLAUsFTGGRBuNxsb4y8RGG2M1vYeKActWUz9++Etjabw9G1lY2Nn52OX4zqytF+AkJ7P7zjvPnDNjFW0b9UoV9tIVFPIFnJvLIpvJYE4rm0EmnUZqdhZnUykzayUTCSRmZpBMnkGa1nVPPreAhVwOVmm5itpqAxcv2bi1sYnNTh9P299I3/Gi+wPbe4fY7v3Ta6ePnf0jM79yjvBy/yeed/vYetfHs84hrPK1JkrVBuYLNrrOR/zvsFZWm7hKwPP5RbQ7PQgq/vIYxoxDCg6lpFGo1F9JI1MLQwjOjXQvDxisSv0myrUbMbDrQBFwxAS4VIhow3Q6NVIEi6IIYUTfYVyTUtIcGWcarnuMw1LlOuYvLOLN2x6IQ+4kPKYwDmKgHkPPNRukCsECDlB54DIMJhJMhPQfH2It1xoorqyRw8vYbe/RInA84iSBwVgaV7rRJaB2pKEBRZuSU9cVOPYERr4yDrWs1voDNFt3sVSuw/nwWR9sHI4DZU4+icwC/3STBmtHQ09iSLAJJREqNPGth4+f4M79R6g1Wjj49JUWKJ4fN2roCdDzPePOPIQQBvibHOrII7oeIQlIaazb9zawTsBiZQ3vD76Y+2KcYpE7LqNTIKdX1PG1NFgDJwTyeYiAYCqMe/8Anp1627FGsbMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"scalability_aws_6",title:"scalability_aws_6",src:"/static/d30d2b4059edf1ca1dd49820efd9bb3b/3cbba/scalability_aws_6.png",srcSet:["/static/d30d2b4059edf1ca1dd49820efd9bb3b/7fc1e/scalability_aws_6.png 288w","/static/d30d2b4059edf1ca1dd49820efd9bb3b/a5df1/scalability_aws_6.png 576w","/static/d30d2b4059edf1ca1dd49820efd9bb3b/3cbba/scalability_aws_6.png 1152w","/static/d30d2b4059edf1ca1dd49820efd9bb3b/82b59/scalability_aws_6.png 1437w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"   "))),Object(r.b)("h2",null,"Add Worker Nodes in UPI (VMware, Bare Metal)"),Object(r.b)("p",null,"The worker nodes can be added using the same steps as the control plane nodes. "),Object(r.b)("p",null,"Create a new VM with the RHCOS installer as normal, using the ",Object(r.b)("strong",{parentName:"p"},"worker.ign")," file generated during the original install. During the machine’s start up, it will sync with the existing OpenShift cluster’s ",Object(r.b)("strong",{parentName:"p"},"Machine Config Operator")," to be admitted into the cluster."),Object(r.b)("p",null,"Note: it may be required to manually approve the node’s CSR (Certificate Signing Request) as described in the installation documentation of vSphere or Baremetal.   "),Object(r.b)("h2",null,"Add Worker Nodes in IBM Cloud (a.k.a. ROKS)"),Object(r.b)("p",null,"With IBM Cloud, adding worker nodes in the OpenShift cluster will be done by IBM Cloud Console or by using the IBM Cloud CLI with commands such as\n",Object(r.b)("inlineCode",{parentName:"p"},"ibmcloud ks worker-pool resize --cluster <cluster_name_or_ID> --worker-pool <pool_name>  --size-per-zone <number_of_workers_per_zone>"),"\nMore information can be found in the ",Object(r.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/containers?topic=containers-add_workers"},"ROKS documentation"),"."),Object(r.b)("h2",null,"Add Worker Nodes by AutoScaler"),Object(r.b)("p",null,"In the previous section, we discussed how to add worker nodes manually.  In this section, we will show you how to add worker nodes by the AutoScaler. With the Auto Scaling capability in OpenShift, the worker nodes will be added / removed automatically based on the application deployment status. You need to understand two more resources such as ",Object(r.b)("strong",{parentName:"p"},"ClusterAutoscaler")," and ",Object(r.b)("strong",{parentName:"p"},"MachineAutoscaler")," in addition to Machine and MachineSet resources. "),Object(r.b)("h3",null,"Create ClusterAutoscaler"),Object(r.b)("p",null,"The ClusterAutoscaler is a resource for automatically adjusting the size of OpenShift cluster. In the ClusterAutoscaler resource, it describes the maximum number of nodes, the possibility of scaling down, and the minimum and maximum values of CPU, memory, and GPU that can be used by the cluster. When it does the auto scaling (scale up), the upper limit defined by the ClusterAutoscaler will not be exceeded. Note that the ClusterAutoscaler is set for the OpenShift cluster wide, so that only one ClusterAutoscaler can be created per cluster. It is not tied to a specific project. The ClusterAutoscaler is managed by the Operator.  "),Object(r.b)("p",null,"The following example creates a YAML file that describes a resource named “ca-sample” and creates a ClusterAutoscaler resource with the oc create command. In this sample resource, the upper limit of the total number of nodes in the cluster is 10 and auto scale down is enabled."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'$ cat << EOF  > cluster-autoscaler-sample.yaml\napiVersion: "autoscaling.openshift.io/v1"\nkind: "ClusterAutoscaler"\nmetadata:\n  name: "ca-sample"          ## Name of the ClusterAutoscaler resource\nspec:  \n  resourceLimits:    \n    maxNodesTotal: 10        ## Max number of nodes in the cluser  \n  scaleDown:    \n    enabled: true            ## Enable Scale Down\nEOF\n\n$ oc create -f cluster-autoscaler-sample.yaml\n')),Object(r.b)("h3",null,"Create MachineAutoscaler"),Object(r.b)("p",null,"The MachineAutoscaler is a resource for automatically adjusting the number of Machines in the MachineSet. The number of Machines is adjusted so as not to exceed the upper limit defined by the ClusterAutoscaler. The MachineAutoscaler is required to determine which MachineSet the ClusterAutoscaler will adjust the number of replicas for.  "),Object(r.b)("p",null,"The following example creates a MachineAutoscaler resource named ma-sample01. The number of replicas is automatically adjusted within the range of 1 to 5 for the specified MachineSet. The MachineAutoscaler is created in the openshift-machine-api project as well as the Machine and the MachineSet. You can check the created the ClusterAutoscaler and the MachineAutoscaler information with the oc get command."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'$ cat << EOF  > machine-autoscaler-sample01.yaml\napiVersion: "autoscaling.openshift.io/v1beta1"\nkind: "MachineAutoscaler"\nmetadata:\n  name: "ma-sample01"\n  namespace: "openshift-machine-api"\nspec:\n  minReplicas: 1                       ## Min replica number of MachineSet\n  maxReplicas: 5                       ## Max replica number of MachineSet\n  scaleTargetRef:    \n    apiVersion: machine.openshift.io/v1beta1\n    kind: MachineSet\n    name: <clusterID>-ap-northeast-1a   ## Specify an existing MachineSet name\nEOF\n$ oc create -f machine-autoscaler-sample01.yaml\n')),Object(r.b)("p",null,"Note that the AutoScale function by ClusterAutoscaler will not work unless the following two conditions are met."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"MachineAutoscaler is set for all MachineSets"),Object(r.b)("li",{parentName:"ul"},"The number of replicas of all MachineSets is set to 1 or more and one or more Machines are operating.  ")),Object(r.b)("p",null,"Check to see if it works. Create a job like the following, and start a large number of containers at once that only execute the sleep command."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'$ cat << EOF  > job-work-queue-sample.yaml\napiVersion: batch/v1\nkind: Jobmetadata:\n  generateName: work-queue-  \n  namespace: autoscale-demo01\nspec:  \n  template:    \n    spec:      \n      containers:      \n      - name: work        \n        image: busybox        \n        command: ["sleep",  "300"]        \n        resources:          \n          requests:            \n            memory: 500Mi            \n            cpu: 500m        \n        restartPolicy: Never  \n  completions: 20  \n  parallelism: 20\nEOF\n\n$ oc new-project autoscale-demo01; oc project autoscale-demo01\n$ oc create -f job-work-queue-sample.yaml\n')),Object(r.b)("p",null,"Assuming that your OpenShift cluster has the default configuration. With the above example, the resource is not enough to deploy pods at once.  Therefore, after a while, the worker node will be added automatically.  The pod status will be changed from ",Object(r.b)("strong",{parentName:"p"},"Pending")," to ",Object(r.b)("strong",{parentName:"p"},"Running"),".  Then the pod which was on hold will be deployed.\nYou can run ",Object(r.b)("strong",{parentName:"p"},"oc get nodes")," command and/or oc get pods command to see those behavior.  You can also verify that the worker node will be delete automatically if you delete a newly created pod by issuing ",Object(r.b)("strong",{parentName:"p"},"oc delete project")," which will also delete the project."),Object(r.b)("p",null,"Note that there are a few cases which the ClusterAutoscaler doesn’t remove worker nodes.  For example, if the pod is using the local storage on the worker node, the worker node won’t be removed by the ClusterAutoscaler.  Another example is that the pod which won’t be move to other worker node due to the cluster resource shortage, then the worker will not be removed by the ClusterAutoscaler.  "),Object(r.b)("a",{name:"add-master-nodes"}),Object(r.b)("h2",null,"Add Master Nodes"),Object(r.b)("p",null,"There should be at least 3 Master nodes deployed with OpenShift 4.x.  If you wish to add new masters due to load (on etcd, for example) then the procedure for adding a new master is the same as adding a regular worker node, except that the node must have the label ",Object(r.b)("inlineCode",{parentName:"p"},"machineconfiguration.openshift.io/role: infra")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"worker"),"."))}p.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-day-2-scalability-index-mdx-8e164e280c4e1fa59340.js.map