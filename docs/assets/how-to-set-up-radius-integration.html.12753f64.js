import{_ as a,o as r,c,a as e,b as o,w as u,d as t,e as d,r as s}from"./app.7701c126.js";var l="/idemeum-docs-vue.github.io/assets/choose-radius-app.54dcce76.png",h="/idemeum-docs-vue.github.io/assets/radius-config.df50333b.png";const p={},_=e("h1",{id:"how-to-set-up-radius-integration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-set-up-radius-integration","aria-hidden":"true"},"#"),t(" How to set up Radius integration")],-1),m=e("h2",{id:"configure-idemeum",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configure-idemeum","aria-hidden":"true"},"#"),t(" Configure idemeum")],-1),g=e("ul",null,[e("li",null,[t("Navigate to your idemeum portal and choose "),e("code",null,"Applications"),t(" section")]),e("li",null,"Now you can choose the filter on the right to search for Radius based applications"),e("li",null,"Choose the application that you want to set up with Radius, i.e. Meraki AnyConnect VPN")],-1),f={class:"custom-container tip"},w=e("p",{class:"custom-container-title"},"Request an integration",-1),y=t("If the application is missing for your specific infrastructure product, "),R={href:"https://docs.idemeum.com/contact/",target:"_blank",rel:"noopener noreferrer"},v=t("contact us"),b=t(", and we will add the application right away."),k=d('<p><img src="'+l+'" alt="Choose Radius app"></p><ul><li>You will need to specify IP addresses of clients that will communicate with idemeum Radius server. You can specify specific IP address (i.e <code>8.8.8.8</code>) or a CIDR block (i.e. <code>8.8.8.0/24</code>). By clicking a plus icon you can add multiple IP addresses or blocks.</li><li>Generate secure secret that will be used for communication between clients and idemeum Radius server.</li><li>Click <code>Save</code></li></ul><p><img src="'+h+'" alt="Radius configuration"></p><div class="custom-container warning"><p class="custom-container-title">How entitlement works</p><p>If you are using an MFA license, Radius application will be automatically entitled to all users. However, if you are using Single Sign-On license you will need to manually entitle Radius application to users or user groups.</p></div><h2 id="configure-your-infrastructure" tabindex="-1"><a class="header-anchor" href="#configure-your-infrastructure" aria-hidden="true">#</a> Configure your infrastructure</h2>',5),I=t("Setting up integration on your side will be dependent on the product you are using. We document all currently supported integrations on our "),x={href:"https://integrations.idemeum.com/",target:"_blank",rel:"noopener noreferrer"},C=t("integrations portal"),N=t("."),P=e("p",null,"But typically you will need:",-1),S=e("ul",null,[e("li",null,[e("strong",null,"Shared secret"),t(" that you generated when configuring Radius app in idemeum")]),e("li",null,[e("strong",null,"Radius IP address"),t(" so clients can reach it.")])],-1),B={class:"custom-container tip"},V=e("p",{class:"custom-container-title"},"Radius IP addresses",-1),L=t("You can see idemeum Radius IP addresses "),A=t("here"),E=t(".");function H(Y,M){const i=s("ExternalLinkIcon"),n=s("RouterLink");return r(),c("div",null,[_,m,g,e("div",f,[w,e("p",null,[y,e("a",R,[v,o(i)]),b])]),k,e("p",null,[I,e("a",x,[C,o(i)]),N]),P,S,e("div",B,[V,e("p",null,[L,o(n,{to:"/cloud-radius-ip-address.html"},{default:u(()=>[A]),_:1}),E])])])}var q=a(p,[["render",H],["__file","how-to-set-up-radius-integration.html.vue"]]);export{q as default};
