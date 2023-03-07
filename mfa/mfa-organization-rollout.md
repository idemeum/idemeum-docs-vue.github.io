# MFA organization rollout

[[toc]]

## With idemeum Single Sign-On

* If you use idemeum as a platform to manage your applications and infrastructure things become very simple - everything your employees access with be passwordless and protected with MFA. 
* Invite your employees to onboard into company passwordless experience. You can use simple email like the one below. Onboarding will involve 3 simple steps - install idemeum application, verify personal identity, and scan a QR-code at the company portal. We discussed onboarding in detail [here](./employee-onboarding.html).

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

## With your own Single Sign-On

idemeum also supports easy integrations with major Identity Providers such as Okta, Azure AD, Onelogin, and more. 

* Check our [integrations portal](https://integrations.idemeum.com) for detailed integration guides. 
* Invite your employees to onboard into passwordless experience. You can leverage the same sample email that we included in the above section. As an added convenience we offer an enrollment link to show employees the status of their onboarding before integration with idemeum is fully enabled. 

::: warning Enrollment link

For the enrollment link we offer a URL that employees can use to self-enroll. The link is created by adding `/enroll` to your company's idemeum tenant name. For instance `https://acme.idemeum.com/enroll`.

When employees navigate to enrollment link and scan the QR-code with idemeum mobile app, we try to [onboard user](./employee-onboarding.html) using their personal claim using the [user source](./integration-with-hr-system.html) that is configured in idemeum. If everything is configured correctly and onboarding is successful, employee will be shown the corporate email address. 

:::

* When everything is set up, and employees are onboarded, you can turn on login with idemeum Passwordless MFA. For example, for Okta you will enable routing rules to use idemeum for all SaaS applications access, for Azure AD you will configure your domain to use idemeum as authentication source. Detailed steps for each Identity Provider are described in our [integration portal](https://integrations.idemeum.com/tag/identity-providers/). 