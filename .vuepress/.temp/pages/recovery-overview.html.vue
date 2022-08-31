<template><div><h1 id="recovery-overview" tabindex="-1"><a class="header-anchor" href="#recovery-overview" aria-hidden="true">#</a> Recovery overview ❄️</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>One of the hardest things with passwordless technology is to provide seamless yet secure device recovery. Things happen - employees lose their devices, get new phones, and unfortunately sometimes our devices get stolen.</p>
<p>What makes things more complicated for us is that we are strictly adhering to our principle of <strong>zero-knowledge security</strong>. Users' passwords are encrypted on the client side, and our cloud has no knowledge of them. Moreover, the encryption key is residing on a mobile device protected by the hardware backed storage. Therefore we have to make key recovery secure yet seamless, so that we do not introduce friction to user experience.</p>
<h2 id="recovery-options" tabindex="-1"><a class="header-anchor" href="#recovery-options" aria-hidden="true">#</a> Recovery options</h2>
<p>Today we support two recovery options. You can learn more about them below.</p>
<ol>
<li><RouterLink to="/self-service-user-recovery.html"><strong>Self-service user recovery</strong></RouterLink> - this option does not require any admin actions. User can self-recover using recovery QR-code that they store offline or in Cloud storage.</li>
<li><RouterLink to="/admin-controlled-user-recovery.html"><strong>Admin controlled user recovery</strong></RouterLink> - this option is useful when users no longer have access to recovery QR-code. Users can request recovery from new device, and admins can approve the recovery request from admin portal.</li>
</ol>
<h2 id="what-is-recovered" tabindex="-1"><a class="header-anchor" href="#what-is-recovered" aria-hidden="true">#</a> What is recovered?</h2>
<p>The short answer is everything.</p>
<p>To provide more context we are striving to create a workplace without disruption, therefore we designed idemeum so that we can recover employee access to all resources.</p>
<ul>
<li>Employee is assigned the same decentralized identifier (DID) so that she can access the same applications and resources as before</li>
<li>Employee will be able to access all Single Sign-On applications as before</li>
<li>Employee password applications and all associated passwords will be restored</li>
<li>No re-provisioning of applications will be required</li>
</ul>
</div></template>


