<template><div><h1 id="how-to-set-up-radius-integration" tabindex="-1"><a class="header-anchor" href="#how-to-set-up-radius-integration" aria-hidden="true">#</a> How to set up Radius integration</h1>
<h2 id="configure-idemeum" tabindex="-1"><a class="header-anchor" href="#configure-idemeum" aria-hidden="true">#</a> Configure idemeum</h2>
<ul>
<li>Navigate to your idemeum portal and choose <code v-pre>Applications</code> section</li>
<li>Now you can choose the filter on the right to search for Radius based applications</li>
<li>Choose the application that you want to set up with Radius, i.e. Meraki AnyConnect VPN</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Request an integration</p>
<p>If the application is missing for your specific infrastructure product, <a href="https://docs.idemeum.com/contact/" target="_blank" rel="noopener noreferrer">contact us<ExternalLinkIcon/></a>, and we will add the application right away.</p>
</div>
<p><img src="@source/images/radius/choose-radius-app.png" alt="Choose Radius app"></p>
<ul>
<li>You will need to specify IP addresses of clients that will communicate with idemeum Radius server. You can specify specific IP address (i.e <code v-pre>8.8.8.8</code>) or a CIDR block (i.e. <code v-pre>8.8.8.0/24</code>). By clicking a plus icon you can add multiple IP addresses or blocks.</li>
<li>Generate secure secret that will be used for communication between clients and idemeum Radius server.</li>
<li>Click <code v-pre>Save</code></li>
</ul>
<p><img src="@source/images/radius/radius-config.png" alt="Radius configuration"></p>
<div class="custom-container warning"><p class="custom-container-title">How entitlement works</p>
<p>If you are using an MFA license, Radius application will be automatically entitled to all users. However, if you are using Single Sign-On license you will need to manually entitle Radius application to users or user groups.</p>
</div>
<h2 id="configure-your-infrastructure" tabindex="-1"><a class="header-anchor" href="#configure-your-infrastructure" aria-hidden="true">#</a> Configure your infrastructure</h2>
<p>Setting up integration on your side will be dependent on the product you are using. We document all currently supported integrations on our <a href="https://integrations.idemeum.com/" target="_blank" rel="noopener noreferrer">integrations portal<ExternalLinkIcon/></a>.</p>
<p>But typically you will need:</p>
<ul>
<li><strong>Shared secret</strong> that you generated when configuring Radius app in idemeum</li>
<li><strong>Radius IP address</strong> so clients can reach it.</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">Radius IP addresses</p>
<p>You can see idemeum Radius IP addresses <RouterLink to="/cloud-radius-ip-address.html">here</RouterLink>.</p>
</div>
</div></template>


