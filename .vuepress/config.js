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
  description: 'One platform to manage access to workstations, applications, and infrastructure, without passwords',
	
	theme: defaultTheme({
	    // default theme config
		logo: '/logo.png',
		docsDir: 'docs',
		sidebarDepth: 0,
		lastUpdated: 'Last Updated',
	    navbar: [
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
		      {
		        text: 'Quick start guides',
				collapsible: true,
		        children: [
		          {text: 'RFID Single Sign-On quick start', link: '/rfid-quickstart.html',},
		        ],
		      },
		      {
		        text: 'Core platform features',
				collapsible: true,
		        children: [
				  {text: 'User and admin portals',link: '/user-and-admin-portals.html',},
		          {text: 'User source integration',link: '/integration-with-hr-system.html',},
				  {text: 'User management',link: '/user-management.html',},
				  {text: 'Employee onboarding',link: '/employee-onboarding.html',},
		  	      {
		  	        text: 'SAML Single Sign-On',
		  			  collapsible: true,
		  	        children: [
		  	          {text: 'Overview',link: '/passwordless-single-sign-on-overview.html',},
		  	          {text: 'How to obtain SAML metadata',link: '/how-to-obtain-saml-metadata-for-idemeum.html',},
		  	          {text: 'Integrate SAML applications',link: '/integrate-saml-app.html',},
		  	        ],
		  	      },
		  	      {text: 'Automated provisioning',link: '/lifecycle-management.html',},
				  {text: 'Group management',link: '/group-management.html',},
		  	      {text: 'Application entitlements',link: '/application-entitlements.html',},
		  	      {text: 'Security policies',link: '/security-policies.html',},
		        ],
		      },
		  
	  	      {
	  	        text: 'RFID Single Sign-On',
	  			  collapsible: true,
	  	        children: [
	  	          {text: 'Overview', link: '/rfid/rfid-overview.html',},
	  			  {text: 'Architecture', link: '/rfid/rfid-architecture.html',},
				  {text: 'Support matrix', link: '/rfid/rfid-support-matrix.html',},
	  			  {text: 'Feature matrix', link: '/rfid/rfid-features.html',},
	  			  {text: 'RFID user onboarding', link: '/rfid/rfid-user-onboarding',},
	  			  {text: 'RFID readers', link: '/rfid/rfid-readers.html',},
	  			  {text: 'RFID cloud settings', link: '/rfid/rfid-cloud-settings.html',},
	  			  {text: 'Configuration guide', link: '/rfid/rfid-configuration-guide.html',},
				  {text: 'Shared account login', link: '/rfid/rfid-shared-account.html',},
				  {text: 'Branding', link: '/rfid/rfid-branding.html',},
				  {text: 'Silent installatioin', link: '/rfid/rfid-silent-installation.html',},
	  			  {text: 'Troubleshooting', link: '/rfid/rfid-troubleshooting.html',},
	  	        ],
	  	      },
		      {
		        text: 'Passwordless MFA',
				collapsible: true,
		        children: [
		          {text: 'Overview',link: '/mfa/mfa-overview.html',},
				  {text: 'Architecture',link: '/mfa/mfa-architecture.html',},
				  {text: 'MFA for cloud applications',link: '/mfa/mfa-cloud-applications.html',},
				  {text: 'MFA for workstations',
				   collapsible: true,
					children: [
					  {text: 'Overview',link: '/mfa/desktop-mfa-overview.html',},
					  {text: 'Install desktop application',link: '/mfa/desktop-app-install.html',},
					  {text: 'Windows local users machines',link: '/mfa/desktop-mfa-local-users.html',},
					  {text: 'Windows domain-joined machines',link: '/mfa/desktop-mfa-win-domain-joined.html',},
					  {text: 'Share access to workstations',link: '/mfa/desktop-mfa-share-access.html',},
					  {text: 'How to login into workstation',link: '/mfa/desktop-how-to-login.html',},
					],
				},
				  {text: 'MFA for network infrastructure',link: '/mfa/mfa-network-infrastructure.html',},
				  {text: 'MFA for legacy applications',link: '/mfa/mfa-legacy-applications.html',},
				  {text: 'MFA for RDP access',link: '/mfa/mfa-rdp.html',},
				  {text: 'MFA for password vault',link: '/mfa/mfa-password-vault.html',},
				  {text: 'Organization rollout',link: '/mfa/mfa-organization-rollout.html',},
				  {text: 'Login experience',link: '/mfa/mfa-login-experience.html',},
				  {text: 'Local biometrics',link: '/mfa/mfa-local-biometrics.html',},
				  {text: 'Mobile app overview',link: '/mfa/mobile-ui-overview.html',},
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
				  {text: 'FAQ',link: '/mfa/mfa-faq.html',},
		        ],
		      },
			  {
			        text: 'Zero Trust Network Access',
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
				        text: 'Other products',
						collapsible: true,
				        children: [
						  
								  {
								        text: 'Authentication proxy',
										collapsible: true,
								        children: [
								          {text: 'Configuration',link: '/authproxy.html',},
								        ],
								      },
									  {
									        text: 'Cloud Radius',
											  collapsible: true,
									        children: [
									          {text: 'Overview',link: '/cloud-radius-overview.html',},
									        ],
									      },
				        ],
				      },
		  
		  {
		        text: 'Security',
				collapsible: true,
		        children: [
		          {text: 'Overview',link: '/security-overview.html',},
		          {text: 'White paper',link: '/security-whitepaper.html',},
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
			  {
			        text: 'Downloads',
					  collapsible: true,
			        children: [
			          {text: 'Download links',link: '/downloads.html',},
			          {text: 'Desktop applications',link: 'https://docs.idemeum.com/changelog/versioning.html',},
			        ],
			      },
		  {
		        text: 'Changelog',
				  collapsible: true,
		        children: [
		          {text: 'Desktop app versions',link: 'https://docs.idemeum.com/changelog/versioning.html',},
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