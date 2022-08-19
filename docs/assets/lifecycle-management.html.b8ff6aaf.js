import{_ as c,o as l,c as d,a as e,b as t,w as a,e as r,d as o,r as s}from"./app.7701c126.js";var u="/idemeum-docs-vue.github.io/assets/provisioning.92ba78bc.jpeg",p="/idemeum-docs-vue.github.io/assets/provisioning-example.bcb4797e.png";const h={},m=r('<h1 id="automated-account-provisioning" tabindex="-1"><a class="header-anchor" href="#automated-account-provisioning" aria-hidden="true">#</a> Automated account provisioning</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>idemeum offers end to end lifecycle management capabilities. You can integrate idemeum with your SaaS applications to:</p><ul><li><strong>Automate account creation</strong> to automatically add employees to apps right when the start</li><li><strong>Timely remove application accounts</strong> for employees who leave the organization</li><li><strong>Reduce costs</strong> by quickly recuperating software licenses for employees that are terminated</li></ul><h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How it works</h2>',5),_=o("Typically idemeum provisions accounts when employees first [onboard])(./employee-onboarding.html) into an organization with Passwordless MFA. Here is example of the flow when "),g=o("external user source"),f=o(" is used for onboarding / off-boarding."),v=e("p",null,[e("img",{src:u,alt:""})],-1),w=o("First employee verifies digital identity and "),y=o("onboards"),b=o(" into organization by navigating to a company portal and scanning a QR code"),k=e("li",null,"idemeum locates the user record in external user source and pulls required attributes such as role, department, name, etc.",-1),x=e("li",null,"Based on these attributes idemeum will automatically create application accounts for employee to become productive immediately",-1),A=e("li",null,"Once the employee is terminated / off-boarded in HRMS, all application accounts will be removed and access revoked",-1),S=e("h2",{id:"how-to-configure-provisioning",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-configure-provisioning","aria-hidden":"true"},"#"),o(" How to configure provisioning")],-1),B=o("First check our integration portal to see what applications we support for "),I={href:"https://integrations.idemeum.com/",target:"_blank",rel:"noopener noreferrer"},P=o("automated provisioning"),R=o("."),C=r("<li>Access your idemeum admin portal and navigate to <code>Applications</code> section. You can search for an application that you want to set up provisioning for. We recommend you first set up Single Sign-On for that application.</li><li>Click <code>Add application</code>. And then navigate to <code>Provisioning</code> section.</li><li>Based on what application supports, you will either have to enter an <strong>API key</strong> or conduct <strong>oAuth flow</strong> to allow idemeum to perform automated provisioning. For most applications we rely on SCIM protocol to conduct provisioning, however for some applications we rely on custom API connectors that we developed.</li>",3),F=e("p",null,[e("img",{src:p,alt:""})],-1),H=o("Please, check our "),L={href:"https://integrations.idemeum.com",target:"_blank",rel:"noopener noreferrer"},M=o("integrations portal"),N=o(" as we have a detailed step by step instructions there for how to enable SSO and provisioning for each application that idemeum supports.");function O(V,z){const i=s("RouterLink"),n=s("ExternalLinkIcon");return l(),d("div",null,[m,e("p",null,[_,t(i,{to:"/integration-with-hr-system.html#external-user-source"},{default:a(()=>[g]),_:1}),f]),v,e("ul",null,[e("li",null,[w,t(i,{to:"/employee-onboarding.html"},{default:a(()=>[y]),_:1}),b]),k,x,A]),S,e("ul",null,[e("li",null,[B,e("a",I,[P,t(n)]),R]),C]),F,e("p",null,[H,e("a",L,[M,t(n)]),N])])}var T=c(h,[["render",O],["__file","lifecycle-management.html.vue"]]);export{T as default};
