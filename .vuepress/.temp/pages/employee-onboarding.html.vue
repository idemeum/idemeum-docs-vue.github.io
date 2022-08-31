<template><div><h1 id="employee-onboarding" tabindex="-1"><a class="header-anchor" href="#employee-onboarding" aria-hidden="true">#</a> Employee onboarding 🔑</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>Traditional MFA onboarding is not cutting it today - send credentials over email, ask the employee to reset password, install TOTP or push MFA app, perform separate enrollment for MFA, enable MFA for various resources and more.</p>
<p>When we sat down as a team at idemeum, we wanted to make enrollment process simple, intuitive, yet secure for organization of any size. And since we are building a passwordless platform, we <strong>did not want to rely on any passwords</strong> for enrollment.</p>
<div class="custom-container tip"><p class="custom-container-title">Onboarding summary</p>
<p>We decided to leverage employees' personal identity claims, such as email address and phone number. This something everyone has, and typically we share this information with an organization when we get a job offer. We build the product around a simple idea - a person verifies personal identity claim in the mobile app, and during onboarding idemeum will map this personal identity claim to a corporate email using a <RouterLink to="/integration-with-hr-system.html">user source</RouterLink> system such as HR or Payroll system. This way we are removing a need to use passwords, achieve high level of assurance, and automation.</p>
</div>
<h2 id="employee-experience" tabindex="-1"><a class="header-anchor" href="#employee-experience" aria-hidden="true">#</a> Employee experience</h2>
<p>Let's take a look at what employees need to do when they onboard into an organization with passwordless access.</p>
<ol>
<li><strong>Install</strong> idemeum mobile app</li>
<li><strong>Verify</strong> personal identity</li>
<li><strong>Scan QR-code</strong> in the company portal</li>
</ol>
<h4 id="_1-install-idemeum-mobile-app" tabindex="-1"><a class="header-anchor" href="#_1-install-idemeum-mobile-app" aria-hidden="true">#</a> 1. Install idemeum mobile app</h4>
<p>idemeum is available for both iOS and Android phones. Use the following links to download latest idemeum application from the app store - <a href="https://apps.apple.com/us/app/idemeum/id1552180449" target="_blank" rel="noopener noreferrer">IOS App Store<ExternalLinkIcon/></a> or <a href="https://play.google.com/store/apps/details?id=com.idemeum.dvmi" target="_blank" rel="noopener noreferrer">Android Play Store<ExternalLinkIcon/></a>.</p>
<h4 id="_2-verify-personal-identity" tabindex="-1"><a class="header-anchor" href="#_2-verify-personal-identity" aria-hidden="true">#</a> 2. Verify personal identity</h4>
<p>Right from the mobile app employee can verify personal identity information, such as phone number, personal email address, or government id.</p>
<p>Here is how verification is done:</p>
<table>
<thead>
<tr>
<th>Email address</th>
<th style="text-align:center">Phone number</th>
<th style="text-align:right">ID document</th>
</tr>
</thead>
<tbody>
<tr>
<td>One time code</td>
<td style="text-align:center">SMS</td>
<td style="text-align:right">Liveness detection</td>
</tr>
</tbody>
</table>
<p>If document verification is performed, users take a photo of document (driver's license or passport) and do a face scan to perform liveness detection. Then idemeum performs document validation and matches liveness detection scan with the photo on the document. If successful, document is verified and stored on the mobile device.</p>
<h4 id="_3-scan-login-qr-code" tabindex="-1"><a class="header-anchor" href="#_3-scan-login-qr-code" aria-hidden="true">#</a> 3. Scan login QR-code</h4>
<p>Once idemeum application is set up, users can navigate to a company idemeum portal (i.e. <code v-pre>company.idemeum.com</code>) and scan the login QR-code.</p>
<p><img src="@source/images/qr-scan.png" alt="QR-code scan"></p>
<p>This is when idemeum looks up an employee using a <strong>personal identity claim</strong> and assigns a <strong>corporate email address</strong>. Typically an HR system can be used as a <RouterLink to="/integration-with-hr-system.html">user source</RouterLink>, but idemeum also supports <RouterLink to="/integration-with-hr-system.html#local-user-source">local user source</RouterLink> when admins can create manual personal to corporate claims mappings.</p>
<h2 id="deeper-look-into-how-it-works" tabindex="-1"><a class="header-anchor" href="#deeper-look-into-how-it-works" aria-hidden="true">#</a> Deeper look into how it works</h2>
<p>Let's say an employee verifies a personal email address in idemeum app. This personal email address will be used to onboard an employee into an organization. What idemeum will need to do is to map this personal email address to a corporate email address assigned to this employee. This can be done in two ways:</p>
<ol>
<li><strong>Manual mapping using</strong> <RouterLink to="/integration-with-hr-system.html#local-user-source"><strong>local user source</strong></RouterLink> - admins can manually create a user record in idemeum and map personal claim to company email address.</li>
<li><strong>Automated mapping using</strong> <RouterLink to="/integration-with-hr-system.html#external-user-source"><strong>external user source</strong></RouterLink> - idemeum can connect to an external user source, such as an HR system, or payroll provider, to search for the user by personal claim and convert that to a company email address.</li>
</ol>
<p>Here is a quick diagram of how identity verification can work with HR system.</p>
<p><img src="@source/images/onboarding-flow.jpeg" alt="Onboarding with HR system"></p>
<ul>
<li>IT admin / HR team sends a new employee a welcome email that among other things invites employee to enroll into passwordless experience to access all company resources.</li>
<li>Employee downloads idemeum app and goes through a 2 min set up process: enable biometrics, verify email address, phone number, or ID document. Information required to verify identity is configurable by company admin. Some companies might choose to only require employee to verify phone number. Some companies might be more strict and require remote ID document verification.</li>
<li>Employee navigates to company application portal and scans idemeum QR code. Login will need to be approved with biometrics.</li>
<li>Upon approval, information from mobile device is used to search for employee record in company HR system (HRMS) or idemeum cloud directory. Employee record can be searched by email address, phone number, or first name / last name.</li>
<li>If the employee record is found, employee is onboarded, assigned corporate email address, and granted access to all necessary company applications, including SaaS applications, VPN access, and more.</li>
</ul>
<h2 id="how-to-configure-onboarding" tabindex="-1"><a class="header-anchor" href="#how-to-configure-onboarding" aria-hidden="true">#</a> How to configure onboarding</h2>
<p>In the admin portal you can choose what information you want your new hires to verify before they can access company resources. You can choose email, phone number, first name / last name, or any combination of them.</p>
<p><img src="@source/images/onboarding-configuration.png" alt="Onboarding configuration"></p>
</div></template>


