# Employee onboarding

[[toc]]

## Overview
Our main goal was to make onboarding simple and without any initial passwords or tokens. 

Today idemeum offers **self-service MFA onboarding** that relies on employee's personal information. New hire installs idemeum mobile application, verifies personal email / phone number, navigates to a company portal and scans a QR code. From then on idemeum picks it up - we match a personal claim to a company user record, assign corporate email address, provision SaaS apps, assign infrastructure resources, and more - pretty much everything to give an employee access to all she needs from a single place.

## Employee experience
Employees go through 3 simple steps to onboard into company passwordless access. 

#### 1. Install idemeum mobile app

idemeum is available for both iOS and Android phones. Use the following links to download latest idemeum application from the app store - [IOS App Store](https://apps.apple.com/us/app/idemeum/id1552180449) or [Android Play Store](https://play.google.com/store/apps/details?id=com.idemeum.dvmi).

#### 2. Verify personal identity
Right from the mobile app employee verifies personal identity information, such as phone number, personal email address, or government ID.

Here is how verification is done: 

| Email address| Phone number| ID document|
| ------------- |:-------------:| -----------:|
| One time code | SMS | Liveness detection |

If document verification is performed, users take a photo of document (driver's license or passport) and do a face scan to perform liveness detection. Then idemeum performs document validation and matches liveness detection scan with the photo on the document. If successful, document is verified and stored on the mobile device.

::: warning About privacy

No personal information is stored in idemeum cloud. Once personal information is verified (email address, phone number, document), it is persisted on a mobile device only. 

:::

#### 3. Scan login QR-code

Once idemeum application is set up, users can navigate to a company idemeum portal (i.e. `company.idemeum.com`) and scan the login QR-code. Once onboarded employee has access to everything she needs in the same portal (SaaS applications, password vault, and infrastructure).

![QR-code scan](./images/qr-scan.png)

## Admin experience

As a first step you need to decide where you will manage users. We support [external user source](./integration-with-hr-system.html), such as HR system or Payroll provider, or you can manage users [locally](./integration-with-hr-system.html#local-user-source) in idemeum.

::: tip What is needed?

What idemeum needs is a mapping between a personal employee claim and corporate email address. So, you can manage these mappings in idemeum, or rely on external user management source.

:::

In the admin portal you can choose what information you want your new hires to verify before they can access company resources. You can choose email, phone number, first name / last name, or any combination of them.

![Onboarding configuration](./images/onboarding-configuration.png)

More information on how to manage users and user sources is [here](./integration-with-hr-system.html). 

## Onboarding flow example

Let's say an employee verifies a personal email address in idemeum app. This personal email address will be used to onboard an employee into an organization. What idemeum will need to do is to map this personal email address to a corporate email address assigned to this employee. This can be done with manually created record in idemeum local directory, or automatically using external user source such as HR system. 

![Onboarding with HR system](./images/onboarding-flow.jpeg)

* IT admin / HR team sends a new employee a welcome email that among other things invites employee to enroll into passwordless experience to access all company resources.
* Employee downloads idemeum app and goes through a 2 min set up process: enable biometrics, verify email address, phone number, or ID document. Information required to verify identity is configurable by company admin. Some companies might choose to only require employee to verify phone number. Some companies might be more strict and require remote ID document verification.
* Employee navigates to company application portal and scans idemeum QR code. Login will need to be approved with biometrics.
* Upon approval, information from mobile device is used to search for employee record in company HR system (HRMS) or idemeum local directory. Employee record can be searched by email address, phone number, or first name / last name.
* If the employee record is found, employee is onboarded, assigned corporate email address, and granted access to all necessary company applications, including SaaS applications, VPN access, and more.



