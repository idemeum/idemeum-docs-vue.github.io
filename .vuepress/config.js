import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { searchPlugin } from '@vuepress/plugin-search'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

module.exports = {
  lang: 'en-US',
  dest: './docs/docs',
  title: 'idemeum docs',
  base: '/',
  description: 'One platform to manage access to applications and infrastructure, without passwords',
	
	theme: defaultTheme({
	    // default theme config
		logo: '/logo.png',
		docsDir: 'docs',
		sidebarDepth: 0,
		lastUpdated: 'Last Updated',
	    navbar: [
			{
			 text: 'Resources',
			 children: [{text:'Contact', link:'https://idemeum.com/contact'}, {text:'Blog', link:'https://blog.idemeum.com'}],
		},
  	      {
  	        text: 'Changelog',
  	        link: 'https://idemeum.com/changelog',
  	      },
	      {
	        text: 'Integrations',
	        link: 'https://integrations.idemeum.com',
	      },
	      {
	        text: 'Try idemeum',
	        link: 'https://idemeum.com/try',
	      },
	    ],
		
		
		
		sidebar: [

		      // SidebarItem
		      {
		        text: 'Getting started',
				collapsible: true,
		        children: [
		          {text: 'Introduction', link: '/introduction',},
		          {text: 'How it works', link: '/how-it-works.html',},
		          {text: 'Try idemeum free', link: '/self-service-onboarding.html',},
		        ],
		      },
		      {
		        text: 'Secure Remote Access',
				  collapsible: true,
		        children: [
		          {text: 'Overview',link: '/remote-access/secure-remote-access-overview.html',},

		        ],
		      },
		      {
		        text: 'Passwordless Single Sign-On',
				  collapsible: true,
		        children: [
		          {text: 'Overview',link: '/application-catalog.html',},
		          {text: 'How to obtain SAML metadata',link: '/how-to-obtain-saml-metadata-for-idemeum.html',},
		          {text: 'Automated provisioning',link: '/lifecycle-management.html',},
		          {text: 'Group management',link: '/group-management.html',},
		          {text: 'Application entitlements',link: '/application-entitlements.html',},
		          {text: 'Add custom SAML app',link: '/add-custom-saml-app.html',},

		        ],
		      },
		      {
		        text: 'Password Vault',
				  collapsible: true,
		        children: [
		          {text: 'Overview',link: '/password-vault-overview.html',},
		          {text: 'Create password application',link: '/create-password-application.html',},
		          {text: 'View / edit / delete application',link: '/edit-password-application.html',},
		          {text: 'Add TOTP for password application',link: '/totp-mfa.html',},
		        ],
		      },
		      {
		        text: 'Passwordless MFA',
				collapsible: true,
		        children: [
		          {text: 'Overview',link: '/mfa-overview.html',},
				  {text: 'Employee onboarding',link: '/employee-onboarding.html',},
				  {text: 'User source integration',link: '/integration-with-hr-system.html',},
				  {text: 'Passwordless MFA for SSO',link: '/passwordless-mfa-sso.html',},
				  {text: 'Passwordless MFA for VPN / Wi-Fi',link: '/passwordless-mfa-vpn-wifi.html',},
				  {text: 'Passwordless MFA for desktop',link: '/passwordless-mfa-desktop.html',},
				  {text: 'Passwordless MFA for vault',link: '/passwordless-mfa-vault.html',},
				  {text: 'Passwordless MFA for infrastructure',link: '/passwordless-mfa-infra.html',},
				  {text: 'Login experience with MFA',link: '/login-experience.html',},
				  {text: 'Local biometrics',link: '/local-biometrics.html',},
				  {text: 'MFA organization rollout',link: '/mfa-organization-rollout.html',},
				  {text: 'Mobile UI overview',link: '/mobile-ui-overview.html',},
		        ],
		      },
		      {
		        text: 'Device recovery',
				  collapsible: true,
		        children: [
		          {text: 'Overview',link: '/recovery-overview.html',},
		          {text: 'How to recover - user guide',link: '/how-to-recover-device-user-guide.html',},	
		          {text: 'Self service user recovery',link: '/self-service-user-recovery.html',},	
		          {text: 'Admin controlled user recovery',link: '/admin-controlled-user-recovery.html',},	
		          {text: 'Recovery FAQ',link: '/recovery-faq.html',},
		        ],
		      },
		      {
		        text: 'Security',
				collapsible: true,
		        children: [
		          {text: 'Overview',link: '/mobile-app-security.html',},
		          {text: 'White paper',link: '/security-whitepaper.html',},
		        ],
		      },
		      {
		        text: 'Cloud Radius',
				  collapsible: true,
		        children: [
		          {text: 'Overview',link: '/cloud-radius-overview.html',},
		          {text: 'How to set up Radius integration',link: '/how-to-set-up-radius-integration.html',},
		          {text: 'Cloud Radius IP address',link: '/cloud-radius-ip-address.html',},
		        ],
		      },
		    ],

	  }),

}