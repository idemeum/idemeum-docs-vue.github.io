import{_ as r,r as a,o as l,c as d,a as e,b as t,d as o,w as s}from"./app.e99c4cff.js";const u="/assets/mfa-radius.4ff4aaff.png",c={},h=e("h1",{id:"passwordless-mfa-for-single-sign-on",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#passwordless-mfa-for-single-sign-on","aria-hidden":"true"},"#"),t(" Passwordless MFA for Single Sign-On")],-1),m=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),f=e("p",null,[e("img",{src:u,alt:"Passwordless for VPN"})],-1),_=e("div",{class:"embed-container"},[e("iframe",{src:"https://www.youtube.com/embed/Q0V94hbUOh0",frameborder:"0",allowfullscreen:""})],-1),p=e("h2",{id:"how-to-integrate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-integrate","aria-hidden":"true"},"#"),t(" How to integrate")],-1),g=e("p",null,"Integrating with idemeum is very simple, and we document everything in detail. Here are the steps you can take to integrate idemeum with your Radius clients.",-1),w=e("strong",null,"Step 1:",-1),v=e("strong",null,"Step 2:",-1),y=e("strong",null,"Step 3:",-1),b=e("strong",null,"Step 4:",-1),k={href:"https://integrations.idemeum.com",target:"_blank",rel:"noopener noreferrer"},x={class:"custom-container tip"},N=e("p",{class:"custom-container-title"},"Need help?",-1),R={href:"https://idemeum.com/contact/",target:"_blank",rel:"noopener noreferrer"},V=e("a",{href:"mailto:support@idemeum.com"},"support@idemeum.com",-1);function C(S,P){const n=a("RouterLink"),i=a("ExternalLinkIcon");return l(),d("div",null,[h,m,e("p",null,[t("idemeum offers fully featured "),o(n,{to:"/cloud-radius-overview.html"},{default:s(()=>[t("Cloud Radius")]),_:1}),t(" instance for each idemeum tenant. Therefore, network infrastructure such as VPN, Wi-Fi, or network devices can be easily integrated with Radius instance to perform passwordless access as well.")]),f,e("p",null,[t("When accessing resources integrated with idemeum "),o(n,{to:"/cloud-radius-overview.html"},{default:s(()=>[t("Cloud Radius")]),_:1}),t(", users do not need to enter passwords. All they need to do is to type an email, and idemeum mobile app will receive a login request notification.")]),_,p,g,e("ul",null,[e("li",null,[w,t(" Install idemeum app and "),o(n,{to:"/self-service-onboarding.html"},{default:s(()=>[t("create idemeum tenant")]),_:1}),t(" for your organization.")]),e("li",null,[v,t(" Configure user source for user onboarding and mapping between personal and corporate identity claims. Please, refer to "),o(n,{to:"/employee-onboarding.html"},{default:s(()=>[t("onboarding overview")]),_:1}),t(" and "),o(n,{to:"/integration-with-hr-system.html"},{default:s(()=>[t("user source")]),_:1}),t(" configuration manuals to understand why we need user source configured.")]),e("li",null,[y,t(" Set up idemeum Cloud Radius instance by following this "),o(n,{to:"/how-to-set-up-radius-integration.html"},{default:s(()=>[t("guide")]),_:1}),t(".")]),e("li",null,[b,t(" Navigate to "),e("a",k,[t("integrations portal"),o(i)]),t(" and find the integration guide for your VPN / Wi-Fi, or any other integration that you want to connect to Cloud Radius instance.")])]),e("div",x,[N,e("p",null,[t("Let us know if you need any help in "),e("a",R,[t("contact us"),o(i)]),t(" or email at "),V])])])}const I=r(c,[["render",C],["__file","passwordless-mfa-vpn-wifi.html.vue"]]);export{I as default};
