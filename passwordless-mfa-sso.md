# Passwordless MFA for Single Sign-On

## Overview

* idemeum has its own [Single Sign-On Identity Provider](/passwordless-single-sign-on-overview.html). You can integrate your SAML SSO apps with idemeum to protect access with Passwordless MFA. For example, when employees access Slack, Office 365, or Google Workspace, they will not need to enter any passwords. Instead, employees will be able to login with mobile biometrics. 
* If you already have identity deployment with SSO, such as Okta, Azure AD, etc., idemeum can easily integrate with your identity provider. Check idemeum integration catalog to see what [Identity Providers](https://integrations.idemeum.com/tag/identity-providers/) are supported.

For instance, if you already have Okta, and users access any application protected by Okta, instead of logging in with username and password, users are redirected to idemeum for authentication. Users take mobile app, scan login QR-code, approve with biometrics and can immediately access any Okta application.

![Passwordless for Web apps](./images/mfa-sso.png)

## How to integrate

::: tip Passwordless Single Sign-On
To learn more about idemeum Passwordless Single Sign-On navigate [here](/passwordless-single-sign-on-overview.html). 

:::

Integrating with your Single Sign-On provider is very simple, and we document everything in detail. Here are the steps you can take to integrate idemeum with your existing Identity Provider. 

* **Step 1:** Install idemeum app and [create idemeum tenant](./self-service-onboarding.html) for your organization.
* **Step 2:** Configure user source for user onboarding and mapping between personal and corporate identity claims. Please, refer to [onboarding overview](./employee-onboarding.html) and [user source](./integration-with-hr-system.html) configuration manuals to understand why we need user source configured.
* **Step 3:** Navigate to [integrations portal](https://integrations.idemeum.com) and find the integration guide for your Identity Provider. We have detailed steps for how to set up SAML federation between idemeum and your IDP. 
	* Here are some major Identity Providers that idemeum can integrate with:
		* [Okta](https://integrations.idemeum.com/okta/)
		* [Azure AD](https://integrations.idemeum.com/azuread/)
		* [OneLogin](https://integrations.idemeum.com/onelogin/)
		* [Google Workspace](https://integrations.idemeum.com/google-workspace/)

::: tip Need help?

Let us know if you need any help in [contact us](https://idemeum.com/contact/) or email at [support@idemeum.com](mailto:support@idemeum.com)

:::