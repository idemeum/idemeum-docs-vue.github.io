import{_ as d,r as a,o as l,c,a as e,d as o,w as i,b as t,e as u}from"./app.2709a560.js";const p={},h=e("h1",{id:"windows-domain-joined-computers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows-domain-joined-computers","aria-hidden":"true"},"#"),t(" Windows Domain Joined Computers")],-1),m={class:"table-of-contents"},f=u('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>In this document we will explore the steps necessary to perform to set up passwordless MFA for your Windows domain-joined computers.</p><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><p>We support the following Windows operating systems.</p><table><thead><tr><th>Operating system</th><th style="text-align:center;">Support</th><th style="text-align:center;">TPM required</th></tr></thead><tbody><tr><td>Windows 10</td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td></tr><tr><td>Windows 11</td><td style="text-align:center;">Yes</td><td style="text-align:center;">Yes</td></tr></tbody></table>',5),_={class:"custom-container warning"},w=e("p",{class:"custom-container-title"},"TPM requirement",-1),k={href:"https://support.microsoft.com/en-us/windows/enable-tpm-2-0-on-your-pc-1fd5a332-360d-4f46-a1e7-ae6b0c90645c?ref=idemeum-integrations",target:"_blank",rel:"noopener noreferrer"},v={href:"https://support.microsoft.com/en-us/windows/enable-tpm-2-0-on-your-pc-1fd5a332-360d-4f46-a1e7-ae6b0c90645c?ref=idemeum-integrations",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"set-up-active-directory-certificate-services-ad-cs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#set-up-active-directory-certificate-services-ad-cs","aria-hidden":"true"},"#"),t(" Set up Active Directory Certificate Services (AD CS)")],-1),b=e("p",null,[e("strong",null,"Active Directory Certificate Services (AD CS)"),t("\xA0is leveraged to perform certificate-based login, i.e., smart card login post completing MFA via idemeum mobile application.")],-1),y=e("p",null,"Before installing idemeum desktop client on domain-joined machines, please ensure you perform a one-time configuration to set up Active Directory Certificate Services.",-1),D={href:"https://integrations.idemeum.com/windows-desktop-login-mfa-adcs-configuration/",target:"_blank",rel:"noopener noreferrer"},x={class:"custom-container warning"},A=e("p",{class:"custom-container-title"},"Validate AD CS Configuration",-1),C={href:"https://integrations.idemeum.com/windows-desktop-mfa-validate-adcs/",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"install-idemeum-desktop-application",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-idemeum-desktop-application","aria-hidden":"true"},"#"),t(" Install idemeum desktop application")],-1),P=e("p",null,"You can now install idemeum desktop client on your Windows machines. After successful installation you will be able to pair idemeum mobile device with idemeum desktop application.",-1),M=e("h2",{id:"share-workstation-with-other-users",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#share-workstation-with-other-users","aria-hidden":"true"},"#"),t(" Share workstation with other users")],-1),W=e("p",null,"If the workstation is intended only for one user, you need to disable sharing. However, if you plan to offer desktop to roaming users, then you need to share the desktop with everyone who needs access.",-1),I=e("h2",{id:"need-help",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#need-help","aria-hidden":"true"},"#"),t(" Need help")],-1),T=e("p",null,[t("If you need help or encounter any issue, please drop us a note at "),e("a",{href:"suppport@idemeum.com"},"support@idemeum.com")],-1);function q(B,N){const s=a("router-link"),n=a("ExternalLinkIcon"),r=a("RouterLink");return l(),c("div",null,[h,e("nav",m,[e("ul",null,[e("li",null,[o(s,{to:"#overview"},{default:i(()=>[t("Overview")]),_:1})]),e("li",null,[o(s,{to:"#prerequisites"},{default:i(()=>[t("Prerequisites")]),_:1})]),e("li",null,[o(s,{to:"#set-up-active-directory-certificate-services-ad-cs"},{default:i(()=>[t("Set up Active Directory Certificate Services (AD CS)")]),_:1})]),e("li",null,[o(s,{to:"#install-idemeum-desktop-application"},{default:i(()=>[t("Install idemeum desktop application")]),_:1})]),e("li",null,[o(s,{to:"#share-workstation-with-other-users"},{default:i(()=>[t("Share workstation with other users")]),_:1})]),e("li",null,[o(s,{to:"#need-help"},{default:i(()=>[t("Need help")]),_:1})])])]),f,e("div",_,[w,e("p",null,[t("Desktop MFA is supported on Windows machines where TPM is enabled. Please click\xA0"),e("a",k,[t("here to enable TPM on your PC"),o(n)]),t(". By default, Windows 11 will have TPM enabled, whereas not all Windows 10 PC will have TPM enabled by default, and if the PC has TPM present and disabled, it can be enabled via BIOS setup. Refer to the same\xA0"),e("a",v,[t("link"),o(n)]),t("\xA0as before to learn more about how to verify whether TPM is present in the system.")])]),g,b,y,e("p",null,[t("\u{1F517} Detailed guide for AD CS - "),e("a",D,[t("Windows Desktop MFA - AD CS configuration"),o(n)])]),e("div",x,[A,e("p",null,[t("Once you perform AD CS configuration, it is great to validate setup to make sure there are no issues, and certificates can be issued successfully. Follow these steps to validate AD CS configuration - "),e("a",C,[t("Validate AD CS configuration"),o(n)])])]),S,P,e("p",null,[t("\u{1F517} Detailed guide to install desktop client - "),o(r,{to:"/mfa/desktop-app-install.html"},{default:i(()=>[t("Install Desktop Application")]),_:1})]),M,W,e("p",null,[t("\u{1F517} Detailed guide about desktop sharing - "),o(r,{to:"/mfa/desktop-mfa-share-access.html"},{default:i(()=>[t("Install Desktop Application")]),_:1})]),I,T])}const j=d(p,[["render",q],["__file","desktop-mfa-win-domain-joined.html.vue"]]);export{j as default};
