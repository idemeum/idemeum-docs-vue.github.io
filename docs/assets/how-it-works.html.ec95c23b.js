import{_ as c,r as i,o as l,c as d,a as e,b as s,w as a,e as o,d as r}from"./app.c4cb680b.js";const u="/assets/architecture.5f1252db.png",h="/assets/catalog.d17c27c9.png",p={},m=e("h1",{id:"how-it-works",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-it-works","aria-hidden":"true"},"#"),o(" How it works")],-1),_=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),o(" Overview")],-1),g=e("p",null,"For your employees idemeum can automatically create SaaS accounts and offer one-click centralized access to applications, regardless if they are public SaaS or in your private cloud behind a firewall. For your engineers, idemeum offers unified passwordless access to your infrastructure, including servers, RDP desktops, databases, and more.",-1),f=o("idemeum is SaaS hosted on AWS. We try to minimize the footprint of on-premises components that our customers need to deploy. We architected idemeum based on "),w={href:"https://blog.idemeum.com/microservice-scalability/",target:"_blank",rel:"noopener noreferrer"},y=o("micro-services architecture"),v=o(" to offer high availability and security."),S=o("We combined products from several identity categories to offer unified app and infrastructure access experience. We sit at the intersection of Privileged Access Management (PAM), Workforce Identity (IAM), and Passwordless Technology. You can deploy and leverage the power of the whole platform, or choose the components that you need. Check our "),b={href:"https://idemeum.com/pricing",target:"_blank",rel:"noopener noreferrer"},k=o("pricing and licensing"),A=o(" page to see what product tiers we offer today."),x=e("h2",{id:"platform-components",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#platform-components","aria-hidden":"true"},"#"),o(" Platform components")],-1),P=e("p",null,[e("img",{src:u,alt:"Architecture"})],-1),M={id:"passwordless-single-sign-on",tabindex:"-1"},W=e("a",{class:"header-anchor",href:"#passwordless-single-sign-on","aria-hidden":"true"},"#",-1),F=o(),z=o("Passwordless Single Sign-On"),I=e("p",null,"Single Sign-On (SSO) is the entry door to access your company resources. Typically, SSO is centered around accessing SaaS Web applications, which are integrated using SAML / OIDC protocols. Companies are deploying products such as Okta, Azure AD, and others to manage access to SSO applications.",-1),O=e("p",null,"idemeum goes beyond just SaaS web applications. We unify access to any company resource, including SAML SaaS applications, on-premises applications, SSH servers, RDP desktops, databases, and more. Pretty much you can access anything you need in your organization from a single unified catalog.",-1),V=e("p",null,[e("img",{src:h,alt:"Catalog"})],-1),C=e("p",null,"idemeum acts as a fully-featured Identity Provider offering features such as:",-1),L=e("strong",null,"Integrations:",-1),D=o(" you can integrate "),N={href:"https://integrations.idemeum.com",target:"_blank",rel:"noopener noreferrer"},R=o("hundreds of SaaS applications"),H=o(" using SAML in order to offer one-click centralized access."),B=e("li",null,[e("strong",null,"Passwordless access:"),o(" idemeum SSO works with "),e("strong",null,"Passwordless MFA"),o(" to offer passwordless access to applications. Users login to application catalog with Passwordless MFA and then can click on any application to launch it without needing to type any passwords.")],-1),E=e("li",null,[e("strong",null,"Unified catalog:"),o(" all applications and resources and centralized in one catalog: password apps, SAML apps, SSH servers, desktops, and more.")],-1),U=e("li",null,[e("strong",null,"Automated account provisioning:"),o(" idemeum supports various protocols such as SCIM in order to automatically create accounts when employees join, and remove them when employees leave.")],-1),Y=e("li",null,[e("strong",null,"Various features:"),o(" ABAC, group management, auditing, local biometrics and more.")],-1),T={id:"passwordless-mfa",tabindex:"-1"},j=e("a",{class:"header-anchor",href:"#passwordless-mfa","aria-hidden":"true"},"#",-1),Z=o(),q=o("Passwordless MFA"),G=r("<p>idemeum Passwordless MFA allows you to login to any company resource with biometrics. It is multi-factor as for each authentication two factors are used: <em>something you have</em> - certificate that is provisioned on a mobile device, and <em>something you are</em> - mobile biometric sensors such as Face ID.</p><p>You can integrate idemeum Passwordless MFA with:</p><ul><li><strong>You existing SSO provider such as Okta or Azure AD</strong> - you can use idemeum MFA to make every employee login into SaaS applications passwordless.</li><li><strong>VPN and Wi-Fi</strong> - idemeum offers cloud based Radius so that you can integrate with your existing Wi-Fi and VPN infrastructure. When employees connect to Wi-Fi or access VPN, they no longer need to use password, but rather approve access with Passwordless MFA.</li><li><strong>Windows and Mac desktops</strong> - we offer idemeum desktop application to make logins to your desktops / laptops passwordless. You can install idemeum desktop application, pair it with you mobile device, and start logging with biometrics.</li></ul>",3),J={id:"secure-password-vault",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#secure-password-vault","aria-hidden":"true"},"#",-1),Q=o(),X=o("Secure Password Vault"),$=e("p",null,"idemeum offers a secure cloud vault to store passwords for your employees and privileged accounts.",-1),ee=e("ul",null,[e("li",null,[e("strong",null,"Zero knowledge:"),o(" each user gets access to password vault, and the credentials are encrypted with the keys that are kept on user mobile devices. What that means is that we do not have access to your passwords. And if our cloud gets compromised, none of your passwords wil ever get leaked. Decryption happens on the client side, i.e. your browser, mobile app, and browser extension.")]),e("li",null,[e("strong",null,"Sharing:"),o(" idemeum offers secure way to share credentials across the organization. With a simple click, you can share accounts with your team.")]),e("li",null,[e("strong",null,"Auto-fill:"),o(" with the help of a browser extension, idemeum can auto-fill credentials on desktop and mobile browsers.")])],-1),oe={id:"secure-remote-access",tabindex:"-1"},se=e("a",{class:"header-anchor",href:"#secure-remote-access","aria-hidden":"true"},"#",-1),te=o(),ae=o("Secure Remote Access"),ne=r("<p>idemeum offers a cloud identity-aware proxy so that you can connect to you private cloud infrastructure.</p><p>idemeum Secure Remote Access offers:</p><ul><li><strong>Passwordless infrastructure access:</strong> you access infrastructure resources without passwords. Users leverage Passwordless MFA to login to an idemeum portal and then access various applications or servers. idemeum eliminates static credentials such as passwords and SSH keys.</li><li><strong>Universal:</strong> we support access to on-premises applications, SSH servers, workstations and more.</li><li><strong>Simple:</strong> nothing for you to deploy or manage. idemeum abstracts all the complexity, and the only thing you need is to connect idemeum to your resources. We offer a simple proxy agent that you install on-premises, and it will securely connect to our cloud using outbound channel - no ports to open or firewall rules to change.</li><li><strong>End to end access control:</strong> covers connectivity, authentication, authorization, and auditing.</li></ul>",3);function ie(re,ce){const n=i("ExternalLinkIcon"),t=i("RouterLink");return l(),d("div",null,[m,_,g,e("p",null,[f,e("a",w,[y,s(n)]),v]),e("p",null,[S,e("a",b,[k,s(n)]),A]),x,P,e("h3",M,[W,F,s(t,{to:"/passwordless-single-sign-on-overview.html"},{default:a(()=>[z]),_:1})]),I,O,V,C,e("ul",null,[e("li",null,[L,D,e("a",N,[R,s(n)]),H]),B,E,U,Y]),e("h3",T,[j,Z,s(t,{to:"/mfa-overview.html"},{default:a(()=>[q]),_:1})]),G,e("h3",J,[K,Q,s(t,{to:"/password-vault-overview.html"},{default:a(()=>[X]),_:1})]),$,ee,e("h3",oe,[se,te,s(t,{to:"/zero-trust/zero-trust-overview.html"},{default:a(()=>[ae]),_:1})]),ne])}const de=c(p,[["render",ie],["__file","how-it-works.html.vue"]]);export{de as default};
