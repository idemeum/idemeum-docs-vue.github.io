import{_ as i,r as a,o as n,c as r,a as o,b as e,d as s,w as l,e as c}from"./app.7f741596.js";const p="/assets/add-rule.6ef40393.png",d={},u=o("h1",{id:"application-entitlements",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#application-entitlements","aria-hidden":"true"},"#"),e(" Application entitlements")],-1),h=o("h2",{id:"overview",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),e(" Overview")],-1),g=c('<p>Here are the ways you can perform application entitlements with idemeum:</p><ol><li><strong>Direct user entitlement</strong> - choose a user or a set of users and entitle one or more applications directly to users.</li><li><strong>Entitlement for a group</strong> - with this rule you are taking a group of users and are entitling several applications to it. For instance, you can take your <code>engineering</code> group and assign all necessary applications to your engineers. This type of rule works best if you want simplicity and if group provisioning is enabled, all applications will get provisioned with the same groups.</li><li><strong>Entitlement for application</strong> - with this rule you are creating separate groups for your specific application. For instance you can take <code>AWS</code> and create <code>AWS admins</code> and <code>AWS devops groups</code>. This type of rule works best if you want more granular application control and you want specific groups to be provisioned into each application.</li></ol><h2 id="how-to-configure-entitlements" tabindex="-1"><a class="header-anchor" href="#how-to-configure-entitlements" aria-hidden="true">#</a> How to configure entitlements</h2><ul><li>Access your idemeum admin portal</li><li>Navigate to <code>Entitlements</code> on the left menu</li><li>Click <code>Add rule</code></li></ul><p><img src="'+p+'" alt="Add rule"></p><ul><li>First give rule a name (i.e. <code>Engineering apps</code>)</li><li>Then choose if you want to use <code>group</code> or <code>user</code> for assigning applications</li><li>Depending on your choice you can select available groups or users</li><li>Assign applications</li><li>Click <code>Save</code></li></ul>',6);function m(f,y){const t=a("RouterLink");return n(),r("div",null,[u,h,o("p",null,[e("idemeum offers you simple yet very powerful framework to control who has access to what applications. You can leverage "),s(t,{to:"/group-management.html"},{default:l(()=>[e("groups")]),_:1}),e(" to entitle applications, or you can entitle applications directly to users.")]),g])}const _=i(d,[["render",m],["__file","application-entitlements.html.vue"]]);export{_ as default};