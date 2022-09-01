# How it works
## Overview
idemeum is a SaaS zero trust platform that is hosted on AWS. We try to minimize the footprint of on-premises components that our customers need to deploy. We architected idemeum based on [micro-services architecture](https://blog.idemeum.com/microservice-scalability/) to offer high availability and security. 

idemeum is unified, yet modular. We combined products from several identity categories to offer unified app and infrastructure access experience. We sit at the intersection of Privileged Access Management (PAM), Workforce Identity (IAM), and Passwordless Technology. You can deploy and leverage the power of the whole platform, or choose the components that you need. Check our [pricing and licensing](https://idemeum.com/pricing) page to see what product tiers we offer today. 

## Platform components
Here is a high level overview of idemeum platform components:

![Architecture](./images/architecture.png)

### [Passwordless Single Sign-On](./application-catalog.html)

Single Sign-On (SSO) is the entry door to access your company resources. Typically, SSO is centered around accessing SaaS Web applications, which are integrated using SAML / OIDC protocols. Companies are deploying products such as Okta, Azure AD, and others to manage access to SSO applications. 

idemeum goes beyond just SaaS web applications. We unify access to any company resource, including SAML SaaS applications, on-premises applications, SSH servers, RDP desktops, databases, and more. Pretty much you can access anything you need in your organization. 

![Catalog](./images/catalog.png)

idemeum acts as a fully-featured Identity Provider offering features such as:

* **Integrations:** you can integrate [hundreds of SaaS applications](https://integrations.idemeum.com) using SAML in order to offer one-click centralized access. 
* **Passwordless access:** idemeum SSO works with **Passwordless MFA** to offer passwordless access to applications. Users login to application catalog with Passwordless MFA and then can click on any application to launch it without needing to type any passwords. 
* **Unified catalog:** all applications and resources and centralized in one catalog: password apps, SAML apps, SSH servers, desktops, and more.
* **Automated account provisioning:** idemeum supports various protocols such as SCIM in order to automatically create accounts when employees join, and remove them when employees leave. 
* **Various features:** RBAC, group management, auditing, local biometrics and more. 

Navigate to [Single Sign-On](/application-catalog.html) section to learn more about idemeum Identity Provider.

### [Passwordless MFA](./mfa-overview.html)

At idemeum we hate passwords. Therefore we built a Passwordless MFA mobile app to allow you to access any company resource with biometrics instead. You simply take mobile app, scan a QR-code, approve with biometrics, and you are in. 

idemeum Passwordless MFA is multi-factor as for each authentication two factors are used: *something you have* - certificate that is provisioned on a mobile device, and *something you are* - mobile biometric sensors such as Face ID.

Today we support various types of integrations if you just want to use our Passwordless MFA:

* **You existing SSO provider such as Okta or Azure AD** - you can use idemeum MFA to make every employee login into SaaS applications passwordless. 
* **VPN and Wi-Fi** - idemeum offers cloud based Radius so that you can integrate with your existing Wi-Fi and VPN infrastructure. When employees connect to Wi-Fi or access VPN, they no longer need to use password, but rather approve access with Passwordless MFA. 
* **Windows and Mac desktops** - we offer idemeum desktop application to make logins to your desktops / laptops passwordless. You can install idemeum desktop application, pair it with you mobile device, and start logging with biometrics. 

Users can enroll into MFA right from the mobile app, and in case the mobile device is lost we offer self recovery option, as well as recovery with admin approval. 

::: tip Deployment options
Passwordless MFA can be deployed: 
1. With idemeum Single Sign-On Identity Provider and infrastructure access, as it is deeply integrated into our platform. This way you have one platform to manage workforce and privileged access.
2. With your own Identity Provider such as Okta or Azure AD. We support various SAML [integrations](https://integrations.idemeum.com/tag/identity-providers/) today.
:::


### [Secure Password Vault](./password-vault-overview.html)
idemeum offers a secure cloud vault to store passwords for your employees and privileged accounts. 

* **Zero knowledge:** each user gets access to password vault, and the credentials are encrypted with the keys that are kept on user mobile devices. What that means is that we do not have access to your passwords. And if our cloud gets compromised, none of your passwords wil ever get leaked. Decryption happens on the client side, i.e. your browser, mobile app, and browser extension. 
* **Sharing:** idemeum offers secure way to share credentials across the organization. With a simple click, you can share accounts with your team.
* **Auto-fill:** with the help of a browser extension, idemeum can auto-fill credentials on desktop and mobile browsers.

::: warning We don't see your passwords
Even though our password vault is cloud based, we do not see your password as they are encrypted on the client side. Check our [security white paper](./security-whitepaper) to learn more about our security and encryption principles.
:::

### [Secure Remote Access <badge type="warning" text="Early access"/>](./zero-trust/zero-trust-overview.html)
idemeum offers a cloud identity-aware proxy so that you can connect to you private cloud infrastructure. 

idemeum Secure Remote Access offers:

* **Passwordless infrastructure access:** you access infrastructure resources without passwords. Users leverage Passwordless MFA to login to an idemeum portal and then access various applications or servers. idemeum eliminates static credentials such as passwords and SSH keys.
* **Universal:** we support access to on-premises applications, SSH servers, workstations and more. 
* **Simple:** nothing for you to deploy or manage. idemeum abstracts all the complexity, and the only thing you need is to connect idemeum to your resources. We offer a simple proxy agent that you install on-premises, and it will securely connect to our cloud using outbound channel - no ports to open or firewall rules to change. 