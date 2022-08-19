import{_ as r,o as s,c,a as e,b as i,d as t,e as a,r as n}from"./app.7701c126.js";var l="/idemeum-docs-vue.github.io/assets/local-biometrics.cb1ee42f.png",d="/idemeum-docs-vue.github.io/assets/local-bio-registration.858847d5.png",h="/idemeum-docs-vue.github.io/assets/lock-portal.29a8a470.png",m="/idemeum-docs-vue.github.io/assets/unlock-portal.4d5c8142.png",u="/idemeum-docs-vue.github.io/assets/session-management.35a158b6.png",p="/idemeum-docs-vue.github.io/assets/idle.3272e512.png",b="/idemeum-docs-vue.github.io/assets/idle1.607c953b.png";const g={},f=e("h1",{id:"local-biometrics",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#local-biometrics","aria-hidden":"true"},"#"),t(" Local biometrics")],-1),w=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),_=e("p",null,[t("Oftentimes employees do not have a phone nearby or do not want to use mobile device every single time they access applications. What is more, most laptops today offer what is called "),e("strong",null,"platform biometric authenticators"),t(". For example an Apple MacBook will have a local fingerprint reader that can be used to authenticate employees.")],-1),v=e("p",null,"That is why idemeum offers an option for employees to use these platform authenticators, which we call local biometric sensors to access applications and company resources without passwords from laptops, tablets, and desktop devices.",-1),k={class:"custom-container tip"},y=e("p",{class:"custom-container-title"},"Local biometrics technology",-1),x=t("Technology that we are leveraging for local biometric authentication is called "),L={href:"https://fidoalliance.org/fido2/fido2-web-authentication-webauthn/",target:"_blank",rel:"noopener noreferrer"},W=t("Webauthn / FIDO2"),O=t(". Local biometrics are offered for browser flows and are dependent on your browser support of FIDO2. Even though most browsers today support Webauthn there are still some niche browsers that need to extend support for this technology."),T=t("You can check Webauthn browser support "),B={href:"https://caniuse.com/?search=webauthn",target:"_blank",rel:"noopener noreferrer"},I=t("here"),S=t("."),U=a('<h2 id="how-to-enable-local-biometrics" tabindex="-1"><a class="header-anchor" href="#how-to-enable-local-biometrics" aria-hidden="true">#</a> How to enable local biometrics</h2><p>Before employees can use the feature, administrators need to navigate to <code>Admin Portal</code> &gt; <code>Security Settings</code> &gt; <code>Login Settings</code> &gt; <code>Login with local biometrics</code> and enable the feature.</p><p><img src="'+l+'" alt="Local biometrics"></p><p>Once local biometrics are enabled employees will be able to register Webauthn credentials from supported browsers and perform logins with local biometrics.</p><h2 id="how-to-use-local-biometrics" tabindex="-1"><a class="header-anchor" href="#how-to-use-local-biometrics" aria-hidden="true">#</a> How to use local biometrics</h2><p>Once local biometrics login is enabled and user&#39;s browser supports Webauthn, users will need to go through 2 steps to start using this feature.</p><h4 id="_1-register-local-biometric-credential" tabindex="-1"><a class="header-anchor" href="#_1-register-local-biometric-credential" aria-hidden="true">#</a> 1. Register local biometric credential</h4><p>User will need to navigate to idemeum application portal and click on the <code>biometric icon</code> at the top of the menu. Once clicked, the system will prompt the user to scan biometric sensor and will confirm registration upon success.</p><h4 id="_2-lock-unlock-portal-with-local-biometrics" tabindex="-1"><a class="header-anchor" href="#_2-lock-unlock-portal-with-local-biometrics" aria-hidden="true">#</a> 2. Lock / unlock portal with local biometrics</h4><p>To lock the user portal users will need to click on the <code>lock</code> button at the top of the menu. To unlock the portal users will need to click <code>Unlock with biometrics</code> and provide the biometric scan to access applications.</p><h2 id="user-experience" tabindex="-1"><a class="header-anchor" href="#user-experience" aria-hidden="true">#</a> User experience</h2><h4 id="register-biometrics" tabindex="-1"><a class="header-anchor" href="#register-biometrics" aria-hidden="true">#</a> Register biometrics</h4><p>If user&#39;s browser supports Webauthn/FIDO, then user will be able to register her biometrics as show in the picture.</p><p><img src="'+d+'" alt="Registration"></p><h4 id="lock-user-portal" tabindex="-1"><a class="header-anchor" href="#lock-user-portal" aria-hidden="true">#</a> Lock user portal</h4><p>Users can manually lock client by clicking lock button. This button is only visible if biometrics are registered.</p><p><img src="'+h+'" alt="Lock portal"></p><h4 id="unlock-user-portal" tabindex="-1"><a class="header-anchor" href="#unlock-user-portal" aria-hidden="true">#</a> Unlock user portal</h4><p>Some of the following screenshots demonstrate locked User Portal &amp; Extension screens.</p><p><img src="'+m+'" alt="Unlock portal"></p><p>To unlock the client, user can click on Unlock with biometrics button, followed by biometric authentication.</p><h2 id="local-biometrics-demo" tabindex="-1"><a class="header-anchor" href="#local-biometrics-demo" aria-hidden="true">#</a> Local biometrics demo</h2>',22),F=e("div",{style:{position:"relative","padding-bottom":"62.5%",height:"0"}},[e("iframe",{src:"https://www.loom.com/embed/ddaf8aff68a4462a9e5c3cbd9cc0e258",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1),E=a('<h2 id="session-management" tabindex="-1"><a class="header-anchor" href="#session-management" aria-hidden="true">#</a> Session management</h2><p>Local biometrics provide added security as well as user convenience. When local biometrics are enabled, we recommend to extend the time when users are required to re-authenticate with a mobile device.</p><p><img src="'+u+'" alt="Session management"></p><p>For example, default time is set to 8 hours. Meaning once users log in and 8 hours after that they will need to re-authenticate with a mobile device, even if they are using local biometrics to lock and unlock user portal.</p><p>We recommend extending this time to a week or even longer as this will not compromise security and will add user convenience, as users will not need to use phone every time.</p><h2 id="idle-detection" tabindex="-1"><a class="header-anchor" href="#idle-detection" aria-hidden="true">#</a> Idle detection</h2><p>We take security even further by detecting if user is using a device / browser or not. We call it <strong>idle detection</strong>. idemeum&#39;s ability to detect user activity (mouse / keyboard activity) depends upon underlying platform (Browser, Operating System, Preferences etc.), hence actual experience can vary for different platforms.</p><p>If we detect that user is idle, then idemeum will automatically lock the user portal with local biometrics. By default idle timeout is set to 60 minutes. This interval is configurable, and can be set by the user.</p><p>Here is how to configure it. First access <strong>user portal settings</strong>.</p><p><img src="'+p+'" alt="idle management"></p><p>Then you can configure interval.</p><p><img src="'+b+'" alt="idle management"></p>',12);function N(V,D){const o=n("ExternalLinkIcon");return s(),c("div",null,[f,w,_,v,e("div",k,[y,e("p",null,[x,e("a",L,[W,i(o)]),O]),e("p",null,[T,e("a",B,[I,i(o)]),S])]),U,F,E])}var P=r(g,[["render",N],["__file","local-biometrics.html.vue"]]);export{P as default};
