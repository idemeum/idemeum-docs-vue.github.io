<template><div><h1 id="passwordless-mfa-use-cases" tabindex="-1"><a class="header-anchor" href="#passwordless-mfa-use-cases" aria-hidden="true">#</a> Passwordless MFA use cases</h1>
<p>The reason we call our Passwordless MFA universal is because it can integrate with pretty much any corporate resource. In this guide we will take a look at the use cases that idemeum Passwordless MFA enables.</p>
<h2 id="_1-single-sign-on-web-apps" tabindex="-1"><a class="header-anchor" href="#_1-single-sign-on-web-apps" aria-hidden="true">#</a> 1. Single Sign-On web apps</h2>
<p>idemeum can make employee login into any Single Sign-On SaaS application passwordless. For example, when employees access Slack, Office 365, or Google Workspace they will not need to enter any passwords. Instead, they will be able to login with mobile biometrics.</p>
<p><img src="@source/images/mfa-sso.png" alt="Passwordless for Web apps"></p>
<div class="custom-container tip"><p class="custom-container-title">Integration options</p>
<p>idemeum can integrate with:</p>
<ol>
<li>Your existing Single Sign-On provider, such as Okta, Azure Active Directory, etc.</li>
<li>Or provide its own Single Sign-On capabilities, as idemeum offers fully featured SAML Identity Provider.</li>
</ol>
</div>
<p>In case of existing Single Sign-On users access Okta for example, and instead of logging in with username and password, they are redirected to idemeum for authentication. Users take mobile app, scan login QR-code, approve with biometrics and can immediately access any Okta application.</p>
<h2 id="_2-vpn-and-wi-fi" tabindex="-1"><a class="header-anchor" href="#_2-vpn-and-wi-fi" aria-hidden="true">#</a> 2. VPN and Wi-Fi</h2>
<p>idemeum offers fully featured Cloud Radius instance for each idemeum tenant. Therefore, network infrastructure such as VPN, Wi-Fi, or network devices can be easily integrated with Radius instance to perform passwordless access as well.</p>
<p><img src="@source/images/mfa-radius.png" alt="Passwordless for VPN"></p>
<p>When accessing resources integrated with idemeum Cloud Radius, users do not need to enter passwords. All they need to do is to type an email, and idemeum mobile app will receive a login request notification.</p>
<h2 id="_3-password-vault" tabindex="-1"><a class="header-anchor" href="#_3-password-vault" aria-hidden="true">#</a> 3. Password vault</h2>
<p>Typically accessing a password manager / password vault requires memorizing and typing a master password, which is used to generate keys to unlock the vault. idemeum transforms this process and completely eliminates the need to have a master password. Instead, idemeum allows to access credentials vault with biometrics and Passwordless MFA instead.</p>
<p><img src="@source/images/mfa-vault.png" alt="Passwordless for credentials vault"></p>
<h2 id="_4-desktops" tabindex="-1"><a class="header-anchor" href="#_4-desktops" aria-hidden="true">#</a> 4. Desktops</h2>
<p>idemeum also offers a desktop integration to allow user login into desktops without passwords leveraging Passwordless MFA. As a first step, users install idemeum desktop application that will register as a credential provider. Once idemeum mobile app is paired with desktop, users are able to use mobile biometrics to login into desktop computers.</p>
<p><img src="@source/images/mfa-desktop.png" alt="Passwordless for desktops"></p>
<h2 id="_5-infrastructure" tabindex="-1"><a class="header-anchor" href="#_5-infrastructure" aria-hidden="true">#</a> 5. Infrastructure</h2>
<p>What is more idemeum offers a proxy agent to connect to your infrastructure asserts without passwords - on-premises applications, SSH servers, RDP workstations, and databases. When proxy agent is installed, no ports need to be exposed in order to reach the resource, as proxy agent is utilizing the outbound channel to connect to idemeum cloud.</p>
<p><img src="@source/images/mfa-infra.png" alt="Passwordless for desktops"></p>
</div></template>
