<template><div><h1 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How it works</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>idemeum is a SaaS zero trust platform that is hosted on AWS. We try to minimize the footprint of on-premises components that our customers need to deploy. We architected idemeum based on <a href="https://blog.idemeum.com/microservice-scalability/" target="_blank" rel="noopener noreferrer">micro-services architecture<ExternalLinkIcon/></a> to offer high availability and security.</p>
<p>idemeum is unified, yet modular. We combined products from several identity categories to offer unified app and infrastructure access experience. We sit at the intersection of Privileged Access Management (PAM), Workforce Identity (IAM), and Passwordless Technology. You can deploy and leverage the power of the whole platform, or choose the components that you need. Check our <a href="https://idemeum.com/pricing" target="_blank" rel="noopener noreferrer">pricing and licensing<ExternalLinkIcon/></a> page to see what product tiers we offer today.</p>
<h2 id="platform-components" tabindex="-1"><a class="header-anchor" href="#platform-components" aria-hidden="true">#</a> Platform components</h2>
<p>Here is a high level overview of idemeum platform components:</p>
<p><img src="@source/images/architecture.png" alt="Architecture"></p>
<h3 id="passwordless-single-sign-on" tabindex="-1"><a class="header-anchor" href="#passwordless-single-sign-on" aria-hidden="true">#</a> <RouterLink to="/application-catalog.html">Passwordless Single Sign-On</RouterLink></h3>
<p>Single Sign-On (SSO) is the entry door to access your company resources. Typically, SSO is centered around accessing SaaS Web applications, which are integrated using SAML / OIDC protocols. Companies are deploying products such as Okta, Azure AD, and others to manage access to SSO applications.</p>
<p>idemeum goes beyond just SaaS web applications. We unify access to any company resource, including SAML SaaS applications, on-premises applications, SSH servers, RDP desktops, databases, and more. Pretty much you can access anything you need in your organization.</p>
<p><img src="@source/images/catalog.png" alt="Catalog"></p>
<p>idemeum acts as a fully-featured Identity Provider offering features such as:</p>
<ul>
<li><strong>Integrations:</strong> you can integrate <a href="https://integrations.idemeum.com" target="_blank" rel="noopener noreferrer">hundreds of SaaS applications<ExternalLinkIcon/></a> using SAML in order to offer one-click centralized access.</li>
<li><strong>Passwordless access:</strong> idemeum SSO works with <strong>Passwordless MFA</strong> to offer passwordless access to applications. Users login to application catalog with Passwordless MFA and then can click on any application to launch it without needing to type any passwords.</li>
<li><strong>Unified catalog:</strong> all applications and resources and centralized in one catalog: password apps, SAML apps, SSH servers, desktops, and more.</li>
<li><strong>Automated account provisioning:</strong> idemeum supports various protocols such as SCIM in order to automatically create accounts when employees join, and remove them when employees leave.</li>
<li><strong>Various features:</strong> RBAC, group management, auditing, local biometrics and more.</li>
</ul>
<p>Navigate to <RouterLink to="/application-catalog.html">Single Sign-On</RouterLink> section to learn more about idemeum Identity Provider.</p>
<h3 id="passwordless-mfa" tabindex="-1"><a class="header-anchor" href="#passwordless-mfa" aria-hidden="true">#</a> <RouterLink to="/mfa-overview.html">Passwordless MFA</RouterLink></h3>
<p>At idemeum we hate passwords. Therefore we built a Passwordless MFA mobile app to allow you to access any company resource with biometrics instead. You simply take mobile app, scan a QR-code, approve with biometrics, and you are in.</p>
<p>idemeum Passwordless MFA is multi-factor as for each authentication two factors are used: <em>something you have</em> - certificate that is provisioned on a mobile device, and <em>something you are</em> - mobile biometric sensors such as Face ID.</p>
<p>Today we support various types of integrations if you just want to use our Passwordless MFA:</p>
<ul>
<li><strong>You existing SSO provider such as Okta or Azure AD</strong> - you can use idemeum MFA to make every employee login into SaaS applications passwordless.</li>
<li><strong>VPN and Wi-Fi</strong> - idemeum offers cloud based Radius so that you can integrate with your existing Wi-Fi and VPN infrastructure. When employees connect to Wi-Fi or access VPN, they no longer need to use password, but rather approve access with Passwordless MFA.</li>
<li><strong>Windows and Mac desktops</strong> - we offer idemeum desktop application to make logins to your desktops / laptops passwordless. You can install idemeum desktop application, pair it with you mobile device, and start logging with biometrics.</li>
</ul>
<p>Users can enroll into MFA right from the mobile app, and in case the mobile device is lost we offer self recovery option, as well as recovery with admin approval.</p>
<div class="custom-container tip"><p class="custom-container-title">Deployment options</p>
<p>Passwordless MFA can be deployed:</p>
<ol>
<li>With idemeum Single Sign-On Identity Provider and infrastructure access, as it is deeply integrated into our platform. This way you have one platform to manage workforce and privileged access.</li>
<li>With your own Identity Provider such as Okta or Azure AD. We support various SAML <a href="https://integrations.idemeum.com/tag/identity-providers/" target="_blank" rel="noopener noreferrer">integrations<ExternalLinkIcon/></a> today.</li>
</ol>
</div>
<h3 id="secure-password-vault" tabindex="-1"><a class="header-anchor" href="#secure-password-vault" aria-hidden="true">#</a> <RouterLink to="/password-vault-overview.html">Secure Password Vault</RouterLink></h3>
<p>idemeum offers a secure cloud vault to store passwords for your employees and privileged accounts.</p>
<ul>
<li><strong>Zero knowledge:</strong> each user gets access to password vault, and the credentials are encrypted with the keys that are kept on user mobile devices. What that means is that we do not have access to your passwords. And if our cloud gets compromised, none of your passwords wil ever get leaked. Decryption happens on the client side, i.e. your browser, mobile app, and browser extension.</li>
<li><strong>Sharing:</strong> idemeum offers secure way to share credentials across the organization. With a simple click, you can share accounts with your team.</li>
<li><strong>Auto-fill:</strong> with the help of a browser extension, idemeum can auto-fill credentials on desktop and mobile browsers.</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">We don't see your passwords</p>
<p>Even though our password vault is cloud based, we do not see your password as they are encrypted on the client side. Check our <a href="./security-whitepaper">security white paper</a> to learn more about our security and encryption principles.</p>
</div>
<h3 id="secure-remote-access" tabindex="-1"><a class="header-anchor" href="#secure-remote-access" aria-hidden="true">#</a> <RouterLink to="/zero-trust/zero-trust-overview.html">Secure Remote Access <badge type="warning" text="Early access"/></RouterLink></h3>
<p>idemeum offers a cloud identity-aware proxy so that you can connect to you private cloud infrastructure.</p>
<p>idemeum Secure Remote Access offers:</p>
<ul>
<li><strong>Passwordless infrastructure access:</strong> you access infrastructure resources without passwords. Users leverage Passwordless MFA to login to an idemeum portal and then access various applications or servers. idemeum eliminates static credentials such as passwords and SSH keys.</li>
<li><strong>Universal:</strong> we support access to on-premises applications, SSH servers, workstations and more.</li>
<li><strong>Simple:</strong> nothing for you to deploy or manage. idemeum abstracts all the complexity, and the only thing you need is to connect idemeum to your resources. We offer a simple proxy agent that you install on-premises, and it will securely connect to our cloud using outbound channel - no ports to open or firewall rules to change.</li>
</ul>
</div></template>


