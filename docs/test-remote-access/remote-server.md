# Remote Server

## Definition
A Remote Server is any computer, physical or virtual, running any operating system, Linux, Windows, MacOS that resides on a company's private network and that can be accessed over ssh protocol. One such example might be a RabbitMq messaging broker server that runs on a company's private network. The private network can be on-premises as well as in the cloud: AWS, Azure, Google Cloud etc.

## Prerequisites
Your tenant has to have the Remote Access feature enabled. See [here](./secure-remote-access-overview.md) how to enable Remote Access.

## Use case
We will use the following setup in order to showcase how to add a remote server in idemeum.

Let's assume that a company ACME, Inc has some infrastructure used for testing of an application and a part of this testing infrastructure is a RabbitMq messaging broker that is installed on a virtual machine running Linux operating system. This machine can be accessed over ssh protocol but the users accesing it must be on the company's private network.


The administrator wants to allow some users to access the messaging broker server over the internet without forcing the users to use a VPN: a DevOps engineer who might be on call and off company's premises. The administrator also wants to control which users have access to the RabbitMq server: DevOps engineers and QA engineers should be able to access it, while the people in the Finance and Accounting should not be allowed access.

## Add a remote server
The administrator will log into the idemeum admin portal and will select Applications from the left side navigation menu and then select the Catalog tab.

![Admin application catalog](../test-images/admin-application-catalog.png)

Clicking the ***Add app*** button will open a dropdown menu and the administrator will select *Remote server*.

![Add remote web application option](../test-images/add-remote-server-option.png)

On the General tab the administrator will have to provide the following information:
+ **Server name** - the name of the application that will show on the end user portal for the users that have access to this server. It can contain any characters up to a maximum of 256 chars.
+ **Hostname** - this name will show when the user logs in to the server. If the login username is root and the hostname is rabbitmq-testlab-server then on ssh console it will show root@rabbitmq-testlab-server so the user knows what server is using. It can contain only characters that are allowed in a domain: [a-z], [A-Z], 0-9 and '-' (dash) up to a maximum of 63 characters.  '-' (dash) cannot be the first character.


![Add Jenkins remote web application ](../test-images/rabbitmq-remote-server-add.png)

Click ***SAVE*** to save the application. If all the values are correct, then the application will be created.

## Find a remote server
You can find your Remote Server from the admin portal by selecting Applications from the left side naviation and then going to My Applications tab. If you know the application name for the server then you can search for it in the search bar.

![Find remote server](../test-images/find-remote-server.png)

If you don't know the name of the remote server application you can filter based on the application type from the Type dropdown.

![Filter remote server](../test-images/filter-remote-server.png)

## Edit a remote server
See [here](#find-a-remote-server) how to find the remote server application.

Clicking the ***Edit*** button will allow editing of the remote server.

![Edit remote server](../test-images/edit-remote-server.png)

## Delete a remote server
See [here](#find-a-remote-web-application) how to find the remote server application.

Clicking the ***Remove*** button will remove the remote server application.

![Remove remote server](../test-images/remove-remote-server.png)


## Provide access to Remote Servers
In order for users to be able to use this remote server application the administartor needs to create an entitlement for the users or groups of users that should have access to it.

You can either add a new rule or edit an existig rule.
To add a new rule from the admin portal select Entitlements from the left side navigation and then click ***Add Rule***.

![Add entitlement for remote server](../test-images/add-application-entitlement.png)

In the example below we have a group defined as AWS DevOps and we will give this group access to the RabbitMq server application. All the users belonging to that group will automaticatlly get the RabbitMq server application access.

![Entitlement RabbitMq remote server to DevOps group](../test-images/add-rabbitmq-entitlement.png)

We have also configured what username(s) will be used when accessing the RabbitMq server. In the example above we have created 2 usernames: root and ec2-user. When launching the remote server application the user will select which username it wants to use for the connection to the RabbitMq server machine. This means that these usernames has to exist on the machine where the RabbitMq server is running.

Click ***Save*** to save the rule. This will trigger the entitlement engine to process the rule and to give the users from AWS   DevOps group access to the RabbitMq server application.

## Configure idemeum remote access agent
RabbitMq server runs on the private network. In order to provide access to the outside network, for the users that should have access to the server - in our example above the AWS DevOps group, we need to install and run the idemeum remote access agent on a node on the private network. This node can be a different machine than the machine where the actual RabbitMq server runs but the RabbitMq server must be accessible from this other node.

### Download the configuration file
First we need to download a configuration yaml file for the RabbitMq application. Open the Edit application form for the RabbitMq server and then select the second tab ***Config File***.

![RabbitMq remote server config tab](../test-images/remote-server-config-file.png)

You can either download the yaml file locally by clicking the ***Download YAML*** button from the top right corner or you can click the copy icon to copy the content of the file to the clipboard.

![RabbitMq remote server download config file](../test-images/remote-server-download-config-file.png)

> NOTE: Each remote server has its own configuration file so you need to download the config file for the server you want to start the agent for.

### Download the idemeum agent
The second step is to download the idemeum remote access agent and run it on one node on your private network that has access to the machine where the RabbitMq server application runs.

![RabbitMq remote server download idemeum agent](../test-images/remote-server-download-agent.png)

Clicking the ***Download agent*** will bring up a screen from where you can select which version of idemeum remote agent you want to install depending on your node's operating system.

![RabbitMq remote server idemeum remote agent release versions](../test-images/remote-web-application-agent-release-versions.png)

Select and download the release version that is suitable for you or copy the download link.

### Install the idemeum agent
See here the instructions on how to install the agent. (TO BE FILLED OUT)

### Start the RabbitMq server idemeum remote agent
You need to copy the [configuration file](#download-the-configuration-file) for the RabbitMq on the node where the idemeum agent will run.

Assuming that you named the configuration file RabbitMq.yaml, then you can start the idemeum agent for the RabbitMq server using the following command
> ./idemeum start --config \<path to RabbitMq.yaml>

When the idemeum remote access agent for a remote server is not running then the administrator will see a red exclamation mark on the Applications page.

![RabbitMq remote server idemeum remote agent not running](../test-images/rabbitmq-remote-server-agent-not-running.png)
There will also be a notification sent when the remote server is not up and running.
![RabbitMq remote server idemeum remote agent not running notification](../test-images/rabbitmq-remote-server-inactive-notification.png)

The users that are entitled to the RabbitMq application will also see a warning on the end-user portal when the remote server is not available.

![End-user RabbitMq remote server idemeum remote agent not running](../test-images/end-user-rabbitmq-remote-server-not-running.png)

After starting the idemeum remote access agent for the RabbitMq remote server, this should be available for launch to the users who are entitled to it.

![End-user RabbitMq remote server idemeum remote agent not running](../test-images/end-user-rabbitmq-remote-server-running.png)

## Launching remote servers

### From end-user portal
Users will launch remote servers that are entitled to them from the end-user portal in the same way they would launch any other type of application by clicking on its tile.

If the administrator has configured the entitlement for the user with multiple usernames, then when clicking the tile to launch RabbitMq a dialog will be presented to select which username to use for the connection to the RabbitMq server.

![End-user RabbitMq remote server username selection](../test-images/end-user-rabbitmq-remote-server-username-selection.png)

The example below shows how the browser ssh console looks like when the user connects to the RabbitMq server using the root username. It shows also that the user can ran some commands in the console.

![End-user RabbitMq remote server logged in as root](../test-images/end-user-rabbitmq-remote-server-root-login.png)

### From browser extension
Users can launch the remote servers from the browser extension, by clicking on its tile and, in case there are multiple usernames configured, selecting the username to use in the ssh connection to the remote server.

![End-user RabbitMq remote server launch from extension](../test-images/end-user-rabbitmq-remote-server-launch-from-extension.png)

### From mobile app
Users can launch the remote servers from the mobile application, by clicking on its tile and, in case there are multiple usernames configured, selecting the username to use in the ssh connection to the remote server.

![End-user RabbitMq remote server launch from mobile app](../test-images/end-user-rabbitmq-remote-server-launch-from-mobile-app.png)

## Audit Events
The administrator can see in the Audit trail which users launched which remote servers and which usernames were used for the connection. There will be a session recording of the commands that were executed on the remote server while the user was connected.

![Admin RabbitMq remote server launch audit events](../test-images/admin-rabbitmq-remote-server-audit-events.png)

There will be an audit event for when the remote server session was started and one audit event for when the session was ended. The recording is available by clicking the play button from the Recordings column.
