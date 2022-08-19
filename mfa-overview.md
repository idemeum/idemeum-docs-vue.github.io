# Passwordless MFA overview :smile:

## What is idemeum Passwordless MFA?

idemeum **Passwordless Multi-Factor Authentication (MFA)** is a mobile app that users install on iOS and Android devices. Once installed it becomes a **secure biometric key** to access all company resources, including SaaS applications, VPN, Wi-Fi, password vault and more.

## How is it passwordless?
Classic MFA experience requires employees to use several factors for authentication. For example, first an employee enters username and password, and then she retrieves [one-time password (OTP)](https://en.wikipedia.org/wiki/One-time_password) from a mobile app and enters it as well to complete a login process.

idemeum simplifies user experience and makes employee logins completely passwordless. When accessing a company resource, an employee sees a QR-code. Then she uses idemeum MFA app to scan the QR code and approve login with biometrics. That is it. The login experience becomes highly secure, yet very user friendly.

## How is it multi-factor?
idemeum is highly secure as it uses the combination of 2 factors to authenticate users:

* **PKI certificates** that are securely stored in hardware-backed storage on a mobile device. This is considered a *something you have* factor.
* Biometrics that are requested using built-in mobile biometric sensors (i.e. Face ID scanner). This is considered a *something you are* factor.

You can learn more about security in our [white paper](./security-whitepaper.html).

## How is it decentralized?
When users install idemeum mobile application they verify personal identity claims, such as *email address*, *phone number* or *ID document*. We do not store any of users' personal information in our cloud. idemeum offers a decentralized design with personal identity claims persisted only in the mobile application.

## How to use idemeum MFA for login?
idemeum Passwordless MFA offers biometric based login across devices and application types. Your users can use idemeum to login to SaaS applications on desktop or to native / browser based applications on mobile. We offer truly cross-platform cross-device experience. idemeum offers various login flavors including **QR-code login**, **login with push notification**, or **login with local biometrics**.


## How can new hires onboard with idemeum MFA?
idemeum Passwordless MFA is very intuitive, as it offers a self-service experience for onboarding as well as recovery and involves 3 simple steps:

1. Install idemeum Passwordless MFA
2. Verify identity using personal information
3. Scan QR-code at the company portal to access all resources

## Can I use idemeum with my SSO provider?
If you already have an Identity Provider (IdP), such as Azure AD, Okta, or OneLogin, you can still use idemeum Passwordless MFA. It integrates with your identity Provider in minutes and makes your existing infrastructure passwordless. You can learn more about available integrations in our [integrations portal](https://integrations.idemeum.com/tag/identity-providers/).

## What happens if I lose my device?
We provide several simple and secure recovery methods. With **self-service recovery** users can self-recover using recovery QR-code that they store offline or in Cloud storage. With **admin controlled recovery** users can request recovery from new device, and admins can approve the recovery request from admin portal.

