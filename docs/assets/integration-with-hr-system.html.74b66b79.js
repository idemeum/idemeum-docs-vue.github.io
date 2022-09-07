import{_ as c,r as a,o as u,c as d,a as e,b as t,w as s,e as o,d as i}from"./app.96ab41e6.js";const h="/assets/local-source.4e0d9ce1.png",m="/assets/user-source.f885efd6.png",_={},p=e("h1",{id:"user-source-integration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#user-source-integration","aria-hidden":"true"},"#"),o(" User source integration")],-1),f={class:"table-of-contents"},g=o("Overview"),y=o("Local user source"),w=o("External user source"),v=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),o(" Overview")],-1),b=e("p",null,"With idemeum you have several options for how to manage your users. You can manage users locally with idemeum cloud directory, or you can rely on external user source such as HR or Payroll system.",-1),x={class:"custom-container tip"},k=e("p",{class:"custom-container-title"},"User source options",-1),E=e("p",null,"Today we support the following options for user source:",-1),U=e("strong",null,"Local user source",-1),L=o(" - admins manually create user records and specify mappings between personal and corporate identity claims so that new employees can be "),T=o("onboarded"),A=o(" into an organization with Passwordless MFA."),I=e("li",null,[e("strong",null,"External user source"),o(" - idemeum can integrate with external user source, such as an HR system to onboard users automatically.")],-1),H=e("h2",{id:"local-user-source",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#local-user-source","aria-hidden":"true"},"#"),o(" Local user source")],-1),O=o("With local user source admins can create users manually and specify personal claims to corporate email mappings for "),R=o("employee onboarding"),N=o(" to work."),S=e("li",null,[o("To configure local user source navigate to "),e("code",null,"Users"),o(" -> "),e("code",null,"User source"),o(" and choose "),e("code",null,"Local"),o(".")],-1),V=o("Once you save your configuration. you can navigate to "),W=o("user management"),q=o(" section to start creating users."),z=i('<p><img src="'+h+'" alt="User source"></p><div class="custom-container warning"><p class="custom-container-title">Advanced settings</p><ul><li><strong>Off-boarding frequency</strong> - with this configuration you can choose how often you want idemeum to check for off-boarded employees using local user source. Say you delete user manually, and set this interval to 4 hours. Every 4 hours idemeum will check for off-boarded user to remove access and de-provision applications.</li></ul></div><h2 id="external-user-source" tabindex="-1"><a class="header-anchor" href="#external-user-source" aria-hidden="true">#</a> External user source</h2>',3),B=o("External user source allows to leverage existing user database for automated user onboarding. Users do not need to be manually created in idemeum, and it is expected that external user source will have a mapping between corporate email address and personal user information for "),C=o("onboarding"),P=o(" to work."),D=o("Today we support a variety of integrations, and you can check our integrations portal here - "),F={href:"https://integrations.idemeum.com/tag/user-source/",target:"_blank",rel:"noopener noreferrer"},M=o("user source integrations"),Y=o("."),j=i('<ul><li>To connect idemeum to external user source navigate to to <code>Users</code> -&gt; <code>User source</code>.</li><li>Then choose the source that you want to connect to from a dropdown list.</li><li>Then you will need to either enter an <strong>API key</strong> or conduct an <strong>oAuth authorization</strong>.</li></ul><p><img src="'+m+'" alt="User source"></p><div class="custom-container warning"><p class="custom-container-title">Advanced settings</p><ul><li><strong>Off-boarding frequency</strong> - with this configuration you can choose how often you want idemeum to check for off-boarded employees using local user source. Say user is deleted in HR system, and you set this interval to 4 hours. Every 4 hours idemeum will check for off-boarded user to remove access and de-provision applications.</li><li><strong>Corporate email format</strong> - when employees onboard into organization they are using personal email address, phone number, or ID document. However, corporate email address is required in order for idemeum to log user into applications. As a first step idemeum looks for corporate email address in user source. If found that email will be used for all applications provisioned for the user. If the email is not found, idemeum will create one on the fly. With this setting you can choose what email format you will use for all employees. The default is <code>firstname.lastname@domain.com</code>.</li></ul></div>',3);function G(J,K){const r=a("router-link"),n=a("RouterLink"),l=a("ExternalLinkIcon");return u(),d("div",null,[p,e("nav",f,[e("ul",null,[e("li",null,[t(r,{to:"#overview"},{default:s(()=>[g]),_:1})]),e("li",null,[t(r,{to:"#local-user-source"},{default:s(()=>[y]),_:1})]),e("li",null,[t(r,{to:"#external-user-source"},{default:s(()=>[w]),_:1})])])]),v,b,e("div",x,[k,E,e("ol",null,[e("li",null,[U,L,t(n,{to:"/employee-onboarding.html"},{default:s(()=>[T]),_:1}),A]),I])]),H,e("p",null,[O,t(n,{to:"/employee-onboarding.html"},{default:s(()=>[R]),_:1}),N]),e("ul",null,[S,e("li",null,[V,t(n,{to:"/user-management.html"},{default:s(()=>[W]),_:1}),q])]),z,e("p",null,[B,t(n,{to:"/employee-onboarding.html"},{default:s(()=>[C]),_:1}),P]),e("p",null,[D,e("a",F,[M,t(l)]),Y]),j])}const X=c(_,[["render",G],["__file","integration-with-hr-system.html.vue"]]);export{X as default};