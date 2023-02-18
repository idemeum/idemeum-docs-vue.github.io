import{_ as r,r as a,o as c,c as d,a as e,b as i,w as t,e as o,d as l}from"./app.466aea9c.js";const h="/assets/home-screen.2da52782.png",u="/assets/profile-screen.de0f43f5.png",p="/assets/login-screen.718666c2.png",_="/assets/approval-screen.6d684a81.png",m="/assets/activity-screen.b323f231.png",g="/assets/settings-screen.2c381778.png",v={},y=e("h1",{id:"mobile-ui-overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mobile-ui-overview","aria-hidden":"true"},"#"),o(" Mobile UI overview")],-1),f={class:"table-of-contents"},w=o("Home"),b=o("Profile"),x=o("Login"),k=o("Activity"),I=o("Settings"),S=l('<h2 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> Home</h2><p>Home screen is where you can immediately access your applications with a simple click. Great thing about idemeum is that it aggregates all Single Sign-On (SSO) and password-based applications in a single place. If you click on SSO application, it will launch seamlessly without any passwords. If you launch password based application, it will launch, password will be auto-filled, and you will be logged in.</p><img src="'+h+'" width="200px"><h2 id="profile" tabindex="-1"><a class="header-anchor" href="#profile" aria-hidden="true">#</a> Profile</h2><p>In profile section you can add your verified digital identity claims. These claims will be used to onboard you into your organization. idemeum supports verifying the following personal claims:</p><ol><li>Email address</li><li>Phone number</li><li>Government issued ID</li></ol><img src="'+u+'" width="200px"><h2 id="login" tabindex="-1"><a class="header-anchor" href="#login" aria-hidden="true">#</a> Login</h2><p>Clicking on <code>Login</code> will open the camera to scan the QR code.</p><img src="'+p+'" width="200px">',10),O={class:"custom-container tip"},L=e("p",{class:"custom-container-title"},"Login with OTP",-1),R=o("On Android devices "),A=e("code",null,"Login",-1),D=o(" screen also shows an option to login with one-time code OTP. You can learn more about it "),P=o("here"),N=o("."),T=l('<p>Once you scan a valid QR code you will be redirected to login approval screen. On that screen you will be able to approve login and perform biometric scan.</p><img src="'+_+'" width="200px"><div class="custom-container tip"><p class="custom-container-title">Geolocation security</p><p>You will also be shown a map with location of your mobile and desktop devices. In case the devices are too far apart, it might be a fraudulent login that you need to carefully assess before approving. You can learn more about geolocation security here.</p></div><h2 id="activity" tabindex="-1"><a class="header-anchor" href="#activity" aria-hidden="true">#</a> Activity</h2><p>Activity is a section where you will see information about various application activity, such as adding a new email address, or logging into an application.</p><img src="'+m+'" width="200px"><h2 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> Settings</h2><p>In the settings section you will be able to set up your application security settings and get information about application version and your decentralized identifier (DID).</p><img src="'+g+'" width="200px">',9),V=e("li",null,[e("strong",null,"Share feedback"),o("- you will be able to share suggestions and requests with idemeum team")],-1),Y=e("li",null,[e("strong",null,"Request help"),o(" - this section will present options for how to contact idemeum team")],-1),q=e("strong",null,"Recovery code",-1),B=o("- in case your device is lost or stolen, you will be able to recover your data only with recovery code. In this section you will have an option to print your recovery QR code or save it to cloud storage. You can learn more about device recovery "),C=o("here"),G=o("."),H=e("li",null,[e("strong",null,"About"),o(" - information about your app: version, your unique identified (DID), and where the crypto keys are stored.")],-1);function Q(z,E){const n=a("router-link"),s=a("RouterLink");return c(),d("div",null,[y,e("nav",f,[e("ul",null,[e("li",null,[i(n,{to:"#home"},{default:t(()=>[w]),_:1})]),e("li",null,[i(n,{to:"#profile"},{default:t(()=>[b]),_:1})]),e("li",null,[i(n,{to:"#login"},{default:t(()=>[x]),_:1})]),e("li",null,[i(n,{to:"#activity"},{default:t(()=>[k]),_:1})]),e("li",null,[i(n,{to:"#settings"},{default:t(()=>[I]),_:1})])])]),S,e("div",O,[L,e("p",null,[R,A,D,i(s,{to:"/login-experience.html#_4-login-with-one-time-code-otp"},{default:t(()=>[P]),_:1}),N])]),T,e("ul",null,[V,Y,e("li",null,[q,B,i(s,{to:"/recovery-overview.html"},{default:t(()=>[C]),_:1}),G]),H])])}const M=r(v,[["render",Q],["__file","mobile-ui-overview.html.vue"]]);export{M as default};