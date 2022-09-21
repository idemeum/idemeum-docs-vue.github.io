import{_ as c,r as a,o as l,c as d,a as e,b as i,w as o,e as t,d as u}from"./app.2474c48b.js";const h="/assets/overview.e8b0d378.png",p="/assets/reverse-tunnel.680db894.png",_={},m=e("h1",{id:"secure-remote-access",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#secure-remote-access","aria-hidden":"true"},"#"),t(" Secure Remote Access")],-1),f={class:"table-of-contents"},v=t("Overview"),w=t("Core components"),g=t("Proxy Service"),y=t("Agent"),b=t("How it works"),x=t("Connectivity"),k=t("Authentication"),A=t("Authorization"),S=t("Audit"),P=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),R=e("p",null,"idemeum provides cloud proxy to access your infrastructure and private cloud applications.",-1),z=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"What is Secure Remote Access for?"),e("p",null,"With idemeum remote access infrastructure you can:"),e("ul",null,[e("li",null,"Replace your legacy VPN and centralize passwordless access to all on-premises resources in one place including web applications, SSH servers, and RDP desktops."),e("li",null,"Eliminate passwords and replace then with short-lived certificates"),e("li",null,"Enforce access policies to give your employees access to only what they need")])],-1),C=t("Secure Remote Access offers end to end user experience: it "),H=e("em",null,[e("strong",null,"connects")],-1),O=t(" employees to resources without exposing any ports or network changes, "),W=e("em",null,[e("strong",null,"authenticates")],-1),E=t(" access with "),F=t("Passwordless MFA"),I=t(", "),N=e("em",null,[e("strong",null,"authorizes")],-1),V=t(" access based on granular policies, and "),L=e("em",null,[e("strong",null,"audits")],-1),M=t(" each user session."),T=u('<h2 id="core-components" tabindex="-1"><a class="header-anchor" href="#core-components" aria-hidden="true">#</a> Core components</h2><h3 id="proxy-service" tabindex="-1"><a class="header-anchor" href="#proxy-service" aria-hidden="true">#</a> Proxy Service</h3><p>Proxy Service allows employees to access on-premises company resources from the public network. It is identity aware, meaning it makes sure only authenticated clients can connect to company on-premises resources. Proxy Service intercepts multiple protocols, including HTTP, SSH, and RDP traffic.</p><p><img src="'+h+'" alt="Remote access overview"></p><p>Proxy Service carries out additional functionality including issuing short-lived client certificates to users and collecting audit and session recording information.</p><h3 id="agent" tabindex="-1"><a class="header-anchor" href="#agent" aria-hidden="true">#</a> Agent</h3><p>Agent allows you to seamlessly connect to on-premises resources without exposing any ports or changing network configuration. It established a reverse tunnel back to idemeum Proxy Service, which in turn will forward client connections to target resources over these tunnels.</p><p><img src="'+p+'" alt="Agent tunnel"></p><p>Additionally agent carries out the following functionality:</p><ul><li>Provides automatic registration with proxy service to simplify integration set up</li><li>Records terminal sessions</li><li>Replaces OpenSSH daemons to connect to SSH servers using short lived certificates</li></ul><h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How it works</h2><h3 id="connectivity" tabindex="-1"><a class="header-anchor" href="#connectivity" aria-hidden="true">#</a> Connectivity</h3><p>When you configure remote application or server in idemeum, you have an option to download idemeum agent and associated configuration file. When you install idemeum agent in your private cloud, it will automatically register with proxy service receiving its own certificate. Reverse tunnel will be established back to proxy service, and no opening ports or network configuration changes required. Once registration is complete, users can start accessing remote resources through established reverse tunnel.</p><h3 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication" aria-hidden="true">#</a> Authentication</h3><p>Authentication is about proving an identity of a user.</p>',15),q=t("When a user is accessing company application or resource, the first thing that needs to happen is Multi-Factor Authentication with idemeum "),B=t("Passwordless MFA"),D=t(". User will need to approve login with biometrics and perform FIDO-based authentication with certificates stored in a mobile device hardware backed storage. You can learn more about how Passwordless MFA works in our "),U=t("security paper"),X=t("."),Y=t("Once a session is established with idemeum, an "),j={href:"https://en.wikipedia.org/wiki/X.509",target:"_blank",rel:"noopener noreferrer"},G=t("X.509"),J=t(" short-lived certificate is issued for a user. Certificates are tied to a user identity, and every connection to a server or application with idemeum Remote Access will require authentication with this certificate. Thereby, idemeum eliminates passwords and static credentials. User certificates are short-lived and will expire automatically without any management required."),K=e("h3",{id:"authorization",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#authorization","aria-hidden":"true"},"#"),t(" Authorization")],-1),Q=e("p",null,"Authorization is about giving access rights to a resource.",-1),Z=t("in idemeum everything is denied by default following "),$={href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege",target:"_blank",rel:"noopener noreferrer"},ee=t("least privilege principle"),te=t(". After successful authentication we evaluate admin-defined policies to assign users resources that they are entitled to. Admins can define fine-grained policy rules to allow access to specific applications and servers based on various attributes, such as user roles, principals, and more."),ie=e("h3",{id:"audit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#audit","aria-hidden":"true"},"#"),t(" Audit")],-1),oe=e("p",null,"idemeum captures detailed logs of who is accessing what resources in your environment. A detailed audit log trail is maintained for all applications and resources. What is more, idemeum agents capture terminal session recordings, so that you can review a video recording of what users are doing when they are connecting to infrastructure resources.",-1);function se(ne,ae){const s=a("router-link"),n=a("RouterLink"),r=a("ExternalLinkIcon");return l(),d("div",null,[m,e("nav",f,[e("ul",null,[e("li",null,[i(s,{to:"#overview"},{default:o(()=>[v]),_:1})]),e("li",null,[i(s,{to:"#core-components"},{default:o(()=>[w]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#proxy-service"},{default:o(()=>[g]),_:1})]),e("li",null,[i(s,{to:"#agent"},{default:o(()=>[y]),_:1})])])]),e("li",null,[i(s,{to:"#how-it-works"},{default:o(()=>[b]),_:1}),e("ul",null,[e("li",null,[i(s,{to:"#connectivity"},{default:o(()=>[x]),_:1})]),e("li",null,[i(s,{to:"#authentication"},{default:o(()=>[k]),_:1})]),e("li",null,[i(s,{to:"#authorization"},{default:o(()=>[A]),_:1})]),e("li",null,[i(s,{to:"#audit"},{default:o(()=>[S]),_:1})])])])])]),P,R,z,e("p",null,[C,H,O,W,E,i(n,{to:"/remote-access/mfa-overview.html"},{default:o(()=>[F]),_:1}),I,N,V,L,M]),T,e("p",null,[q,i(n,{to:"/remote-access/mfa-overview.html"},{default:o(()=>[B]),_:1}),D,i(n,{to:"/remote-access/security-whitepaper.html"},{default:o(()=>[U]),_:1}),X]),e("p",null,[Y,e("a",j,[G,i(r)]),J]),K,Q,e("p",null,[Z,e("a",$,[ee,i(r)]),te]),ie,oe])}const ce=c(_,[["render",se],["__file","secure-remote-access-overview.html.vue"]]);export{ce as default};
