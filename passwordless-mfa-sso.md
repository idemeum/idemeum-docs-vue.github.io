# Passwordless MFA for Single Sign-On :speedboat:

## Overview

idemeum can make employee login into any Single Sign-On SaaS Web application passwordless. For example, when employees access Slack, Office 365, or Google Workspace through a Single Sign-On Identity Provider, they will not need to enter any passwords. Instead, employees will be able to login with mobile biometrics. 

![Passwordless for Web apps](./images/mfa-sso.png)

::: tip Integration options

idemeum Passwordless MFA supports various options of integrating with SSO:

1. **Existing SSO** - if you already have identity deployment with SSO, such as Okta, Azure AD, etc., idemeum can easily integrate with your identity provider. Check idemeum integration catalog to see what [Identity Providers](https://integrations.idemeum.com/tag/identity-providers/) are supported.
2. **idemeum SSO** - idemeum offers its own Single Sign-On Identity Provider. if you have not deployed SSO yet, idemeum can consolidate all identity infrastructure for you.

:::

For instance, if you already have Okta, and users access any application protected by Okta, instead of logging in with username and password, users are redirected to idemeum for authentication. Users take mobile app, scan login QR-code, approve with biometrics and can immediately access any Okta application.

## How to integrate

Integrating with idemeum is very simple, and we document everything in detail. Here are the steps you can take to integrate idemeum with your existing Identity Provider. 

* **Step 1:** Install idemeum app and [create idemeum tenant](./self-service-onboarding.html) for your organization.
* **Step 2:** Configure user source for user onboarding and mapping between personal and corporate identity claims. Please, refer to [onboarding overview](/employee-onboarding.html) and [user source](/integration-with-hr-system.html) configuration manuals to understand why we need user source configured.
* **Step 3:** Navigate to [integrations portal](https://integrations.idemeum.com) and find the integration guide for your Identity Provider. We have detailed steps for how to set up SAML federation between idemeum and your IDP. 
	* Here are some major Identity Providers that idemeum can integrate with:
		* [Okta](https://integrations.idemeum.com/okta/)
		* [Azure AD](https://integrations.idemeum.com/azuread/)
		* [OneLogin](https://integrations.idemeum.com/onelogin/)
		* [Google Workspace](https://integrations.idemeum.com/google-workspace/)

::: tip Need help?

Let us know if you need any help in [contact us](https://idemeum.com/contact/) or email at [support@idemeum.com](mailto:support@idemeum.com)

:::
