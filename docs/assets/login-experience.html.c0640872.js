import{_ as i,o as t,c as n,e as o,a as e}from"./app.3bea9855.js";const l="/assets/qr-code.b5bcffef.png",a="/assets/push-notification.89957267.png",s="/assets/mobile-login.8969938e.png",c="/assets/otp.b28cfd51.png",r="/assets/otp1.9eec7364.png",d="/assets/otp2.a3f82669.png",p={},h=o('<h1 id="login-experience-with-mfa" tabindex="-1"><a class="header-anchor" href="#login-experience-with-mfa" aria-hidden="true">#</a> Login experience with MFA</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>When accessing company resources idemeum offers passwordless logins of several types. Instead of entering passwords, employees leverage biometrics to access any resource securely.</p><p>Every login with idemeum is <strong>multi-factor</strong>, as several authentication factors are used: <strong>certificates</strong> (<em>something you have</em>) and <strong>biometrics</strong> (<em>something you are</em>).</p><h2 id="_1-login-with-qr-code" tabindex="-1"><a class="header-anchor" href="#_1-login-with-qr-code" aria-hidden="true">#</a> 1. Login with QR-code</h2><p>To login with QR-code you will need:</p><ol><li>Access company application portal or any resource such as VPN or Wi-Fi. You will be shown an idemeum QR-code.</li><li>Scan the QR-code with idemeum mobile application.</li><li>Once you scan the QR code you will see the approval screen that you will need to approve with biometrics.</li></ol><p>Here is how login page with QR code looks like.</p><p><img src="'+l+'" alt="QR-code login"></p>',9),m=e("div",{style:{position:"relative","padding-bottom":"62.5%",height:"0"}},[e("iframe",{src:"https://www.loom.com/embed/9912d8a4b5c54741a8c4093e7920625a",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1),u=o('<h2 id="_2-login-with-push-notification" tabindex="-1"><a class="header-anchor" href="#_2-login-with-push-notification" aria-hidden="true">#</a> 2. Login with push notification</h2><p>Push notification login works on desktop browsers where you already logged in once with QR-code login. After QR-code login idemeum saves cookie in your browser so that next time when you login from the same browser a mobile notification will be sent to your mobile device.</p><p>To login with puch notification you will need:</p><ol><li>Access company application portal through a desktop browser where you already logged in before.</li><li>You will receive a push notification to your device.</li><li>Approve login with biometrics.</li></ol><p>Here is how login page with push notification looks like.</p><p><img src="'+a+'" alt="Push notification login"></p><div class="custom-container warning"><p class="custom-container-title">QR-code fallback</p><p>If for some reason you did not receive a notification you can switch back to login with QR-code instead by clicking on <code>Use QR code</code> instead link.</p></div>',7),w=e("div",{style:{position:"relative","padding-bottom":"62.5%",height:"0"}},[e("iframe",{src:"https://www.loom.com/embed/cfe037cfb329483ab4ac25660a3813c2",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1),g=o('<h2 id="_3-login-with-universal-link-on-mobile" tabindex="-1"><a class="header-anchor" href="#_3-login-with-universal-link-on-mobile" aria-hidden="true">#</a> 3. Login with universal link on mobile</h2><p>When logging into application or resources on mobile phones you can not scan idemeum QR-code. Therefore we provide seamless capability to login with a click of a button. When accessing an application on your mobile phone you will be redirected to idemeum app and will see <code>Login with idemeum</code> button. Once you click that button, idemeum application will open and you will be able to approve login with biometrics.</p><p>To login with universal link on mobile you will need:</p><ol><li>Access application or company portal on your mobile phone.</li><li>You will see <code>Login with idemeum</code> button.</li><li>Once clicking the button you will be redirected to idemeum app for approval.</li><li>Approve login with biometrics and go back to application.</li></ol><p>Here is how idemeum login page looks like on a mobile device.</p><img src="'+s+'" width="200px">',6),b=e("div",{style:{position:"relative","padding-bottom":"62.5%",height:"0"}},[e("iframe",{src:"https://www.loom.com/embed/07cda5cf6d724f7c876687e35a7d18ea",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1),f=o('<h2 id="_4-login-with-one-time-code-otp" tabindex="-1"><a class="header-anchor" href="#_4-login-with-one-time-code-otp" aria-hidden="true">#</a> 4. Login with One-Time-Code (OTP)</h2><p>When you access company resources from mobile devices and need to login with idemeum, you will be automatically sent to idemeum app to complete login with biometrics. We are leveraging universal links to enable this experience.</p><p>Unfortunately universal links do not always work on Android, especially when you access native applications. To solve this problem and still offer passwordless experience for Android native applications we built login with one-time code capability.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Login with One-time code is only applicable to logging into native applications on Android. When you need to access applications with mobile browser you will be automatically sent to idemeum app.</p></div><p>To login with OTP you will need:</p><ol><li>On Android access any company native application that you need to log into</li><li>You will type in your username, and a Web-view will open with your one-time login code. Memorize this code or copy it to clipboard.</li></ol><img src="'+c+'" width="200px"><ol start="3"><li>Now you can manually go to idemeum app, launch it and click Login at the bottom menu</li></ol><img src="'+r+'" width="200px"><ol start="4"><li>Click <code>Login with OTP</code> at the bottom of the screen. You will see a screen where you can now enter your one-time code.</li></ol><img src="'+d+'" width="200px"><ol start="5"><li>Approve login with biometrics and you are good to go. Return to original application and you will be logged in.</li></ol>',12),y=e("div",{style:{position:"relative","padding-bottom":"56.25%",height:"0"}},[e("iframe",{src:"https://www.loom.com/embed/62d43bda5eab42c1bfb825b0e45df6ef",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})],-1),v=[h,m,u,w,g,b,f,y];function _(k,x){return t(),n("div",null,v)}const Q=i(p,[["render",_],["__file","login-experience.html.vue"]]);export{Q as default};