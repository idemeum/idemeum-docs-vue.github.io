import{_ as i,r as a,o as n,c as r,a as e,b as s,w as l,e as o,d as c}from"./app.c4cb680b.js";const p="/assets/group.b30456bc.jpeg",u="/assets/application.732ec6a0.jpeg",d="/assets/add-rule.a3bbca9b.jpeg",h={},g=e("h1",{id:"application-entitlements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#application-entitlements","aria-hidden":"true"},"#"),o(" Application entitlements")],-1),f=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),o(" Overview")],-1),m=o("idemeum offers you simple yet very powerful framework to control who has access to what applications. You can leverage "),_=o("groups"),y=o(" to entitle applications, or you can entitle applications directly to users."),w=c('<p>As we follow <code>if/then</code> statements to create entitlements, you have a lot of flexibility in how you can structure your rules. However we find it useful to keep things simple and either choose <strong>rule for group</strong> or <strong>rule for application</strong>.</p><h2 id="rule-for-group" tabindex="-1"><a class="header-anchor" href="#rule-for-group" aria-hidden="true">#</a> Rule for group</h2><p>With this rule you are taking a group of users and are entitling several applications to it. For instance, you can take your engineering group and assign all necessary applications to your engineers. This type of rule works best if you want simplicity and if group provisioning is enabled, all applications will get provisioned with the same groups.</p><p><img src="'+p+'" alt="Rule"></p><h2 id="rule-for-application" tabindex="-1"><a class="header-anchor" href="#rule-for-application" aria-hidden="true">#</a> Rule for application</h2><p>With this rule you are creating separate groups for your specific application. For instance you can take AWS and create AWS admins and AWS devops groups. This type of rule works best if you want more granular application control and you want specific groups to be provisioned into each application.</p><p><img src="'+u+'" alt="Application"></p><h2 id="how-to-configure-entitlements" tabindex="-1"><a class="header-anchor" href="#how-to-configure-entitlements" aria-hidden="true">#</a> How to configure entitlements</h2><ul><li>Access your idemeum admin portal</li><li>Navigate to <code>Entitlements</code> on the left menu</li><li>Click <code>Add rule</code></li></ul><p><img src="'+d+'" alt="Add rule"></p><ul><li>First give rule a name (i.e. <code>Engineering apps</code>)</li><li>Then choose if you want to use group or user for assigning applications</li><li>Depending on your choice you can select available groups or users</li><li>Assign applications</li><li>Hit <code>Save</code></li></ul>',11);function v(b,k){const t=a("RouterLink");return n(),r("div",null,[g,f,e("p",null,[m,s(t,{to:"/group-management.html"},{default:l(()=>[_]),_:1}),y]),w])}const A=i(h,[["render",v],["__file","application-entitlements.html.vue"]]);export{A as default};
