import{_ as u,o as l,c,a as e,b as t,w as s,d as o,e as a,r as n}from"./app.a0549267.js";var p="/assets/name-group.2542beb1.png",g="/assets/attributes.2c6b3234.png",d="/assets/group-provisioning.526fbd9b.png";const h={},m=e("h1",{id:"group-management",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#group-management","aria-hidden":"true"},"#"),o(" Group management")],-1),_=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),o(" Overview")],-1),v=e("p",null,"idemeum allows you to create groups and put employees into them.",-1),y={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"Local user source",-1),w=o("When you leverage "),b=o("local user source"),x=o(" in idemeum you can simply define groups as logical entities and assign employees to these groups manually."),k={class:"custom-container tip"},A=e("p",{class:"custom-container-title"},"External user source",-1),E=o("If you integrate idemeum with "),S=o("external user source"),N=o(", such as HR system, you can define group based on various attributes present in external source, such as country, department, etc."),R=e("ul",null,[e("li",null,[o("For example, all my employees who are part of an "),e("strong",null,"Engineering"),o(" department in HRMS will become part of "),e("strong",null,"Engineering"),o(" group in idemeum.")])],-1),C=a('<p>Groups are an important concept in idemeum and can be used for the following capabilities:</p><ol><li><strong>Application entitlements</strong> - you can use groups to <strong>entitle applications</strong> to employees. For instance, your <strong>Engineering</strong> group will have access to 3 applications (Atlassian, Slack, and AWS).</li><li><strong>Group provisioning</strong> - you can use groups to provision to integrated applications. For instance, once you create group <strong>Admins</strong> you can configure idemeum to push this group into AWS so that you can assign certain permission sets to it. Therefore, every new user of <strong>Admins</strong> group will be provisioned into <strong>Admins</strong> group in AWS.</li></ol><h2 id="how-to-create-groups" tabindex="-1"><a class="header-anchor" href="#how-to-create-groups" aria-hidden="true">#</a> How to create groups</h2><ul><li>Navigate to idemeum admin portal and choose <code>Groups</code></li><li>Click <code>Add group</code></li><li>Give your group a name</li></ul><p><img src="'+p+'" alt="Name group"></p><ul><li>Now you can create <strong>Rules</strong> based on which employees will become part of this group. With external user source you can leverage attributes in your external user source, or you can assign users directly to your group.</li></ul><p><img src="'+g+'" alt="Attributes"></p><ul><li>In the image above you have Country, Department, and Division coming from HRMS. Each HRMS we integrate with will support different attributes. Consult our documentation to see what is currently supported.</li><li>You can also add user to groups directly by choosing User attribute and then choosing what users you want to assign to groups.</li><li>Once you configure the group hit <code>Save</code></li></ul><h3 id="provision-groups-into-applications" tabindex="-1"><a class="header-anchor" href="#provision-groups-into-applications" aria-hidden="true">#</a> Provision groups into applications</h3>',9),G=o("idemeum also supports pushing groups to applications and assigning users to these groups in applications. Please, check our "),H={href:"https://integrations.idemeum.com",target:"_blank",rel:"noopener noreferrer"},I=o("integrations catalog"),L=o(" to see what applications support group management."),M=a('<p>Enabling group provisioning for an application is very easy.</p><ul><li>Navigate to application configuration</li><li>Choose <code>Provisioning</code> section</li><li>Make sure you have <code>group provisioning </code>set to <code>True</code></li></ul><p><img src="'+d+'" alt="Group provisioning"></p><div class="custom-container warning"><p class="custom-container-title">How group provisioning works</p><ul><li>If an application is assigned to a user that is part of the group, idemeum will first provision the group to application and then will assign the user to that group.</li><li>If the user changes groups, idemeum will automatically update all information in target applications.</li></ul></div>',4);function W(V,B){const i=n("RouterLink"),r=n("ExternalLinkIcon");return l(),c("div",null,[m,_,v,e("div",y,[f,e("p",null,[w,t(i,{to:"/integration-with-hr-system.html#local-user-source"},{default:s(()=>[b]),_:1}),x])]),e("div",k,[A,e("p",null,[E,t(i,{to:"/integration-with-hr-system.html#external-user-source"},{default:s(()=>[S]),_:1}),N]),R]),C,e("p",null,[G,e("a",H,[I,t(r)]),L]),M])}var P=u(h,[["render",W],["__file","group-management.html.vue"]]);export{P as default};
