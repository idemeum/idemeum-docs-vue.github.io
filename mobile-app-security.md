# Security overview

## Status
##### Compliance
| Compliance        | Type           | Status  |
| ------------- |:-------------:| -----:|
| [SOC2](https://us.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report)      | Type 1 | May 22 |
| [SOC2](https://us.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report)      | Type 2 | Ongoing |

##### Penetration testing

| Auditor        | Date           | Status  |
| ------------- |:-------------:| -----:|
| [Cure53](https://cure53.de/)      | May 22 | Ongoing |


##### Report a vulnerability
To make a security vulnerability report, fill out the [form](https://form.typeform.com/to/Pl2gD33h). Share as many details as possible, including steps to reproduce. We are deeply grateful to researchers who report issues so that we can address them immediately.


## Why we care?

Security is fundamental to us. SOC2 compliance, periodic third-party penetration testing exercises, modern state of the art cryptography - we do things the right way.

We know first hand that poor authentication security leads to account theft, data breaches, monetary losses, loss of trust, and reputation damage. What is more, a poor user experience related to authentication inevitably leads to suboptimal behavior and bad practices, which cause security incidents. Therefore, our primary goal is to make idemeum's Passwordless MFA secure without sacrificing user experience.

## Why we eliminate passwords
Passwords cause breaches. It's as simple as that. 😥

Today passwords remain an extremely weak way to secure user accounts and a favorite target for hackers, evidenced by the fact that over 80% of data breaches involve stolen or lost passwords. Passwords are vulnerable to numerous types of security attacks, which has led to ongoing high-profile PII data breaches, the theft of billions of user accounts, and billions in monetary damage.

## How idemeum MFA is more secure
Here is the list of attacks and vulnerabilities that idemeum mitigates with Passwordless MFA.

* **Credential stuffing** - form fields do not exist therefore attackers can not stuff them with static credentials.
* **Credential replay attacks** - attackers can't try stolen or leaked passwords because no static credentials are used.
* **Lost or stolen token attacks** - dedicated tokens are not needed so that they can not be stolen. Moreover, if a user's phone is lost or stolen, attackers can not use it because idemeum authentication requires the use of biometrics for each login.
* **Phishing / spear phishing attacks** - without static credentials, attackers can't phish them from vulnerable users.
* **Key logging** - as there are no passwords, there is nothing to log. Thus idemeum protects against malware that captures users' credentials.
* **Shoulder surfing** - as there are no passwords, attackers can not physically observe or record a user inputting login credentials.
* **Brute force cracking** - there are no password hashes that we store in our cloud. Hence attackers can not leverage  “guess-and-check” algorithms to decipher previously stolen password hashes, making them usable in order to illicitly access user accounts.
* **Man-in-the-middle attacks** - idemeum prevents interception of credential transmissions either over a local network or via a malicious website purporting to be the intended recipient of those credentials.
* **Social engineering** - idemeum stops use of deception to manipulate individuals into divulging credentials or other confidential data that can be used to defeat user authentication.
* **Session hijacking / forgery** - idemeum stops bypassing authentication by stealing or creating browser session keys that allow access to protected resources.

This is orders of magnitude more secure than traditional authentication methods, let alone the fact that user experience is simple and seamless with idemeum passwordless MFA.

## How we designed idemeum MFA

idemeum passwordless MFA leverages:

* **Asymmetric cryptography** to replace passwords with digital certificates
* **Hardware backed storage** to store keys that are used for authentication
* **Secure and open standards** such as SAML, PKI, FIDO2, Webauthn, DID
* **Device attestation services** provided by Android and iOS operating systems
* **Detection of jailbroken devices** in order to block application registration
* **End to end encryption** of data passing between mobile and user browsers
* **Encryption of data at rest** on a mobile device to protect identity claims




