<template><div><h1 id="how-to-recover-user-guide" tabindex="-1"><a class="header-anchor" href="#how-to-recover-user-guide" aria-hidden="true">#</a> How to recover - user guide</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<div class="custom-container danger"><p class="custom-container-title">Enable admin controlled user recovery</p>
<p>Admin controlled recovery is not enabled for your tenant by default. Navigate to <code v-pre>Security settings</code> to enable admin recovery for your organization.</p>
</div>
<p>While idemeum offers seamless and secure <RouterLink to="/self-service-user-recovery.html">self-service user recovery</RouterLink>, we realize that there might be situations when users loose or do not store recovery codes. For this purpose we offer a functionality where users can request new device recovery without secure QR-code and wait until admins of the organization approve it.</p>
<p>Here is the high level overview of the process.</p>
<p><img src="@source/images/admin-recovery-diagram.png" alt="Admin recovery process"></p>
<h2 id="how-to-enable-admin-controlled-recovery" tabindex="-1"><a class="header-anchor" href="#how-to-enable-admin-controlled-recovery" aria-hidden="true">#</a> How to enable admin controlled recovery</h2>
<p>Navigate to your idemeum admin portal and choose <code v-pre>Security settings</code> -&gt; <code v-pre>Device recovery</code>. You can now toggle the switch to enable device recovery for your tenant.</p>
<p><img src="@source/images/enable-admin-recovery.png" alt="Admin recovery enable"></p>
<h2 id="user-experience" tabindex="-1"><a class="header-anchor" href="#user-experience" aria-hidden="true">#</a> User experience</h2>
<ul>
<li>User loses a mobile device with idemeum installed. A new instance of the mobile app is installed and the user chooses <code v-pre>Recover identity</code> from the welcome screen.</li>
</ul>
<img src="@source/images/recover-identity.png" width="200px">
<ul>
<li>On the next screen user chooses the option to recover without secure QR-code.</li>
</ul>
<img src="@source/images/recover-with-approval.png" width="200px">
<ul>
<li>User will then enable biometrics and verify email address and phone number.</li>
<li>Once the process is complete user will navigate to a company portal and attempt a login. At this time admin team will be notified of the recovery request.</li>
<li>Any admin of the organization can approve the recovery request by navigating to user management section of the admin portal.</li>
</ul>
<img src="@source/images/approve-recovery-request.png">
<ul>
<li>Once admin team approves the device recovery request, the user will be able to log in and recover access to all applications and resources.</li>
</ul>
<h2 id="admin-controlled-recovery-demo" tabindex="-1"><a class="header-anchor" href="#admin-controlled-recovery-demo" aria-hidden="true">#</a> Admin controlled recovery demo</h2>
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/aaeb8bf62c404b7e87f68254644184d8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
</div></template>
