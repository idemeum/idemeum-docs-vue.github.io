import{_ as r,r as d,o as s,c as i,a as e,d as a,w as t,b as o}from"./app.7f741596.js";const l={},c=e("h1",{id:"rfid-user-onboarding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rfid-user-onboarding","aria-hidden":"true"},"#"),o(" RFID user onboarding")],-1),u=e("p",null,"For users accessing resources with RFID badge, there are 2 types of onboarding:",-1),h=e("strong",null,"Manual onboarding with RFID badge",-1),b=e("strong",null,"Password onboarding with RFID badge",-1);function m(g,_){const n=d("RouterLink");return s(),i("div",null,[c,u,e("ol",null,[e("li",null,[a(n,{to:"/employee-onboarding.html#manual-onboarding-with-rfid-badge"},{default:t(()=>[h]),_:1}),o(" - admin creates a user record in the idemeum cloud directory along with the badge ID number. When employee taps the badge to access the workstation, badge number is verified and employee is onboarded.")]),e("li",null,[a(n,{to:"/employee-onboarding.html#password-onboarding-with-rfid-badge"},{default:t(()=>[b]),_:1}),o(" - admin does not need to create any user records, as RFID onboarding is done with user credentials. Employee taps the badge, idemeum authenticates the employee with the domain password, and upon success user is onboarded and badge ID is associated with the user record.")])]),e("p",null,[o("We documented these methods in detail "),a(n,{to:"/employee-onboarding.html"},{default:t(()=>[o("here")]),_:1}),o(".")])])}const f=r(l,[["render",m],["__file","rfid-user-onboarding.html.vue"]]);export{f as default};