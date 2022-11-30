import{_ as i,r,o as l,c as a,a as e,b as o,d as s,w as n,e as d}from"./app.e17e43d7.js";const c={},u=e("h1",{id:"windows-desktop-access",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows-desktop-access","aria-hidden":"true"},"#"),o(" Windows Desktop Access")],-1),m=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),o(" Overview")],-1),w=e("div",{class:"embed-container"},[e("iframe",{src:"https://www.youtube.com/embed/BwbtZEscZss",frameborder:"0",allowfullscreen:""})],-1),p=d('<p>A <code>Remote Windows Desktop</code> is any computer, physical or virtual, that runs Microsoft Windows operating system (Windows Server 2012 R2 / Windows 10 or newer), resides on a company&#39;s private network, and can be accessed over Remote Desktop Protocol (RDP). The private network can be on-premises as well as in the cloud: AWS, Azure, Google Cloud etc.</p><p>idemeum will help you manage remote access and passwordless login into your domain joined Windows desktops and workstations. With idemeum you will get:</p><ul><li>Access to your desktops from anywhere in the world without VPN</li><li>Passwordless login into your Windows desktops</li><li>Role-based access control (RBAC) for groups of hosts and users</li><li>Audit log and recording of all desktop connections.</li></ul><div class="custom-container warning"><p class="custom-container-title">Supported platforms</p><p>idemeum supports accessing Windows hosts using RDP protocol. We support the following:</p><ul><li>Windows Server 2012 R2 / Windows 10 or newer</li><li>Hosts connected to an Active Directory domain</li></ul></div><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting started</h2>',5),h=e("strong",null,"Enable remote access infrastructure",-1),f=e("strong",null,"Set up Domain Controller for integration",-1),_=e("strong",null,"Set up desktops in idemeum",-1),g=e("strong",null,"Install idemeum agent",-1);function v(k,y){const t=r("RouterLink");return l(),a("div",null,[u,m,w,p,e("ol",null,[e("li",null,[h,e("ul",null,[e("li",null,[o("Before integrating remote Windows desktops with idemeum, make sure you "),s(t,{to:"/remote-access/enable-remote-access.html"},{default:n(()=>[o("enable remote access")]),_:1}),o(" infrastructure, as it is not enabled by default.")])])]),e("li",null,[f,e("ul",null,[e("li",null,[o("In order to use idemeum for passwordless access to remote desktops in your private network there are "),s(t,{to:"/remote-access/windows-active-domain-configuration.html"},{default:n(()=>[o("few things that need to be configured")]),_:1}),o(" on your Domain Controller server.")])])]),e("li",null,[_,e("ul",null,[e("li",null,[o("You will need to "),s(t,{to:"/remote-access/remote-windows-desktop.html"},{default:n(()=>[o("add desktops to your idemeum cloud")]),_:1}),o(" portal and give access to users using entitlement rules.")])])]),e("li",null,[g,e("ul",null,[e("li",null,[o("In order to access Windows Hosts from anywhere without VPN you need to "),s(t,{to:"/remote-access/remote-windows-desktop.html#install-idemeum-agent"},{default:n(()=>[o("install idemeum agent")]),_:1}),o(" in your environment.")])])])])])}const W=i(c,[["render",v],["__file","remote-windows-desktop-overview.html.vue"]]);export{W as default};
