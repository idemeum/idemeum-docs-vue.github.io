# Windows Domain Joined Computers

[[toc]]

## Overview

In this document we will explore the steps necessary to perform to set up passwordless MFA for your Windows domain-joined computers.

## Prerequisites

We support the following Windows operating systems. 

| Operating system| Support| TPM required|
| ------------- |:-------------:|:-------:|
| Windows 10 | Yes | Yes |
| Windows 11 | Yes | Yes |

::: warning TPM requirement

 Desktop MFA is supported on Windows machines where TPM is enabled. Please click [here to enable TPM on your PC](https://support.microsoft.com/en-us/windows/enable-tpm-2-0-on-your-pc-1fd5a332-360d-4f46-a1e7-ae6b0c90645c?ref=idemeum-integrations). By default, Windows 11 will have TPM enabled, whereas not all Windows 10 PC will have TPM enabled by default, and if the PC has TPM present and disabled, it can be enabled via BIOS setup. Refer to the same [link](https://support.microsoft.com/en-us/windows/enable-tpm-2-0-on-your-pc-1fd5a332-360d-4f46-a1e7-ae6b0c90645c?ref=idemeum-integrations) as before to learn more about how to verify whether TPM is present in the system.
 
:::

## Set up Active Directory Certificate Services (AD CS)

**Active Directory Certificate Services (AD CS)** is leveraged to perform certificate-based login, i.e., smart card login post completing MFA via idemeum mobile application.

Before installing idemeum desktop client on domain-joined machines, please ensure you perform a one-time configuration to set up Active Directory Certificate Services.

🔗 Detailed guide for AD CS - [Windows Desktop MFA - AD CS configuration](https://integrations.idemeum.com/windows-desktop-login-mfa-adcs-configuration/)

::: warning Validate AD CS Configuration

Once you perform AD CS configuration, it is great to validate setup to make sure there are no issues, and certificates can be issued successfully. Follow these steps to validate AD CS configuration - [Validate AD CS configuration](https://integrations.idemeum.com/windows-desktop-mfa-validate-adcs/)

:::

## Install idemeum desktop application

You can now install idemeum desktop client on your Windows machines. After successful installation you will be able to pair idemeum mobile device with idemeum desktop application.

🔗 Detailed guide to install desktop client - [Install Desktop Application](./desktop-app-install.html)


## Share workstation with other users

If the workstation is intended only for one user, you need to disable sharing. However, if you plan to offer desktop to roaming users, then you need to share the desktop with everyone who needs access. 

🔗 Detailed guide about desktop sharing - [Install Desktop Application](./desktop-mfa-share-access.html)

## Need help

If you need help or encounter any issue, please drop us a note at [support@idemeum.com](suppport@idemeum.com) 