<template><div><h1 id="passwordless-mfa-for-single-sign-on" tabindex="-1"><a class="header-anchor" href="#passwordless-mfa-for-single-sign-on" aria-hidden="true">#</a> Passwordless MFA for Single Sign-On 🚤</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>idemeum can make employee login into any Single Sign-On SaaS Web application passwordless. For example, when employees access Slack, Office 365, or Google Workspace through a Single Sign-On Identity Provider, they will not need to enter any passwords. Instead, employees will be able to login with mobile biometrics.</p>
<p><img src="@source/images/mfa-sso.png" alt="Passwordless for Web apps"></p>
<div class="custom-container tip"><p class="custom-container-title">Integration options</p>
<p>idemeum Passwordless MFA supports various options of integrating with SSO:</p>
<ol>
<li><strong>Existing SSO</strong> - if you already have identity deployment with SSO, such as Okta, Azure AD, etc., idemeum can easily integrate with your identity provider. Check idemeum integration catalog to see what <a href="https://integrations.idemeum.com/tag/identity-providers/" target="_blank" rel="noopener noreferrer">Identity Providers<ExternalLinkIcon/></a> are supported.</li>
<li><strong>idemeum SSO</strong> - idemeum offers its own Single Sign-On Identity Provider. if you have not deployed SSO yet, idemeum can consolidate all identity infrastructure for you.</li>
</ol>
</div>
<p>For instance, if you already have Okta, and users access any application protected by Okta, instead of logging in with username and password, users are redirected to idemeum for authentication. Users take mobile app, scan login QR-code, approve with biometrics and can immediately access any Okta application.</p>
<h2 id="how-to-integrate" tabindex="-1"><a class="header-anchor" href="#how-to-integrate" aria-hidden="true">#</a> How to integrate</h2>
<p>Integrating with idemeum is very simple, and we document everything in detail. Here are the steps you can take to integrate idemeum with your existing Identity Provider.</p>
<ul>
<li><strong>Step 1:</strong> Install idemeum app and <RouterLink to="/self-service-onboarding.html">create idemeum tenant</RouterLink> for your organization.</li>
<li><strong>Step 2:</strong> Configure user source for user onboarding and mapping between personal and corporate identity claims. Please, refer to <RouterLink to="/employee-onboarding.html">onboarding overview</RouterLink> and <RouterLink to="/integration-with-hr-system.html">user source</RouterLink> configuration manuals to understand why we need user source configured.</li>
<li><strong>Step 3:</strong> Navigate to <a href="https://integrations.idemeum.com" target="_blank" rel="noopener noreferrer">integrations portal<ExternalLinkIcon/></a> and find the integration guide for your Identity Provider. We have detailed steps for how to set up SAML federation between idemeum and your IDP.
<ul>
<li>Here are some major Identity Providers that idemeum can integrate with:
<ul>
<li><a href="https://integrations.idemeum.com/okta/" target="_blank" rel="noopener noreferrer">Okta<ExternalLinkIcon/></a></li>
<li><a href="https://integrations.idemeum.com/azuread/" target="_blank" rel="noopener noreferrer">Azure AD<ExternalLinkIcon/></a></li>
<li><a href="https://integrations.idemeum.com/onelogin/" target="_blank" rel="noopener noreferrer">OneLogin<ExternalLinkIcon/></a></li>
<li><a href="https://integrations.idemeum.com/google-workspace/" target="_blank" rel="noopener noreferrer">Google Workspace<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Need help?</p>
<p>Let us know if you need any help in <a href="https://idemeum.com/contact/" target="_blank" rel="noopener noreferrer">contact us<ExternalLinkIcon/></a> or email at <a href="mailto:support@idemeum.com">support@idemeum.com</a></p>
</div>
</div></template>


