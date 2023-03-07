# Frequently Asked Questions (FAQ)

[[toc]]

## What is Passwordless MFA?

Here is your classic experience accessing company resources - login with username and password. In the last couple of years we made it a bit more secure by adding MFA - you login with username and password, and then input one-time code or approve push notification. The problem with this way of doing things is that it is **phishable** and **introduces significant user friction**. 

idemeum is a mobile application that replaces shared secrets such as passwords, PINs, SMS codes and OTPs, with FIDO2 standards. Biometric sensors such as Apple Touch ID, Face ID, and their Android counterparts, can be used to securely access devices, applications, and infrastructure using public key cryptography. Logging into a company resource becomes as simple as canning a QR-code and approving login with biometrics.

At registration, idemeum securely generates a pair of cryptographic keys in addition to FIDO2 standards. The private key is stored on the user’s mobile device using hardware-backed crypto storage, whereas the public key is registered with idemeum backend. When users scan login QR-code with idemeum mobile application, they are required to authenticate with multiple factors - biometrics and certificates.

## How is idemeum passwordless?

Classic MFA experience requires employees to use several factors for authentication. For example, first an employee enters username and password, and then she retrieves [one-time password (OTP)](https://en.wikipedia.org/wiki/One-time_password) from a mobile app and enters it as well to complete a login process.

idemeum simplifies user experience and makes employee logins completely passwordless. When accessing a company resource, an employee sees a QR-code. Then she uses idemeum MFA app to scan the QR code and approve login with biometrics. That is it. The login experience becomes highly secure, yet very user friendly.

## How is idemeum multi-factor?

idemeum is highly secure as it uses the combination of 2 factors to authenticate users:

* **PKI certificates** that are securely stored in hardware-backed storage on a mobile device. This is considered a *something you have* factor.
* **Biometrics** that are requested using built-in mobile biometric sensors (i.e. Face ID scanner). This is considered a *something you are* factor.

You can learn more about security in our [white paper](../security-whitepaper.html).

## What can idemeum Passwordless MFA protect?

We call idemeum Passwordless MFA universal, because it can protect pretty much any company resources. Here is what Passwordless MFA can secure:

- **Cloud applications** - protect Single Sign-On applications with Passwordless MFA. idemeum can offer a fully-featured SAML Identity Provider, or integrate with existing ones, such as Okta, Azure Active Directory and more. 
- **Workstations** - login into Windows and MacOS workstations with biometrics and certificates instead of passwords.
- **Network infrastructure** - protect your existing VPN, Wi-Fi, and other network infrastructure with passwordless MFA.
- **Legacy applications** - protect legacy applications that run on-premises and leverage AD or LDAP for authentication with Passwordless MFA.
- **RDP access** - protect local Windows RDP access with Passwordless MFA.
- Infrastructure - protect access to SSH servers and VDI infrastrcuture with passwordless MFA.
- **Password vault** - eliminate master password from accessing password vault, and replace it with mobile MFA.

## How do I use idemeum for login?

idemeum Passwordless MFA offers biometric based login across devices and application types. Your users can use idemeum to login to SaaS applications on desktop or to native / browser based applications on mobile. We offer truly cross-platform cross-device experience. idemeum offers various login flavors including **QR-code login**, **login with push notification**, or **login with local biometrics**.

## How can new employees onboard with idemeum MFA?

idemeum Passwordless MFA is very intuitive, as it offers a self-service experience for onboarding as well as recovery and involves 3 simple steps:

1. Install idemeum Passwordless MFA
2. Verify identity using personal information
3. Scan QR-code at the company portal to access all resources

## Can I use idemeum with my SSO provider?

If you already have an Identity Provider (IdP), such as Azure AD, Okta, or OneLogin, you can still use idemeum Passwordless MFA. It integrates with your identity Provider in minutes and makes your existing infrastructure passwordless. You can learn more about available integrations in our [integrations portal](https://integrations.idemeum.com/tag/identity-providers/).

## What happens if I lose my device?

We provide several simple and secure [recovery methods](./recovery-overview.html). With **self-service recovery** users can self-recover using recovery QR-code that they store offline or in Cloud storage. With **admin controlled recovery** users can request recovery from new device, and admins can approve the recovery request from admin portal.