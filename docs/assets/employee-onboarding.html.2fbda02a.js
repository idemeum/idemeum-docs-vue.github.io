import{_ as d,o as l,c,a as e,b as a,w as n,d as o,e as i,r}from"./app.a0549267.js";var m="/assets/qr-scan.1ec75007.png",p="/assets/onboarding-flow.3f7fae34.jpeg",h="/assets/onboarding-configuration.7853be49.png";const u={},_=e("h1",{id:"employee-onboarding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#employee-onboarding","aria-hidden":"true"},"#"),o(" Employee onboarding \u{1F511}")],-1),y=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),o(" Overview")],-1),g=e("p",null,"Traditional MFA onboarding is not cutting it today - send credentials over email, ask the employee to reset password, install TOTP or push MFA app, perform separate enrollment for MFA, enable MFA for various resources and more.",-1),f=e("p",null,[o("When we sat down as a team at idemeum, we wanted to make enrollment process simple, intuitive, yet secure for organization of any size. And since we are building a passwordless platform, we "),e("strong",null,"did not want to rely on any passwords"),o(" for enrollment.")],-1),b={class:"custom-container tip"},w=e("p",{class:"custom-container-title"},"Onboarding summary",-1),v=o("We decided to leverage employees' personal identity claims, such as email address and phone number. This something everyone has, and typically we share this information with an organization when we get a job offer. We build the product around a simple idea - a person verifies personal identity claim in the mobile app, and during onboarding idemeum will map this personal identity claim to a corporate email using a "),x=o("user source"),k=o(" system such as HR or Payroll system. This way we are removing a need to use passwords, achieve high level of assurance, and automation."),R=i('<h2 id="employee-experience" tabindex="-1"><a class="header-anchor" href="#employee-experience" aria-hidden="true">#</a> Employee experience</h2><p>Let&#39;s take a look at what employees need to do when they onboard into an organization with passwordless access.</p><ol><li><strong>Install</strong> idemeum mobile app</li><li><strong>Verify</strong> personal identity</li><li><strong>Scan QR-code</strong> in the company portal</li></ol><h4 id="_1-install-idemeum-mobile-app" tabindex="-1"><a class="header-anchor" href="#_1-install-idemeum-mobile-app" aria-hidden="true">#</a> 1. Install idemeum mobile app</h4>',4),I=o("idemeum is available for both iOS and Android phones. Use the following links to download latest idemeum application from the app store - "),S={href:"https://apps.apple.com/us/app/idemeum/id1552180449",target:"_blank",rel:"noopener noreferrer"},T=o("IOS App Store"),H=o(" or "),O={href:"https://play.google.com/store/apps/details?id=com.idemeum.dvmi",target:"_blank",rel:"noopener noreferrer"},A=o("Android Play Store"),E=o("."),L=i('<h4 id="_2-verify-personal-identity" tabindex="-1"><a class="header-anchor" href="#_2-verify-personal-identity" aria-hidden="true">#</a> 2. Verify personal identity</h4><p>Right from the mobile app employee can verify personal identity information, such as phone number, personal email address, or government id.</p><p>Here is how verification is done:</p><table><thead><tr><th>Email address</th><th style="text-align:center;">Phone number</th><th style="text-align:right;">ID document</th></tr></thead><tbody><tr><td>One time code</td><td style="text-align:center;">SMS</td><td style="text-align:right;">Liveness detection</td></tr></tbody></table><p>If document verification is performed, users take a photo of document (driver&#39;s license or passport) and do a face scan to perform liveness detection. Then idemeum performs document validation and matches liveness detection scan with the photo on the document. If successful, document is verified and stored on the mobile device.</p><h4 id="_3-scan-login-qr-code" tabindex="-1"><a class="header-anchor" href="#_3-scan-login-qr-code" aria-hidden="true">#</a> 3. Scan login QR-code</h4><p>Once idemeum application is set up, users can navigate to a company idemeum portal (i.e. <code>company.idemeum.com</code>) and scan the login QR-code.</p><p><img src="'+m+'" alt="QR-code scan"></p>',8),q=o("This is when idemeum looks up an employee using a "),M=e("strong",null,"personal identity claim",-1),V=o(" and assigns a "),z=e("strong",null,"corporate email address",-1),N=o(". Typically an HR system can be used as a "),P=o("user source"),Q=o(", but idemeum also supports "),D=o("local user source"),F=o(" when admins can create manual personal to corporate claims mappings."),W=e("h2",{id:"deeper-look-into-how-it-works",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deeper-look-into-how-it-works","aria-hidden":"true"},"#"),o(" Deeper look into how it works")],-1),B=e("p",null,"Let's say an employee verifies a personal email address in idemeum app. This personal email address will be used to onboard an employee into an organization. What idemeum will need to do is to map this personal email address to a corporate email address assigned to this employee. This can be done in two ways:",-1),j=e("strong",null,"Manual mapping using",-1),C=o(),U=e("strong",null,"local user source",-1),Y=o(" - admins can manually create a user record in idemeum and map personal claim to company email address."),G=e("strong",null,"Automated mapping using",-1),J=o(),K=e("strong",null,"external user source",-1),X=o(" - idemeum can connect to an external user source, such as an HR system, or payroll provider, to search for the user by personal claim and convert that to a company email address."),Z=i('<p>Here is a quick diagram of how identity verification can work with HR system.</p><p><img src="'+p+'" alt="Onboarding with HR system"></p><ul><li>IT admin / HR team sends a new employee a welcome email that among other things invites employee to enroll into passwordless experience to access all company resources.</li><li>Employee downloads idemeum app and goes through a 2 min set up process: enable biometrics, verify email address, phone number, or ID document. Information required to verify identity is configurable by company admin. Some companies might choose to only require employee to verify phone number. Some companies might be more strict and require remote ID document verification.</li><li>Employee navigates to company application portal and scans idemeum QR code. Login will need to be approved with biometrics.</li><li>Upon approval, information from mobile device is used to search for employee record in company HR system (HRMS) or idemeum cloud directory. Employee record can be searched by email address, phone number, or first name / last name.</li><li>If the employee record is found, employee is onboarded, assigned corporate email address, and granted access to all necessary company applications, including SaaS applications, VPN access, and more.</li></ul><h2 id="how-to-configure-onboarding" tabindex="-1"><a class="header-anchor" href="#how-to-configure-onboarding" aria-hidden="true">#</a> How to configure onboarding</h2><p>In the admin portal you can choose what information you want your new hires to verify before they can access company resources. You can choose email, phone number, first name / last name, or any combination of them.</p><p><img src="'+h+'" alt="Onboarding configuration"></p>',6);function $(ee,oe){const t=r("RouterLink"),s=r("ExternalLinkIcon");return l(),c("div",null,[_,y,g,f,e("div",b,[w,e("p",null,[v,a(t,{to:"/integration-with-hr-system.html"},{default:n(()=>[x]),_:1}),k])]),R,e("p",null,[I,e("a",S,[T,a(s)]),H,e("a",O,[A,a(s)]),E]),L,e("p",null,[q,M,V,z,N,a(t,{to:"/integration-with-hr-system.html"},{default:n(()=>[P]),_:1}),Q,a(t,{to:"/integration-with-hr-system.html#local-user-source"},{default:n(()=>[D]),_:1}),F]),W,B,e("ol",null,[e("li",null,[j,C,a(t,{to:"/integration-with-hr-system.html#local-user-source"},{default:n(()=>[U]),_:1}),Y]),e("li",null,[G,J,a(t,{to:"/integration-with-hr-system.html#external-user-source"},{default:n(()=>[K]),_:1}),X])]),Z])}var te=d(u,[["render",$],["__file","employee-onboarding.html.vue"]]);export{te as default};
