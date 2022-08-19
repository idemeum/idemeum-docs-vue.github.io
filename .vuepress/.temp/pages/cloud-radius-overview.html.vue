<template><div><h1 id="cloud-radius-overview" tabindex="-1"><a class="header-anchor" href="#cloud-radius-overview" aria-hidden="true">#</a> Cloud Radius overview</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>idemeum offers Cloud Hosted Radius service to help you protect your network and wireless infrastructure with passwordless access. Integrating with idemeum cloud Radius offers a new horizon of use cases - VPN control, MFA enforcement, VLAN segmentation, group based access control, no more shared passwords for WiFi and more.</p>
<p>There is nothing to set up for you - no servers, no configuration, and no service or maintenance effort. We take care of that. Simply point your VPN and WiFi to our idemeum Cloud Radius and offer employee access to infrastructure protected by idemeum <RouterLink to="/mfa-overview.html">Passwordless MFA</RouterLink>.</p>
<p>With idemeum you can offer employees unified and secure login experience. Whether they access SaaS applications, SSO portal, password applications, VPN, or WiFi, they can simply login with idemeum mobile app and passwordless MFA.</p>
<div class='embed-container'><iframe src='https://www.youtube.com/embed/Q0V94hbUOh0' frameborder='0' allowfullscreen></iframe></div>
<h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How it works</h2>
<p>idemeum maintains cloud hosted, redundant, and secure Radius infrastructure that can be leveraged by each idemeum customer.</p>
<p><img src="@source/images/radius/radius-overview.png" alt="Radius overview"></p>
<p>You connect your infrastructure to a Cloud Radius server, and the communication is protected by complex shared secrets dedicated for your tenant. When your employees access VPN or WiFi they receive a familiar push notification to perform a passwordless multi-factor authentication. This way every connection is secure and offers seamless user experience for any resource that employees access in your organization.</p>
<h2 id="what-is-supported" tabindex="-1"><a class="header-anchor" href="#what-is-supported" aria-hidden="true">#</a> What is supported?</h2>
<ul>
<li><strong>Addresses</strong>: only IPv4 addresses are supported. You can configure multiple IP addresses or CIDR block from which connections to Radius server will be allowed.</li>
<li><strong>Port supported</strong>: 1812</li>
<li><strong>Supported protocols</strong>: EAP-TTLS, EAP-TLS, EAP-PEAP/MSCHAP2</li>
<li><strong>Encryption mode</strong>: WPA2 Enterprise</li>
</ul>
</div></template>
