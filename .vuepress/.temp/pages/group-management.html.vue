<template><div><h1 id="group-management" tabindex="-1"><a class="header-anchor" href="#group-management" aria-hidden="true">#</a> Group management</h1>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p>idemeum allows you to create groups and put employees into them.</p>
<div class="custom-container tip"><p class="custom-container-title">Local user source</p>
<p>When you leverage <RouterLink to="/integration-with-hr-system.html#local-user-source">local user source</RouterLink> in idemeum you can simply define groups as logical entities and assign employees to these groups manually.</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">External user source</p>
<p>If you integrate idemeum with <RouterLink to="/integration-with-hr-system.html#external-user-source">external user source</RouterLink>, such as HR system, you can define group based on various attributes present in external source, such as country, department, etc.</p>
<ul>
<li>For example, all my employees who are part of an <strong>Engineering</strong> department in HRMS will become part of <strong>Engineering</strong> group in idemeum.</li>
</ul>
</div>
<p>Groups are an important concept in idemeum and can be used for the following capabilities:</p>
<ol>
<li><strong>Application entitlements</strong> - you can use groups to <strong>entitle applications</strong> to employees. For instance, your <strong>Engineering</strong> group will have access to 3 applications (Atlassian, Slack, and AWS).</li>
<li><strong>Group provisioning</strong> -  you can use groups to provision to integrated applications. For instance, once you create group <strong>Admins</strong> you can configure idemeum to push this group into AWS so that you can assign certain permission sets to it. Therefore, every new user of <strong>Admins</strong> group will be provisioned into <strong>Admins</strong> group in AWS.</li>
</ol>
<h2 id="how-to-create-groups" tabindex="-1"><a class="header-anchor" href="#how-to-create-groups" aria-hidden="true">#</a> How to create groups</h2>
<ul>
<li>Navigate to idemeum admin portal and choose <code v-pre>Groups</code></li>
<li>Click <code v-pre>Add group</code></li>
<li>Give your group a name</li>
</ul>
<p><img src="@source/images/groups/name-group.png" alt="Name group"></p>
<ul>
<li>Now you can create <strong>Rules</strong> based on which employees will become part of this group. With external user source you can leverage attributes in your external user source, or you can assign users directly to your group.</li>
</ul>
<p><img src="@source/images/groups/attributes.png" alt="Attributes"></p>
<ul>
<li>In the image above you have Country, Department, and Division coming from HRMS. Each HRMS we integrate with will support different attributes. Consult our documentation to see what is currently supported.</li>
<li>You can also add user to groups directly by choosing User attribute and then choosing what users you want to assign to groups.</li>
<li>Once you configure the group hit <code v-pre>Save</code></li>
</ul>
<h3 id="provision-groups-into-applications" tabindex="-1"><a class="header-anchor" href="#provision-groups-into-applications" aria-hidden="true">#</a> Provision groups into applications</h3>
<p>idemeum also supports pushing groups to applications and assigning users to these groups in applications. Please, check our <a href="https://integrations.idemeum.com" target="_blank" rel="noopener noreferrer">integrations catalog<ExternalLinkIcon/></a> to see what applications support group management.</p>
<p>Enabling group provisioning for an application is very easy.</p>
<ul>
<li>Navigate to application configuration</li>
<li>Choose <code v-pre>Provisioning</code> section</li>
<li>Make sure you have <code v-pre>group provisioning </code>set to <code v-pre>True</code></li>
</ul>
<p><img src="@source/images/groups/group-provisioning.png" alt="Group provisioning"></p>
<div class="custom-container warning"><p class="custom-container-title">How group provisioning works</p>
<ul>
<li>If an application is assigned to a user that is part of the group, idemeum will first provision the group to application and then will assign the user to that group.</li>
<li>If the user changes groups, idemeum will automatically update all information in target applications.</li>
</ul>
</div>
</div></template>
