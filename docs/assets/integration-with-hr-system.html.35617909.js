import{_ as c,r as a,o as u,c as d,a as e,d as t,w as r,b as o,e as i}from"./app.e99c4cff.js";const m="/assets/local-source.4e0d9ce1.png",h="/assets/user-source.f885efd6.png",p={},f=e("h1",{id:"user-source-integration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#user-source-integration","aria-hidden":"true"},"#"),o(" User source integration")],-1),g={class:"table-of-contents"},_=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),o(" Overview")],-1),y=e("p",null,"With idemeum you have several options for how to manage your users. You can manage users locally with idemeum cloud directory, or you can rely on external user source such as HR or Payroll system.",-1),w={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"User source options",-1),b=e("p",null,"Today we support the following options for user source:",-1),x=e("strong",null,"Local user source",-1),k=e("li",null,[e("strong",null,"External user source"),o(" - idemeum can integrate with external user source, such as an HR system to onboard users automatically.")],-1),E=e("h2",{id:"local-user-source",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#local-user-source","aria-hidden":"true"},"#"),o(" Local user source")],-1),U=e("li",null,[o("To configure local user source navigate to "),e("code",null,"Users"),o(" -> "),e("code",null,"User source"),o(" and choose "),e("code",null,"Local"),o(".")],-1),L=i('<p><img src="'+m+'" alt="User source"></p><div class="custom-container warning"><p class="custom-container-title">Advanced settings</p><ul><li><strong>Off-boarding frequency</strong> - with this configuration you can choose how often you want idemeum to check for off-boarded employees using local user source. Say you delete user manually, and set this interval to 4 hours. Every 4 hours idemeum will check for off-boarded user to remove access and de-provision applications.</li></ul></div><h2 id="external-user-source" tabindex="-1"><a class="header-anchor" href="#external-user-source" aria-hidden="true">#</a> External user source</h2>',3),T={href:"https://integrations.idemeum.com/tag/user-source/",target:"_blank",rel:"noopener noreferrer"},A=i('<ul><li>To connect idemeum to external user source navigate to to <code>Users</code> -&gt; <code>User source</code>.</li><li>Then choose the source that you want to connect to from a dropdown list.</li><li>Then you will need to either enter an <strong>API key</strong> or conduct an <strong>oAuth authorization</strong>.</li></ul><p><img src="'+h+'" alt="User source"></p><div class="custom-container warning"><p class="custom-container-title">Advanced settings</p><ul><li><strong>Off-boarding frequency</strong> - with this configuration you can choose how often you want idemeum to check for off-boarded employees using local user source. Say user is deleted in HR system, and you set this interval to 4 hours. Every 4 hours idemeum will check for off-boarded user to remove access and de-provision applications.</li><li><strong>Corporate email format</strong> - when employees onboard into organization they are using personal email address, phone number, or ID document. However, corporate email address is required in order for idemeum to log user into applications. As a first step idemeum looks for corporate email address in user source. If found that email will be used for all applications provisioned for the user. If the email is not found, idemeum will create one on the fly. With this setting you can choose what email format you will use for all employees. The default is <code>firstname.lastname@domain.com</code>.</li></ul></div>',3);function I(H,O){const n=a("router-link"),s=a("RouterLink"),l=a("ExternalLinkIcon");return u(),d("div",null,[f,e("nav",g,[e("ul",null,[e("li",null,[t(n,{to:"#overview"},{default:r(()=>[o("Overview")]),_:1})]),e("li",null,[t(n,{to:"#local-user-source"},{default:r(()=>[o("Local user source")]),_:1})]),e("li",null,[t(n,{to:"#external-user-source"},{default:r(()=>[o("External user source")]),_:1})])])]),_,y,e("div",w,[v,b,e("ol",null,[e("li",null,[x,o(" - admins manually create user records and specify mappings between personal and corporate identity claims so that new employees can be "),t(s,{to:"/employee-onboarding.html"},{default:r(()=>[o("onboarded")]),_:1}),o(" into an organization with Passwordless MFA.")]),k])]),E,e("p",null,[o("With local user source admins can create users manually and specify personal claims to corporate email mappings for "),t(s,{to:"/employee-onboarding.html"},{default:r(()=>[o("employee onboarding")]),_:1}),o(" to work.")]),e("ul",null,[U,e("li",null,[o("Once you save your configuration. you can navigate to "),t(s,{to:"/user-management.html"},{default:r(()=>[o("user management")]),_:1}),o(" section to start creating users.")])]),L,e("p",null,[o("External user source allows to leverage existing user database for automated user onboarding. Users do not need to be manually created in idemeum, and it is expected that external user source will have a mapping between corporate email address and personal user information for "),t(s,{to:"/employee-onboarding.html"},{default:r(()=>[o("onboarding")]),_:1}),o(" to work.")]),e("p",null,[o("Today we support a variety of integrations, and you can check our integrations portal here - "),e("a",T,[o("user source integrations"),t(l)]),o(".")]),A])}const N=c(p,[["render",I],["__file","integration-with-hr-system.html.vue"]]);export{N as default};