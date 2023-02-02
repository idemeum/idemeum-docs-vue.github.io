import{_ as e,o as t,c as o,d as s}from"./app.1d42e833.js";const d={},r=s('<h1 id="rfid-login-flows-and-features" tabindex="-1"><a class="header-anchor" href="#rfid-login-flows-and-features" aria-hidden="true">#</a> RFID Login Flows and Features</h1><h2 id="user-login-flows" tabindex="-1"><a class="header-anchor" href="#user-login-flows" aria-hidden="true">#</a> User Login Flows</h2><p>Here are the user flows that we support today.</p><table><thead><tr><th><div style="width:200px;">Flow</div></th><th>Description</th></tr></thead><tbody><tr><td><strong>Tap in / tap out</strong></td><td>Employees can sign in to workstation with a badge tap, and sign out with another badge tap.</td></tr><tr><td><strong>Fast user switching</strong></td><td>When <code>User A</code> is signed in to a workstation and <code>User B</code> scans the badge, <code>User A</code> will be signed out, and <code>User B</code> will be signed in.</td></tr><tr><td><strong>Fast lock / unlock</strong></td><td>Lock the screen manually (do not sign out), and tap the badge to unlock computer.</td></tr><tr><td><strong>User switching from lock screen</strong></td><td>When <code>User A</code> locks the screen manually, and <code>User B</code> scans the card, then <code>User A</code> is signed out, and <code>User B</code> is signed in.</td></tr><tr><td><strong>Windows user switching</strong></td><td><code>User A</code> is logged in and locks the screen. User B chooses the option to switch user from the logon screen. <code>User B</code> taps the badge and gets signed in. If later on <code>User A</code> taps her card, she will be signed in, and the state of the desktop will be restored.</td></tr></tbody></table><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><p>Here are the additional features that idemeum supports today for RFID Access.</p><table><thead><tr><th><div style="width:200px;">Feature</div></th><th>Description</th></tr></thead><tbody><tr><td><strong>Network connection detection</strong></td><td>When there is no network connection, and the user scans a badge, application will inform the user that login is not possible until network connection is restored.</td></tr></tbody></table>',7),n=[r];function a(i,c){return t(),o("div",null,n)}const l=e(d,[["render",a],["__file","rfid-supported-flows.html.vue"]]);export{l as default};
