# MFA organization rollout :office:

## Overview

idemeum Passwordless MFA can be integrated with various parts of your identity infrastructure, including [SSO](./passwordless-mfa-sso.html), [VPN](./passwordless-mfa-vpn-wifi.html), [desktops](./passwordless-mfa-desktop.html), [vault](./passwordless-mfa-vault.html), and more. You can use idemeum as a one stop shop solution for managing workforce and privileged identity, or can seamlessly roll out idemeum on top of your existing infrastructure as a passwordless MFA. 

Here are the three steps you will need to do to roll our Passwordless MFA for your existing employees:

1. **Invite your employees** to enroll into passwordless experience
2. **Integrate idemeum** with your infrastructure
3. **Enable passwordless authentication** across the org

## 1. Invite your employees

As a first step you will need to send all existing employees an email inviting them to enroll in idemeum's passwordless experience. At this point employees are still accessing applications with username and password, but they can now set up passwordless MFA and get enrolled. You will simply use an email to ask employees to enroll, and you can track the progress of how many users enrolled with idemeum. 

Example of enrollment email is shown below.

::: tip Email template

👋 Welcome to passwordless experience!

Acme is using idemeum, a new sign-in experience for you to simply and securely login into corporate resources without passwords.

**STEP 1 - install idemeum app**

Download and install the idemeum mobile app and follow the in-app setup instructions. Make sure you verify your phone number and personal email address. 

<u>*App store link*</u>

**STEP 2 - enroll into passwordless experience**

Navigate to the following <u>*link*</u>. Once you see the QR-code, open the idemeum mobile app, click login, and scan the QR code. Upon successful enrollment you will be shown your corporate address.

<u>*Enrollment link*</u>

Once the enrollment is complete, you are done. We will send further instructions in the following emails. 

<hr>

Questions? Contact support team at support@company.com

:::

### Enrollment link
When employees navigate to enrollment link and scan the QR-code with idemeum mobile app, we try to [onboard user](./employee-onboarding.html) using their personal claim using the [user source](./integration-with-hr-system.html) that is configured in idemeum. If everything is configured correctly and onboarding is successful, employee will be shown the corporate email address. 

::: warning Enrollment link


For the enrollment link we offer a URL that employees can use to self-enroll. The link is created by adding `/enroll` to your company's idemeum tenant name. For instance `https://acme.idemeum.com/enroll`.

:::


## 2. Integrate idemeum

As a second step you will need to integrate idemeum with your existing infrastructure. Check out our [integrations portal](https://integrations.idemeum.com) to explore various integrations that we support today.

Typically you would connect idemeum to:

* Your existing SAML SSO Identity Provider to allow users access SaaS apps with passwordless MFA
* Virtual Private Network (VPN)
* Networking / Wi-Fi infrastructure
* HR / Payroll system or any other source if you want completely automate passwordless onboarding

We have detailed integration guides posted in our integration portal. If you need an integration that we do not currently support, please reach out to [support@idemeum.com](MAILTO:SUPPORT@IDEMEUM.COM).

## 3. Enable passwordless experience

Once your employees are enrolled, and you have idemeum integrated with your infrastructure, you can turn off password-based login for your employees. That will depend on your specific integration:

* For Okta you will enable routing rules to use idemeum for all SaaS applications access
* For Azure you will need to enable 3rd party IDP federation using PowerShell
* For VPN you will turn the Radius integration with idemeum
* and more
