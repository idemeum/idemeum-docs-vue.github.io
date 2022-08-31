<template><div><h1 id="add-custom-saml-app" tabindex="-1"><a class="header-anchor" href="#add-custom-saml-app" aria-hidden="true">#</a> Add custom SAML app 📌</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>idemeum certifies and deeply pre-configures SAML applications. For most of the applications we support, there is very little information that needs to be configured. Check our <a href="https://integrations.idemeum.com" target="_blank" rel="noopener noreferrer">integration catalog<ExternalLinkIcon/></a> to browse all SAML applications that we support.</p>
<p>If there is a SAML application that we do not support, you can always add it using Custom SAML functionality.</p>
<h2 id="how-to-configure-custom-saml-app" tabindex="-1"><a class="header-anchor" href="#how-to-configure-custom-saml-app" aria-hidden="true">#</a> How to configure custom SAML app</h2>
<ul>
<li>Navigate to idemeum admin portal</li>
<li>Access <code v-pre>Applications</code> -&gt; <code v-pre>Add application</code> -&gt; <code v-pre>Add custom SAML app</code></li>
</ul>
<p><img src="@source/images/custom-saml/add-app.png" alt="Add app"></p>
<ul>
<li>Now you can start configuring SAML integration. To configure SAML in the target application you will need to consult their documentation and you will need to use your <RouterLink to="/how-to-obtain-saml-metadata-for-idemeum.html">idemeum tenant metadata</RouterLink>.</li>
<li>To configure SAML in idemeum you will have 3 options, and you will need to rely on what integrating application requires you to do:
<ul>
<li>You can upload metadata link for target application</li>
<li>You can upload metadata file for target application</li>
<li>You can configure SAML integration manually</li>
</ul>
</li>
</ul>
<p><img src="@source/images/custom-saml/configure-app.png" alt="Configure app"></p>
<ul>
<li>If you decide to configure SAML manually you will at least need <code v-pre>Assertion Consumer Service URL</code> and <code v-pre>Audience URI</code>. There might be other parameters that your application will present, and in idemeum you can expand advanced options to configure these additional values.</li>
</ul>
<p><img src="@source/images/custom-saml/manual.png" alt="Manul app"></p>
</div></template>


