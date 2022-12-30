import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { searchPlugin } from '@vuepress/plugin-search'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { gitPlugin } from '@vuepress/plugin-git'

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
			 children: [{text:'Contact', link:'https://idemeum.com/contact'}, {text:'Blog', link:'https://blog.idemeum.com'}, {text: 'Changelog', link: 'https://idemeum.com/changelog',}],
		},
	      {
	        text: 'Integrations',
	        link: 'https://integrations.idemeum.com',
	      },
	      {
	        text: 'Slack community',
	        link: 'https://join.slack.com/t/idemeum-community/shared_invite/zt-npfwnoud-hOjc6rbmZmdTAY3xE3i5FA',
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
		          {text: 'Introduction', link: '/introduction.html',},
		          {text: 'Quickstart', link: '/quickstart.html',},
		          {text: 'How platform works', link: '/how-it-works.html',},
		          {text: 'Downloads', link: '/downloads.html',},
		        ],
		      },
		      {
		        text: 'Secure Remote Access',
				  collapsible: true,
		        children: [
		          {text: 'Overview',link: '/remote-access/secure-remote-access-overview.html',},
		          {text: 'Enable remote access',link: '/remote-access/enable-remote-access.html',},
		          {text: 'Remote web applications',link: '/remote-access/remote-web-app.html',},
		          {text: 'Remote SSH servers',link: '/remote-access/remote-ssh-server.html',},
  		          {
  				    text: 'Remote Windows Desktops',
  					collapsible: true,
  					children: [
  					  {text: 'Overview',link: '/remote-access/remote-windows-desktop-overview.html',},
  					  {text: 'Domain controller configuration',link: '/remote-access/windows-active-domain-configuration.html',},
  					  {text: 'Windows desktops setup',link: '/remote-access/remote-windows-desktop.html',},
  					],
  				  },
		          {text: 'Install idemeum agent',link: '/remote-access/install-agent.html',},

		        ],
		      },
		      {
		        text: 'Passwordless Single Sign-On',
				  collapsible: true,
		        children: [
		          {text: 'Overview',link: '/passwordless-single-sign-on-overview.html',},
				  {text: 'User source integration',link: '/integration-with-hr-system.html',},
			      {text: 'User management',link: '/user-management.html',},
		          {text: 'Application catalog',link: '/application-catalog.html',},
		          {text: 'Integrate SAML applications',link: '/integrate-saml-app.html',},
		          {text: 'How to obtain SAML metadata',link: '/how-to-obtain-saml-metadata-for-idemeum.html',},
		          {text: 'Automated provisioning',link: '/lifecycle-management.html',},
		          {text: 'Application entitlements',link: '/application-entitlements.html',},
		          {text: 'Group management',link: '/group-management.html',},
				  {text: 'Security Policies',link: '/security-policies.html',},
		        ],
		      },
		      {
		        text: 'Password Vault',
				  collapsible: true,
		        children: [
		          {text: 'Overview',link: '/password-vault-overview.html',},
		          {text: 'Create password application',link: '/create-password-application.html',},
		          {text: 'View / edit / delete passwords',link: '/edit-password-application.html',},
		          {text: 'Share passwords',link: '/share-password-application.html',},
		          {text: 'Password autofill',link: '/autofill-passwords.html',},
		          {text: 'Password auto capture',link: '/password-autocapture.html',},
		          {text: 'Add TOTP for password application',link: '/totp-mfa.html',},
		        ],
		      },
		      {
		        text: 'Passwordless MFA',
				collapsible: true,
		        children: [
		          {text: 'Overview',link: '/mfa-overview.html',},
				  {text: 'Employee onboarding',link: '/employee-onboarding.html',},
				  {text: 'Organization rollout',link: '/mfa-organization-rollout.html',},
				  {text: 'Passwordless MFA for SSO',link: '/passwordless-mfa-sso.html',},
				  {text: 'Passwordless MFA for VPN / Wi-Fi',link: '/passwordless-mfa-vpn-wifi.html',},
				  {text: 'Passwordless MFA for Windows',link: '/passwordless-mfa-desktop-windows.html',},
				  {text: 'Passwordless MFA for vault',link: '/passwordless-mfa-vault.html',},
				  {text: 'Login experience with MFA',link: '/login-experience.html',},
				  {text: 'Local biometrics',link: '/local-biometrics.html',},
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
		      {
		        text: 'Legal',
				  collapsible: true,
		        children: [
		          {text: 'Privacy policy',link: '/privacy-policy.html',},
		          {text: 'Terms of service',link: '/terms-of-service.html',},
		        ],
		      },
		    ],

	  }),
	  plugins: [
	      searchPlugin({
	        // options
	      }),
		  gitPlugin({
			  contributors: false,
		      }),
	    ],
}