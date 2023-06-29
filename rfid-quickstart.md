# RFID Single Sign-On quick start :rocket:

## Overview

<div class='embed-container'><iframe src='https://www.youtube.com/embed/YK1b9mG6gkY' frameborder='0' allowfullscreen></iframe></div>

Here are the steps we will take to set up a [RFID Single Sign-On](./rfid/rfid-overview.html) into Windows domain joined workstations. 

[[toc]]

## Create idemeum cloud tenant

As a first step we will create a dedicated idemeum cloud tenant. 

- **[Download](https://docs.idemeum.com/downloads)** idemeum mobile application from **[IOS App Store](https://apps.apple.com/us/app/idemeum/id1552180449)** or **[Android Play Store](https://play.google.com/store/apps/details?id=com.idemeum.dvmi)**.
- Set up idemeum application and **verify your business email address**. We will use your business domain name to create a cloud portal for you in the form `your-domain.idemeum.com`
- Navigate to **[https://idemeum.com/try](https://idemeum.com/try)**, choose the `Plus` license, and after that scan idemeum QR-code with your idemeum application.
- You can now access your tenant at `your-domain.idemeum.com` with your mobile device.

::: tip 📌 Need more admins?
Now the person who used his mobile device will become the `Admin` of the cloud idemeum tenant. You can add more admins later in the process.
:::

## Set up Active Directory Certificate Services (ADCS) and certificate template

When users tap the badge to login, idemeum desktop application generates a virtual smart card to log the user into workstation. For this to work we need to set up Certificate Template on the Windows Domain Controller. 

This step will take 10-15 minutes and we [documented step-by-step instructions](https://integrations.idemeum.com/windows-desktop-login-mfa-adcs-configuration/). 

## Set up RFID readers

idemeum supports the following [RFID readers](./rfid/rfid-readers.html) today. 

Once the badge is tapped, reader extracts the badge number and passes it to idemeum desktop client. idemeum client will convert the number in digital format and will perform a user lookup in your directory in order to extract a corporate email address the scanned badge number. Therefore the badge number format passed by the reader needs to match the badge number format that you are using in your directory.

If you need to configure the readers and set up the number formatting, please take a look [here](./rfid/rfid-readers.html#reader-configuration). 



## Set up 2-3 users in the local directory

We will now set up test users in the idemeum Local Cloud Directory so that these users are able to access workstations with RFID badges. 

- Navigate to `your-domain.idemeum.com/adminportal`
- Access `Users` → `User source` and choose `Local`
- Save the configuration
- Navigate to `Users` → `User management` and choose `Add user`
- Specify the following parameters
    - `First name` and `last name`
    - `Corporate email address` needs to match the UPN in active directory
    - Enter the `Badge ID` that the user will use to login into the workstation (decimal number, needs to be same that is passed from the reader)
    - Save the configuration
- Repeat the following steps for all users in the test group

## Adjust sharing settings

To make sure each and every user can access any workstation with an RFID badge, we need to allow workstation sharing. 

- Navigate to `Settings` → `Desktop MFA`
- Make sure you have the following enabled
    - `Share with all admins on creation` is turned on
    - `Share with all users on creation` is turned on

## Install idemeum desktop application

We will use the manual desktop client installation. For large production deployments we can use silent installation method to automatically push the desktop client to all required workstations.

We documented all steps required to [install idemeum desktop client](https://integrations.idemeum.com/windows-installation-guide-for-domain-joined/).

## Test RFID Single Sign-On

You can now start testing RFID SSO with the users that you created in the local directory. You can test various flows, including `tap in`, `tap out`, `tap over`, `lock/unlock`, as well as `switch user` scenarios.

Check out all the supported features [here](./rfid/rfid-features.html). 


Drop us a note at [support@idemeum.com](mailto:support@idemeum.com)