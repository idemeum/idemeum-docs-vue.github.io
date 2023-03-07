import{_ as r,M as s,p as l,q as u,R as e,N as t,V as a,t as o,a1 as n}from"./framework-5866ffd3.js";const d="/assets/shared-account-62f2afdf.png",h="/assets/account-setup-2df5c32c.png",p="/assets/mobile-edit-62e5a2cb.png",g="/assets/mobile-setup-c9db8843.png",m={},w=e("h1",{id:"shared-account-login",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#shared-account-login","aria-hidden":"true"},"#"),o(" Shared Account Login")],-1),f={class:"table-of-contents"},b=n('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>With idemeum you can assign a shared account to a workstation, and everyone who will access this workstation with RFID badge will be signed in with that shared account.</p><p>For example, let&#39;s say there is a Windows workstation where everyone needs to log into with a shared account <code>service-account</code>. idemeum allows assigning this <code>service-account</code> to a workstation, and then controlling who has access to this workstation with user groups. Anyone who has access and scans the RFID badge will be logged into a machine with a <code>service-account</code>.</p><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>',4),_=e("li",null,"If you are restricting access to workstation with groups, make sure these groups can be looked up in your user source. For instance, if you want to use Active Directory groups and you are using Azure Active Directory as a user source, make sure you synchronize groups to Azure AD so that idemeum desktop client can validate group ownership for each login.",-1),y=n('<div class="custom-container warning"><p class="custom-container-title">RFID access only</p><p>Today we support access with shared account only for idemeum desktop client that are set up in RFID access mode. We do not yet support workstations that need to be accessed with Passwordless MFA via QR-code login.</p></div><h2 id="web-portal-configuration" tabindex="-1"><a class="header-anchor" href="#web-portal-configuration" aria-hidden="true">#</a> Web portal configuration</h2><ul><li>Once you successfully install idemeum desktop client, the workstation will be shown in your idemeum portal.</li><li>Click on <code>...</code> menu and choose <code>Configure shared account</code></li></ul><p><img src="'+d+'" alt="Shared account setup"></p><ul><li>Now you can enter shared account <code>logon name</code>, and also specify groups users of which can access this workstation with a shared account. Make sure when you enter multiple group names you hit <code>Enter</code> or <code>Tab</code> for every group.</li></ul><p><img src="'+h+'" alt="Shared account setup"></p><ul><li>Click <code>Save</code></li></ul><p>From now on any user that belongs to the specified groups will be able to log into workstation with shared account by simply tapping RFID badge.</p><h2 id="mobile-configuration" tabindex="-1"><a class="header-anchor" href="#mobile-configuration" aria-hidden="true">#</a> Mobile configuration</h2><p>You can perform the same shared account assignment from your mobile device</p><ul><li>Open idemeum mobile application and search for the workstation that you want to configure with shared account</li></ul><img src="'+p+'" width="200px" style="border:0.5px solid #555;"><ul><li>Click on <code>...</code> to access workstation details</li><li>Click on <code>Edit</code> button at the top right of the screen</li><li>You can now enter your service account <code>logon name</code> as well as comma-separated groups to enforce access control</li></ul><img src="'+g+'" width="200px" style="border:0.5px solid #555;"><p>From now on any user that belongs to the specified groups will be able to log into workstation with shared account by simply tapping RFID badge.</p>',15);function k(v,x){const i=s("router-link"),c=s("RouterLink");return l(),u("div",null,[w,e("nav",f,[e("ul",null,[e("li",null,[t(i,{to:"#overview"},{default:a(()=>[o("Overview")]),_:1})]),e("li",null,[t(i,{to:"#prerequisites"},{default:a(()=>[o("Prerequisites")]),_:1})]),e("li",null,[t(i,{to:"#web-portal-configuration"},{default:a(()=>[o("Web portal configuration")]),_:1})]),e("li",null,[t(i,{to:"#mobile-configuration"},{default:a(()=>[o("Mobile configuration")]),_:1})])])]),b,e("ul",null,[e("li",null,[o("Before you assign a service account to a workstation, make sure you have successfully completed all configuration steps for RFID access documented "),t(c,{to:"/rfid/rfid-configuration-guide.html"},{default:a(()=>[o("here")]),_:1}),o(".")]),_]),y])}const R=r(m,[["render",k],["__file","rfid-shared-account.html.vue"]]);export{R as default};
