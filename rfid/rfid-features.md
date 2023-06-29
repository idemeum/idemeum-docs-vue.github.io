# RFID SSO feature matrix

## Supported features

|<div style="width:200px">Feature</div>| Description |
|:------|:-------------|
|**Tap in** | Employees can sign in to workstation with a badge tap. |
|**Tap out** | Employees can sign out of the workstation with a badge tap. Tap out can be disabled if necessary. |
|**Tap over** | When `User A` is signed in to a workstation and `User B` scans the badge, `User A` will be signed out, and `User B` will be signed in.           |
|**Fast lock / unlock** | Lock the screen manually (do not sign out), and tap the badge to unlock computer. |
|**Tap over from lock screen** | When `User A` locks the screen manually, and `User B` scans the card, then `User A` is signed out, and `User B` is signed in. |
|**Windows user switching** | `User A` is logged in and locks the screen. User B chooses the option to switch user from the logon screen. `User B` taps the badge and gets signed in. If later on `User A` taps her card, she will be signed in, and the state of the desktop will be restored.
|**Connectivity detection** | When there is no network connection, and the user scans a badge, application will inform the user that login is not possible until network connection is restored. Users will always have an option to sign-in with username and password, so that login is not disrupted.|
|**idemeum cloud connectivity detection** |If desktop application can not reach idemeum cloud, it will switch to password authentication mode, so that login flow is not disrupted for users.|
|**[Shared account login](./rfid-shared-account.html)**| You can assign a service account to certina workstations, so that when users tap their badges they are logged in with a shared account instead of a personal account|
|**Automatic USB configuration** | When idemeum desktop client is installed, it will automatically adjust the USB power settings so that the readers do not get unresponsive with Windows disabling them (selective suspend, power management, etc.) |
|**[Silent installation](./rfid-silent-installation.html)** | Push idemeum desktop client automatically to a fleet of Windows workstations. idemeum supports various methods such as PDQ Deploy, etc. |