<template><div><h1 id="mfa-organization-rollout" tabindex="-1"><a class="header-anchor" href="#mfa-organization-rollout" aria-hidden="true">#</a> MFA organization rollout 🏢</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>idemeum Passwordless MFA can be integrated with various parts of your identity infrastructure, including <RouterLink to="/passwordless-mfa-sso.html">SSO</RouterLink>, <RouterLink to="/passwordless-mfa-vpn-wifi.html">VPN</RouterLink>, <RouterLink to="/passwordless-mfa-desktop.html">desktops</RouterLink>, <RouterLink to="/passwordless-mfa-vault.html">vault</RouterLink>, and more. You can use idemeum as a one stop shop solution for managing workforce and privileged identity, or can seamlessly roll out idemeum on top of your existing infrastructure as a passwordless MFA.</p>
<p>Here are the three steps you will need to do to roll our Passwordless MFA for your existing employees:</p>
<ol>
<li><strong>Invite your employees</strong> to enroll into passwordless experience</li>
<li><strong>Integrate idemeum</strong> with your infrastructure</li>
<li><strong>Enable passwordless authentication</strong> across the org</li>
</ol>
<h2 id="_1-invite-your-employees" tabindex="-1"><a class="header-anchor" href="#_1-invite-your-employees" aria-hidden="true">#</a> 1. Invite your employees</h2>
<p>As a first step you will need to send all existing employees an email inviting them to enroll in idemeum's passwordless experience. At this point employees are still accessing applications with username and password, but they can now set up passwordless MFA and get enrolled. You will simply use an email to ask employees to enroll, and you can track the progress of how many users enrolled with idemeum.</p>
<p>Example of enrollment email is shown below.</p>
<div class="custom-container tip"><p class="custom-container-title">Email template</p>
<p>👋 Welcome to passwordless experience!</p>
<p>Acme is using idemeum, a new sign-in experience for you to simply and securely login into corporate resources without passwords.</p>
<p><strong>STEP 1 - install idemeum app</strong></p>
<p>Download and install the idemeum mobile app and follow the in-app setup instructions. Make sure you verify your phone number and personal email address.</p>
<p><u><em>App store link</em></u></p>
<p><strong>STEP 2 - enroll into passwordless experience</strong></p>
<p>Navigate to the following <u><em>link</em></u>. Once you see the QR-code, open the idemeum mobile app, click login, and scan the QR code. Upon successful enrollment you will be shown your corporate address.</p>
<p><u><em>Enrollment link</em></u></p>
<p>Once the enrollment is complete, you are done. We will send further instructions in the following emails.</p>
<hr>
<p>Questions? Contact support team at support@company.com</p>
</div>
<h3 id="enrollment-link" tabindex="-1"><a class="header-anchor" href="#enrollment-link" aria-hidden="true">#</a> Enrollment link</h3>
<p>When employees navigate to enrollment link and scan the QR-code with idemeum mobile app, we try to <RouterLink to="/employee-onboarding.html">onboard user</RouterLink> using their personal claim using the <RouterLink to="/integration-with-hr-system.html">user source</RouterLink> that is configured in idemeum. If everything is configured correctly and onboarding is successful, employee will be shown the corporate email address.</p>
<div class="custom-container warning"><p class="custom-container-title">Enrollment link</p>
<p>For the enrollment link we offer a URL that employees can use to self-enroll. The link is created by adding <code v-pre>/enroll</code> to your company's idemeum tenant name. For instance <code v-pre>https://acme.idemeum.com/enroll</code>.</p>
</div>
<h2 id="_2-integrate-idemeum" tabindex="-1"><a class="header-anchor" href="#_2-integrate-idemeum" aria-hidden="true">#</a> 2. Integrate idemeum</h2>
<p>As a second step you will need to integrate idemeum with your existing infrastructure. Check out our <a href="https://integrations.idemeum.com" target="_blank" rel="noopener noreferrer">integrations portal<ExternalLinkIcon/></a> to explore various integrations that we support today.</p>
<p>Typically you would connect idemeum to:</p>
<ul>
<li>Your existing SAML SSO Identity Provider to allow users access SaaS apps with passwordless MFA</li>
<li>Virtual Private Network (VPN)</li>
<li>Networking / Wi-Fi infrastructure</li>
<li>HR / Payroll system or any other source if you want completely automate passwordless onboarding</li>
</ul>
<p>We have detailed integration guides posted in our integration portal. If you need an integration that we do not currently support, please reach out to <a href="MAILTO:SUPPORT@IDEMEUM.COM">support@idemeum.com</a>.</p>
<h2 id="_3-enable-passwordless-experience" tabindex="-1"><a class="header-anchor" href="#_3-enable-passwordless-experience" aria-hidden="true">#</a> 3. Enable passwordless experience</h2>
<p>Once your employees are enrolled, and you have idemeum integrated with your infrastructure, you can turn off password-based login for your employees. That will depend on your specific integration:</p>
<ul>
<li>For Okta you will enable routing rules to use idemeum for all SaaS applications access</li>
<li>For Azure you will need to enable 3rd party IDP federation using PowerShell</li>
<li>For VPN you will turn the Radius integration with idemeum</li>
<li>and more</li>
</ul>
</div></template>


