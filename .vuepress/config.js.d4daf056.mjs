var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// docs/.vuepress/config.js
import { defaultTheme } from "@vuepress/theme-default";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { searchPlugin } from "@vuepress/plugin-search";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { gitPlugin } from "@vuepress/plugin-git";
import SkeletonCards from "vue-ultimate-skeleton-cards";
var require_config = __commonJS({
  "docs/.vuepress/config.js"(exports, module) {
    Vue.use(SkeletonCards);
    module.exports = {
      lang: "en-US",
      dest: "./docs/docs",
      title: "idemeum docs",
      base: "/",
      description: "One platform to manage access to applications and infrastructure, without passwords",
      theme: defaultTheme({
        logo: "/logo.png",
        docsDir: "docs",
        sidebarDepth: 0,
        lastUpdated: "Last Updated",
        navbar: [
          {
            text: "Resources",
            children: [{ text: "Contact", link: "https://idemeum.com/contact" }, { text: "Blog", link: "https://blog.idemeum.com" }]
          },
          {
            text: "Changelog",
            link: "https://idemeum.com/changelog"
          },
          {
            text: "Integrations",
            link: "https://integrations.idemeum.com"
          },
          {
            text: "Try idemeum",
            link: "https://idemeum.com/try"
          }
        ],
        sidebar: [
          {
            text: "Getting started",
            collapsible: true,
            children: [
              { text: "Introduction", link: "/introduction" },
              { text: "How it works", link: "/how-it-works.html" },
              { text: "Try idemeum free", link: "/self-service-onboarding.html" }
            ]
          },
          {
            text: "Secure Remote Access",
            collapsible: true,
            children: [
              { text: "Overview", link: "/remote-access/secure-remote-access-overview.html" },
              { text: "Enable remote access", link: "/remote-access/enable-remote-access.html" },
              { text: "Remote web applications", link: "/remote-access/remote-web-app.html" },
              { text: "Remote SSH servers", link: "/remote-access/remote-ssh-server.html" },
              { text: "Install idemeum agent", link: "/remote-access/install-agent.html" }
            ]
          },
          {
            text: "Passwordless Single Sign-On",
            collapsible: true,
            children: [
              { text: "Overview", link: "/passwordless-single-sign-on-overview.html" },
              { text: "User source integration", link: "/integration-with-hr-system.html" },
              { text: "User management", link: "/user-management.html" },
              { text: "Application catalog", link: "/application-catalog.html" },
              { text: "Integrate SAML applications", link: "/integrate-saml-app.html" },
              { text: "How to obtain SAML metadata", link: "/how-to-obtain-saml-metadata-for-idemeum.html" },
              { text: "Automated provisioning", link: "/lifecycle-management.html" },
              { text: "Application entitlements", link: "/application-entitlements.html" },
              { text: "Group management", link: "/group-management.html" }
            ]
          },
          {
            text: "Password Vault",
            collapsible: true,
            children: [
              { text: "Overview", link: "/password-vault-overview.html" },
              { text: "Create password application", link: "/create-password-application.html" },
              { text: "View / edit / delete passwords", link: "/edit-password-application.html" },
              { text: "Share passwords", link: "/share-password-application.html" },
              { text: "Password autofill", link: "/autofill-passwords.html" },
              { text: "Password auto capture", link: "/password-autocapture.html" },
              { text: "Add TOTP for password application", link: "/totp-mfa.html" }
            ]
          },
          {
            text: "Passwordless MFA",
            collapsible: true,
            children: [
              { text: "Overview", link: "/mfa-overview.html" },
              { text: "Employee onboarding", link: "/employee-onboarding.html" },
              { text: "Organization rollout", link: "/mfa-organization-rollout.html" },
              { text: "Passwordless MFA for SSO", link: "/passwordless-mfa-sso.html" },
              { text: "Passwordless MFA for VPN / Wi-Fi", link: "/passwordless-mfa-vpn-wifi.html" },
              { text: "Passwordless MFA for Windows", link: "/passwordless-mfa-desktop-windows.html" },
              { text: "Passwordless MFA for vault", link: "/passwordless-mfa-vault.html" },
              { text: "Login experience with MFA", link: "/login-experience.html" },
              { text: "Local biometrics", link: "/local-biometrics.html" },
              { text: "Mobile UI overview", link: "/mobile-ui-overview.html" }
            ]
          },
          {
            text: "Device recovery",
            collapsible: true,
            children: [
              { text: "Overview", link: "/recovery-overview.html" },
              { text: "How to recover - user guide", link: "/how-to-recover-device-user-guide.html" },
              { text: "Self service user recovery", link: "/self-service-user-recovery.html" },
              { text: "Admin controlled user recovery", link: "/admin-controlled-user-recovery.html" },
              { text: "Recovery FAQ", link: "/recovery-faq.html" }
            ]
          },
          {
            text: "Security",
            collapsible: true,
            children: [
              { text: "Overview", link: "/mobile-app-security.html" },
              { text: "White paper", link: "/security-whitepaper.html" }
            ]
          },
          {
            text: "Cloud Radius",
            collapsible: true,
            children: [
              { text: "Overview", link: "/cloud-radius-overview.html" },
              { text: "How to set up Radius integration", link: "/how-to-set-up-radius-integration.html" },
              { text: "Cloud Radius IP address", link: "/cloud-radius-ip-address.html" }
            ]
          },
          {
            text: "Legal",
            collapsible: true,
            children: [
              { text: "Privacy policy", link: "/privacy-policy.html" },
              { text: "Terms of service", link: "/terms-of-service.html" }
            ]
          }
        ]
      }),
      plugins: [
        searchPlugin({}),
        gitPlugin({
          contributors: false
        })
      ]
    };
  }
});
export default require_config();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL25wb3R1cm5hay9EZXNrdG9wL2RvY3MuaWRlbWV1bS5jb20vZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ucG90dXJuYWsvRGVza3RvcC9kb2NzLmlkZW1ldW0uY29tL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbnBvdHVybmFrL0Rlc2t0b3AvZG9jcy5pZGVtZXVtLmNvbS9kb2NzLy52dWVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tICdAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdCdcbmltcG9ydCB7IGRvY3NlYXJjaFBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tZG9jc2VhcmNoJ1xuaW1wb3J0IHsgc2VhcmNoUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1zZWFyY2gnXG5pbXBvcnQgeyBucHJvZ3Jlc3NQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLW5wcm9ncmVzcydcbmltcG9ydCB7IGdpdFBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tZ2l0J1xuaW1wb3J0IFNrZWxldG9uQ2FyZHMgZnJvbSAndnVlLXVsdGltYXRlLXNrZWxldG9uLWNhcmRzJ1xuVnVlLnVzZShTa2VsZXRvbkNhcmRzKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbGFuZzogJ2VuLVVTJyxcbiAgZGVzdDogJy4vZG9jcy9kb2NzJyxcbiAgdGl0bGU6ICdpZGVtZXVtIGRvY3MnLFxuICBiYXNlOiAnLycsXG4gIGRlc2NyaXB0aW9uOiAnT25lIHBsYXRmb3JtIHRvIG1hbmFnZSBhY2Nlc3MgdG8gYXBwbGljYXRpb25zIGFuZCBpbmZyYXN0cnVjdHVyZSwgd2l0aG91dCBwYXNzd29yZHMnLFxuXHRcblx0dGhlbWU6IGRlZmF1bHRUaGVtZSh7XG5cdCAgICAvLyBkZWZhdWx0IHRoZW1lIGNvbmZpZ1xuXHRcdGxvZ286ICcvbG9nby5wbmcnLFxuXHRcdGRvY3NEaXI6ICdkb2NzJyxcblx0XHRzaWRlYmFyRGVwdGg6IDAsXG5cdFx0bGFzdFVwZGF0ZWQ6ICdMYXN0IFVwZGF0ZWQnLFxuXHQgICAgbmF2YmFyOiBbXG5cdFx0XHR7XG5cdFx0XHQgdGV4dDogJ1Jlc291cmNlcycsXG5cdFx0XHQgY2hpbGRyZW46IFt7dGV4dDonQ29udGFjdCcsIGxpbms6J2h0dHBzOi8vaWRlbWV1bS5jb20vY29udGFjdCd9LCB7dGV4dDonQmxvZycsIGxpbms6J2h0dHBzOi8vYmxvZy5pZGVtZXVtLmNvbSd9XSxcblx0XHR9LFxuICBcdCAgICAgIHtcbiAgXHQgICAgICAgIHRleHQ6ICdDaGFuZ2Vsb2cnLFxuICBcdCAgICAgICAgbGluazogJ2h0dHBzOi8vaWRlbWV1bS5jb20vY2hhbmdlbG9nJyxcbiAgXHQgICAgICB9LFxuXHQgICAgICB7XG5cdCAgICAgICAgdGV4dDogJ0ludGVncmF0aW9ucycsXG5cdCAgICAgICAgbGluazogJ2h0dHBzOi8vaW50ZWdyYXRpb25zLmlkZW1ldW0uY29tJyxcblx0ICAgICAgfSxcblx0ICAgICAge1xuXHQgICAgICAgIHRleHQ6ICdUcnkgaWRlbWV1bScsXG5cdCAgICAgICAgbGluazogJ2h0dHBzOi8vaWRlbWV1bS5jb20vdHJ5Jyxcblx0ICAgICAgfSxcblx0ICAgIF0sXG5cdFx0XG5cdFx0XG5cdFx0XG5cdFx0c2lkZWJhcjogW1xuXG5cdFx0ICAgICAgLy8gU2lkZWJhckl0ZW1cblx0XHQgICAgICB7XG5cdFx0ICAgICAgICB0ZXh0OiAnR2V0dGluZyBzdGFydGVkJyxcblx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0ICAgICAgICBjaGlsZHJlbjogW1xuXHRcdCAgICAgICAgICB7dGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvaW50cm9kdWN0aW9uJyx9LFxuXHRcdCAgICAgICAgICB7dGV4dDogJ0hvdyBpdCB3b3JrcycsIGxpbms6ICcvaG93LWl0LXdvcmtzLmh0bWwnLH0sXG5cdFx0ICAgICAgICAgIHt0ZXh0OiAnVHJ5IGlkZW1ldW0gZnJlZScsIGxpbms6ICcvc2VsZi1zZXJ2aWNlLW9uYm9hcmRpbmcuaHRtbCcsfSxcblx0XHQgICAgICAgIF0sXG5cdFx0ICAgICAgfSxcblx0XHQgICAgICB7XG5cdFx0ICAgICAgICB0ZXh0OiAnU2VjdXJlIFJlbW90ZSBBY2Nlc3MnLFxuXHRcdFx0XHQgIGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdCAgICAgICAgY2hpbGRyZW46IFtcblx0XHQgICAgICAgICAge3RleHQ6ICdPdmVydmlldycsbGluazogJy9yZW1vdGUtYWNjZXNzL3NlY3VyZS1yZW1vdGUtYWNjZXNzLW92ZXJ2aWV3Lmh0bWwnLH0sXG5cdFx0ICAgICAgICAgIHt0ZXh0OiAnRW5hYmxlIHJlbW90ZSBhY2Nlc3MnLGxpbms6ICcvcmVtb3RlLWFjY2Vzcy9lbmFibGUtcmVtb3RlLWFjY2Vzcy5odG1sJyx9LFxuXHRcdCAgICAgICAgICB7dGV4dDogJ1JlbW90ZSB3ZWIgYXBwbGljYXRpb25zJyxsaW5rOiAnL3JlbW90ZS1hY2Nlc3MvcmVtb3RlLXdlYi1hcHAuaHRtbCcsfSxcblx0XHQgICAgICAgICAge3RleHQ6ICdSZW1vdGUgU1NIIHNlcnZlcnMnLGxpbms6ICcvcmVtb3RlLWFjY2Vzcy9yZW1vdGUtc3NoLXNlcnZlci5odG1sJyx9LFxuXHRcdCAgICAgICAgICB7dGV4dDogJ0luc3RhbGwgaWRlbWV1bSBhZ2VudCcsbGluazogJy9yZW1vdGUtYWNjZXNzL2luc3RhbGwtYWdlbnQuaHRtbCcsfSxcblxuXHRcdCAgICAgICAgXSxcblx0XHQgICAgICB9LFxuXHRcdCAgICAgIHtcblx0XHQgICAgICAgIHRleHQ6ICdQYXNzd29yZGxlc3MgU2luZ2xlIFNpZ24tT24nLFxuXHRcdFx0XHQgIGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdCAgICAgICAgY2hpbGRyZW46IFtcblx0XHQgICAgICAgICAge3RleHQ6ICdPdmVydmlldycsbGluazogJy9wYXNzd29yZGxlc3Mtc2luZ2xlLXNpZ24tb24tb3ZlcnZpZXcuaHRtbCcsfSxcblx0XHRcdFx0ICB7dGV4dDogJ1VzZXIgc291cmNlIGludGVncmF0aW9uJyxsaW5rOiAnL2ludGVncmF0aW9uLXdpdGgtaHItc3lzdGVtLmh0bWwnLH0sXG5cdFx0XHQgICAgICB7dGV4dDogJ1VzZXIgbWFuYWdlbWVudCcsbGluazogJy91c2VyLW1hbmFnZW1lbnQuaHRtbCcsfSxcblx0XHQgICAgICAgICAge3RleHQ6ICdBcHBsaWNhdGlvbiBjYXRhbG9nJyxsaW5rOiAnL2FwcGxpY2F0aW9uLWNhdGFsb2cuaHRtbCcsfSxcblx0XHQgICAgICAgICAge3RleHQ6ICdJbnRlZ3JhdGUgU0FNTCBhcHBsaWNhdGlvbnMnLGxpbms6ICcvaW50ZWdyYXRlLXNhbWwtYXBwLmh0bWwnLH0sXG5cdFx0ICAgICAgICAgIHt0ZXh0OiAnSG93IHRvIG9idGFpbiBTQU1MIG1ldGFkYXRhJyxsaW5rOiAnL2hvdy10by1vYnRhaW4tc2FtbC1tZXRhZGF0YS1mb3ItaWRlbWV1bS5odG1sJyx9LFxuXHRcdCAgICAgICAgICB7dGV4dDogJ0F1dG9tYXRlZCBwcm92aXNpb25pbmcnLGxpbms6ICcvbGlmZWN5Y2xlLW1hbmFnZW1lbnQuaHRtbCcsfSxcblx0XHQgICAgICAgICAge3RleHQ6ICdBcHBsaWNhdGlvbiBlbnRpdGxlbWVudHMnLGxpbms6ICcvYXBwbGljYXRpb24tZW50aXRsZW1lbnRzLmh0bWwnLH0sXG5cdFx0ICAgICAgICAgIHt0ZXh0OiAnR3JvdXAgbWFuYWdlbWVudCcsbGluazogJy9ncm91cC1tYW5hZ2VtZW50Lmh0bWwnLH0sXG5cdFx0ICAgICAgICBdLFxuXHRcdCAgICAgIH0sXG5cdFx0ICAgICAge1xuXHRcdCAgICAgICAgdGV4dDogJ1Bhc3N3b3JkIFZhdWx0Jyxcblx0XHRcdFx0ICBjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHQgICAgICAgIGNoaWxkcmVuOiBbXG5cdFx0ICAgICAgICAgIHt0ZXh0OiAnT3ZlcnZpZXcnLGxpbms6ICcvcGFzc3dvcmQtdmF1bHQtb3ZlcnZpZXcuaHRtbCcsfSxcblx0XHQgICAgICAgICAge3RleHQ6ICdDcmVhdGUgcGFzc3dvcmQgYXBwbGljYXRpb24nLGxpbms6ICcvY3JlYXRlLXBhc3N3b3JkLWFwcGxpY2F0aW9uLmh0bWwnLH0sXG5cdFx0ICAgICAgICAgIHt0ZXh0OiAnVmlldyAvIGVkaXQgLyBkZWxldGUgcGFzc3dvcmRzJyxsaW5rOiAnL2VkaXQtcGFzc3dvcmQtYXBwbGljYXRpb24uaHRtbCcsfSxcblx0XHQgICAgICAgICAge3RleHQ6ICdTaGFyZSBwYXNzd29yZHMnLGxpbms6ICcvc2hhcmUtcGFzc3dvcmQtYXBwbGljYXRpb24uaHRtbCcsfSxcblx0XHQgICAgICAgICAge3RleHQ6ICdQYXNzd29yZCBhdXRvZmlsbCcsbGluazogJy9hdXRvZmlsbC1wYXNzd29yZHMuaHRtbCcsfSxcblx0XHQgICAgICAgICAge3RleHQ6ICdQYXNzd29yZCBhdXRvIGNhcHR1cmUnLGxpbms6ICcvcGFzc3dvcmQtYXV0b2NhcHR1cmUuaHRtbCcsfSxcblx0XHQgICAgICAgICAge3RleHQ6ICdBZGQgVE9UUCBmb3IgcGFzc3dvcmQgYXBwbGljYXRpb24nLGxpbms6ICcvdG90cC1tZmEuaHRtbCcsfSxcblx0XHQgICAgICAgIF0sXG5cdFx0ICAgICAgfSxcblx0XHQgICAgICB7XG5cdFx0ICAgICAgICB0ZXh0OiAnUGFzc3dvcmRsZXNzIE1GQScsXG5cdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdCAgICAgICAgY2hpbGRyZW46IFtcblx0XHQgICAgICAgICAge3RleHQ6ICdPdmVydmlldycsbGluazogJy9tZmEtb3ZlcnZpZXcuaHRtbCcsfSxcblx0XHRcdFx0ICB7dGV4dDogJ0VtcGxveWVlIG9uYm9hcmRpbmcnLGxpbms6ICcvZW1wbG95ZWUtb25ib2FyZGluZy5odG1sJyx9LFxuXHRcdFx0XHQgIHt0ZXh0OiAnT3JnYW5pemF0aW9uIHJvbGxvdXQnLGxpbms6ICcvbWZhLW9yZ2FuaXphdGlvbi1yb2xsb3V0Lmh0bWwnLH0sXG5cdFx0XHRcdCAge3RleHQ6ICdQYXNzd29yZGxlc3MgTUZBIGZvciBTU08nLGxpbms6ICcvcGFzc3dvcmRsZXNzLW1mYS1zc28uaHRtbCcsfSxcblx0XHRcdFx0ICB7dGV4dDogJ1Bhc3N3b3JkbGVzcyBNRkEgZm9yIFZQTiAvIFdpLUZpJyxsaW5rOiAnL3Bhc3N3b3JkbGVzcy1tZmEtdnBuLXdpZmkuaHRtbCcsfSxcblx0XHRcdFx0ICB7dGV4dDogJ1Bhc3N3b3JkbGVzcyBNRkEgZm9yIFdpbmRvd3MnLGxpbms6ICcvcGFzc3dvcmRsZXNzLW1mYS1kZXNrdG9wLXdpbmRvd3MuaHRtbCcsfSxcblx0XHRcdFx0ICB7dGV4dDogJ1Bhc3N3b3JkbGVzcyBNRkEgZm9yIHZhdWx0JyxsaW5rOiAnL3Bhc3N3b3JkbGVzcy1tZmEtdmF1bHQuaHRtbCcsfSxcblx0XHRcdFx0ICB7dGV4dDogJ0xvZ2luIGV4cGVyaWVuY2Ugd2l0aCBNRkEnLGxpbms6ICcvbG9naW4tZXhwZXJpZW5jZS5odG1sJyx9LFxuXHRcdFx0XHQgIHt0ZXh0OiAnTG9jYWwgYmlvbWV0cmljcycsbGluazogJy9sb2NhbC1iaW9tZXRyaWNzLmh0bWwnLH0sXG5cdFx0XHRcdCAge3RleHQ6ICdNb2JpbGUgVUkgb3ZlcnZpZXcnLGxpbms6ICcvbW9iaWxlLXVpLW92ZXJ2aWV3Lmh0bWwnLH0sXG5cdFx0ICAgICAgICBdLFxuXHRcdCAgICAgIH0sXG5cdFx0ICAgICAge1xuXHRcdCAgICAgICAgdGV4dDogJ0RldmljZSByZWNvdmVyeScsXG5cdFx0XHRcdCAgY29sbGFwc2libGU6IHRydWUsXG5cdFx0ICAgICAgICBjaGlsZHJlbjogW1xuXHRcdCAgICAgICAgICB7dGV4dDogJ092ZXJ2aWV3JyxsaW5rOiAnL3JlY292ZXJ5LW92ZXJ2aWV3Lmh0bWwnLH0sXG5cdFx0ICAgICAgICAgIHt0ZXh0OiAnSG93IHRvIHJlY292ZXIgLSB1c2VyIGd1aWRlJyxsaW5rOiAnL2hvdy10by1yZWNvdmVyLWRldmljZS11c2VyLWd1aWRlLmh0bWwnLH0sXHRcblx0XHQgICAgICAgICAge3RleHQ6ICdTZWxmIHNlcnZpY2UgdXNlciByZWNvdmVyeScsbGluazogJy9zZWxmLXNlcnZpY2UtdXNlci1yZWNvdmVyeS5odG1sJyx9LFx0XG5cdFx0ICAgICAgICAgIHt0ZXh0OiAnQWRtaW4gY29udHJvbGxlZCB1c2VyIHJlY292ZXJ5JyxsaW5rOiAnL2FkbWluLWNvbnRyb2xsZWQtdXNlci1yZWNvdmVyeS5odG1sJyx9LFx0XG5cdFx0ICAgICAgICAgIHt0ZXh0OiAnUmVjb3ZlcnkgRkFRJyxsaW5rOiAnL3JlY292ZXJ5LWZhcS5odG1sJyx9LFxuXHRcdCAgICAgICAgXSxcblx0XHQgICAgICB9LFxuXHRcdCAgICAgIHtcblx0XHQgICAgICAgIHRleHQ6ICdTZWN1cml0eScsXG5cdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdCAgICAgICAgY2hpbGRyZW46IFtcblx0XHQgICAgICAgICAge3RleHQ6ICdPdmVydmlldycsbGluazogJy9tb2JpbGUtYXBwLXNlY3VyaXR5Lmh0bWwnLH0sXG5cdFx0ICAgICAgICAgIHt0ZXh0OiAnV2hpdGUgcGFwZXInLGxpbms6ICcvc2VjdXJpdHktd2hpdGVwYXBlci5odG1sJyx9LFxuXHRcdCAgICAgICAgXSxcblx0XHQgICAgICB9LFxuXHRcdCAgICAgIHtcblx0XHQgICAgICAgIHRleHQ6ICdDbG91ZCBSYWRpdXMnLFxuXHRcdFx0XHQgIGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdCAgICAgICAgY2hpbGRyZW46IFtcblx0XHQgICAgICAgICAge3RleHQ6ICdPdmVydmlldycsbGluazogJy9jbG91ZC1yYWRpdXMtb3ZlcnZpZXcuaHRtbCcsfSxcblx0XHQgICAgICAgICAge3RleHQ6ICdIb3cgdG8gc2V0IHVwIFJhZGl1cyBpbnRlZ3JhdGlvbicsbGluazogJy9ob3ctdG8tc2V0LXVwLXJhZGl1cy1pbnRlZ3JhdGlvbi5odG1sJyx9LFxuXHRcdCAgICAgICAgICB7dGV4dDogJ0Nsb3VkIFJhZGl1cyBJUCBhZGRyZXNzJyxsaW5rOiAnL2Nsb3VkLXJhZGl1cy1pcC1hZGRyZXNzLmh0bWwnLH0sXG5cdFx0ICAgICAgICBdLFxuXHRcdCAgICAgIH0sXG5cdFx0ICAgICAge1xuXHRcdCAgICAgICAgdGV4dDogJ0xlZ2FsJyxcblx0XHRcdFx0ICBjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHQgICAgICAgIGNoaWxkcmVuOiBbXG5cdFx0ICAgICAgICAgIHt0ZXh0OiAnUHJpdmFjeSBwb2xpY3knLGxpbms6ICcvcHJpdmFjeS1wb2xpY3kuaHRtbCcsfSxcblx0XHQgICAgICAgICAge3RleHQ6ICdUZXJtcyBvZiBzZXJ2aWNlJyxsaW5rOiAnL3Rlcm1zLW9mLXNlcnZpY2UuaHRtbCcsfSxcblx0XHQgICAgICAgIF0sXG5cdFx0ICAgICAgfSxcblx0XHQgICAgXSxcblxuXHQgIH0pLFxuXHQgIHBsdWdpbnM6IFtcblx0ICAgICAgc2VhcmNoUGx1Z2luKHtcblx0ICAgICAgICAvLyBvcHRpb25zXG5cdCAgICAgIH0pLFxuXHRcdCAgZ2l0UGx1Z2luKHtcblx0XHRcdCAgY29udHJpYnV0b3JzOiBmYWxzZSxcblx0XHQgICAgICB9KSxcblx0ICAgIF0sXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7O0FBQWdWLFNBQVMsb0JBQW9CO0FBQzdXLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsaUJBQWlCO0FBQzFCLE9BQU8sbUJBQW1CO0FBTDFCO0FBQUE7QUFNQSxRQUFJLElBQUksYUFBYTtBQUVyQixXQUFPLFVBQVU7QUFBQSxNQUNmLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUVkLE9BQU8sYUFBYTtBQUFBLFFBRW5CLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULGNBQWM7QUFBQSxRQUNkLGFBQWE7QUFBQSxRQUNWLFFBQVE7QUFBQSxVQUNWO0FBQUEsWUFDQyxNQUFNO0FBQUEsWUFDTixVQUFVLENBQUMsRUFBQyxNQUFLLFdBQVcsTUFBSyw4QkFBNkIsR0FBRyxFQUFDLE1BQUssUUFBUSxNQUFLLDJCQUEwQixDQUFDO0FBQUEsVUFDakg7QUFBQSxVQUNPO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0Y7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsUUFJSCxTQUFTO0FBQUEsVUFHSDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ1osYUFBYTtBQUFBLFlBQ1AsVUFBVTtBQUFBLGNBQ1IsRUFBQyxNQUFNLGdCQUFnQixNQUFNLGdCQUFnQjtBQUFBLGNBQzdDLEVBQUMsTUFBTSxnQkFBZ0IsTUFBTSxxQkFBcUI7QUFBQSxjQUNsRCxFQUFDLE1BQU0sb0JBQW9CLE1BQU0sZ0NBQWdDO0FBQUEsWUFDbkU7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ1YsYUFBYTtBQUFBLFlBQ1QsVUFBVTtBQUFBLGNBQ1IsRUFBQyxNQUFNLFlBQVcsTUFBTSxvREFBb0Q7QUFBQSxjQUM1RSxFQUFDLE1BQU0sd0JBQXVCLE1BQU0sMkNBQTJDO0FBQUEsY0FDL0UsRUFBQyxNQUFNLDJCQUEwQixNQUFNLHFDQUFxQztBQUFBLGNBQzVFLEVBQUMsTUFBTSxzQkFBcUIsTUFBTSx3Q0FBd0M7QUFBQSxjQUMxRSxFQUFDLE1BQU0seUJBQXdCLE1BQU0sb0NBQW9DO0FBQUEsWUFFM0U7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ1YsYUFBYTtBQUFBLFlBQ1QsVUFBVTtBQUFBLGNBQ1IsRUFBQyxNQUFNLFlBQVcsTUFBTSw2Q0FBNkM7QUFBQSxjQUMzRSxFQUFDLE1BQU0sMkJBQTBCLE1BQU0sbUNBQW1DO0FBQUEsY0FDdkUsRUFBQyxNQUFNLG1CQUFrQixNQUFNLHdCQUF3QjtBQUFBLGNBQ3BELEVBQUMsTUFBTSx1QkFBc0IsTUFBTSw0QkFBNEI7QUFBQSxjQUMvRCxFQUFDLE1BQU0sK0JBQThCLE1BQU0sMkJBQTJCO0FBQUEsY0FDdEUsRUFBQyxNQUFNLCtCQUE4QixNQUFNLGdEQUFnRDtBQUFBLGNBQzNGLEVBQUMsTUFBTSwwQkFBeUIsTUFBTSw2QkFBNkI7QUFBQSxjQUNuRSxFQUFDLE1BQU0sNEJBQTJCLE1BQU0saUNBQWlDO0FBQUEsY0FDekUsRUFBQyxNQUFNLG9CQUFtQixNQUFNLHlCQUF5QjtBQUFBLFlBQzNEO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNWLGFBQWE7QUFBQSxZQUNULFVBQVU7QUFBQSxjQUNSLEVBQUMsTUFBTSxZQUFXLE1BQU0sZ0NBQWdDO0FBQUEsY0FDeEQsRUFBQyxNQUFNLCtCQUE4QixNQUFNLG9DQUFvQztBQUFBLGNBQy9FLEVBQUMsTUFBTSxrQ0FBaUMsTUFBTSxrQ0FBa0M7QUFBQSxjQUNoRixFQUFDLE1BQU0sbUJBQWtCLE1BQU0sbUNBQW1DO0FBQUEsY0FDbEUsRUFBQyxNQUFNLHFCQUFvQixNQUFNLDJCQUEyQjtBQUFBLGNBQzVELEVBQUMsTUFBTSx5QkFBd0IsTUFBTSw2QkFBNkI7QUFBQSxjQUNsRSxFQUFDLE1BQU0scUNBQW9DLE1BQU0saUJBQWlCO0FBQUEsWUFDcEU7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ1osYUFBYTtBQUFBLFlBQ1AsVUFBVTtBQUFBLGNBQ1IsRUFBQyxNQUFNLFlBQVcsTUFBTSxxQkFBcUI7QUFBQSxjQUNuRCxFQUFDLE1BQU0sdUJBQXNCLE1BQU0sNEJBQTRCO0FBQUEsY0FDL0QsRUFBQyxNQUFNLHdCQUF1QixNQUFNLGlDQUFpQztBQUFBLGNBQ3JFLEVBQUMsTUFBTSw0QkFBMkIsTUFBTSw2QkFBNkI7QUFBQSxjQUNyRSxFQUFDLE1BQU0sb0NBQW1DLE1BQU0sa0NBQWtDO0FBQUEsY0FDbEYsRUFBQyxNQUFNLGdDQUErQixNQUFNLHlDQUF5QztBQUFBLGNBQ3JGLEVBQUMsTUFBTSw4QkFBNkIsTUFBTSwrQkFBK0I7QUFBQSxjQUN6RSxFQUFDLE1BQU0sNkJBQTRCLE1BQU0seUJBQXlCO0FBQUEsY0FDbEUsRUFBQyxNQUFNLG9CQUFtQixNQUFNLHlCQUF5QjtBQUFBLGNBQ3pELEVBQUMsTUFBTSxzQkFBcUIsTUFBTSwyQkFBMkI7QUFBQSxZQUN6RDtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDVixhQUFhO0FBQUEsWUFDVCxVQUFVO0FBQUEsY0FDUixFQUFDLE1BQU0sWUFBVyxNQUFNLDBCQUEwQjtBQUFBLGNBQ2xELEVBQUMsTUFBTSwrQkFBOEIsTUFBTSx5Q0FBeUM7QUFBQSxjQUNwRixFQUFDLE1BQU0sOEJBQTZCLE1BQU0sbUNBQW1DO0FBQUEsY0FDN0UsRUFBQyxNQUFNLGtDQUFpQyxNQUFNLHVDQUF1QztBQUFBLGNBQ3JGLEVBQUMsTUFBTSxnQkFBZSxNQUFNLHFCQUFxQjtBQUFBLFlBQ25EO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNaLGFBQWE7QUFBQSxZQUNQLFVBQVU7QUFBQSxjQUNSLEVBQUMsTUFBTSxZQUFXLE1BQU0sNEJBQTRCO0FBQUEsY0FDcEQsRUFBQyxNQUFNLGVBQWMsTUFBTSw0QkFBNEI7QUFBQSxZQUN6RDtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDVixhQUFhO0FBQUEsWUFDVCxVQUFVO0FBQUEsY0FDUixFQUFDLE1BQU0sWUFBVyxNQUFNLDhCQUE4QjtBQUFBLGNBQ3RELEVBQUMsTUFBTSxvQ0FBbUMsTUFBTSx5Q0FBeUM7QUFBQSxjQUN6RixFQUFDLE1BQU0sMkJBQTBCLE1BQU0sZ0NBQWdDO0FBQUEsWUFDekU7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ1YsYUFBYTtBQUFBLFlBQ1QsVUFBVTtBQUFBLGNBQ1IsRUFBQyxNQUFNLGtCQUFpQixNQUFNLHVCQUF1QjtBQUFBLGNBQ3JELEVBQUMsTUFBTSxvQkFBbUIsTUFBTSx5QkFBeUI7QUFBQSxZQUMzRDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFFSCxDQUFDO0FBQUEsTUFDRCxTQUFTO0FBQUEsUUFDTCxhQUFhLENBRWIsQ0FBQztBQUFBLFFBQ0osVUFBVTtBQUFBLFVBQ1QsY0FBYztBQUFBLFFBQ1gsQ0FBQztBQUFBLE1BQ0o7QUFBQSxJQUNMO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
