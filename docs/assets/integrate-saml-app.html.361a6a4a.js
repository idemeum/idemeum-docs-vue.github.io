import{_ as c}from"./saml-setup.535573e3.js";import{_ as u,r as n,o as d,c as p,a as e,d as o,w as i,b as t,e as s}from"./app.2709a560.js";const m="/assets/catalog-app.472ba91f.png",g="/assets/saml-overview.bdf09f8b.png",h="/assets/add-custom-app.930b043c.png",f="/assets/custom-app-options.dbe206c9.png",_="/assets/bare-minimum.8cd13778.png",w={},y=e("h1",{id:"integrate-saml-applications",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#integrate-saml-applications","aria-hidden":"true"},"#"),t(" Integrate SAML applications")],-1),A={class:"table-of-contents"},v=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),S=e("p",null,"idemeum offers 2 simple ways to integrate SAML applications for one-click passwordless access.",-1),L=e("strong",null,"Pre-configured SAML integrations",-1),M=e("code",null,"Applications",-1),b={href:"https://integrations.idemeum.com/tag/saml/",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,[e("strong",null,"Custom SAML integrations"),t(" - if there is a SAML application that we have not pre-configured, you can always integrate it with general configuration profile.")],-1),x=s('<h2 id="saml-integration-set-up" tabindex="-1"><a class="header-anchor" href="#saml-integration-set-up" aria-hidden="true">#</a> SAML integration set up</h2><h3 id="pre-configured-saml-integrations" tabindex="-1"><a class="header-anchor" href="#pre-configured-saml-integrations" aria-hidden="true">#</a> Pre-configured SAML integrations</h3><ul><li>Access idemeum admin portal and navigate to <code>Applications</code> section</li><li>Click <code>Add app</code> and choose <code>Catalog app</code></li></ul><div class="custom-container tip"><p class="custom-container-title">How to navigate applications section</p><p>Every application that you set up will be shown in the <code>My applications</code> section. You can search application by name, or filter the application by type using the search bar and filter sections on the right.</p></div><p><img src="'+c+'" alt="SAML set up"></p><ul><li>Now you can choose among the SAML applications that idemeum team pre-configured. Click <code>Add app</code> for the application you want to set up</li></ul><p><img src="'+m+'" alt="Catalog app"></p>',7),C=e("li",null,[e("code",null,"General"),t(" - provides you with information about application")],-1),N=e("li",null,[e("code",null,"SAML"),t(" - this is where you will configure SAML integration")],-1),Y=e("code",null,"Provisioning",-1),I=s('<p><img src="'+g+'" alt="SAML overview"></p><ul><li>If you click on <code>Need help?</code> link you will be redirected to an integration guide for that specific application. We provide step by step instructions on how to set up SAML both in idemeum and target application.</li><li>We truly preconfigure SaaS applications on our side. Therefore often times you will need to enter minimal configuration parameters to setup SAML integration. You can always expand <code>Advanced options</code> and make changes as necessary, but when we certified and application we made sure all necessary configuration are done on our side.</li><li>Once you configure SAML application and click <code>Save</code> the application will shown <code>My applications</code> section. You can always go back and edit or delete application.</li></ul><h3 id="custom-saml-integrations" tabindex="-1"><a class="header-anchor" href="#custom-saml-integrations" aria-hidden="true">#</a> Custom SAML integrations</h3><ul><li>Navigate to idemeum admin portal</li><li>Access <code>Applications</code> -&gt; <code>Add app</code> -&gt; <code>Custom SAML app</code></li></ul><p><img src="'+h+'" alt="Add custom app"></p>',5),T=e("li",null,[t("To configure SAML in idemeum you will have 3 options, and you will need to rely on what integrating application requires you to do: "),e("ul",null,[e("li",null,"You can upload metadata link for target application"),e("li",null,"You can upload metadata file for target application"),e("li",null,"You can configure SAML integration manually")])],-1),B=e("p",null,[e("img",{src:f,alt:"Configure SAML custom app"})],-1),E=e("ul",null,[e("li",null,[t("If you decide to configure SAML manually you will at least need "),e("code",null,"Assertion Consumer Service URL"),t(" and "),e("code",null,"Audience URI"),t(". There might be other parameters that your application will present, and in idemeum you can expand advanced options to configure these additional values.")])],-1),P=e("p",null,[e("img",{src:_,alt:"Bare minimum configuration"})],-1);function R(V,O){const a=n("router-link"),r=n("ExternalLinkIcon"),l=n("RouterLink");return d(),p("div",null,[y,e("nav",A,[e("ul",null,[e("li",null,[o(a,{to:"#overview"},{default:i(()=>[t("Overview")]),_:1})]),e("li",null,[o(a,{to:"#saml-integration-set-up"},{default:i(()=>[t("SAML integration set up")]),_:1}),e("ul",null,[e("li",null,[o(a,{to:"#pre-configured-saml-integrations"},{default:i(()=>[t("Pre-configured SAML integrations")]),_:1})]),e("li",null,[o(a,{to:"#custom-saml-integrations"},{default:i(()=>[t("Custom SAML integrations")]),_:1})])])])])]),v,S,e("ol",null,[e("li",null,[L,t(" - for most common SaaS applications idemeum certifies and pre-configures the integrations. You can search for SAML integrations right from "),M,t(" section, and you will have to provide only a few parameters to set up an integration. Check our "),e("a",b,[t("integration catalog"),o(r)]),t(" to browse all SAML applications that we support.")]),k]),x,e("ul",null,[e("li",null,[t("You will be redirected to an app specific configuration section that consists of 3 parts: "),e("ul",null,[C,N,e("li",null,[Y,t(" - this is where you will configure "),o(l,{to:"/lifecycle-management.html"},{default:i(()=>[t("automated application provisioning")]),_:1})])])])]),I,e("ul",null,[e("li",null,[t("Now you can start configuring SAML integration. To configure SAML in the target application you will need to consult their documentation and you will need to use your "),o(l,{to:"/how-to-obtain-saml-metadata-for-idemeum.html"},{default:i(()=>[t("idemeum tenant metadata")]),_:1}),t(".")]),T]),B,E,P])}const q=u(w,[["render",R],["__file","integrate-saml-app.html.vue"]]);export{q as default};
