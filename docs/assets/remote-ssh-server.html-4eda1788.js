import{_ as l}from"./entitle-server-43350b80.js";import{_ as c,M as i,p as d,q as u,R as e,N as s,V as a,t,a1 as r}from"./framework-5866ffd3.js";const h="/assets/add-server-09c08cf9.png",m="/assets/server-details-ef4dba33.png",v="/assets/exclamation-server-c162b4fb.png",p="/assets/server-management-fe09ca60.png",g="/assets/entitlement-configuration-9e917215.png",_="/assets/server-audit-c0b09e72.png",b={},f=e("h1",{id:"remote-ssh-server-access",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#remote-ssh-server-access","aria-hidden":"true"},"#"),t(" Remote SSH server access")],-1),w={class:"table-of-contents"},S=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),y=e("p",null,[t("A "),e("code",null,"Remote Server"),t(" is any computer, physical or virtual, that runs Linux operating system, resides on a company's private network, and can be accessed over SSH protocol. One such example might be a RabbitMq messaging broker server that runs on a company's private network. The private network can be on-premises as well as in the cloud: AWS, Azure, Google Cloud etc.")],-1),x=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),t(" Prerequisites")],-1),k={class:"custom-container warning"},A=e("p",{class:"custom-container-title"},"Enable remote access infrastructure",-1),H=r('<h2 id="connect-remote-ssh-server-to-idemeum" tabindex="-1"><a class="header-anchor" href="#connect-remote-ssh-server-to-idemeum" aria-hidden="true">#</a> Connect remote SSH server to idemeum</h2><p>Let&#39;s assume that a company ACME, Inc has some infrastructure used for testing of an application and a part of this testing infrastructure is a RabbitMq messaging broker that is installed on a virtual machine running Linux operating system. This machine can be accessed over SSH protocol, but the users accessing it must be on the company&#39;s private network.</p><p>The administrator wants to allow some users to access the messaging broker server over the internet without forcing the users to use a VPN: a DevOps engineer who might be on call and off company&#39;s premises. The administrator also wants to control which users have access to the RabbitMq server: DevOps engineers and QA engineers should be able to access it, while the people in the Finance and Accounting should not be allowed access.</p><h3 id="add-a-remote-server" tabindex="-1"><a class="header-anchor" href="#add-a-remote-server" aria-hidden="true">#</a> Add a remote server</h3><ul><li>Log into idemeum admin portal and navigate to <code>Applications</code></li><li>Click <code>Add app</code> button and choose <code>Remote server</code></li></ul><p><img src="'+h+'" alt="Add server"></p><ul><li>On the <code>General</code> tab you will have to provide the following information: <ul><li><strong>Server name</strong> - server name that will appear on the end user portal. It can contain any characters up to a maximum of 256 chars.</li><li><strong>Hostname</strong> - server name that will appear in the terminal when users access it over SSH. If the login username is <code>root</code> and the hostname is <code>rabbitmq-testlab-server</code> then on ssh console it will show <code>root@rabbitmq-testlab-server</code> so the user knows what server is using. It can contain only characters that are allowed in a domain: [a-z], [A-Z], 0-9 and &#39;-&#39; (dash) up to a maximum of 63 characters. &#39;-&#39; (dash) cannot be the first character.</li></ul></li></ul><p><img src="'+m+'" alt="Server details"></p><ul><li>Click <code>SAVE</code> to save the server configuration</li></ul><h3 id="install-idemeum-agent" tabindex="-1"><a class="header-anchor" href="#install-idemeum-agent" aria-hidden="true">#</a> Install idemeum agent</h3><ul><li>When you configured and saved SSH server in idemeum, the <code>Config File</code> tab will become active and will allow you to download both agent and required agent configuration file.</li></ul>',11),q={class:"custom-container tip"},M=e("p",{class:"custom-container-title"},"Detailed agent installation guide",-1),R=e("ul",null,[e("li",null,"We documented detailed process to download and install agent in a separate document."),e("li",null,"For remote SSH server an agent needs to be installed on the same machine you want to access with SSH.")],-1),I=r('<ul><li>When idemeum agent is not installed or not running correctly you will see a red exclamation mark on the <code>My applications</code> page. Moreover, admin will receive a notification in the notification tray.</li></ul><p><img src="'+v+'" alt="Server not available"></p><ul><li>When agent is correctly installed the warnings will automatically go away.</li></ul><h2 id="manage-ssh-server" tabindex="-1"><a class="header-anchor" href="#manage-ssh-server" aria-hidden="true">#</a> Manage SSH server</h2><ul><li>Your server is accessible in the admin portal <code>My applications</code> section. You can directly search for it or use filters on the right and choose <code>Remote servers</code>.</li><li>You can <code>Edit</code> server configuration or <code>Remove</code> server from idemeum.</li></ul><p><img src="'+p+'" alt="Server management"></p><h2 id="give-access-to-ssh-server" tabindex="-1"><a class="header-anchor" href="#give-access-to-ssh-server" aria-hidden="true">#</a> Give access to SSH server</h2>',7),C=e("li",null,[t("Navigate to "),e("code",null,"Entitlements"),t(" and click "),e("code",null,"Add rule")],-1),E=e("p",null,[e("img",{src:l,alt:"Entitle server"})],-1),N=e("ul",null,[e("li",null,[t("In the example below I am directly entitling user "),e("code",null,"nik@idemeumlab.com"),t(" to access the RabbitMq server. You can also use groups to perform entitlement.")]),e("li",null,[t("We have also configured what username(s) will be used when accessing the RabbitMq server. In the example above we have created 2 usernames: "),e("code",null,"root"),t(" and "),e("code",null,"ec2-user"),t(". When launching the remote server application the user will select which username it wants to use for the connection to the RabbitMq server machine. This means that these usernames have to exist on the machine where the RabbitMq server is running.")])],-1),O=e("p",null,[e("img",{src:g,alt:"Entitle server"})],-1),V={class:"custom-container tip"},W=e("p",{class:"custom-container-title"},"More about groups and entitlements",-1),Y=r('<h2 id="access-ssh-server" tabindex="-1"><a class="header-anchor" href="#access-ssh-server" aria-hidden="true">#</a> Access SSH server</h2><ul><li>You can launch remote servers in the same way you would access any other application - from <strong>browser user portal</strong>, from <strong>extension</strong>, and <strong>mobile application</strong>.</li><li>Once you click on the server tile, you will choose the <code>username</code> to login with, and the SSH terminal will open in the browser where you can manage your server.</li></ul>',2),B=e("div",{class:"embed-container"},[e("iframe",{src:"https://www.youtube.com/embed/NP-bg_xBzDo",frameborder:"0",allowfullscreen:""})],-1),L=e("h2",{id:"audit-events",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#audit-events","aria-hidden":"true"},"#"),t(" Audit events")],-1),T=e("ul",null,[e("li",null,[t("Access admin portal and navigate to "),e("code",null,"Audit trail"),t(" section")]),e("li",null,"You will be able to see detailed events for who accessed servers, what user names were used, and what the user was doing during terminal session."),e("li",null,[t("By clicking on the "),e("code",null,"recording icon"),t(", the new tab will open and play the terminal recording session where you can see what the user was actually doing.")])],-1),D=e("p",null,[e("img",{src:_,alt:"Audit events"})],-1);function G(P,z){const n=i("router-link"),o=i("RouterLink");return d(),u("div",null,[f,e("nav",w,[e("ul",null,[e("li",null,[s(n,{to:"#overview"},{default:a(()=>[t("Overview")]),_:1})]),e("li",null,[s(n,{to:"#prerequisites"},{default:a(()=>[t("Prerequisites")]),_:1})]),e("li",null,[s(n,{to:"#connect-remote-ssh-server-to-idemeum"},{default:a(()=>[t("Connect remote SSH server to idemeum")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#add-a-remote-server"},{default:a(()=>[t("Add a remote server")]),_:1})]),e("li",null,[s(n,{to:"#install-idemeum-agent"},{default:a(()=>[t("Install idemeum agent")]),_:1})])])]),e("li",null,[s(n,{to:"#manage-ssh-server"},{default:a(()=>[t("Manage SSH server")]),_:1})]),e("li",null,[s(n,{to:"#give-access-to-ssh-server"},{default:a(()=>[t("Give access to SSH server")]),_:1})]),e("li",null,[s(n,{to:"#access-ssh-server"},{default:a(()=>[t("Access SSH server")]),_:1})]),e("li",null,[s(n,{to:"#audit-events"},{default:a(()=>[t("Audit events")]),_:1})])])]),S,y,x,e("div",k,[A,e("p",null,[t("Before integrating remote SSH servers with idemeum, make sure you "),s(o,{to:"/remote-access/enable-remote-access.html"},{default:a(()=>[t("enable remote access")]),_:1}),t(" infrastructure, as it is not enabled by default.")])]),H,e("div",q,[M,R,e("p",null,[s(o,{to:"/remote-access/install-agent.html"},{default:a(()=>[t("Download and install agent")]),_:1})])]),I,e("ul",null,[e("li",null,[t("In order for users to access remote SSH server you need to create an "),s(o,{to:"/application-entitlements.html"},{default:a(()=>[t("entitlement rule")]),_:1}),t(" for the users or groups of users that should have access to it.")]),C]),E,N,O,e("div",V,[W,e("p",null,[t("You can learn more about how "),s(o,{to:"/group-management.html"},{default:a(()=>[t("groups")]),_:1}),t(" and "),s(o,{to:"/application-entitlements.html"},{default:a(()=>[t("entitlements")]),_:1}),t(" work in idemeum.")])]),Y,B,L,T,D])}const Z=c(b,[["render",G],["__file","remote-ssh-server.html.vue"]]);export{Z as default};
