import{_ as c,o as d,c as u,a as e,b as t,w as i,d as o,e as r,r as a}from"./app.86cc2d84.js";var h="/assets/architecture.164a27a5.png";const p={},_=e("h1",{id:"how-it-works-\u{1F914}",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-it-works-\u{1F914}","aria-hidden":"true"},"#"),o(" How it works \u{1F914}")],-1),m=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),o(" Overview")],-1),g=e("p",null,"idemeum is a unified platform. What that means is that we have combined privileged access management with workforce identity management into one product and made everything employees access passwordless.",-1),w=e("p",null,"Our platform is modular and allows customers to choose what services they would like to deploy and integrate with existing identity infrastructure.",-1),f=e("p",null,"idemeum is hosted on AWS and is a SaaS product only. We try to minimize the footprint of on-premises components that our customers need to deploy. idemeum is architected as a microservices-based application, and offers high availability and security.",-1),y={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"Security whitepaper",-1),b=o("You can learn more about our security principles "),k=o("here"),S=o("."),x=e("h2",{id:"platform-components",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#platform-components","aria-hidden":"true"},"#"),o(" Platform components")],-1),A=e("p",null,"Here is a high level overview of idemeum platform components:",-1),P=e("p",null,[e("img",{src:h,alt:"Architecture"})],-1),M={id:"_1-passwordless-mfa",tabindex:"-1"},F=e("a",{class:"header-anchor",href:"#_1-passwordless-mfa","aria-hidden":"true"},"#",-1),W=o(),I=o("1. Passwordless MFA"),O=r("<p><strong>Passwordless Multi-Factor Authentication (MFA)</strong> is a mobile app that allows to replace password with biometrics.</p><ul><li><strong>Multi-factor:</strong> it is multi-factor as for each authentication two factors are used: <em>something you have</em> - certificate that is provisioned on a mobile device, and <em>something you are</em> - mobile biometric sensors such as Face ID.</li><li><strong>Universal:</strong> employees can access pretty much any resource with idemeum passwordless MFA, including SSO web apps, password vault, VPN. Wi-Fi, infrastructure servers, desktop workstations and more.</li><li><strong>Self-service:</strong> users can enroll into MFA right from the mobile app, and in case the mobile device is lost we offers self recovery option, as well as recovery with admin approval.</li></ul>",2),z={class:"custom-container tip"},C=e("p",{class:"custom-container-title"},"Deployment options",-1),L=e("p",null,"Passwordless MFA can be deployed:",-1),V=e("li",null,"With idemeum Single Sign-On Identity Provider and infrastructure access, as it is deeply integrated into our platform. This way you have one platform to manage workforce and privileged access.",-1),N=o("With your own Identity Provider such as Okta or Azure AD. We support various SAML "),R={href:"https://integrations.idemeum.com/tag/identity-providers/",target:"_blank",rel:"noopener noreferrer"},D=o("integrations"),E=o(" today."),H={id:"_2-single-sign-on",tabindex:"-1"},U=e("a",{class:"header-anchor",href:"#_2-single-sign-on","aria-hidden":"true"},"#",-1),B=o(),T=o("2. Single Sign-On"),Z=e("p",null,"idemeum offers a fully featured Single Sign-On Identity Provider (SAML & OIDC).",-1),j=e("strong",null,"Integrations:",-1),q=o(" you can integrate "),J={href:"https://integrations.idemeum.com",target:"_blank",rel:"noopener noreferrer"},Y=o("hundreds of SaaS applications"),G=o(" using SAML in order to offer one-click centralized access."),K=e("li",null,[e("strong",null,"Passwordless access:"),o(" idemeum SSO works with "),e("strong",null,"Passwordless MFA"),o(" to offer passwordless access to applications. Users login to application catalog with Passwordless MFA and then can click on any application to launch it without needing to type any passwords.")],-1),Q=e("li",null,[e("strong",null,"Unified catalog:"),o(" all applications and resources and centralized in one catalog: password apps, SAML apps, SSH servers, desktops, and more.")],-1),X=e("li",null,[e("strong",null,"Automated account provisioning:"),o(" idemeum supports various protocols such as SCIM in order to automatically create accounts when employees join, and remove them when employees leave.")],-1),$=e("li",null,[e("strong",null,"Various features:"),o(" RBAC, group management, auditing, local biometrics and more.")],-1),ee=o("Navigate to "),oe=o("Single Sign-On"),te=o(" section to learn more about idemeum Identity Provider."),se={id:"_3-cloud-radius",tabindex:"-1"},ie=e("a",{class:"header-anchor",href:"#_3-cloud-radius","aria-hidden":"true"},"#",-1),ne=o(),ae=o("3. Cloud Radius"),re=e("p",null,[o("idemeum offers Cloud Radius instance so that you can control access to you VPN, Wi-Fi, and network resources. Paired with "),e("strong",null,"Passwordless MFA"),o(" users can access any network resource such as VPN without needing to have passwords. Just use mobile application to approve login with biometrics.")],-1),le=e("p",null,"Deploy managed Radius authentication in your organization without building, maintaining, or monitoring physical servers.",-1),ce=o("Check our "),de={href:"https://integrations.idemeum.com/",target:"_blank",rel:"noopener noreferrer"},ue=o("integrations portal"),he=o(" to see what Radius integrations we support today. Our platform is quite flexible, so if certified integration is missing, we are happy to add it."),pe=e("h3",{id:"_4-cloud-directory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-cloud-directory","aria-hidden":"true"},"#"),o(" 4. Cloud Directory")],-1),_e=e("p",null,"idemeum offers various ways to manage users and onboarding.",-1),me=e("ul",null,[e("li",null,[e("strong",null,"Local user management:"),o(" you can manually create users in idemeum and specify email address along with various personal identity claims. When users will be onboarding with Passwordless MFA this user data will be used.")]),e("li",null,[e("strong",null,"External user sources:"),o(" idemeum can integrate with external user sources such as HRMS systems, payroll providers, or existing identity providers.")])],-1),ge=o("Again, check our integrations catalog to see what "),we={href:"https://integrations.idemeum.com/tag/user-source/",target:"_blank",rel:"noopener noreferrer"},fe=o("user sources"),ye=o(" we support today."),ve={id:"_5-secure-password-vault",tabindex:"-1"},be=e("a",{class:"header-anchor",href:"#_5-secure-password-vault","aria-hidden":"true"},"#",-1),ke=o(),Se=o("5. Secure Password Vault"),xe=r('<p>idemeum offers a secure cloud vault to store passwords for your employees and privileged accounts.</p><ul><li><strong>Zero knowledge:</strong> each user gets access to password vault, and the credentials are encrypted with the keys that are kept on user mobile devices. What that means is that we do not have access to your passwords. And if our cloud gets compromised, none of your passwords wil ever get leaked. Decryption happens on the client side, i.e. your browser, mobile app, and browser extension.</li><li><strong>Sharing:</strong> idemeum offers secure way to share credentials across the organization. With a simple click, you can share accounts with your team.</li><li><strong>Auto-fill:</strong> with the help of a browser extension, idemeum can auto-fill credentials on desktop and mobile browsers.</li></ul><div class="custom-container warning"><p class="custom-container-title">We don&#39;t see your passwords</p><p>Even though our password vault is cloud based, we do not see your password as they are encrypted on the client side. Check our <a href="./security-whitepaper">security white paper</a> to learn more about our security and encryption principles.</p></div>',3),Ae={id:"_6-zero-trust-remote-access",tabindex:"-1"},Pe=e("a",{class:"header-anchor",href:"#_6-zero-trust-remote-access","aria-hidden":"true"},"#",-1),Me=o(),Fe=o("6. Zero-trust remote access "),We=e("p",null,"idemeum offers a simple and secure way to access your infrastructure from the same platform.",-1),Ie=e("ul",null,[e("li",null,[e("strong",null,"Passwordless:"),o(" you access infrastructure resources without passwords. Users leverage Passwordless MFA to login to an idemeum portal and then access various applications or servers.")]),e("li",null,[e("strong",null,"Universal:"),o(" we support access to on-premises applications, SSH servers, workstations and more.")]),e("li",null,[e("strong",null,"Simple:"),o(" nothing for you to deploy or manage. idemeum abstracts all the complexity, and the only thing you need is to connect idemeum to your resources. We offer a simple proxy agent that you install on-premises, and it will securely connect to our cloud using outbound channel - no ports to open or firewall rules to change.")])],-1);function Oe(ze,Ce){const s=a("RouterLink"),n=a("ExternalLinkIcon"),l=a("badge");return d(),u("div",null,[_,m,g,w,f,e("div",y,[v,e("p",null,[b,t(s,{to:"/security-whitepaper.html"},{default:i(()=>[k]),_:1}),S])]),x,A,P,e("h3",M,[F,W,t(s,{to:"/mfa-overview.html"},{default:i(()=>[I]),_:1})]),O,e("div",z,[C,L,e("ol",null,[V,e("li",null,[N,e("a",R,[D,t(n)]),E])])]),e("h3",H,[U,B,t(s,{to:"/application-catalog.html"},{default:i(()=>[T]),_:1})]),Z,e("ul",null,[e("li",null,[j,q,e("a",J,[Y,t(n)]),G]),K,Q,X,$]),e("p",null,[ee,t(s,{to:"/application-catalog.html"},{default:i(()=>[oe]),_:1}),te]),e("h3",se,[ie,ne,t(s,{to:"/cloud-radius-overview.html"},{default:i(()=>[ae]),_:1})]),re,le,e("p",null,[ce,e("a",de,[ue,t(n)]),he]),pe,_e,me,e("p",null,[ge,e("a",we,[fe,t(n)]),ye]),e("h3",ve,[be,ke,t(s,{to:"/password-vault-overview.html"},{default:i(()=>[Se]),_:1})]),xe,e("h3",Ae,[Pe,Me,t(s,{to:"/zero-trust/zero-trust-overview.html"},{default:i(()=>[Fe,t(l,{type:"warning",text:"Early access"})]),_:1})]),We,Ie])}var Ve=c(p,[["render",Oe],["__file","how-it-works.html.vue"]]);export{Ve as default};