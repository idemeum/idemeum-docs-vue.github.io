<template><div><h1 id="single-sign-on-overview" tabindex="-1"><a class="header-anchor" href="#single-sign-on-overview" aria-hidden="true">#</a> Single Sign-On overview</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>idemeum offers fully-featured Single Sign-On identity provider. You can integrate most SaaS applications with idemeum using SAML protocol in order to offer your employees one-click access to all applications. When paired with <RouterLink to="/mfa-overview.html">Passwordless MFA</RouterLink>, idemeum offers true passwordless experience - employees access application catalog with <RouterLink to="/mfa-overview.html">Passwordless MFA</RouterLink> and then seamlessly launch any integrated application without typing any passwords or one time codes.</p>
<h2 id="supported-applications" tabindex="-1"><a class="header-anchor" href="#supported-applications" aria-hidden="true">#</a> Supported applications</h2>
<p>idemeum supports a number of SaaS applications for provisioning and Single Sign-On. We pre-configure applications so it is very easy to set up integration even for non-technical people. Moreover, we provide detailed instructions on how to integrate applications with idemeum over SAML.</p>
<p>Check out <a href="https://integrations.idemeum.com" target="_blank" rel="noopener noreferrer">integrations portal<ExternalLinkIcon/></a> to see what applications we support and navigate across detailed integration guides.</p>
<h2 id="how-to-configure-single-sign-on" tabindex="-1"><a class="header-anchor" href="#how-to-configure-single-sign-on" aria-hidden="true">#</a> How to configure Single Sign-On</h2>
<ul>
<li>Navigate to <code v-pre>Applications</code> -&gt; <code v-pre>Catalog</code> to choose the application you want to integrate using SAML. You can search for applications, and we also tag them to reflect supported capabilities.</li>
</ul>
<p><img src="@source/images/sso/catalog.png" alt="Application catalog"></p>
<ul>
<li>Now you can add SaaS application. Once you do you will be redirected to an app specific configuration section that consists of 3 sections: <code v-pre>General</code> - provides you information about applications, <code v-pre>SAML</code> - this is where you will configure SSO integration, and <code v-pre>Provisioning</code> - this is where you will configure application provisioning.</li>
</ul>
<p><img src="@source/images/sso/configuration.png" alt="Configuration"></p>
<ul>
<li>If you click on <code v-pre>Need help?</code> link you will be redirected to integration guide for that specific application. We provide step by step instructions on how to set up SAML both in idemeum and target application.</li>
<li>We truly preconfigure SaaS applications on our side. Therefore often times you will need to enter minimal configuration parameters to setup SAML integration. You can always expand Advanced options and make changes as necessary, but when we certified and application we made sure all necessary configuration are done on our side.</li>
</ul>
<p><img src="@source/images/sso/complete.png" alt="Complete"></p>
<ul>
<li>Once you configure SAML application and click <code v-pre>Save</code> the application will be moved from <code v-pre>Catalog</code> tab into <code v-pre>My applications</code> tab. You can always go back and edit or delete application.</li>
</ul>
</div></template>


