import{_ as c}from"./entitle-server.5671f8e7.js";import{_ as r,r as s,o as d,c as p,a as e,d as a,w as i,b as t,e as l}from"./app.2709a560.js";const u="/assets/add-app.efe38870.png",h="/assets/add-grafana.6478d824.png",m="/assets/exclamation-application.623ec5ec.png",g="/assets/application-management.204a3910.png",w="/assets/entitlement-app-config.c5c214b8.png",b="/assets/launch-app.93e352fa.png",f="/assets/application-audit.d00fd41f.png",_={},v=e("h1",{id:"remote-web-application-access",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#remote-web-application-access","aria-hidden":"true"},"#"),t(" Remote web application access")],-1),y={class:"table-of-contents"},x=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),A=e("p",null,[t("A "),e("code",null,"Remote Web Application"),t(" is any application that is served over HTTP protocol and resides on a private network. One such example might be a Jenkins application that runs on a company's private network. If a DevOps engineer wants to access the Jenkins web console, she must connect to the private network either using a VPN or being physically in the office. The private network can be on-premises or in the cloud: AWS, Azure, Google Cloud etc.")],-1),k=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),t(" Prerequisites")],-1),I={class:"custom-container warning"},C=e("p",{class:"custom-container-title"},"Enable remote access infrastructure",-1),E=l('<h2 id="connect-remote-web-application-to-idemeum" tabindex="-1"><a class="header-anchor" href="#connect-remote-web-application-to-idemeum" aria-hidden="true">#</a> Connect remote web application to idemeum</h2><p>Let&#39;s assume that a company ACME, Inc has some web application that should only be available on their private network. We will use the popular web application Grafana to build internal dashboards. When the DevOps engineers are on the company&#39;s private network they will access Grafana by going to this URL: <code>http://192.168.2.92:3000</code>.</p><p>The administrator wants to allow some users to access Grafana over the internet without having to use VPN: a DevOps engineer who might be on call and off company&#39;s premises.</p><h3 id="add-a-remote-web-application" tabindex="-1"><a class="header-anchor" href="#add-a-remote-web-application" aria-hidden="true">#</a> Add a remote web application</h3><ul><li>Log into idemeum admin portal and navigate to <code>Applications</code></li><li>Click <code>Add app</code> button and choose <code>Remote web app</code></li></ul><p><img src="'+u+'" alt="Add application"></p><ul><li>On the <code>General</code> tab you will have to provide the following information: <ul><li><strong>Display name</strong> - application name that will appear on the end user portal. It can contain any characters up to a maximum of 256 chars.</li><li><strong>Application Name</strong> - this name will be part of the host name for accessing the application. Thus it can contain only characters that are allowed in a domain: [a-z], [A-Z], 0-9 and &#39;-&#39; (dash) up to a maximum of 63 characters. &#39;-&#39; (dash) cannot be the first character.</li><li><strong>Internal URL</strong> - this is the URL that idemeum will redirect the call once we authenticate and authorize that the user has access to the application. In our example this would be: <code>http://localhost:3000</code>. If the agent is not installed on the same application server, then you can use domain name or IP address to reach application on internal network.</li><li><strong>Username Expression</strong> - Help users automatically fill <code>username</code> for this remote application by configuraing usernames using expressions. Expression <code>${user.email}</code> will automatically autofill user corporate email as username for this app.</li></ul></li></ul><p><img src="'+h+'" alt="Add Grafana"></p><ul><li>Click <code>SAVE</code> to save the application configuration</li></ul><h3 id="install-idemeum-agent" tabindex="-1"><a class="header-anchor" href="#install-idemeum-agent" aria-hidden="true">#</a> Install idemeum agent</h3><ul><li>When you configured and saved remote web application in idemeum, the <code>Config File</code> tab will become active and will allow you to download both agent and required agent configuration file.</li></ul>',11),R={class:"custom-container tip"},G=e("p",{class:"custom-container-title"},"Detailed agent installation guide",-1),W=e("ul",null,[e("li",null,"We documented detailed process to download and install agent in a separate document."),e("li",null,"For remote web application an agent can be installed on any internal server that can reach application server over http.")],-1),L=l('<ul><li>When idemeum agent is not installed or not running correctly you will see a red exclamation mark on the <code>My applications</code> page. Moreover, admin will receive a notification in the notification tray.</li></ul><p><img src="'+m+'" alt="Server not available"></p><ul><li>When agent is correctly installed the warnings will automatically go away.</li></ul><h2 id="manage-web-application" tabindex="-1"><a class="header-anchor" href="#manage-web-application" aria-hidden="true">#</a> Manage web application</h2><ul><li>Your web application is accessible in the admin portal <code>My applications</code> section. You can directly search for it or use filters on the right and choose <code>Remote web apps</code>.</li><li>You can <code>Edit</code> server configuration or <code>Remove</code> web application from idemeum.</li></ul><p><img src="'+g+'" alt="Application management"></p><h2 id="give-access-to-remote-web-application" tabindex="-1"><a class="header-anchor" href="#give-access-to-remote-web-application" aria-hidden="true">#</a> Give access to remote web application</h2>',7),M=e("li",null,[t("Navigate to "),e("code",null,"Entitlements"),t(" and click "),e("code",null,"Add rule")],-1),N=e("p",null,[e("img",{src:c,alt:"Entitle server"})],-1),D=e("ul",null,[e("li",null,[t("In the example below I am directly entitling user "),e("code",null,"nik@idemeumlab.com"),t(" to access the Grafana application. You can also use groups to perform entitlement.")])],-1),O=e("p",null,[e("img",{src:w,alt:"Entitle application"})],-1),P={class:"custom-container tip"},T=e("p",{class:"custom-container-title"},"More about groups and entitlements",-1),V=l('<h2 id="access-remote-web-application" tabindex="-1"><a class="header-anchor" href="#access-remote-web-application" aria-hidden="true">#</a> Access remote web application</h2><ul><li>You can launch remote web applications in the same way you would access any other application - from <strong>browser user portal</strong>, from <strong>extension</strong>, and <strong>mobile application</strong>.</li></ul><p><img src="'+b+'" alt="Launch application"></p><h2 id="authenticating-users-to-remote-application" tabindex="-1"><a class="header-anchor" href="#authenticating-users-to-remote-application" aria-hidden="true">#</a> Authenticating users to remote application</h2><p>Having an agent that builds an outbound tunnel to idemeum Proxy Service allows users to access remote web application with a simple click. However, when accessing these applications you need to pass user information to remote application as well, so user can log in into her account.</p><p>Today we support the following authentication methods:</p><table><thead><tr><th style="text-align:left;">Method</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">Credentials autofill</td><td style="text-align:left;">Automatically fill user credentials in the login form for remote web application</td></tr></tbody></table><h2 id="audit-events" tabindex="-1"><a class="header-anchor" href="#audit-events" aria-hidden="true">#</a> Audit events</h2><ul><li>Access admin portal and navigate to <code>Audit trail</code> section</li><li>You will be able to see detailed events for who and when accessed remote applications</li></ul><p><img src="'+f+'" alt="Audit events"></p>',10);function Y(q,S){const o=s("router-link"),n=s("RouterLink");return d(),p("div",null,[v,e("nav",y,[e("ul",null,[e("li",null,[a(o,{to:"#overview"},{default:i(()=>[t("Overview")]),_:1})]),e("li",null,[a(o,{to:"#prerequisites"},{default:i(()=>[t("Prerequisites")]),_:1})]),e("li",null,[a(o,{to:"#connect-remote-web-application-to-idemeum"},{default:i(()=>[t("Connect remote web application to idemeum")]),_:1}),e("ul",null,[e("li",null,[a(o,{to:"#add-a-remote-web-application"},{default:i(()=>[t("Add a remote web application")]),_:1})]),e("li",null,[a(o,{to:"#install-idemeum-agent"},{default:i(()=>[t("Install idemeum agent")]),_:1})])])]),e("li",null,[a(o,{to:"#manage-web-application"},{default:i(()=>[t("Manage web application")]),_:1})]),e("li",null,[a(o,{to:"#give-access-to-remote-web-application"},{default:i(()=>[t("Give access to remote web application")]),_:1})]),e("li",null,[a(o,{to:"#access-remote-web-application"},{default:i(()=>[t("Access remote web application")]),_:1})]),e("li",null,[a(o,{to:"#authenticating-users-to-remote-application"},{default:i(()=>[t("Authenticating users to remote application")]),_:1})]),e("li",null,[a(o,{to:"#audit-events"},{default:i(()=>[t("Audit events")]),_:1})])])]),x,A,k,e("div",I,[C,e("p",null,[t("Before integrating remote web applications with idemeum, make sure you "),a(n,{to:"/remote-access/enable-remote-access.html"},{default:i(()=>[t("enable remote access")]),_:1}),t(" infrastructure, as it is not enabled by default.")])]),E,e("div",R,[G,W,e("p",null,[a(n,{to:"/remote-access/install-agent.html"},{default:i(()=>[t("Download and install agent")]),_:1})])]),L,e("ul",null,[e("li",null,[t("In order for users to access remote web application you need to create an "),a(n,{to:"/application-entitlements.html"},{default:i(()=>[t("entitlement rule")]),_:1}),t(" for the users or groups of users that should have access to it.")]),M]),N,D,O,e("div",P,[T,e("p",null,[t("You can learn more about how "),a(n,{to:"/group-management.html"},{default:i(()=>[t("groups")]),_:1}),t(" and "),a(n,{to:"/application-entitlements.html"},{default:i(()=>[t("entitlements")]),_:1}),t(" work in idemeum.")])]),V])}const U=r(_,[["render",Y],["__file","remote-web-app.html.vue"]]);export{U as default};
