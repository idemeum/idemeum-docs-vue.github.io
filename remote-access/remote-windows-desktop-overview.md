# Windows Desktop Access

## Overview

A `Remote Windows Desktop` is any computer, physical or virtual, that runs Microsoft Windows operating system (Windows Server 2012 R2 / Windows 10 or newer), resides on a company's private network, and can be accessed over Remote Desktop Protocol (RDP). The private network can be on-premises as well as in the cloud: AWS, Azure, Google Cloud etc.

idemeum will help you manage remote access and passwordless login into your domain joined Windows desktops and workstations. With idemeum you will get:

* Access to your desktops from anywhere in the world without VPN
* Passwordless login into your Windows desktops
* Role-based access control (RBAC) for groups of hosts and users
* Audit log and recording of all desktop connections.

::: warning Supported platforms

idemeum supports accessing Windows hosts using RDP protocol. We support the following:

* Windows Server 2012 R2 / Windows 10 or newer
* Hosts connected to an Active Directory domain

:::


## Getting started

1. **Enable remote access infrastructure**
	* Before integrating remote Windows desktops with idemeum, make sure you [enable remote access](../remote-access/enable-remote-access.html) infrastructure, as it is not enabled by default.
2. **Set up Domain Controller for integration**
	* In order to use idemeum for passwordless access to remote desktops in your private network there are [few things that need to be configured](..//remote-access/windows-active-domain-configuration.html) on your Domain Controller server.
3. **Set up desktops in idemeum**
	* You will need to [add desktops to your idemeum cloud](../remote-access/remote-windows-desktop.html) portal and give access to users using entitlement rules.
4. **Install idemeum agent**
	* In order to access Windows Hosts from anywhere without VPN you need to [install idemeum agent](../remote-access/install-agent.html) in your environment. 
