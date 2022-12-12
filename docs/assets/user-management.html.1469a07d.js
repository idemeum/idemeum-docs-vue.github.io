import{_ as c,r as i,o as d,c as u,a as e,b as o,w as a,e as s,d as r}from"./app.c4cb680b.js";const h="/assets/create-local-user.beeed4d8.png",m="/assets/local-user-details.6bfd4689.png",_="/assets/local-user-invitation.e11c3db6.png",p="/assets/disable-local-user.161a7055.png",n="/assets/active-sessions.b6edbbb5.png",g={},b=e("h1",{id:"user-management",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#user-management","aria-hidden":"true"},"#"),s(" User management")],-1),f={class:"table-of-contents"},v=s("Overview"),w=s("Managing local users"),x=s("1. Create local user"),y=s("2. Disable local user"),k=s("3. Delete local user"),M=s("4. Manage local user sessions"),U=s("Managing users from external source"),C=s("1. Manage external user sessions"),A=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),s(" Overview")],-1),Y=s("For "),N=s("local user source"),D=s(" you have full control of the user lifecycle and can "),O=e("strong",null,"create",-1),F=s(", "),W=e("strong",null,"update",-1),B=s(", and "),T=e("strong",null,"delete",-1),V=s(" user records. For "),E=s("external user source"),L=s(" it is expected that users are managed in that external user source, and idemeum will periodically synchronize user state to reflect user changes."),P=r('<h2 id="managing-local-users" tabindex="-1"><a class="header-anchor" href="#managing-local-users" aria-hidden="true">#</a> Managing local users</h2><h3 id="_1-create-local-user" tabindex="-1"><a class="header-anchor" href="#_1-create-local-user" aria-hidden="true">#</a> 1. Create local user</h3><ul><li>Navigate to <code>Users</code> -&gt; <code>User Management</code> section</li><li>Click <code>Add user</code></li></ul><p><img src="'+h+'" alt=""></p><ul><li>You will now be able to create a local user record by entering user information</li></ul><p><img src="'+m+'" alt=""></p><ul><li>You can send invitation email to users that are not onboarded yet.</li></ul><p><img src="'+_+'" alt=""></p>',8),S={class:"custom-container tip"},z=e("p",{class:"custom-container-title"},"Employee onboarding",-1),I=s("Make sure you enter corporate email address as well as personal email address or personal phone number, so that "),R=s("onboarding"),j=s(" with Passwordless MFA will work for the user."),q=r('<h3 id="_2-disable-local-user" tabindex="-1"><a class="header-anchor" href="#_2-disable-local-user" aria-hidden="true">#</a> 2. Disable local user</h3><p>Before deleting idemeum allows you to disable local user first.</p><ul><li>Navigate to <code>Users</code> -&gt; <code>User Management</code> section</li><li>Click <code>...</code> next to a user that you want to disable</li><li>Click <code>Disable user</code></li></ul><p><img src="'+p+'" alt=""></p><div class="custom-container warning"><p class="custom-container-title">What happens?</p><p>Once the user is disabled:</p><ul><li>Access to company applications is blocked</li><li><code>Local user status</code> will transition from <code>Active</code> to <code>Disabled</code>.</li><li>User can be re-enabled</li></ul><p>To enable the user back, you repeat the procedure described above and choose <code>Enable user</code> option.</p></div><h3 id="_3-delete-local-user" tabindex="-1"><a class="header-anchor" href="#_3-delete-local-user" aria-hidden="true">#</a> 3. Delete local user</h3><p>Once the user is disabled, you can delete user record to permanently remove user information from idemeum.</p><ul><li>Navigate to <code>Users</code> -&gt; <code>User Management</code> section</li><li>Click <code>...</code> next to a user that you want to delete</li><li>Click <code>Delete user</code></li></ul><div class="custom-container danger"><p class="custom-container-title">What happens?</p><p>Once the user is deleted:</p><ul><li>Access to company applications is blocked</li><li>User record will be permanently removed from idemeum</li><li>Applications will be de-provisioned for the user</li><li>User can not be re-enabled</li></ul></div><h3 id="_4-manage-local-user-sessions" tabindex="-1"><a class="header-anchor" href="#_4-manage-local-user-sessions" aria-hidden="true">#</a> 4. Manage local user sessions</h3><p>When users access idemeum application portal using mobile or browser, a user session is created. At any given point in time there can be multiple active sessions for the user. You can view all active user sessions as well as revoke them.</p><ul><li>Navigate to <code>Users</code> -&gt; <code>User Management</code> section</li><li>For the user that has been onboarded to idemeum click on <code>...</code></li><li>Click <code>Acive sessions</code></li><li>You will now be shows a list of active user session grouped by platform. You will see additional information such as location, platform type, OS version, and IP address. You can revoke the session by clicking on the <code>Trash</code> icon.</li></ul><p><img src="'+n+'" alt=""></p><h2 id="managing-users-from-external-source" tabindex="-1"><a class="header-anchor" href="#managing-users-from-external-source" aria-hidden="true">#</a> Managing users from external source</h2><p>When external user source is used, it is expected that users are managed in that source. idemeum will periodically synchronize with external user source to update user information.</p><h3 id="_1-manage-external-user-sessions" tabindex="-1"><a class="header-anchor" href="#_1-manage-external-user-sessions" aria-hidden="true">#</a> 1. Manage external user sessions</h3><p>When users access idemeum application portal using mobile or browser, a user session is created. At any given point in time there can be multiple active sessions for the user. You can view all active user sessions as well as revoke them.</p><ul><li>Navigate to <code>Users</code> -&gt; <code>User Management</code> section</li><li>For the user that has been onboarded to idemeum click on <code>...</code></li><li>Click <code>Acive sessions</code></li><li>You will now be shows a list of active user session grouped by platform. You will see additional information such as location, platform type, OS version, and IP address. You can revoke the session by clicking on the <code>Trash</code> icon.</li></ul><p><img src="'+n+'" alt=""></p>',19);function G(H,J){const t=i("router-link"),l=i("RouterLink");return d(),u("div",null,[b,e("nav",f,[e("ul",null,[e("li",null,[o(t,{to:"#overview"},{default:a(()=>[v]),_:1})]),e("li",null,[o(t,{to:"#managing-local-users"},{default:a(()=>[w]),_:1}),e("ul",null,[e("li",null,[o(t,{to:"#_1-create-local-user"},{default:a(()=>[x]),_:1})]),e("li",null,[o(t,{to:"#_2-disable-local-user"},{default:a(()=>[y]),_:1})]),e("li",null,[o(t,{to:"#_3-delete-local-user"},{default:a(()=>[k]),_:1})]),e("li",null,[o(t,{to:"#_4-manage-local-user-sessions"},{default:a(()=>[M]),_:1})])])]),e("li",null,[o(t,{to:"#managing-users-from-external-source"},{default:a(()=>[U]),_:1}),e("ul",null,[e("li",null,[o(t,{to:"#_1-manage-external-user-sessions"},{default:a(()=>[C]),_:1})])])])])]),A,e("p",null,[Y,o(l,{to:"/integration-with-hr-system.html#local-user-source"},{default:a(()=>[N]),_:1}),D,O,F,W,B,T,V,o(l,{to:"/integration-with-hr-system.html#external-user-source"},{default:a(()=>[E]),_:1}),L]),P,e("div",S,[z,e("p",null,[I,o(l,{to:"/employee-onboarding.html"},{default:a(()=>[R]),_:1}),j])]),q])}const Q=c(g,[["render",G],["__file","user-management.html.vue"]]);export{Q as default};
