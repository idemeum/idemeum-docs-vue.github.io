<template><div><h1 id="automated-account-provisioning" tabindex="-1"><a class="header-anchor" href="#automated-account-provisioning" aria-hidden="true">#</a> Automated account provisioning</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>idemeum offers end to end lifecycle management capabilities. You can integrate idemeum with your SaaS applications to:</p>
<ul>
<li><strong>Automate account creation</strong> to automatically add employees to apps right when the start</li>
<li><strong>Timely remove application accounts</strong> for employees who leave the organization</li>
<li><strong>Reduce costs</strong> by quickly recuperating software licenses for employees that are terminated</li>
</ul>
<h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How it works</h2>
<p>Typically idemeum provisions accounts when employees first [onboard])(./employee-onboarding.html) into an organization with Passwordless MFA. Here is example of the flow when <RouterLink to="/integration-with-hr-system.html#external-user-source">external user source</RouterLink> is used for onboarding / off-boarding.</p>
<p><img src="@source/images/sso/provisioning.jpeg" alt=""></p>
<ul>
<li>First employee verifies digital identity and <RouterLink to="/employee-onboarding.html">onboards</RouterLink> into organization by navigating to a company portal and scanning a QR code</li>
<li>idemeum locates the user record in external user source and pulls required attributes such as role, department, name, etc.</li>
<li>Based on these attributes idemeum will automatically create application accounts for employee to become productive immediately</li>
<li>Once the employee is terminated / off-boarded in HRMS, all application accounts will be removed and access revoked</li>
</ul>
<h2 id="how-to-configure-provisioning" tabindex="-1"><a class="header-anchor" href="#how-to-configure-provisioning" aria-hidden="true">#</a> How to configure provisioning</h2>
<ul>
<li>First check our integration portal to see what applications we support for <a href="https://integrations.idemeum.com/" target="_blank" rel="noopener noreferrer">automated provisioning<ExternalLinkIcon/></a>.</li>
<li>Access your idemeum admin portal and navigate to <code v-pre>Applications</code> section. You can search for an application that you want to set up provisioning for. We recommend you first set up Single Sign-On for that application.</li>
<li>Click <code v-pre>Add application</code>. And then navigate to <code v-pre>Provisioning</code> section.</li>
<li>Based on what application supports, you will either have to enter an <strong>API key</strong> or conduct <strong>oAuth flow</strong> to allow idemeum to perform automated provisioning. For most applications we rely on SCIM protocol to conduct provisioning, however for some applications we rely on custom API connectors that we developed.</li>
</ul>
<p><img src="@source/images/sso/provisioning-example.png" alt=""></p>
<p>Please, check our <a href="https://integrations.idemeum.com" target="_blank" rel="noopener noreferrer">integrations portal<ExternalLinkIcon/></a> as we have a detailed step by step instructions there for how to enable SSO and provisioning for each application that idemeum supports.</p>
</div></template>


