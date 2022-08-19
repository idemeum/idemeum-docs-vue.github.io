<template><div><h1 id="how-it-works-🤔" tabindex="-1"><a class="header-anchor" href="#how-it-works-🤔" aria-hidden="true">#</a> How it works 🤔</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>idemeum is a unified platform. What that means is that we have combined privileged access management with workforce identity management into one product and made everything employees access passwordless.</p>
<p>Our platform is modular and allows customers to choose what services they would like to deploy and integrate with existing identity infrastructure.</p>
<p>idemeum is hosted on AWS and is a SaaS product only. We try to minimize the footprint of on-premises components that our customers need to deploy. idemeum is architected as a microservices-based application, and offers high availability and security.</p>
<div class="custom-container tip"><p class="custom-container-title">Security whitepaper</p>
<p>You can learn more about our security principles <RouterLink to="/security-whitepaper.html">here</RouterLink>.</p>
</div>
<h2 id="platform-components" tabindex="-1"><a class="header-anchor" href="#platform-components" aria-hidden="true">#</a> Platform components</h2>
<p>Here is a high level overview of idemeum platform components:</p>
<p><img src="@source/images/architecture.png" alt="Architecture"></p>
<h3 id="_1-passwordless-mfa" tabindex="-1"><a class="header-anchor" href="#_1-passwordless-mfa" aria-hidden="true">#</a> <a href="/mfa-overview.html" target="_blank" rel="noopener noreferrer">1. Passwordless MFA<ExternalLinkIcon/></a></h3>
<p><strong>Passwordless Multi-Factor Authentication (MFA)</strong> is a mobile app that allows to replace password with biometrics.</p>
<ul>
<li><strong>Multi-factor:</strong> it is multi-factor as for each authentication two factors are used: <em>something you have</em> - certificate that is provisioned on a mobile device, and <em>something you are</em> - mobile biometric sensors such as Face ID.</li>
<li><strong>Universal:</strong> employees can access pretty much any resource with idemeum passwordless MFA, including SSO web apps, password vault, VPN. Wi-Fi, infrastructure servers, desktop workstations and more.</li>
<li><strong>Self-service:</strong> users can enroll into MFA right from the mobile app, and in case the mobile device is lost we offers self recovery option, as well as recovery with admin approval.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Deployment options</p>
<p>Passwordless MFA can be deployed:</p>
<ol>
<li>With idemeum Single Sign-On Identity Provider and infrastructure access, as it is deeply integrated into our platform. This way you have one platform to manage workforce and privileged access.</li>
<li>With your own Identity Provider such as Okta or Azure AD. We support various SAML <a href="https://integrations.idemeum.com/tag/identity-providers/" target="_blank" rel="noopener noreferrer">integrations<ExternalLinkIcon/></a> today.</li>
</ol>
</div>
<h3 id="_2-single-sign-on" tabindex="-1"><a class="header-anchor" href="#_2-single-sign-on" aria-hidden="true">#</a> <a href="/application-catalog.html" target="_blank" rel="noopener noreferrer">2. Single Sign-On<ExternalLinkIcon/></a></h3>
<p>idemeum offers a fully featured Single Sign-On Identity Provider (SAML &amp; OIDC).</p>
<ul>
<li><strong>Integrations:</strong> you can integrate <a href="https://integrations.idemeum.com" target="_blank" rel="noopener noreferrer">hundreds of SaaS applications<ExternalLinkIcon/></a> using SAML in order to offer one-click centralized access.</li>
<li><strong>Passwordless access:</strong> idemeum SSO works with <strong>Passwordless MFA</strong> to offer passwordless access to applications. Users login to application catalog with Passwordless MFA and then can click on any application to launch it without needing to type any passwords.</li>
<li><strong>Unified catalog:</strong> all applications and resources and centralized in one catalog: password apps, SAML apps, SSH servers, desktops, and more.</li>
<li><strong>Automated account provisioning:</strong> idemeum supports various protocols such as SCIM in order to automatically create accounts when employees join, and remove them when employees leave.</li>
<li><strong>Various features:</strong> RBAC, group management, auditing, local biometrics and more.</li>
</ul>
<p>Navigate to <a href="/application-catalog.html" target="_blank" rel="noopener noreferrer">Single Sign-On<ExternalLinkIcon/></a> section to learn more about idemeum Identity Provider.</p>
<h3 id="_3-cloud-radius" tabindex="-1"><a class="header-anchor" href="#_3-cloud-radius" aria-hidden="true">#</a> <a href="/cloud-radius-overview.html" target="_blank" rel="noopener noreferrer">3. Cloud Radius<ExternalLinkIcon/></a></h3>
<p>idemeum offers Cloud Radius instance so that you can control access to you VPN, Wi-Fi, and network resources. Paired with <strong>Passwordless MFA</strong> users can access any network resource such as VPN without needing to have passwords. Just use mobile application to approve login with biometrics.</p>
<p>Deploy managed Radius authentication in your organization without building, maintaining, or monitoring physical servers.</p>
<p>Check our <a href="https://integrations.idemeum.com/" target="_blank" rel="noopener noreferrer">integrations portal<ExternalLinkIcon/></a> to see what Radius integrations we support today. Our platform is quite flexible, so if certified integration is missing, we are happy to add it.</p>
<h3 id="_4-cloud-directory" tabindex="-1"><a class="header-anchor" href="#_4-cloud-directory" aria-hidden="true">#</a> 4. Cloud Directory</h3>
<p>idemeum offers various ways to manage users and onboarding.</p>
<ul>
<li><strong>Local user management:</strong> you can manually create users in idemeum and specify email address along with various personal identity claims. When users will be onboarding with Passwordless MFA this user data will be used.</li>
<li><strong>External user sources:</strong> idemeum can integrate with external user sources such as HRMS systems, payroll providers, or existing identity providers.</li>
</ul>
<p>Again, check our integrations catalog to see what <a href="https://integrations.idemeum.com/tag/user-source/" target="_blank" rel="noopener noreferrer">user sources<ExternalLinkIcon/></a> we support today.</p>
<h3 id="_5-secure-password-vault" tabindex="-1"><a class="header-anchor" href="#_5-secure-password-vault" aria-hidden="true">#</a> <a href="/password-vault-overview.html" target="_blank" rel="noopener noreferrer">5. Secure Password Vault<ExternalLinkIcon/></a></h3>
<p>idemeum offers a secure cloud vault to store passwords for your employees and privileged accounts.</p>
<ul>
<li><strong>Zero knowledge:</strong> each user gets access to password vault, and the credentials are encrypted with the keys that are kept on user mobile devices. What that means is that we do not have access to your passwords. And if our cloud gets compromised, none of your passwords wil ever get leaked. Decryption happens on the client side, i.e. your browser, mobile app, and browser extension.</li>
<li><strong>Sharing:</strong> idemeum offers secure way to share credentials across the organization. With a simple click, you can share accounts with your team.</li>
<li><strong>Auto-fill:</strong> with the help of a browser extension, idemeum can auto-fill credentials on desktop and mobile browsers.</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">We don't see your passwords</p>
<p>Even though our password vault is cloud based, we do not see your password as they are encrypted on the client side. Check our <a href="./security-whitepaper">security white paper</a> to learn more about our security and encryption principles.</p>
</div>
<h3 id="_6-zero-trust-remote-access" tabindex="-1"><a class="header-anchor" href="#_6-zero-trust-remote-access" aria-hidden="true">#</a> <a href="/zero-trust/zero-trust-overview.html" target="_blank" rel="noopener noreferrer">6. Zero-trust remote access <badge type="warning" text="Early access"/><ExternalLinkIcon/></a></h3>
<p>idemeum offers a simple and secure way to access your infrastructure from the same platform.</p>
<ul>
<li><strong>Passwordless:</strong> you access infrastructure resources without passwords. Users leverage Passwordless MFA to login to an idemeum portal and then access various applications or servers.</li>
<li><strong>Universal:</strong> we support access to on-premises applications, SSH servers, workstations and more.</li>
<li><strong>Simple:</strong> nothing for you to deploy or manage. idemeum abstracts all the complexity, and the only thing you need is to connect idemeum to your resources. We offer a simple proxy agent that you install on-premises, and it will securely connect to our cloud using outbound channel - no ports to open or firewall rules to change.</li>
</ul>
</div></template>
