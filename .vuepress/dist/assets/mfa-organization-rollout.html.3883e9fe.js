import{_ as l,o as d,c as u,a as o,b as t,w as s,d as e,e as r,r as i}from"./app.61ac471a.js";const p={},c=o("h1",{id:"mfa-organization-rollout",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#mfa-organization-rollout","aria-hidden":"true"},"#"),e(" MFA organization rollout \u{1F3E2}")],-1),m=o("h2",{id:"overview",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),e(" Overview")],-1),h=e("idemeum Passwordless MFA can be integrated with various parts of your identity infrastructure, including "),_=e("SSO"),y=e(", "),w=e("VPN"),g=e(", "),f=e("desktops"),v=e(", "),b=e("vault"),k=e(", and more. You can use idemeum as a one stop shop solution for managing workforce and privileged identity, or can seamlessly roll out idemeum on top of your existing infrastructure as a passwordless MFA."),x=r('<p>Here are the three steps you will need to do to roll our Passwordless MFA for your existing employees:</p><ol><li><strong>Invite your employees</strong> to enroll into passwordless experience</li><li><strong>Integrate idemeum</strong> with your infrastructure</li><li><strong>Enable passwordless authentication</strong> across the org</li></ol><h2 id="_1-invite-your-employees" tabindex="-1"><a class="header-anchor" href="#_1-invite-your-employees" aria-hidden="true">#</a> 1. Invite your employees</h2><p>As a first step you will need to send all existing employees an email inviting them to enroll in idemeum&#39;s passwordless experience. At this point employees are still accessing applications with username and password, but they can now set up passwordless MFA and get enrolled. You will simply use an email to ask employees to enroll, and you can track the progress of how many users enrolled with idemeum.</p><p>Example of enrollment email is shown below.</p><div class="custom-container tip"><p class="custom-container-title">Email template</p><p>\u{1F44B} Welcome to passwordless experience!</p><p>Acme is using idemeum, a new sign-in experience for you to simply and securely login into corporate resources without passwords.</p><p><strong>STEP 1 - install idemeum app</strong></p><p>Download and install the idemeum mobile app and follow the in-app setup instructions. Make sure you verify your phone number and personal email address.</p><p><u><em>App store link</em></u></p><p><strong>STEP 2 - enroll into passwordless experience</strong></p><p>Navigate to the following <u><em>link</em></u>. Once you see the QR-code, open the idemeum mobile app, click login, and scan the QR code. Upon successful enrollment you will be shown your corporate address.</p><p><u><em>Enrollment link</em></u></p><p>Once the enrollment is complete, you are done. We will send further instructions in the following emails.</p><hr><p>Questions? Contact support team at support@company.com</p></div><h3 id="enrollment-link" tabindex="-1"><a class="header-anchor" href="#enrollment-link" aria-hidden="true">#</a> Enrollment link</h3>',7),A=e("When employees navigate to enrollment link and scan the QR-code with idemeum mobile app, we try to "),E=e("onboard user"),P=e(" using their personal claim using the "),S=e("user source"),F=e(" that is configured in idemeum. If everything is configured correctly and onboarding is successful, employee will be shown the corporate email address."),I=o("div",{class:"custom-container warning"},[o("p",{class:"custom-container-title"},"Enrollment link"),o("p",null,[e("For the enrollment link we offer a URL that employees can use to self-enroll. The link is created by adding "),o("code",null,"/enroll"),e(" to your company's idemeum tenant name. For instance "),o("code",null,"https://acme.idemeum.com/enroll"),e(".")])],-1),M=o("h2",{id:"_2-integrate-idemeum",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_2-integrate-idemeum","aria-hidden":"true"},"#"),e(" 2. Integrate idemeum")],-1),O=e("As a second step you will need to integrate idemeum with your existing infrastructure. Check out our "),N={href:"https://integrations.idemeum.com",target:"_blank",rel:"noopener noreferrer"},R=e("integrations portal"),T=e(" to explore various integrations that we support today."),V=r('<p>Typically you would connect idemeum to:</p><ul><li>Your existing SAML SSO Identity Provider to allow users access SaaS apps with passwordless MFA</li><li>Virtual Private Network (VPN)</li><li>Networking / Wi-Fi infrastructure</li><li>HR / Payroll system or any other source if you want completely automate passwordless onboarding</li></ul><p>We have detailed integration guides posted in our integration portal. If you need an integration that we do not currently support, please reach out to <a href="MAILTO:SUPPORT@IDEMEUM.COM">support@idemeum.com</a>.</p><h2 id="_3-enable-passwordless-experience" tabindex="-1"><a class="header-anchor" href="#_3-enable-passwordless-experience" aria-hidden="true">#</a> 3. Enable passwordless experience</h2><p>Once your employees are enrolled, and you have idemeum integrated with your infrastructure, you can turn off password-based login for your employees. That will depend on your specific integration:</p><ul><li>For Okta you will enable routing rules to use idemeum for all SaaS applications access</li><li>For Azure you will need to enable 3rd party IDP federation using PowerShell</li><li>For VPN you will turn the Radius integration with idemeum</li><li>and more</li></ul>',6);function L(z,C){const n=i("RouterLink"),a=i("ExternalLinkIcon");return d(),u("div",null,[c,m,o("p",null,[h,t(n,{to:"/passwordless-mfa-sso.html"},{default:s(()=>[_]),_:1}),y,t(n,{to:"/passwordless-mfa-vpn-wifi.html"},{default:s(()=>[w]),_:1}),g,t(n,{to:"/passwordless-mfa-desktop.html"},{default:s(()=>[f]),_:1}),v,t(n,{to:"/passwordless-mfa-vault.html"},{default:s(()=>[b]),_:1}),k]),x,o("p",null,[A,t(n,{to:"/employee-onboarding.html"},{default:s(()=>[E]),_:1}),P,t(n,{to:"/integration-with-hr-system.html"},{default:s(()=>[S]),_:1}),F]),I,M,o("p",null,[O,o("a",N,[R,t(a)]),T]),V])}var Q=l(p,[["render",L],["__file","mfa-organization-rollout.html.vue"]]);export{Q as default};
