import{_ as c,r as s,o as d,c as u,a as e,b as i,w as t,e as o,d as a}from"./app.c4cb680b.js";const p="/assets/autofill-ios.778df945.png",h="/assets/android-fill.e0cbe159.jpg",m="/assets/autofill-browser.28baee40.png",f="/assets/filled.4f0a9f2f.png",_="/assets/popup-browser.16555e39.png",w="/assets/ios-suggest.6b531dcf.png",b="/assets/keyboard-account.7707ca5a.png",y="/assets/click-key.2e354e06.png",g="/assets/choose-account.5518d4aa.png",v="/assets/android-popup.73bde694.jpg",k={},x=e("h1",{id:"password-autofill",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#password-autofill","aria-hidden":"true"},"#"),o(" Password autofill")],-1),A={class:"table-of-contents"},I=o("Overview"),S=o("Prerequisites to enable autofill"),P=o("Install idemeum browser extension"),q=o("Enable autofill on iOS"),O=o("Enable autofill on Android"),L=o("Autofill on desktop"),N=o("Autofill on mobile"),T=o("iOS"),C=o("Android"),E=a('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>Autofill is a feature that gives you the option to automatically enter your saved passwords in public SaaS as well as private cloud web applications. Normally, you would have to manually type your login information into each box. Autofill speeds up the experience by securely retrieving and submitting the relevant password from your idemeum vault.</p><p>You can autofill password in web application in two ways, depending on where you launch the application from:</p><ol><li><strong>Launch from idemeum portal</strong> - You launch application from idemeum portal, browser extension, or mobile catalog. New browser tab will open, and credentials will be automatically filled. <em>This type of launch is called IDP-init</em>.</li><li><strong>Launch application directly</strong> - You navigate to an application URL directly, click into the username or password field, and you will see idemeum inline pop up suggesting credentials that you can use for autofill. <em>This type of launch is called SP-init</em>.</li></ol>',4),V=e("div",{class:"embed-container"},[e("iframe",{src:"https://www.youtube.com/embed/-B2V1ZW51qA",frameborder:"0",allowfullscreen:""})],-1),B=a('<h2 id="prerequisites-to-enable-autofill" tabindex="-1"><a class="header-anchor" href="#prerequisites-to-enable-autofill" aria-hidden="true">#</a> Prerequisites to enable autofill</h2><div class="custom-container warning"><p class="custom-container-title">Requirements</p><ul><li><strong>Desktop autofill</strong> - in order to launch and autofill credentials on desktop you need to install idemeum browser extension.</li><li><strong>Mobile autofill</strong> - once you install idemeum mobile application, you need to enable idemeum as credential provider.</li></ul></div><h3 id="install-idemeum-browser-extension" tabindex="-1"><a class="header-anchor" href="#install-idemeum-browser-extension" aria-hidden="true">#</a> Install idemeum browser extension</h3><p>We support extensions for various browsers.</p>',4),D=o("Navigate to our "),R={href:"https://idemeum.com/download",target:"_blank",rel:"noopener noreferrer"},j=o("download"),Y=o(" section to download necessary extension for your browser."),F=a('<h3 id="enable-autofill-on-ios" tabindex="-1"><a class="header-anchor" href="#enable-autofill-on-ios" aria-hidden="true">#</a> Enable autofill on iOS</h3><ul><li>Install idemeum mobile application on your iPhone</li><li>Open <code>Settings</code></li><li>Choose <code>Passwords</code>, then <code>AutoFill Passwords</code></li><li>Make sure autofill feature is enabled</li><li>Select idemeum as credential provider</li></ul><img src="'+p+'" width="200"><h3 id="enable-autofill-on-android" tabindex="-1"><a class="header-anchor" href="#enable-autofill-on-android" aria-hidden="true">#</a> Enable autofill on Android</h3><ul><li>Install idemeum mobile application on your Android phone</li><li>Open <code>Settings</code></li><li>Click <code>Search</code>, and search for <code>Passwords and autofill</code></li><li>Click <code>Autofill service</code></li><li>Select idemeum as credential provider</li></ul><img src="'+h+'" width="200"><h2 id="autofill-on-desktop" tabindex="-1"><a class="header-anchor" href="#autofill-on-desktop" aria-hidden="true">#</a> Autofill on desktop</h2><ul><li>Navigate to your idemeum portal or use browser extension</li><li>Click on the password application tile that you wan to launch</li></ul><p><img src="'+m+'" alt="Launch application"></p>',9),M=e("li",null,"The new browser tab will open. If you do not land directly on the login page for that application, you can proceed by navigating to the appropriate login page.",-1),W=o("Credentials will get autofilled, including "),U=o("one-time code (TOTP)"),Z=o(" if that is configured for an application."),z=a('<p><img src="'+f+'" alt="Filled"></p><ul><li>If you navigate to application directly, you can click on idemeum icon and choose from the suggested accounts that are available in your vault. idemeum icon will be visible in both <code>username</code> and <code>password</code> fields.</li></ul><p><img src="'+_+'" alt="Popup"></p><h2 id="autofill-on-mobile" tabindex="-1"><a class="header-anchor" href="#autofill-on-mobile" aria-hidden="true">#</a> Autofill on mobile</h2><h3 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h3><ul><li>Open your idemeum application</li><li>Launch the password application you want to access</li><li>New browser tab will open and you will be suggested an account to autofill</li></ul><img src="'+w+'" width="200"><ul><li>If account is not suggested automatically, you can always click on the &quot;key&quot; icon to request available accounts from idemeum.</li></ul><img src="'+b+'" width="200"><ul><li>If you are accessing an application with one-time code enabled (TOTP), the code will be automatically copied into clipbord, so you can just paste it as necessary.</li><li>By clicking on the &quot;key&quot; icon on the keyboard, you can access idemeum and choose the account to autofill. This is useful if you have multiple accounts for the same application, and you need to choose the correct one.</li></ul><img src="'+y+'" width="200"><img src="'+g+'" width="200">',12),G={class:"custom-container warning"},H=e("p",{class:"custom-container-title"},"View password manually",-1),J=o("If for some reason the account is not autofilled, you can always access password manually and fill it by copying and pasting. Documentation for how to "),K=o("view password manually"),Q=o(" is here."),X=e("h3",{id:"android",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#android","aria-hidden":"true"},"#"),o(" Android")],-1),$=e("ul",null,[e("li",null,"Open your idemeum application"),e("li",null,"Launch the password application you want to access"),e("li",null,"New browser tab will open and you will be suggested an account to autofill")],-1),ee=e("img",{src:v,width:"200"},null,-1),oe=e("ul",null,[e("li",null,[o("If you have multiple accounts or would like to search for specific account, you can click "),e("code",null,"Search in idememeum"),o(" option")])],-1),ie={class:"custom-container warning"},te=e("p",{class:"custom-container-title"},"View password manually",-1),le=o("If for some reason the account is not autofilled, you can always access password manually and fill it by copying and pasting. Documentation for how to "),ae=o("view password manually"),ne=o(" is here.");function se(re,ce){const l=s("router-link"),r=s("ExternalLinkIcon"),n=s("RouterLink");return d(),u("div",null,[x,e("nav",A,[e("ul",null,[e("li",null,[i(l,{to:"#overview"},{default:t(()=>[I]),_:1})]),e("li",null,[i(l,{to:"#prerequisites-to-enable-autofill"},{default:t(()=>[S]),_:1}),e("ul",null,[e("li",null,[i(l,{to:"#install-idemeum-browser-extension"},{default:t(()=>[P]),_:1})]),e("li",null,[i(l,{to:"#enable-autofill-on-ios"},{default:t(()=>[q]),_:1})]),e("li",null,[i(l,{to:"#enable-autofill-on-android"},{default:t(()=>[O]),_:1})])])]),e("li",null,[i(l,{to:"#autofill-on-desktop"},{default:t(()=>[L]),_:1})]),e("li",null,[i(l,{to:"#autofill-on-mobile"},{default:t(()=>[N]),_:1}),e("ul",null,[e("li",null,[i(l,{to:"#ios"},{default:t(()=>[T]),_:1})]),e("li",null,[i(l,{to:"#android"},{default:t(()=>[C]),_:1})])])])])]),E,V,B,e("p",null,[D,e("a",R,[j,i(r)]),Y]),F,e("ul",null,[M,e("li",null,[W,i(n,{to:"/totp-mfa.html"},{default:t(()=>[U]),_:1}),Z])]),z,e("div",G,[H,e("p",null,[J,i(n,{to:"/edit-password-application.html"},{default:t(()=>[K]),_:1}),Q])]),X,$,ee,oe,e("div",ie,[te,e("p",null,[le,i(n,{to:"/edit-password-application.html"},{default:t(()=>[ae]),_:1}),ne])])])}const ue=c(k,[["render",se],["__file","autofill-passwords.html.vue"]]);export{ue as default};
