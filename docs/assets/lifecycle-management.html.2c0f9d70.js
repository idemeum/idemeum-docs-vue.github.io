import{_ as l,r as a,o as c,c as d,a as e,b as o,d as t,w as r,e as s}from"./app.e99c4cff.js";const p="/assets/provisioning.92ba78bc.jpeg",u="/assets/provisioning-example.bcb4797e.png",h={},m=s('<h1 id="automated-account-provisioning" tabindex="-1"><a class="header-anchor" href="#automated-account-provisioning" aria-hidden="true">#</a> Automated account provisioning</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>idemeum offers end to end lifecycle management capabilities. You can integrate idemeum with your SaaS applications to:</p><ul><li><strong>Automate account creation</strong> to automatically add employees to apps right when the start</li><li><strong>Timely remove application accounts</strong> for employees who leave the organization</li><li><strong>Reduce costs</strong> by quickly recuperating software licenses for employees that are terminated</li></ul><h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How it works</h2>',5),g=e("p",null,[e("img",{src:p,alt:""})],-1),f=e("li",null,"idemeum locates the user record in external user source and pulls required attributes such as role, department, name, etc.",-1),_=e("li",null,"Based on these attributes idemeum will automatically create application accounts for employee to become productive immediately",-1),w=e("li",null,"Once the employee is terminated / off-boarded in HRMS, all application accounts will be removed and access revoked",-1),v=e("h2",{id:"how-to-configure-provisioning",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-configure-provisioning","aria-hidden":"true"},"#"),o(" How to configure provisioning")],-1),y={href:"https://integrations.idemeum.com/",target:"_blank",rel:"noopener noreferrer"},b=s("<li>Access your idemeum admin portal and navigate to <code>Applications</code> section. You can search for an application that you want to set up provisioning for. We recommend you first set up Single Sign-On for that application.</li><li>Click <code>Add application</code>. And then navigate to <code>Provisioning</code> section.</li><li>Based on what application supports, you will either have to enter an <strong>API key</strong> or conduct <strong>oAuth flow</strong> to allow idemeum to perform automated provisioning. For most applications we rely on SCIM protocol to conduct provisioning, however for some applications we rely on custom API connectors that we developed.</li>",3),k=e("p",null,[e("img",{src:u,alt:""})],-1),x={href:"https://integrations.idemeum.com",target:"_blank",rel:"noopener noreferrer"};function A(S,B){const i=a("RouterLink"),n=a("ExternalLinkIcon");return c(),d("div",null,[m,e("p",null,[o("Typically idemeum provisions accounts when employees first [onboard])(./employee-onboarding.html) into an organization with Passwordless MFA. Here is example of the flow when "),t(i,{to:"/integration-with-hr-system.html#external-user-source"},{default:r(()=>[o("external user source")]),_:1}),o(" is used for onboarding / off-boarding.")]),g,e("ul",null,[e("li",null,[o("First employee verifies digital identity and "),t(i,{to:"/employee-onboarding.html"},{default:r(()=>[o("onboards")]),_:1}),o(" into organization by navigating to a company portal and scanning a QR code")]),f,_,w]),v,e("ul",null,[e("li",null,[o("First check our integration portal to see what applications we support for "),e("a",y,[o("automated provisioning"),t(n)]),o(".")]),b]),k,e("p",null,[o("Please, check our "),e("a",x,[o("integrations portal"),t(n)]),o(" as we have a detailed step by step instructions there for how to enable SSO and provisioning for each application that idemeum supports.")])])}const P=l(h,[["render",A],["__file","lifecycle-management.html.vue"]]);export{P as default};