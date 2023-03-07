# Windows Computers with Local Users

<div class='embed-container'><iframe src='https://www.youtube.com/embed/u9s1E_ZIs0k' frameborder='0' allowfullscreen></iframe></div>



## Overview

In this guide we will explore the steps necessary to set up passwordless MFA for your Windows workstations that have local accounts only, and that are not joined to Active Directory domain. This guide looks at the admin experience end-to-end to enable passwordless login for Windows workstations with local accounts. 

[[toc]]

## Prerequisites

### Windows OS requirements

We support the following Windows operating systems. 

| Operating system| Support| TPM required|
| ------------- |:-------------:|:-------:|
| Windows 10 | Yes | Yes |
| Windows 11 | Yes | Yes |

### TPM requirement

::: warning TPM Requirement

 Desktop MFA is supported on Windows machines where TPM is enabled. Please click [here to enable TPM on your PC](https://support.microsoft.com/en-us/windows/enable-tpm-2-0-on-your-pc-1fd5a332-360d-4f46-a1e7-ae6b0c90645c?ref=idemeum-integrations). By default, Windows 11 will have TPM enabled, whereas not all Windows 10 PC will have TPM enabled by default, and if the PC has TPM present and disabled, it can be enabled via BIOS setup. Refer to the same [link](https://support.microsoft.com/en-us/windows/enable-tpm-2-0-on-your-pc-1fd5a332-360d-4f46-a1e7-ae6b0c90645c?ref=idemeum-integrations) as before to learn more about how to verify whether TPM is present in the system.
 
:::

### Local user accounts

**Dedicated user mode** - if a workstaion is going to be used by a single user, then the user who is installing a desktop application, and pairing a mobile device will need to enter the password to complete the pairing and create a virtual smart card. There is no need to create any addition user accounts.

**Shared users mode** - if a workstation is going to be used by multiple roaming users, then you need to create local accounts on this workstation for each user. When a user logs into the workstation with a mobile device for the first time, she will be asked for username / password for the account that will be associated with a mobile device for passwordless login.


## Create users in idemeum directory

Each user will first need to install idemeum mobile application and onboard into your organization. 

🔗 Detailed guide for employee onboarding - [Employee onboarding](./employee-onboarding.html)

::: tip Onboarding Summary
- You configure what employees need to verify in the mobile application to onboard, for example email address or mobile phone number. 
- You create employee record in the idemeum directory with the email address / phone number that you expect employee to verify.
- Employee install mobile application, verifies identity, and when the QR-code will be scanned for the first time, employee will be onboarded into your organization.
:::

## Install windows desktop application

You can now install idemeum desktop client on your Windows machines. After successful installation you will be able to pair idemeum mobile device with idemeum desktop application.

🔗 Detailed guide to install desktop client - [Install Desktop Application](./desktop-app-install.html)

## Share workstation with other users

If the workstation is intended only for one user, you need to disable sharing. However, if you plan to offer desktop to roaming users, then you need to share the desktop with everyone who needs access. 

🔗 Detailed guide about desktop sharing - [Install Desktop Application](./desktop-mfa-share-access.html)

## Need help

If you need help or encounter any issue, please drop us a note at [support@idemeum.com](suppport@idemeum.com) 