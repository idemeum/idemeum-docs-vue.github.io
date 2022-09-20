# Secure Remote Access
[[toc]]

## Overview

idemeum provides cloud proxy to access your infrastructure and private cloud applications.

* Replace your legacy VPN and centralize passwordless access to all on-premises resources in one place including web applications, SSH servers, and RDP desktops.
* Eliminate passwords and replace then with short-lived certificates
* Implement detailed Zero Trust access policies to give your employees access to only what they need

![Remote access overview](../remote-access/images/overview.png)

::: tip End to end functionality

idemeum offers end to end access experience:

*  **Connect** to resource without exposing any ports
*  **Authenticate** access with passwordless MFA
*  **Authorize** access based on defined conditions
*  **Audit** activity and record user sessions

:::

## Core components
Remote access infrastructure is hosted in idemeum cloud and removes the need to manage any servers in your private cloud. 

### Proxy service

idemeum Proxy service allows employees to access on-premises company resources from the public network. First the user is authenticated with idemeum Passwordless MFA, then access policies are evaluated to make sure user is authorized to access on-premises resources, and only then the connection is proxied to a destination resource, i.e. SSH server. 

Proxy service also issues client certificates to replace passwords, collects audit information and session recordings. 

### Agent

Agent allows you to seamlessly connect to on-premises resources without exposing any ports or changing network configuration. Here is the agent functionality: 

* Connects to proxy service with outbound persistent tunnel to connect to services not exposed to Internet
* Provides automatic registration with proxy service to simplify integration set up
* Record terminal sessions
* Can replace OpenSSH daemons to connect to SSH servers using short lived certificates