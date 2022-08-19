<template><div><h1 id="mobile-ui-overview" tabindex="-1"><a class="header-anchor" href="#mobile-ui-overview" aria-hidden="true">#</a> Mobile UI overview</h1>
<h2 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> Home</h2>
<p>Home screen is where you can immediately access your applications with a simple click. Great thing about idemeum is that it aggregates all Single Sign-On (SSO) and password-based applications in a single place. If you click on SSO application, it will launch seamlessly without any passwords. If you launch password based application, it will launch, password will be auto-filled, and you will be logged in.</p>
<img src="@source/images/ui-overview/home-screen.png" width="200px">
<h2 id="profile" tabindex="-1"><a class="header-anchor" href="#profile" aria-hidden="true">#</a> Profile</h2>
<p>In profile section you can add your verified digital identity claims. These claims will be used to onboard you into your organization. idemeum supports verifying the following personal claims:</p>
<ol>
<li>Email address</li>
<li>Phone number</li>
<li>Government issued ID</li>
</ol>
<img src="@source/images/ui-overview/profile-screen.png" width="200px">
<h2 id="login" tabindex="-1"><a class="header-anchor" href="#login" aria-hidden="true">#</a> Login</h2>
<p>Clicking on <code v-pre>Login</code> will open the camera to scan the QR code.</p>
<img src="@source/images/ui-overview/login-screen.png" width="200px">
<div class="custom-container tip"><p class="custom-container-title">Login with OTP</p>
<p>On Android devices <code v-pre>Login</code> screen also shows an option to login with one-time code OTP. You can learn more about it <RouterLink to="/login-experience.html#_4-login-with-one-time-code-otp">here</RouterLink>.</p>
</div>
<p>Once you scan a valid QR code you will be redirected to login approval screen. On that screen you will be able to approve login and perform biometric scan.</p>
<img src="@source/images/ui-overview/approval-screen.png" width="200px">
<div class="custom-container tip"><p class="custom-container-title">Geolocation security</p>
<p>You will also be shown a map with location of your mobile and desktop devices. In case the devices are too far apart, it might be a fraudulent login that you need to carefully assess before approving. You can learn more about geolocation security here.</p>
</div>
<h2 id="activity" tabindex="-1"><a class="header-anchor" href="#activity" aria-hidden="true">#</a> Activity</h2>
<p>Activity is a section where you will see information about various application activity, such as adding a new email address, or logging into an application.</p>
<img src="@source/images/ui-overview/activity-screen.png" width="200px">
<h2 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> Settings</h2>
<p>In the settings section you will be able to set up your application security settings and get information about application version and your decentralized identifier (DID).</p>
<img src="@source/images/ui-overview/settings-screen.png" width="200px">
<ul>
<li><strong>Share feedback</strong>- you will be able to share suggestions and requests with idemeum team</li>
<li><strong>Request help</strong> - this section will present options for how to contact idemeum team</li>
<li><strong>Recovery code</strong>- in case your device is lost or stolen, you will be able to recover your data only with recovery code. In this section you will have an option to print your recovery QR code or save it to cloud storage. You can learn more about device recovery <RouterLink to="/recovery-overview.html">here</RouterLink>.</li>
<li><strong>About</strong> - information about your app: version, your unique identified (DID), and where the crypto keys are stored.</li>
</ul>
</div></template>
