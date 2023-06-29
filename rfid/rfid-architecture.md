# RFID Single Sign-On Architecture

[[toc]]

## Overview

idemeum offers cloud-based RFID Single Sign-On so that your employees can access workstations and applications with a simple RFID badge tap. Set up is seamless and easy, there is minimal footprint for you to deploy on premises, and you can literally set up a pilot in an hour. Check out [RFID SSO quick start guide](../rfid-quickstart.html) for more information. 

## Architecture components
![RFID access architecture](./images/rfid-architecture.png)

There're several major components that will make passwordless login with RFID card possible:

* **Desktop application** - idemeum application will need to be installed on every workstation. Once installed and paired with idemeum cloud tenant, idemeum application will register as credential provider on Windows and will start processing all login requests with RFID card. You can perform a manual installation for a quick deployment, or you can push the application with silent installer. 
* **idemeum cloud** - idemeum cloud will serve as a management plane for RFID access, where you can manage users, workstations, as well as entitlements to define who has access to what. 
* **User source** - when authenticating users with RFID badge, idemeum needs to know what user account is associated with what badge ID. For this mapping, idemeum can rely on [external user source](../integration-with-hr-system.html#external-user-source), such as Azure Active Directory, or maintain this mapping in the [local directory](../integration-with-hr-system.html#local-user-source). 
* **Domain controller** - idemeum desktop application will generate a virtual smart card for each user, and will use that smart card to log employee into domain environment without passwords. We can also support Azure Active Directory upon request.

## User login flow

Here is the generic user login flow that is performed when the RFID badge is scanned. 

1. User taps the RFID badge on the badge reader that is connected to a Windows computer over USB port. idemeum desktop application is integrated with the reader, it detects badge tap event and is able to extract that badge number.
2. idemeum desktop application communicates with the idemeum tenant that it is registered with, submits the badge number for user look up, and conducts the entitlement check to see if the user has permission to access workstation.
3. idemeum cloud connects to user source to validate the badge number and look up user corporate email address that will be used to login into a domain environment (can be local directory or external user source).
4. Once the user email is found, it is passed back to idemeum desktop application that in turn generates virtual smart card for the user and uses that smart card to log the user into a domain-joined workstation. 