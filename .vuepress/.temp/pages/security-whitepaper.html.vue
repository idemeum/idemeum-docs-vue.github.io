<template><div><h1 id="security-white-paper" tabindex="-1"><a class="header-anchor" href="#security-white-paper" aria-hidden="true">#</a> Security white paper</h1>
<nav class="table-of-contents"><ul><li><router-link to="#overview">Overview</router-link></li><li><router-link to="#platform-components">Platform components</router-link></li><li><router-link to="#fundamental-security-principles">Fundamental security principles</router-link></li><li><router-link to="#security-of-idemeum-mobile-app-dvmi">Security of idemeum mobile app (DVMI)</router-link><ul><li><router-link to="#how-the-decentralized-user-identifier-did-is-created">How the decentralized user identifier (DID) is created</router-link></li><li><router-link to="#how-identity-claims-are-verified-and-securely-stored">How identity claims are verified and securely stored</router-link></li><li><router-link to="#passwordless-login-flow">Passwordless login flow</router-link></li><li><router-link to="#how-the-password-manager-user-keys-are-secured">How the password manager user keys are secured</router-link></li><li><router-link to="#securing-password-manager-user-key-in-transit">Securing password manager user key in transit</router-link></li><li><router-link to="#decentralized-identifier-recovery">Decentralized identifier recovery</router-link></li></ul></li><li><router-link to="#web-security">Web security</router-link><ul><li><router-link to="#how-password-manager-operations-are-secured-in-the-browser-and-browser-extension">How password manager operations are secured in the browser and browser extension</router-link></li><li><router-link to="#how-password-manager-user-key-is-secured-in-client-storage-at-rest">How password manager user key is secured in client storage at rest</router-link></li><li><router-link to="#how-json-web-token-s-are-secured">How JSON Web Token&#39;s are secured</router-link></li><li><router-link to="#protecting-against-cross-site-request-forgery">Protecting against Cross Site Request Forgery</router-link></li></ul></li><li><router-link to="#random-number-generation">Random number generation</router-link></li></ul></nav>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>This paper openly and transparently shows how we architected idemeum from the security standpoint. We have detailed all architecture designs, crypto algorithms, protocols, and approaches we took to secure data and companies that are using idemeum.</p>
<h2 id="platform-components" tabindex="-1"><a class="header-anchor" href="#platform-components" aria-hidden="true">#</a> Platform components</h2>
<p>Privacy and security are in our DNA, which is why idemeum's platform is built on the core principles of zero passwords, data security, data privacy, and strong cryptography.</p>
<p>The platform is made up of multiple secure components that demonstrate the  information security characteristics of confidentiality, integrity and availability (the <a href="https://en.wikipedia.org/wiki/Information_security" target="_blank" rel="noopener noreferrer">CIA triad<ExternalLinkIcon/></a>). We will delve into the security aspects of each component in this paper.</p>
<p><img src="@source/images/platform-components.jpeg" alt="Platform"></p>
<ul>
<li><strong>idemeum cloud</strong> - our backend infrastructure, deployed on AWS.</li>
<li><strong>Browser admin and user portal</strong> - web applications where a user can manage and access their assigned applications.</li>
<li><strong>Browser extension</strong> - an extension that provides access to a user's applications and auto-fills credentials for password based applications.</li>
<li><strong>Decentralized Verified Mobile Identity (DVMI)</strong> - a mobile application that stores a user's digital identity secured by crypto keys and biometrics.</li>
<li><strong>AutoFill Credential provider extensions</strong> - Android and iOS extensions  that provide credentials for password based applications on mobile devices.</li>
</ul>
<h2 id="fundamental-security-principles" tabindex="-1"><a class="header-anchor" href="#fundamental-security-principles" aria-hidden="true">#</a> Fundamental security principles</h2>
<p>Our guiding security principles are:</p>
<ul>
<li><strong>100% passwordless</strong> – idemeum eliminates passwords end to end and replaces them with biometrics and certificates instead. Even our password manager operates without a master password. All of this is made possible by the idemeum mobile app, which gives users unique and secure digital identities tied to their mobile devices.</li>
<li><strong>Decentralized identifier (DID)</strong> – when a user installs the idemeum mobile app, their user identifier is created and managed by hardware backed storage on a mobile device. DID assertion along with FIDO2 / UAF assertion are used to prove the user's identity in the cloud. Pubic keys are stored in the cloud, whereas private keys are stored only on the user's device.</li>
<li><strong>End-to-end encryption</strong> – cryptographic keys are created and managed on the user's devices (idemeum mobile app, browser). All the crypto operations are performed on the user's devices locally. This way a user's data is protected from idemeum or attackers that might gain access to the idemeum cloud.</li>
<li><strong>Zero-knowledge cloud</strong> – the idemeum cloud does not have any knowledge of a user's crypto private keys. As a result, we can never see sensitive data belonging to a user.</li>
<li><strong>Multiple encryptions during data transmission</strong> – all data that is transmitted from a user's idemeum app to the browser is encrypted multiple times; being authenticated by both transport layer security (TLS) and the user-managed transit symmetric and asymmetric cryptography keys that are transient in nature.</li>
<li><strong>Secure identity recovery</strong> – each user gets a cryptographically-backed one time recovery key (stored as a QR code) that allows them to recover their mobile identity (DID) in the event that their device is lost.</li>
</ul>
<h2 id="security-of-idemeum-mobile-app-dvmi" tabindex="-1"><a class="header-anchor" href="#security-of-idemeum-mobile-app-dvmi" aria-hidden="true">#</a> Security of idemeum mobile app (DVMI)</h2>
<h3 id="how-the-decentralized-user-identifier-did-is-created" tabindex="-1"><a class="header-anchor" href="#how-the-decentralized-user-identifier-did-is-created" aria-hidden="true">#</a> How the decentralized user identifier (DID) is created</h3>
<p>When users install and set up the idemeum mobile app, they are effectively creating a digital identity on a mobile device that they can then present to a service provider (employer or application). Each user is assigned a decentralized identifier (DID) that globally represents their digital identity to service providers.</p>
<p>We apply the following strict security compliance steps before creating the decentralized identifier (DID) on the user's idemeum app.</p>
<p><img src="@source/images/did-creation.jpeg" alt="DID creation"></p>
<ul>
<li><strong>Step 1:</strong> Check if the device supports hardware backed cryptography key material. For Android, we check if the key material of the android keystore system can be bound to secure hardware (<a href="https://developer.android.com/training/articles/keystore" target="_blank" rel="noopener noreferrer">TEE<ExternalLinkIcon/></a>) or dedicated hardware security model (StrongBox). Similarly for iOS, we check for <a href="https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/web" target="_blank" rel="noopener noreferrer">Secure Enclave support<ExternalLinkIcon/></a>, hardware-based key manager that’s isolated from the main processor to provide an extra layer of security backed key material.</li>
<li><strong>Step 2:</strong> Create elliptic curve key-pair using the ECC_NIST_P256 (secp256r1) algorithm for verifying cryptographic signatures created for the DID. In this paper, we will refer to this hardware backed key-pair as the <strong>DID key</strong>.</li>
<li><strong>Step 3:</strong> Assert the legitimacy of a particular instance of the idemeum app to the idemeum cloud. In Android, <a href="https://developer.android.com/training/articles/security-key-attestation" target="_blank" rel="noopener noreferrer">key attestation<ExternalLinkIcon/></a> is used to verify hardware backed DID key and to check if the idemeum app is allowed to use the secret DID key material under attestation. For iOS, we leverage the <a href="https://developer.apple.com/documentation/devicecheck/dcappattestservice" target="_blank" rel="noopener noreferrer">DCAppAttestService<ExternalLinkIcon/></a> from the DeviceCheck framework to validate the instance of the idemeum app running on a user's device.</li>
<li><strong>Step 4:</strong> Prompt the user to register biometrics using the FIDO2 WebAuthn specification on the Android and the FIDO UAF specification on iOS platform. The idemeum app receives the <a href="https://www.w3.org/TR/webauthn-1/#sctn-attestation" target="_blank" rel="noopener noreferrer">attestation<ExternalLinkIcon/></a> after the biometric <a href="https://fidoalliance.org/specs/fido-uaf-v1.2-rd-20171128/fido-uaf-protocol-v1.2-rd-20171128.html#registration" target="_blank" rel="noopener noreferrer">registration<ExternalLinkIcon/></a> is completed.</li>
<li><strong>Step 5:</strong> the idemeum app collects both the FIDO2 / UAF attestation and the hardware backed DID key attestation and sends them to the idemeum cloud for verification.</li>
<li><strong>Step 6:</strong> On successful verification of both the attestations, the idemeum cloud saves the FIDO and DID public keys and creates a decentralized identifier for the user. The created DID is persisted on the user's idemeum app for all future interactions.</li>
</ul>
<h3 id="how-identity-claims-are-verified-and-securely-stored" tabindex="-1"><a class="header-anchor" href="#how-identity-claims-are-verified-and-securely-stored" aria-hidden="true">#</a> How identity claims are verified and securely stored</h3>
<p>A user's digital identity consists a set of claims where each claim is a piece of personally identifiable information. After the user is assigned a DID as explained in the previous section, the user can digitally verify their identity claims like email and phone number using OTP and SMS. A user can also verify their government issued ID, like a passport or driver’s license, by scanning the physical ID. The app then performs liveness detection check. The first name, last name, address, and DOB claims are then retrieved from the verified document. This set of user claims (personally identifiable information) are then securely persisted in the idemeum app and are not shared or saved on the idemeum cloud. The following steps are performed to secure the claims on the user's mobile app:</p>
<p><img src="@source/images/claims-store.jpeg" alt="Claims storage"></p>
<ul>
<li><strong>Step 1:</strong> Create a AES-GCM (Advanced Encryption Standard (AES) algorithm in Galois/Counter Mode (GCM)) 256-bit encryption key. The length of the initialization vector (IV) is always 12 bytes. The key material is bound to the secure hardware and never enters the idemeum app's process memory.</li>
<li><strong>Step 2:</strong> Encrypt all the user claims using the AES-GCM symmetric key material. We use two levels of encryption before storing the claims in the storage. The first-level of encryption is done by the hardware backed AES-GCM symmetric key and the second-level is inherently achieved by the storage implementation.</li>
<li><strong>Step 3:</strong> The encrypted claims are persisted in the device's secure storage. In Android, we use the <a href="https://developer.android.com/reference/androidx/security/crypto/EncryptedSharedPreferences" target="_blank" rel="noopener noreferrer">Encrypted Shared Preference<ExternalLinkIcon/></a> class that performs the second-level of encryption. In iOS, we use the <a href="https://github.com/vpeschenkov/SecureDefaults" target="_blank" rel="noopener noreferrer">SecureDefaults<ExternalLinkIcon/></a> wrapper over UserDefaults that comes with an extra AES 256-bit encryption key.</li>
</ul>
<h3 id="passwordless-login-flow" tabindex="-1"><a class="header-anchor" href="#passwordless-login-flow" aria-hidden="true">#</a> Passwordless login flow</h3>
<p>On successful setup of the idemeum mobile app (digital identity (DVMI)), a user can login to their company's idemeum portal (either directly or through the browser extension) to access their entitled applications. The login flow is initiated by showing the QR code or sending a notification to the user's mobile app. The following steps are performed to securely approve a login with the set of requested claims.</p>
<p><img src="@source/images/login.jpeg" alt="Login flow"></p>
<ul>
<li><strong>Step 1:</strong> The idemeum app scans the QR Code or parses the notification and displays the approval page with the claims requested by the website (i.e. email, mobile number, etc).</li>
<li><strong>Step 2:</strong> If the user chooses to approve this login request, the user is prompted for FIDO2 / UAF biometric authentication. We validate that the user that has setup the digital identity is the same user that is performing the biometric authentication. This is done to protect against multiple biometric registrations on the mobile device. The FIDO2 / UAF returns a cryptography signed assertion to the idemeum app.</li>
<li><strong>Step 3:</strong> The idemeum app then creates a DID key assertion which is cryptographically signed using the hardware backed key material. Both the FIDO2 / UAF assertion and the DID assertion along with the requested claims are sent to the idemeum cloud.</li>
<li><strong>Step 4:</strong> The idemeum cloud <a href="https://www.w3.org/TR/webauthn-1/#verifying-assertion" target="_blank" rel="noopener noreferrer">verifies<ExternalLinkIcon/></a> the <a href="https://fidoalliance.org/specs/fido-uaf-v1.2-rd-20171128/fido-uaf-protocol-v1.2-rd-20171128.html#authentication" target="_blank" rel="noopener noreferrer">assertions<ExternalLinkIcon/></a> using the public key cryptography.</li>
<li><strong>Step 5:</strong> On successful verification of the assertions, the user is authenticated and given access to their company's idemeum portal or the browser extension.</li>
</ul>
<h3 id="how-the-password-manager-user-keys-are-secured" tabindex="-1"><a class="header-anchor" href="#how-the-password-manager-user-keys-are-secured" aria-hidden="true">#</a> How the password manager user keys are secured</h3>
<p>The idemeum password manager has been designed to be 100% passwordless (no master or last password), have end-to-end encryption (cryptography keys managed on the user's device), and maintain a zero-knowledge cloud (idemeum cloud does not have any knowledge of a user's crypto private keys). To achieve these goals, we take the following steps:</p>
<p><img src="@source/images/secure-keys.png" alt="Secure keys"></p>
<ul>
<li><strong>Step 1:</strong> On setup of a digital identity, a user is assigned a RSA-OAEP public encryption key pair with a 2048-bit moduli and a public exponent of 65537. We will refer to this key pair as the <strong>UserPasswordKeyPair</strong>.</li>
<li><strong>Step 2:</strong> The private key of the <strong>UserPasswordKeyPair</strong> is represented as an identity claim in the idemeum app as explained in the <RouterLink to="/security-whitepaper.html#how-identity-claims-are-verified-and-securely-stored">How identity claims are verified and securely stored</RouterLink> section. The public key of the UserPasswordKeyPair is saved on the idemeum cloud.</li>
<li><strong>Step 3:</strong> When a user adds a password application or someone shares an application with a user in the user portal, browser extension, or mobile app, the password of the application is encrypted using a symmetric key (<strong>SecureKey</strong>, explained in the web browser section later in the paper).  A copy of the <strong>SecureKey</strong> is then encrypted using the public key of the <strong>UserPasswordKeyPair</strong>. All the crypto operations are performed on the user's local device (i.e. browser, android, or iOS).</li>
<li><strong>Step 4:</strong> The encrypted user copy of the <strong>SecureKey</strong> is saved on the cloud and can only be decrypted by the private key of the <strong>UserPasswordKeyPair</strong> that resides on the user's mobile device. This gives us a zero-knowledge cloud, because idemeum is not aware of the user's private key. The encrypted password of the application is then saved in the idemeum cloud.</li>
<li><strong>Step 5:</strong>  In order to achieve an optimal user experience without compromising security during the login flow, the <strong>UserPasswordKeyPair's</strong> private key is transmitted with multiple levels of encryption from the user's mobile app to the browser. The browser then uses this key to decrypt the user's copy of the <strong>SecureKey</strong> that in turn can decrypt the password of the application. We will cover the transport security of this key in next section.</li>
</ul>
<h3 id="securing-password-manager-user-key-in-transit" tabindex="-1"><a class="header-anchor" href="#securing-password-manager-user-key-in-transit" aria-hidden="true">#</a> Securing password manager user key in transit</h3>
<p>As explained in the previous section, in order for the user's browser to be able to use an app's password, it needs to be decrypted. Passwords are encrypted with symmetric <strong>SecureKey</strong> (unique to each app) which is then encrypted with the <strong>UserPasswordKeyPair's</strong> public key. Only the <strong>UserPasswordKeyPair's</strong> private key, which resides on the user's idemeum mobile app can decrypt the user copy of the <strong>SecureKey</strong> which can in turn decrypt the password of the app. idemeum performs the following steps to achieve multiple levels of encryption for data in-transit.</p>
<p><img src="@source/images/key-transit.png" alt="Key transit"></p>
<ul>
<li><strong>Step 1:</strong>  User login using QR code in the User Portal or extension.</li>
<li><strong>Step 2:</strong> Create a AES-GCM 256-bit encryption key and will call it <strong>StorageWrappingKey</strong> for reference in this paper. The <strong>StorageWrappingKey</strong> is split using Shamir’s Secret Sharing (SSS) cryptographic algorithm into two shares with threshold (minimum number of shares required to reconstruct <strong>StorageWrappingKey</strong>) set to number of splits.  .</li>
<li><strong>Step 3:</strong> The first share of <strong>StorageWrappingKey</strong> is embedded in the QR code and is delivered to the user's idemeum app.</li>
<li><strong>Step 4:</strong> The second share of <strong>StorageWrappingKey</strong> is saved on the cloud and is associated with sign-in challenge that is transient in nature.</li>
<li><strong>Step 5:</strong> The login approval flow in idemeum app retrieves the second share of from the cloud and reconstructs <strong>StorageWrappingKey</strong>.</li>
<li><strong>Step 6:</strong> The idemeum app creates a new transient symmetric AES-GCM 256-bit encryption key and encrypts the user private key of the <strong>UserPasswordKeyPair</strong> (first level of encryption) with the transient key. The encrypted user private key is then encrypted again (second level of encryption) with the reconstructed <strong>StorageWrappingKey</strong>.</li>
<li><strong>Step 7:</strong> Finally, the encrypted data is sent over transport layer encryption (TLS) which is third level of encryption.</li>
</ul>
<h3 id="decentralized-identifier-recovery" tabindex="-1"><a class="header-anchor" href="#decentralized-identifier-recovery" aria-hidden="true">#</a> Decentralized identifier recovery</h3>
<p><a href="https://www.w3.org/TR/did-core/" target="_blank" rel="noopener noreferrer">Decentralized identifier (DID)<ExternalLinkIcon/></a> recovery is a fundamental aspect of idemeum's digital identity model and can be triggered when a user's mobile device is lost or changed. There are certain tradeoffs that the user needs to be aware of when DID recovery is triggered.</p>
<h4 id="what-can-we-recover" tabindex="-1"><a class="header-anchor" href="#what-can-we-recover" aria-hidden="true">#</a> What can we recover?</h4>
<ul>
<li>We can recover the unique DID that was assigned when the user first setup their digital identity.</li>
<li>We can recover all of a user's entitled apps (Single Sign-on, Password apps).</li>
<li>The user will be able to use single sign-on into SAML and Password apps just like before. This means we will recover and re-encrypt password based app credentials locally on the new device.</li>
<li>User does not need to be provisioned / de-provisioned in the integrated 3rd Party apps.</li>
</ul>
<h4 id="what-can-we-not-recover" tabindex="-1"><a class="header-anchor" href="#what-can-we-not-recover" aria-hidden="true">#</a> What can we not recover?</h4>
<ul>
<li>We cannot recover the user's biometrics that were setup on the previous device. We rely on FIDO2 specifications, and it is not possible to export biometrics from a previous device. Honestly, this is also against our principles of data security, data privacy and strong cryptography.</li>
<li>We will not be able to recover verified identity claims like email, phone number, ID document parsed first name, last name… The user will have to re-verify the claims on a recovered device.</li>
</ul>
<p><img src="@source/images/recovery.jpeg" alt="Recovery"></p>
<ul>
<li><strong>Step 1:</strong> When a user sets up the idemeum mobile app, they are assigned an RSA-OAEP key pair with 2048-bit moduli and a public exponent of 65537. We will refer this as the <strong>UserRecoveryKeyPair</strong> for reference in this paper.</li>
<li><strong>Step 2:</strong>  The user is given a QR code and then prompted to either export it (to their iCloud / Google drive) or download and save it in a secure location. The QR code contains a compressed version of the recovery private key of <strong>UserRecoveryKeyPair</strong>, also called the <strong>recovery key</strong>.</li>
<li><strong>Step 3:</strong> A hash of the recovery key is saved on the idemeum cloud.</li>
<li><strong>Step 4:</strong> In order to be able to recover password apps, the private key of the <strong>UserPasswordKeyPair</strong> (refer to <RouterLink to="/security-whitepaper.html#how-identity-claims-are-verified-and-securely-stored">How password manager user keys are secured</RouterLink> section) is encrypted with the recovery public key of <strong>UserRecoveryKeyPair</strong> and saved on the cloud. This will help us to recover the password manager apps that are secured using the <strong>UserPasswordKeyPair</strong>.</li>
<li><strong>Step 5:</strong> On start of recovery flow, the first thing the user can either scan or import their saved QR code. idemeum app computes the hash of the recovery key and checks if the hash exists on the cloud. If it does, the user is assigned the DID that was previously associated with this hash.</li>
<li><strong>Step 6:</strong> The encrypted private key of the <strong>UserPasswordKeyPair</strong> is downloaded from the cloud.</li>
<li><strong>Step 7:</strong> A copy of the encrypted <strong>SecureKeys</strong> is downloaded for all password apps assigned to a user in the cloud. These credentials were originally encrypted with public key of the <strong>UserPasswordKeyPair</strong>.</li>
<li><strong>Step 8:</strong> Decrypt the private key of the <strong>UserPasswordKeyPair</strong> using the recovery key (Step 5).</li>
<li><strong>Step 9:</strong> Decrypt the user's copy of the encrypted SecureKeys using the decrypted private key of the <strong>UserPasswordKeyPair</strong> (Step 8).</li>
<li><strong>Step 10:</strong> Re-encrypt the user's copy of the <strong>SecureKeys</strong> with the new user public key of <strong>UserPasswordKeyPair</strong> for all of a user's assigned apps.</li>
<li><strong>Step 11:</strong> For each app assigned to a user, save it's re-encrypted <strong>SecureKeys</strong> for this user in the cloud.</li>
</ul>
<h2 id="web-security" tabindex="-1"><a class="header-anchor" href="#web-security" aria-hidden="true">#</a> Web security</h2>
<h3 id="how-password-manager-operations-are-secured-in-the-browser-and-browser-extension" tabindex="-1"><a class="header-anchor" href="#how-password-manager-operations-are-secured-in-the-browser-and-browser-extension" aria-hidden="true">#</a> How password manager operations are secured in the browser and browser extension</h3>
<p>idemeum's password manager has been designed to be 100% passwordless, use end-to-end encrypted, and maintain a zero-knowledge cloud. We have covered the functioning of the password manager on the user device in the <RouterLink to="/security-whitepaper.html#how-the-password-manager-user-keys-are-secured">How password manager user keys are secured</RouterLink> and <RouterLink to="/security-whitepaper.html#securing-password-manager-user-key-in-transit">Securing password manager user key in transit</RouterLink> sections. These sections lay the foundation of the idemeum password manager's capabilities for the browser user portal and browser extension.</p>
<p>In this section, we will dive into the details of the password manager operations on the user portal and browser extension. We support the following password manager operations in the user portal and browser extension:</p>
<ul>
<li>Add / Update / Delete password app</li>
<li>Share / Un-share password app with other users</li>
<li>View Password in cleartext or copy to clipboard</li>
<li>Launch (open) password app with autofill of credentials</li>
<li>Auto-capture credentials on certified websites and create a password app</li>
</ul>
<p>We perform the following steps to secure the operations on the browser and extension:</p>
<p><img src="@source/images/browser-security.jpeg" alt="Browser security"></p>
<ul>
<li><strong>Step 1:</strong> On successful user login, the private key of the <strong>UserPasswordKeyPair</strong> is securely transmitted from the user's idemeum app to the browser with multiple levels of encryption. This is explained in the <RouterLink to="/security-whitepaper.html#securing-password-manager-user-key-in-transit">Securing password manager user key in transit</RouterLink> section. The private key is decrypted locally and is securely persisted as explained in <RouterLink to="/security-whitepaper.html#how-password-manager-user-key-is-secured-in-client-storage-at-rest">How password manager user key is secured in client storage at rest</RouterLink> later.</li>
<li><strong>Step 2:</strong> For all the password manager operations listed above, the credentials are encrypted using an AES-GCM (Advanced Encryption Standard (AES) algorithm in Galois/Counter Mode (GCM)) 256-bit encryption key. We will refer to this as the <strong>SecureKey</strong> for reference in this paper. The <strong>SecureKey</strong> is never persisted on the client or on the cloud.</li>
<li><strong>Step 3:</strong> Every password app is assigned a separate unique <strong>SecureKey</strong>. When an app is added by a user or shared with a user, a copy of the <strong>SecureKey</strong> is encrypted with the public key of the <strong>UserPasswordKeyPair</strong> and saved on the cloud in the app context.</li>
<li><strong>Step 4:</strong> For operations that require a password to be decrypted (edit, view password, launch app, share), we first download the encrypted copy of the <strong>SecureKey</strong> for the user from the cloud to the browser or extension.</li>
<li><strong>Step 5:</strong> The downloaded encrypted copy of the <strong>SecureKey</strong> is decrypted with the user private key that was fetched from the user device and saved in local storage.</li>
<li><strong>Step 6:</strong> Using the decrypted <strong>SecureKey</strong>, we will decrypt the password and perform any desired operations in the browser or extension.</li>
<li><strong>Step 7:</strong> Data maintained in the local storage is valid for the user session and is cleared when user logs out or the session expires.</li>
</ul>
<h3 id="how-password-manager-user-key-is-secured-in-client-storage-at-rest" tabindex="-1"><a class="header-anchor" href="#how-password-manager-user-key-is-secured-in-client-storage-at-rest" aria-hidden="true">#</a> How password manager user key is secured in client storage at rest</h3>
<p>On successful user login, the private key of the <strong>UserPasswordKeyPair</strong> is securely transmitted from the user's idemeum app to the browser using multiple levels of encryption. On the browser end, we perform multiple levels of decryption and then manage the decrypted user private key for the user session. The user private key is saved in memory and securely persisted in the local storage using <a href="https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing" target="_blank" rel="noopener noreferrer">Shamir’s Secret Sharing (SSS)<ExternalLinkIcon/></a> cryptographic algorithm.</p>
<p>How does secure storage work?</p>
<p><img src="@source/images/sss.png" alt="Shamir sharing"></p>
<ul>
<li><strong>Step 1:</strong> In the login approval flow, the idemeum app creates an AES-GCM (Advanced Encryption Standard (AES) algorithm in Galois/Counter Mode (GCM)) 256-bit encryption key. In this paper, we will refer this symmetric key as the <strong>StorageProtectionKey</strong>.</li>
<li><strong>Step 2:</strong> Using the Shamir’s Secret Sharing (SSS) cryptographic algorithm, <strong>StorageProtectionKey</strong> is split into two shares with threshold (minimum number of shares required to reconstruct the <strong>StorageProtectionKey</strong>) set to number of splits.</li>
<li><strong>Step 3:</strong> The first share of the <strong>StorageProtectionKey</strong> is transmitted along with the <strong>UserPasswordPrivateKey</strong> in multiple levels of encryption scheme as explained earlier in the <RouterLink to="/security-whitepaper.html#securing-password-manager-user-key-in-transit">Securing password manager user key in transit</RouterLink> section.</li>
<li><strong>Step 4:</strong> The second share of the <strong>StorageProtectionKey</strong> is saved on the cloud along with the user session (JTI) that will be valid until the user session expiration or logout.</li>
<li><strong>Step 5:</strong> The browser client reconstructs the <strong>StorageProtectionKey</strong> through multiple levels of decryption using the first share received from the user's idemeum app and by retrieving the second share from the cloud using an authenticated session.</li>
<li><strong>Step 6:</strong> The reconstructed symmetric AES-GCM <strong>StorageProtectionKey</strong> is used to encrypt the user private key. The encrypted user private key is persisted in the local storage along with first share of the StorageProtectionKey.</li>
<li><strong>Step 7:</strong> During the user session, if the in-memory user private key is not found due to extension clearing the memory state, we will reconstruct the StorageProtectionKey using first share from the local storage and second share from the cloud. The reconstructed StorageProtectionKey will be used to decrypt the user private key saved in the browser's local storage.</li>
</ul>
<p>By performing the above procedure, the encrypted user private key cannot be decrypted until both the shares of the <strong>StorageProtectionKey</strong> can be cryptographically joined, which means attacker will require access to the local storage and biometric approved authenticated session.</p>
<h3 id="how-json-web-token-s-are-secured" tabindex="-1"><a class="header-anchor" href="#how-json-web-token-s-are-secured" aria-hidden="true">#</a> How JSON Web Token's are secured</h3>
<p>JSON Web Token (JWT) is an open standard (<a href="https://tools.ietf.org/html/rfc7519" target="_blank" rel="noopener noreferrer">RFC 7519<ExternalLinkIcon/></a>) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
<ul>
<li><strong>Step 1:</strong> As part of a tenant's setup in the idemeum cloud, an elliptic curve key pair is generated using ECC_NIST_P256 (secp256r1) algorithm which is referred as tenant JWT key in this paper.</li>
<li><strong>Step 2:</strong> During the user login flow, idemeum cloud issues signed JWT's as session tokens using the tenant's JWT private key. All session tokens are issued within a tenant-context, if a user is logged into multiple tenants each session is guarded by a separate tenant JWT to prevent cross-tenant resource access for a valid user session (i.e., sessions issued to tenant1, cannot be used for tenant2).
<ul>
<li>Each JWT token payload consists of registered claims, refer to <a href="https://www.iana.org/assignments/jwt/jwt.xhtml#claims" target="_blank" rel="noopener noreferrer">IANA Registered claims<ExternalLinkIcon/></a>:
<ul>
<li>iss: Identifies the principal that issued the JWT</li>
<li>aud: Identifies the recipients that the JWT is intended for</li>
<li>sub: Identifies the principal that is the subject of the JWT, in our case it is user dvmi id</li>
<li>exp: The expiration time of the token in seconds since January 1, 1970, UTC (Unix time)</li>
<li>iat: The issuing time of the token in seconds since January 1, 1970, UTC (Unix time)</li>
<li>jti: Unique identifier of the Token</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>JWT example:</p>
<p><img src="@source/images/jwt.jpeg" alt="JWT"></p>
<ul>
<li><strong>Step 3:</strong> When a user tries to access idemeum cloud resources, their browser presents the idemeum session token to the cloud. The cloud verifies the token using the tenant JWT public keys as follows:
<ul>
<li>The signature of JWT is validates using the tenant JWT public key to ensure that the token is issued using the tenant JWT private key only.</li>
<li>The expiration of JWT token is validated</li>
<li>The issuer of JWT token is matched as part of incoming request domain name to ensure that user cannot access resources from token issued from another tenant domain.</li>
</ul>
</li>
<li><strong>Step 4:</strong> the idemeum cloud issues two additional JWT tokens signed by the corresponding tenant JWT key to facilitate identifying the user and enforcing the authorization checks:
<ul>
<li>DVMI_ID cookie issued as a signed JWT, used to send the notification to user's device.</li>
<li>Session Token cookie issued as a signed JWT, used to enforce the authorization checks when the user interacts with user or admin portal.</li>
</ul>
</li>
</ul>
<h3 id="protecting-against-cross-site-request-forgery" tabindex="-1"><a class="header-anchor" href="#protecting-against-cross-site-request-forgery" aria-hidden="true">#</a> Protecting against Cross Site Request Forgery</h3>
<p>Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they’re currently authenticated. With a little help from social engineering (such as sending a link via email or chat), an attacker may trick the users of a web application into executing actions of the attacker’s choosing. If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is administrator, CSRF can compromise the entire web application.</p>
<p>idemeum cloud guards against CSRF for the login flow (when the user is not authenticated) and post login flow (when the has a valid session).</p>
<h4 id="login-flow" tabindex="-1"><a class="header-anchor" href="#login-flow" aria-hidden="true">#</a> Login flow</h4>
<p>The idemeum cloud makes use of the synchronous token pattern to guard the login flow. We issue a token per login flow to avoid replay attacks. For more details on synchronous token pattern please refer to <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#synchronizer-token-pattern" target="_blank" rel="noopener noreferrer">following page<ExternalLinkIcon/></a>.</p>
<p>For more details on login flow please refer to the above section <RouterLink to="/security-whitepaper.html#passwordless-login-flow">Passwordless Login Flow</RouterLink>.</p>
<ul>
<li><strong>Step 1:</strong> During the start of login flow the idemeum cloud generates the cryptographically strong pseudorandom value known as a CSRF token on server and passes this as hidden parameter to the login html page.</li>
<li><strong>Step 2:</strong> The browser makes an ajax call to get the sign-in challenge (which will be fulfilled by DVMI app asynchronously either by scanning the QR code or responding to the notification), including the CSRF token as a custom header (<strong>x-idemeum-csrf-login-token</strong>).</li>
<li><strong>Step 3:</strong> The idemeum cloud validates the CSRF token to ensure that the sign-in request came from the same browser which initiated the login flow by matching the CSRF token issued during the login flow.</li>
<li><strong>Step 4:</strong> The browser polls for a sign-in complete response, passing the CSRF token.</li>
<li><strong>Step 5:</strong> The idemeum cloud validates the CSRF token and upon successful login completion it issues the session token, redirects the browser to destination along with clearing the CSRF token state to prevent the replay attack.</li>
</ul>
<h4 id="post-login-flow" tabindex="-1"><a class="header-anchor" href="#post-login-flow" aria-hidden="true">#</a> Post login flow</h4>
<p>Upon successful login the user is redirected to either the user portal or admin portal to access resources i.e., launch applications, or configure tenant resources (admin user). The idemeum cloud makes use of the <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#double-submit-cookie" target="_blank" rel="noopener noreferrer">double submit cookie technique<ExternalLinkIcon/></a> to prevent CSRF attack post login.</p>
<ul>
<li><strong>Step 1:</strong> Upon successful login when the user gets redirected to either the admin or user portal, the idemeum cloud generates a cryptographically strong pseudorandom value (set as a hidden parameter) known as the CSRF token. The CSRF cookie is generated using the JWT token (signed by tenant JWT private key).
<ul>
<li>CSRF JWT token payload
<ul>
<li><strong>sub</strong>: The subject is populated with the CSRF token generated and passed as hidden parameter</li>
<li><strong>iat</strong>: The issuing time of the token in seconds since January 1, 1970, UTC (Unix time)</li>
<li><strong>jti</strong>: JTI of session token to</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><img src="@source/images/post-login.jpeg" alt="Post login flow"></p>
<ul>
<li><strong>Step 2:</strong> The browser sends the CSRF cookie as part of every request to idemeum cloud and sends the CSRF token received in step 1 as custom header (<strong>x-idemeum-csrf-token</strong>).</li>
<li><strong>Step 3:</strong> The idemeum cloud validates the CSRF cookie token by applying the following checks:
<ul>
<li>Validate the signature of CSRF cookie token using the tenant JWT public key.</li>
<li>Validate the CSRF cookie token to ensure it is associated with the current authenticated session by matching the JTI value of the session token and the CSRF cookie token, this is done to prevent a malicious user from reusing the CSRF token issued for some other user's session or an old user session within the same tenant.</li>
<li>Validate the custom header (<strong>x-idemeum-csrf-token</strong>) matches with the sub claim in the CSRF cookie token.</li>
</ul>
</li>
</ul>
<h2 id="random-number-generation" tabindex="-1"><a class="header-anchor" href="#random-number-generation" aria-hidden="true">#</a> Random number generation</h2>
<p>In idemeum, all keys generated by the client use Cryptographically Secure Pseudo-Random number Generator (CSPRNG). The password generation scheme is also built upon CSPRNG to auto suggest strong passwords.</p>
<p><img src="@source/images/random-num.png" alt="Random number"></p>
<p>If you have any questions or suggestions please <a href="mailto:support@idemeum.com">let us know</a>.</p>
</div></template>


