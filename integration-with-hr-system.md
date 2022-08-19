# User source integration

## Overview

User source is critical for employee onboarding. As we reviewed in detail in the [employee onboarding](./employee-onboarding.html) section, users first verify their personal identity claims in the mobile app, and when scanning the QR code on the company portal for the first time, idemeum maps **personal** identity claims to **corporate email** using the integrated user source. 

Today we support the following options for user source:

1. **Local user source** - admins manually create user records, specifically mappings between personal and corporate identity claims so that new employees can be onboarded into an organization. 
2. **External user source** - idemeum can integrate with external user source, such as an HR system, Payroll provider, or an existing Identity Provider to onboard users automatically and automatically map new employees to company email addresses.

## External user source

External user source allows to leverage existing user database for personal to corporate identity claims mapping, and onboarding users automatically. Today we support a variety of integrations, and you can check our integrations portal here - [user source integrations](https://integrations.idemeum.com/tag/user-source/). 

Integration is very simple and leverages one of the following methods:

* **API key integration** - all you will need to do is to enter an API key in order to connect idemeum to your user source.
* **oAuth integration** - you will need to authorize idemeum to access user source API.

To connect idemeum to external user source navigate to to `Users` -> `User source`. Then choose the source that you want to connect to from a dropdown list. Then you will need to either enter an API key or conduct an oAuth authorization.

![User source](./images/user-source.png)

Let's take a look at some of the advanced settings:

* **Off-boarding frequency** - idemeum detects when employees are off-boarded so that idemeum can block access and de-provision accounts. Some systems do not support Web hooks therefore we need to periodically check if there are new off-boarded employees. With this configuration you can choose how often you want idemeum to check for off-boarded employees.
* **Corporate email format** - when employees onboard into organization they are using personal email address, phone number, or ID document. However, corporate email address is required in order for idemeum to log user into applications. As a first step idemeum looks for corporate email address in user source. If found that email will be used for all applications provisioned for the user. If the email is not found, idemeum will create one on the fly. With this setting you can choose what email format you will use for all employees. The default is `firstname.lastname@domain.com`.

## Local user source

With local user source admins can create users manually and specify personal claims to corporate email mappings. To configure local user source navigate to `Users` -> `User source` and choose `Local`. 

![User source](./images/local-source.png)

Let's take a look at some of the advanced settings:

* **Off-boarding frequency** - idemeum detects when employees are off-boarded so that idemeum can block access and de-provision accounts. With this configuration you can choose how often you want idemeum to check for off-boarded employees using local user source.

Now if you navigate to `User management` you will be able to create users to onboard into idemeum. 

![User source](./images/create-local-user.png)

When you add new user you can specify **personal claims** that will be used for onboarding, as well as **corporate email address** that will be assigned to a user.

![](./images/local-user-details.png)

::: tip More about user management

Once you create users in idemeum locally or onboard them with external user source there is a variety of actions that you can perform on users.

Navigate to a user management section to learn more. 

:::





