# Passwordless MFA overview

[[toc]]

## What is Passwordless MFA?

Here is your classic experience accessing company resources - login with username and password. In the last couple of years we made it a bit more secure by adding MFA - you login with username and password, and then input one-time code or approve push notification. The problem with this way of doing things is that it is **phishable** and **introduces significant user friction**. 

::: tip What is idemeum Passwordless MFA?

idemeum offers **Passwordless Multi-Factor Authentication (MFA)** that replaces passwords with biometrics. To access any company resource you install mobile app, scan a QR-code, approve with biometrics, and you are in. No more codes or passwords.

idemeum MFA is universal, meaning you can access any company resource with biometrics:

1. Single Sign-On apps
2. VPN or Wi-Fi
3. Desktop workstations (Mac or Windows)
4. Password vault
5. Infrastructure


:::

<div class='embed-container'><iframe src='https://www.youtube.com/embed/PAXVNiLM4eA' frameborder='0' allowfullscreen></iframe></div>


## Frequently Asked Questions (FAQ)

### How is it passwordless?
Classic MFA experience requires employees to use several factors for authentication. For example, first an employee enters username and password, and then she retrieves [one-time password (OTP)](https://en.wikipedia.org/wiki/One-time_password) from a mobile app and enters it as well to complete a login process.

idemeum simplifies user experience and makes employee logins completely passwordless. When accessing a company resource, an employee sees a QR-code. Then she uses idemeum MFA app to scan the QR code and approve login with biometrics. That is it. The login experience becomes highly secure, yet very user friendly.

### How is it multi-factor?
idemeum is highly secure as it uses the combination of 2 factors to authenticate users:

* **PKI certificates** that are securely stored in hardware-backed storage on a mobile device. This is considered a *something you have* factor.
* **Biometrics** that are requested using built-in mobile biometric sensors (i.e. Face ID scanner). This is considered a *something you are* factor.

You can learn more about security in our [white paper](./security-whitepaper.html).


### What can I access with idemeum Passwordless MFA?

When idemeum Passwordless MFA is used with idemeum platform, you can protect pretty much any company resource with biometrics - SSO apps, VPN, Wi-Fi, infrastructure, and desktops. 

You can also integrate idemeum with your own identity provider, such as Okta, Azure AD, and more, and protect your identity provider access with biometrics. 

### How do I use idemeum MFA for login?
idemeum Passwordless MFA offers biometric based login across devices and application types. Your users can use idemeum to login to SaaS applications on desktop or to native / browser based applications on mobile. We offer truly cross-platform cross-device experience. idemeum offers various [login flavors](./login-experience.html) including **QR-code login**, **login with push notification**, or **login with local biometrics**.


### How can new hires onboard with idemeum MFA?
idemeum Passwordless MFA is very intuitive, as it offers a self-service experience for onboarding as well as recovery and involves 3 simple steps:

1. Install idemeum Passwordless MFA
2. Verify identity using personal information
3. Scan QR-code at the company portal to access all resources

### Can I use idemeum with my SSO provider?
If you already have an Identity Provider (IdP), such as Azure AD, Okta, or OneLogin, you can still use idemeum Passwordless MFA. It integrates with your identity Provider in minutes and makes your existing infrastructure passwordless. You can learn more about available integrations in our [integrations portal](https://integrations.idemeum.com/tag/identity-providers/).

### What happens if I lose my device?
We provide several simple and secure [recovery methods](./recovery-overview.html). With **self-service recovery** users can self-recover using recovery QR-code that they store offline or in Cloud storage. With **admin controlled recovery** users can request recovery from new device, and admins can approve the recovery request from admin portal.

