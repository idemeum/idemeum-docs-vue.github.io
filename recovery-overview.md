# Recovery overview :snowflake:

## Overview

One of the hardest things with passwordless technology is to provide seamless yet secure device recovery. Things happen - employees lose their devices, get new phones, and unfortunately sometimes our devices get stolen.

What makes things more complicated for us is that we are strictly adhering to our principle of **zero-knowledge security**. Users' passwords are encrypted on the client side, and our cloud has no knowledge of them. Moreover, the encryption key is residing on a mobile device protected by the hardware backed storage. Therefore we have to make key recovery secure yet seamless, so that we do not introduce friction to user experience.

## Recovery options

Today we support two recovery options. You can learn more about them below.

1. [**Self-service user recovery**](./self-service-user-recovery.html) - this option does not require any admin actions. User can self-recover using recovery QR-code that they store offline or in Cloud storage.
2. [**Admin controlled user recovery**](./admin-controlled-user-recovery.html) - this option is useful when users no longer have access to recovery QR-code. Users can request recovery from new device, and admins can approve the recovery request from admin portal.

## What is recovered?

The short answer is everything. 

To provide more context we are striving to create a workplace without disruption, therefore we designed idemeum so that we can recover employee access to all resources.

* Employee is assigned the same decentralized identifier (DID) so that she can access the same applications and resources as before
* Employee will be able to access all Single Sign-On applications as before
* Employee password applications and all associated passwords will be restored
* No re-provisioning of applications will be required