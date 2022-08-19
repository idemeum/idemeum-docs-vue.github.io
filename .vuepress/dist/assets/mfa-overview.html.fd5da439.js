import{_ as n,o as d,c,a as s,b as i,w as l,e as o,d as e,r}from"./app.61ac471a.js";const h={},m=o('<h1 id="passwordless-mfa-overview" tabindex="-1"><a class="header-anchor" href="#passwordless-mfa-overview" aria-hidden="true">#</a> Passwordless MFA overview \u{1F604}</h1><h2 id="what-is-idemeum-passwordless-mfa" tabindex="-1"><a class="header-anchor" href="#what-is-idemeum-passwordless-mfa" aria-hidden="true">#</a> What is idemeum Passwordless MFA?</h2><p>idemeum <strong>Passwordless Multi-Factor Authentication (MFA)</strong> is a mobile app that users install on iOS and Android devices. Once installed it becomes a <strong>secure biometric key</strong> to access all company resources, including SaaS applications, VPN, Wi-Fi, password vault and more.</p><h2 id="how-is-it-passwordless" tabindex="-1"><a class="header-anchor" href="#how-is-it-passwordless" aria-hidden="true">#</a> How is it passwordless?</h2>',4),u=e("Classic MFA experience requires employees to use several factors for authentication. For example, first an employee enters username and password, and then she retrieves "),p={href:"https://en.wikipedia.org/wiki/One-time_password",target:"_blank",rel:"noopener noreferrer"},f=e("one-time password (OTP)"),w=e(" from a mobile app and enters it as well to complete a login process."),v=o('<p>idemeum simplifies user experience and makes employee logins completely passwordless. When accessing a company resource, an employee sees a QR-code. Then she uses idemeum MFA app to scan the QR code and approve login with biometrics. That is it. The login experience becomes highly secure, yet very user friendly.</p><h2 id="how-is-it-multi-factor" tabindex="-1"><a class="header-anchor" href="#how-is-it-multi-factor" aria-hidden="true">#</a> How is it multi-factor?</h2><p>idemeum is highly secure as it uses the combination of 2 factors to authenticate users:</p><ul><li><strong>PKI certificates</strong> that are securely stored in hardware-backed storage on a mobile device. This is considered a <em>something you have</em> factor.</li><li>Biometrics that are requested using built-in mobile biometric sensors (i.e. Face ID scanner). This is considered a <em>something you are</em> factor.</li></ul>',4),y=e("You can learn more about security in our "),_=e("white paper"),g=e("."),b=o('<h2 id="how-is-it-decentralized" tabindex="-1"><a class="header-anchor" href="#how-is-it-decentralized" aria-hidden="true">#</a> How is it decentralized?</h2><p>When users install idemeum mobile application they verify personal identity claims, such as <em>email address</em>, <em>phone number</em> or <em>ID document</em>. We do not store any of users&#39; personal information in our cloud. idemeum offers a decentralized design with personal identity claims persisted only in the mobile application.</p><h2 id="how-to-use-idemeum-mfa-for-login" tabindex="-1"><a class="header-anchor" href="#how-to-use-idemeum-mfa-for-login" aria-hidden="true">#</a> How to use idemeum MFA for login?</h2><p>idemeum Passwordless MFA offers biometric based login across devices and application types. Your users can use idemeum to login to SaaS applications on desktop or to native / browser based applications on mobile. We offer truly cross-platform cross-device experience. idemeum offers various login flavors including <strong>QR-code login</strong>, <strong>login with push notification</strong>, or <strong>login with local biometrics</strong>.</p><h2 id="how-can-new-hires-onboard-with-idemeum-mfa" tabindex="-1"><a class="header-anchor" href="#how-can-new-hires-onboard-with-idemeum-mfa" aria-hidden="true">#</a> How can new hires onboard with idemeum MFA?</h2><p>idemeum Passwordless MFA is very intuitive, as it offers a self-service experience for onboarding as well as recovery and involves 3 simple steps:</p><ol><li>Install idemeum Passwordless MFA</li><li>Verify identity using personal information</li><li>Scan QR-code at the company portal to access all resources</li></ol><h2 id="can-i-use-idemeum-with-my-sso-provider" tabindex="-1"><a class="header-anchor" href="#can-i-use-idemeum-with-my-sso-provider" aria-hidden="true">#</a> Can I use idemeum with my SSO provider?</h2>',8),x=e("If you already have an Identity Provider (IdP), such as Azure AD, Okta, or OneLogin, you can still use idemeum Passwordless MFA. It integrates with your identity Provider in minutes and makes your existing infrastructure passwordless. You can learn more about available integrations in our "),k={href:"https://integrations.idemeum.com/tag/identity-providers/",target:"_blank",rel:"noopener noreferrer"},A=e("integrations portal"),F=e("."),P=s("h2",{id:"what-happens-if-i-lose-my-device",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#what-happens-if-i-lose-my-device","aria-hidden":"true"},"#"),e(" What happens if I lose my device?")],-1),I=s("p",null,[e("We provide several simple and secure recovery methods. With "),s("strong",null,"self-service recovery"),e(" users can self-recover using recovery QR-code that they store offline or in Cloud storage. With "),s("strong",null,"admin controlled recovery"),e(" users can request recovery from new device, and admins can approve the recovery request from admin portal.")],-1);function M(W,S){const a=r("ExternalLinkIcon"),t=r("RouterLink");return d(),c("div",null,[m,s("p",null,[u,s("a",p,[f,i(a)]),w]),v,s("p",null,[y,i(t,{to:"/security-whitepaper.html"},{default:l(()=>[_]),_:1}),g]),b,s("p",null,[x,s("a",k,[A,i(a)]),F]),P,I])}var R=n(h,[["render",M],["__file","mfa-overview.html.vue"]]);export{R as default};
