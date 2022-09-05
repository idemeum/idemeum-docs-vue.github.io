# Add custom SAML app

## Overview

idemeum certifies and deeply pre-configures SAML applications. For most of the applications we support, there is very little information that needs to be configured. Check our [integration catalog](https://integrations.idemeum.com) to browse all SAML applications that we support.

If there is a SAML application that we do not support, you can always add it using Custom SAML functionality. 

## How to configure custom SAML app

* Navigate to idemeum admin portal
* Access `Applications` -> `Add application` -> `Add custom SAML app`

![Add app](./images/custom-saml/add-app.png)

* Now you can start configuring SAML integration. To configure SAML in the target application you will need to consult their documentation and you will need to use your [idemeum tenant metadata](./how-to-obtain-saml-metadata-for-idemeum.html).
* To configure SAML in idemeum you will have 3 options, and you will need to rely on what integrating application requires you to do:
	* You can upload metadata link for target application
	* You can upload metadata file for target application
	* You can configure SAML integration manually
	
![Configure app](./images/custom-saml/configure-app.png)

* If you decide to configure SAML manually you will at least need `Assertion Consumer Service URL` and `Audience URI`. There might be other parameters that your application will present, and in idemeum you can expand advanced options to configure these additional values.

![Manul app](./images/custom-saml/manual.png)