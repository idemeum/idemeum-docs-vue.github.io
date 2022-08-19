<template><div><h1 id="how-to-obtain-saml-metadata-for-idemeum" tabindex="-1"><a class="header-anchor" href="#how-to-obtain-saml-metadata-for-idemeum" aria-hidden="true">#</a> How to obtain SAML metadata for idemeum</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p><a href="https://en.wikipedia.org/wiki/SAML_metadata" target="_blank" rel="noopener noreferrer">SAML metadata<ExternalLinkIcon/></a> is the data that describes the information needed to communicate between your SaaS application and idemeum in order to enable Single Sign-On. Based on SAML terminology SaaS application is called <strong>Service Provider (SP)</strong> and idemeum will be <strong>Identity Provider (IDP)</strong>.</p>
<p>Typically you will be asked to provide idemeum SAML metadata when you are configuring SaaS application to connect to idemeum using SAML.</p>
<h2 id="idemeum-saml-metadata" tabindex="-1"><a class="header-anchor" href="#idemeum-saml-metadata" aria-hidden="true">#</a> idemeum SAML metadata</h2>
<p>To access SAML metadata for your tenant:</p>
<ul>
<li>Navigate to your idemeum admin portal at <code v-pre>https://[your domain].idemeum.com/adminportal</code></li>
<li>Click <code v-pre>Applications</code> in the left menu</li>
<li>Click <code v-pre>Metadata</code> in the top menu</li>
</ul>
<p><img src="@source/images/sso/metadata.png" alt="Metadata"></p>
<p>The page will include all SAML configuration parameters that you will need to connect SaaS applications.</p>
<ul>
<li><strong>Tenant Metadata URL</strong> - sometimes you can just paste the metadata URL and Service Provider will be able to parse all necessary information.
<ul>
<li>What is more, you can click on the arrow next to the form and download metadata XML file.</li>
</ul>
</li>
<li><strong>Identity Provider Entity ID</strong> - this is the URI that identifies your idemeum tenant in SAML exchange</li>
<li><strong>Identity Provider SSO URL</strong> - this is the URL that SaaS application will use to send SAML requests to your idemeum tenant</li>
<li><strong>Public X509 certificate</strong> - public certificate of your idemeum tenant that applications will use to verify SAML assertions</li>
<li><strong>Public X509 certificate in PEM</strong> - PEM formatted certificate as some SaaS applications require certificate to be uploaded in this format.
<ul>
<li>You can click on the arrow next to the form and download public certificate in PEM format.</li>
</ul>
</li>
<li><strong>Algorithm</strong> - you can choose what algorithm to use to generate hash / fingerprint for your certificate. We support SHA1 and SHA256. Some applications prefer to use certificate fingerprint instead of actual certificate value.</li>
<li><strong>Fingerprint</strong> - generated fingerprint based on chosen algorithm</li>
<li><strong>Formatted fingerprint</strong> - fingerprint formatted based on ASN.1 binary (DER) form.</li>
</ul>
<p>You can conveniently copy the values right from the UI.</p>
</div></template>
