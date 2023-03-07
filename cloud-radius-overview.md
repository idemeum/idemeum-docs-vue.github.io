# Cloud Radius overview

## Overview

idemeum offers Cloud Hosted Radius service to help you protect your network and wireless infrastructure with passwordless access. Integrating with idemeum cloud Radius offers a new horizon of use cases - VPN control, MFA enforcement, VLAN segmentation, group based access control, no more shared passwords for WiFi and more.

You connect your infrastructure to a Cloud Radius server, and the communication is protected by complex shared secrets dedicated for your tenant. When your employees access VPN or WiFi they receive a familiar push notification to perform a passwordless multi-factor authentication. This way every connection is secure and offers seamless user experience for any resource that employees access in your organization.

🔗 Radius Passwordless MFA integration guide - [Passwordless MFA for network infrastrcuture](./mfa/mfa-network-infrastructure.html)

## What is supported?

* **Addresses**: only IPv4 addresses are supported. You can configure multiple IP addresses or CIDR block from which connections to Radius server will be allowed.
* **Port supported**: 1812
* **Supported protocols**: EAP-TTLS, EAP-TLS, EAP-PEAP/MSCHAP2
* **Encryption mode**: WPA2 Enterprise

## Cloud Radius IP addresses

Below you can find idemeum Cloud Radius configuration details so you can set up your infrastructure.

| IP address| Domain name| Server role|
|:------------- |:-------------|:-----------|
| 52.13.103.94 | us2.radius.idemeum.com | Primary |
| 44.235.117.166 | us2.radius.idemeum.com | Secondary |