# RFID Login Flows and Features

## User Login Flows

Here are the user flows that we support today. 

|<div style="width:200px">Flow</div>| Description |
|------|-------------|
|**Tap in / tap out** | Employees can sign in to workstation with a badge tap, and sign out with another badge tap. |
|**Fast user switching** | When `User A` is signed in to a workstation and `User B` scans the badge, `User A` will be signed out, and `User B` will be signed in.           |
|**Fast lock / unlock** | Lock the screen manually (do not sign out), and tap the badge to unlock computer. |
|**User switching from lock screen** | When `User A` locks the screen manually, and `User B` scans the card, then `User A` is signed out, and `User B` is signed in. |
|**Windows user switching** | `User A` is logged in and locks the screen. User B chooses the option to switch user from the logon screen. `User B` taps the badge and gets signed in. If later on `User A` taps her card, she will be signed in, and the state of the desktop will be restored.

## Features

Here are the additional features that idemeum supports today for RFID Access.

|<div style="width: 200px">Feature</div>| Description |
|------|-------------|
|**Network connection detection** | When there is no network connection, and the user scans a badge, application will inform the user that login is not possible until network connection is restored. |








