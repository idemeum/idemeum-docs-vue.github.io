<template><div><h1 id="employee-onboarding" tabindex="-1"><a class="header-anchor" href="#employee-onboarding" aria-hidden="true">#</a> Employee onboarding</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>Traditional MFA onboarding is not cutting it today - send credentials over email, ask the employee to reset password, install TOTP or push MFA app, perform separate enrollment for MFA, enable MFA for various resources and more.</p>
<p>idemeum solves the problem of onboarding and makes it simple and completely passwordless. It takes 3 simple steps for an employee to get going with access to everything they need.</p>
<div class="custom-container tip"><p class="custom-container-title">Onboarding steps</p>
<ol>
<li><strong>Install</strong> idemeum mobile app</li>
<li><strong>Verify</strong> identity</li>
<li><strong>Scan QR-code</strong> in the company portal</li>
</ol>
</div>
<h2 id="_1-install-idemeum-app" tabindex="-1"><a class="header-anchor" href="#_1-install-idemeum-app" aria-hidden="true">#</a> 1. Install idemeum app</h2>
<p>idemeum is available for both iOS and Android phones. Use the following links to download latest idemeum application from the app store - <a href="https://apps.apple.com/us/app/idemeum/id1552180449" target="_blank" rel="noopener noreferrer">IOS App Store<ExternalLinkIcon/></a> or <a href="https://play.google.com/store/apps/details?id=com.idemeum.dvmi" target="_blank" rel="noopener noreferrer">Android Play Store<ExternalLinkIcon/></a>.</p>
<h2 id="_2-verify-identity" tabindex="-1"><a class="header-anchor" href="#_2-verify-identity" aria-hidden="true">#</a> 2. Verify identity</h2>
<p>Before you can access any company resources, you need to prove your identity, meaning you will need to verify your email address, phone number, or ID document. idemeum offers built-in identity verification right from the mobile app, and it removes the need to use passwords.</p>
<div class="custom-container warning"><p class="custom-container-title">Verify personal identity claims</p>
<p>To make onboarding completely passwordless you need to verify your personal claims, i.e personal email address or personal phone number. When you scan the QR code this information will be automatically mapped to your corporate email address.</p>
</div>
<p>Here is the how each of the claims will be verified:</p>
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
<h2 id="_3-scan-login-qr-code" tabindex="-1"><a class="header-anchor" href="#_3-scan-login-qr-code" aria-hidden="true">#</a> 3. Scan login QR-code</h2>
<p>Once idemeum application is set up, users can navigate to a company idemeum portal (i.e. <code v-pre>company.idemeum.com</code>) and scan the login QR-code.</p>
<p><img src="@source/images/qr-scan.png" alt="QR-code scan"></p>
<p>Here is what happens behind the scenes. Let's say an employee verifies a personal email address in idemeum app. This personal email address will be used to onboard an employee into an organization. What idemeum will need to do is to map this personal email address to a corporate email address assigned to this employee.</p>
</div></template>
