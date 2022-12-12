import{_ as i,r as o,o as n,c as r,a as e,b as s,e as t,d as l}from"./app.c4cb680b.js";const d="/assets/metadata.518501fe.png",c={},m=e("h1",{id:"how-to-obtain-saml-metadata-for-idemeum",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-obtain-saml-metadata-for-idemeum","aria-hidden":"true"},"#"),t(" How to obtain SAML metadata for idemeum")],-1),u=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),h={href:"https://en.wikipedia.org/wiki/SAML_metadata",target:"_blank",rel:"noopener noreferrer"},p=t("SAML metadata"),f=t(" is the data that describes the information needed to communicate between your SaaS application and idemeum in order to enable Single Sign-On. Based on SAML terminology SaaS application is called "),g=e("strong",null,"Service Provider (SP)",-1),_=t(" and idemeum will be "),S=e("strong",null,"Identity Provider (IDP)",-1),y=t("."),b=l('<p>Typically you will be asked to provide idemeum SAML metadata when you are configuring SaaS application to connect to idemeum using SAML.</p><h2 id="idemeum-saml-metadata" tabindex="-1"><a class="header-anchor" href="#idemeum-saml-metadata" aria-hidden="true">#</a> idemeum SAML metadata</h2><p>To access SAML metadata for your tenant:</p><ul><li>Navigate to your idemeum admin portal at <code>https://[your domain].idemeum.com/adminportal</code></li><li>Click <code>Applications</code> in the left menu</li><li>Click <code>Metadata</code> in the top menu</li></ul><p><img src="'+d+'" alt="Metadata"></p><p>The page will include all SAML configuration parameters that you will need to connect SaaS applications.</p><ul><li><strong>Tenant Metadata URL</strong> - sometimes you can just paste the metadata URL and Service Provider will be able to parse all necessary information. <ul><li>What is more, you can click on the arrow next to the form and download metadata XML file.</li></ul></li><li><strong>Identity Provider Entity ID</strong> - this is the URI that identifies your idemeum tenant in SAML exchange</li><li><strong>Identity Provider SSO URL</strong> - this is the URL that SaaS application will use to send SAML requests to your idemeum tenant</li><li><strong>Public X509 certificate</strong> - public certificate of your idemeum tenant that applications will use to verify SAML assertions</li><li><strong>Public X509 certificate in PEM</strong> - PEM formatted certificate as some SaaS applications require certificate to be uploaded in this format. <ul><li>You can click on the arrow next to the form and download public certificate in PEM format.</li></ul></li><li><strong>Algorithm</strong> - you can choose what algorithm to use to generate hash / fingerprint for your certificate. We support SHA1 and SHA256. Some applications prefer to use certificate fingerprint instead of actual certificate value.</li><li><strong>Fingerprint</strong> - generated fingerprint based on chosen algorithm</li><li><strong>Formatted fingerprint</strong> - fingerprint formatted based on ASN.1 binary (DER) form.</li></ul><p>You can conveniently copy the values right from the UI.</p>',8);function w(v,M){const a=o("ExternalLinkIcon");return n(),r("div",null,[m,u,e("p",null,[e("a",h,[p,s(a)]),f,g,_,S,y]),b])}const A=i(c,[["render",w],["__file","how-to-obtain-saml-metadata-for-idemeum.html.vue"]]);export{A as default};
