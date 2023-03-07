import{_ as e,p as t,q as a,a1 as i}from"./framework-5866ffd3.js";const o="/assets/rfid-architecture-d49fad5b.png",r={},s=i('<h1 id="rfid-single-sign-on-architecture" tabindex="-1"><a class="header-anchor" href="#rfid-single-sign-on-architecture" aria-hidden="true">#</a> RFID Single Sign-On Architecture</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><div class="custom-container tip"><p class="custom-container-title">What is supported?</p><p>Today we support Active Directory domain-joined Windows computers. If you have a different environment or need us to support different integrations you can always contact us at <a href="mailto:support@idemeum.com">support@idemeum.com</a>, and we will be happy to help you with a custom design.</p></div><p><img src="'+o+'" alt="RFID access architecture"></p><h3 id="major-components" tabindex="-1"><a class="header-anchor" href="#major-components" aria-hidden="true">#</a> Major components</h3><p>There&#39;re several major components that will make passwordless login with RFID card possible:</p><ul><li><strong>idemeum desktop application</strong> - idemeum application will need to be installed on every workstation. Once installed and paired with idemeum cloud tenant, idemeum application will register as credential provider on Windows and will start processing all login requests with RFID card.</li><li><strong>idemeum cloud</strong> - idemeum cloud will serve as a management plane for RFID access, where you can manage users, workstations, as well as entitlements to define who has access to what.</li><li><strong>User source</strong> - idemeum will need to have access to user source where the mapping between badge number (encoded on RFID card) and employee corporate email address is maintained. When the badge is scanned, idemeum desktop application will receive badge number, and then it needs to find the corporate email address / User Principal Name (UPN) of the user associated with that badge number.</li><li><strong>Domain controller</strong> - idemeum desktop application will generate a virtual smart card for each user, and will use that smart card to log employee into domain environment without passwords.</li></ul><h3 id="user-login-flow" tabindex="-1"><a class="header-anchor" href="#user-login-flow" aria-hidden="true">#</a> User login flow</h3><p>Here is the generic user login flow that is performed when the RFID badge is scanned.</p><ol><li>User taps the RFID badge on the badge reader that is connected to a Windows computer over USB port. idemeum desktop application is integrated with the reader, it detects badge tap event and is able to extract that badge number.</li><li>idemeum desktop application communicates with the idemeum tenant that it is registered with, submits the badge number for user look up, and conducts the entitlement check to see if the user has permission to access workstation.</li><li>idemeum cloud connects to user source to validate the badge number and look up user corporate email address that will be used to login into a domain environment.</li><li>Once the user email is found, it is passed back to idemeum desktop application that in turn generates virtual smart card for the user and uses that smart card to log the user into a domain-joined workstation.</li></ol>',10),n=[s];function d(c,l){return t(),a("div",null,n)}const u=e(r,[["render",d],["__file","rfid-architecture.html.vue"]]);export{u as default};
