<template><div><h1 id="user-source-integration" tabindex="-1"><a class="header-anchor" href="#user-source-integration" aria-hidden="true">#</a> User source integration</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>User source is critical for employee onboarding. As we reviewed in detail in the <RouterLink to="/employee-onboarding.html">employee onboarding</RouterLink> section, users first verify their personal identity claims in the mobile app, and when scanning the QR code on the company portal for the first time, idemeum maps <strong>personal</strong> identity claims to <strong>corporate email</strong> using the integrated user source.</p>
<p>Today we support the following options for user source:</p>
<ol>
<li><strong>Local user source</strong> - admins manually create user records, specifically mappings between personal and corporate identity claims so that new employees can be onboarded into an organization.</li>
<li><strong>External user source</strong> - idemeum can integrate with external user source, such as an HR system, Payroll provider, or an existing Identity Provider to onboard users automatically and automatically map new employees to company email addresses.</li>
</ol>
<h2 id="external-user-source" tabindex="-1"><a class="header-anchor" href="#external-user-source" aria-hidden="true">#</a> External user source</h2>
<p>External user source allows to leverage existing user database for personal to corporate identity claims mapping, and onboarding users automatically. Today we support a variety of integrations, and you can check our integrations portal here - <a href="https://integrations.idemeum.com/tag/user-source/" target="_blank" rel="noopener noreferrer">user source integrations<ExternalLinkIcon/></a>.</p>
<p>Integration is very simple and leverages one of the following methods:</p>
<ul>
<li><strong>API key integration</strong> - all you will need to do is to enter an API key in order to connect idemeum to your user source.</li>
<li><strong>oAuth integration</strong> - you will need to authorize idemeum to access user source API.</li>
</ul>
<p>To connect idemeum to external user source navigate to to <code v-pre>Users</code> -&gt; <code v-pre>User source</code>. Then choose the source that you want to connect to from a dropdown list. Then you will need to either enter an API key or conduct an oAuth authorization.</p>
<p><img src="@source/images/user-source.png" alt="User source"></p>
<p>Let's take a look at some of the advanced settings:</p>
<ul>
<li><strong>Off-boarding frequency</strong> - idemeum detects when employees are off-boarded so that idemeum can block access and de-provision accounts. Some systems do not support Web hooks therefore we need to periodically check if there are new off-boarded employees. With this configuration you can choose how often you want idemeum to check for off-boarded employees.</li>
<li><strong>Corporate email format</strong> - when employees onboard into organization they are using personal email address, phone number, or ID document. However, corporate email address is required in order for idemeum to log user into applications. As a first step idemeum looks for corporate email address in user source. If found that email will be used for all applications provisioned for the user. If the email is not found, idemeum will create one on the fly. With this setting you can choose what email format you will use for all employees. The default is <code v-pre>firstname.lastname@domain.com</code>.</li>
</ul>
<h2 id="local-user-source" tabindex="-1"><a class="header-anchor" href="#local-user-source" aria-hidden="true">#</a> Local user source</h2>
<p>With local user source admins can create users manually and specify personal claims to corporate email mappings. To configure local user source navigate to <code v-pre>Users</code> -&gt; <code v-pre>User source</code> and choose <code v-pre>Local</code>.</p>
<p><img src="@source/images/local-source.png" alt="User source"></p>
<p>Let's take a look at some of the advanced settings:</p>
<ul>
<li><strong>Off-boarding frequency</strong> - idemeum detects when employees are off-boarded so that idemeum can block access and de-provision accounts. With this configuration you can choose how often you want idemeum to check for off-boarded employees using local user source.</li>
</ul>
<p>Now if you navigate to <code v-pre>User management</code> you will be able to create users to onboard into idemeum.</p>
<p><img src="@source/images/create-local-user.png" alt="User source"></p>
<p>When you add new user you can specify <strong>personal claims</strong> that will be used for onboarding, as well as <strong>corporate email address</strong> that will be assigned to a user.</p>
<p><img src="@source/images/local-user-details.png" alt=""></p>
<div class="custom-container tip"><p class="custom-container-title">More about user management</p>
<p>Once you create users in idemeum locally or onboard them with external user source there is a variety of actions that you can perform on users.</p>
<p>Navigate to a user management section to learn more.</p>
</div>
</div></template>
