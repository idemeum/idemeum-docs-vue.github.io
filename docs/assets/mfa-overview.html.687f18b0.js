import{_ as r,r as i,o,c as n,a as s,b as e,d as a,e as d}from"./app.2709a560.js";const c={},l=s("h1",{id:"passwordless-mfa-overview",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#passwordless-mfa-overview","aria-hidden":"true"},"#"),e(" Passwordless MFA Overview")],-1),h=s("div",{class:"embed-container"},[s("iframe",{src:"https://www.youtube.com/embed/3JZDMJB1_JQ",frameborder:"0",allowfullscreen:""})],-1),p=s("h2",{id:"what-is-passwordless-authentication",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#what-is-passwordless-authentication","aria-hidden":"true"},"#"),e(" What is passwordless authentication?")],-1),u={href:"https://en.wikipedia.org/wiki/Passwordless_authentication",target:"_blank",rel:"noopener noreferrer"},m=s("strong",null,"balances usability with stronger authentication",-1),f={href:"https://fidoalliance.org/fido2/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://fidoalliance.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://fidoalliance.org/fido2/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://fidoalliance.org/fido2-2/fido2-web-authentication-webauthn/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://fidoalliance.org/specs/fido-v2.0-id-20180227/fido-client-to-authenticator-protocol-v2.0-id-20180227.html",target:"_blank",rel:"noopener noreferrer"},y=d('<h2 id="what-is-idemeum-passwordless-mfa" tabindex="-1"><a class="header-anchor" href="#what-is-idemeum-passwordless-mfa" aria-hidden="true">#</a> What is idemeum Passwordless MFA?</h2><p>idemeum is a mobile application that replaces shared secrets such as passwords, PINs, SMS codes and OTPs, with FIDO2 standards. Biometric sensors such as Apple Touch ID, Face ID, and their Android counterparts, can be used to securely access devices, applications, and infrastructure using public key cryptography. Logging into a company resource becomes as simple as canning a QR-code and approving login with biometrics.</p><p>At registration, idemeum securely generates a pair of cryptographic keys in addition to FIDO2 standards. The private key is stored on the user\u2019s mobile device using hardware-backed crypto storage, whereas the public key is registered with idemeum backend. When users scan login QR-code with idemeum mobile application, they are required to authenticate with multiple factors - biometrics and certificates.</p><h2 id="idemeum-benefits" tabindex="-1"><a class="header-anchor" href="#idemeum-benefits" aria-hidden="true">#</a> Idemeum benefits</h2><ol><li><strong>Reduce cyber risk by stopping credential attacks</strong> - attackers simply can\u2019t use passwords anymore - they don\u2019t exist. idemeum can protect against login credentials being stolen or leaked in credential stuffing, credential cracking, social engineering, and phishing attacks.</li><li><strong>Improve workforce experience and productivity</strong> - idemeum eliminates user friction - no more codes, magic links, hardware devices, and remembering passwords. idemeum offers a solution where strong security meets frictionless experience.</li><li><strong>Reduce help desk calls for password resets</strong> - users no longer have to meet complex password requirements, change them every 60 days, or contact the help desk to resolve password lockouts and reset issues.</li></ol>',5),k={class:"custom-container tip"},v=s("p",{class:"custom-container-title"},"MFA Solution Brief",-1),x={href:"https://idemeum.com/portfolio/passwordless-mfa-solution-brief/",target:"_blank",rel:"noopener noreferrer"};function I(F,P){const t=i("ExternalLinkIcon");return o(),n("div",null,[l,h,p,s("p",null,[s("a",u,[e("Passwordless authentication"),a(t)]),e(' is the term used to describe a group of identity verification methods that don\u2019t rely on passwords. Biometrics, security keys, and specialized mobile applications are all considered "passwordless" or "modern" authentication methods. idemeum is innovating toward a true passwordless future that '),m,e(". Passwordless gives users a frictionless login experience, while reducing administrative burden and overall security risks for the enterprise.")]),s("p",null,[e("Passwordless authentication ideally involves less user interaction during the login process than traditional forms of authentication. It uses public key cryptography, which authenticates the user with a pair of cryptographic keys \u2014 a private key that\u2019s a secret, and a public key that isn\u2019t \u2014 and it comes with a lexicon of new (or relatively new) acronyms and standards like "),s("a",f,[e("FIDO2"),a(t)]),e(" standard ("),s("a",w,[e("FIDO"),a(t)]),e(" stands for Fast Identity Online, and "),s("a",g,[e("FIDO2"),a(t)]),e(" is just an umbrella term for the combination of "),s("a",_,[e("WebAuthn"),a(t)]),e(" and Client to Authenticator Protocol ("),s("a",b,[e("CTAP"),a(t)]),e(")).")]),y,s("div",k,[v,s("p",null,[e("Download "),s("a",x,[e("Passwordless MFA solution brief"),a(t)]),e(" to learn more.")])])])}const D=r(c,[["render",I],["__file","mfa-overview.html.vue"]]);export{D as default};
