---
layout: post
title: Wireguard VPN - Installation and configuration
description: Installation of wireguard VPN server and adding clients.
imageBig: wireguard.png
imageSmall: wireguard-small.png
keywords: linux, ubuntu, debian, wireguard, vpn, connection, security, protocol, server
---
For my purposes, I needed a VPN connection to connect all my sites and also my notebook to access them all. I use wireguard VPN for this solution because it is secure and uses modern cryptography for the connections. I have connected my location in Croatia (Home Lab) where I have several servers, network devices and virtualization for my purposes of testing and using it for backups of all cell phones and all PCs we have at home. Also my location in Germany, where I live and work, and also my servers, which are located in Germany in one of the data centers of the provider Contabo.

*![Alt]({{ baseurl }}/postImages/wireguard.png "Wireguard")*

### Why I use wireguard?
----------------------------------------------
WireGuard is a free and open-source VPN protocol designed to be lightweight, secure, and efficient. It operates at the network layer, allowing secure communication between different devices over both private and public networks. Unlike traditional VPN protocols, WireGuard leverages modern cryptography, making it simpler to implement while providing strong security.

I have rented a server with public IP and on this server I have installed wireguard server and this server is only for wireguard VPN and connections. Some good things about wireguard is that I can connect to any internet connection (WiFi, LAN, Mobile) on my server because I can connect to 443 port which is not blocked on any network where I am connected (hotels, cafes, some restricted guest wifi networks, HotSpots) and I can work without any problems.Below you can see how I prepared and configured my server for this use. On my server I have installed Ubuntu 22.04 with kernel version 5.19, but you can use any Linux distribution like Debian and others for this purpose. Here I will write commands and everything for Ubuntu and Debian where I tested this.

### Install instructions
----------------------------------------------
I was write little script for installation of Wireguard server with GUI. Bellow you will found every step for installation with my script.

#### Step 1:

Download script to your server

```
wget https://github.com/tomeksdev/wireguard-install-with-gui/releases/download/v1.0.0/wg-server-install.tar.gz
```

This script automatically install wireguard and all needed dependencies for wireguard configuration and also GUI configuration.

#### Step 2:

You need to make this script executable and than run script with following commands:

```
tar -xzvf wg-server-install.tar.gz
chmod +x wireguard-server-inst.sh
./wireguard-server-inst.sh
```

#### Step 3:

Here my script ask if you want to continue to install script. If you want to cancel installation, just write "no/NO".

**![Alt](/postImages/wireguard/continue.png "Wireguard")**

#### Step 4:

If you continued installation, now is needed to activate IPv4 and IPv6. You can activate only one of them.

**![Alt](/postImages/wireguard/IPv4-IPv6.png "IPv4 IPv6")**

#### Step 5:

Last thing what we need is port for accessing to WebGUI of wireguard. Default is 5000, but you can choose which you want.

**![Alt](/postImages/wireguard/default-port.png "Web port")**

#### Setp 6:

Finaly, we are finished installation till end and now you can access to your Web GUI from wireguard. Bellow will be instructions how to configure Wireguard over WebGUI.

**![Alt](/postImages/wireguard/finished.png "Installation finished")**


### Configuration of wireguard over WebGUI
----------------------------------------------

You can access to yours WebGUI over this URL: http://IP_ADDRESS:PORT

**![Alt](/postImages/wireguard/login-page.png "Login")**

#### Setp 1:

**![Alt](/postImages/wireguard/global-settings.png "Settings")**

#### Setp 2:

**![Alt](/postImages/wireguard/server-settings.png "Server")**

#### Setp 3:

**![Alt](/postImages/wireguard/client-add.png "Settings")**

#### Setp 4:

**![Alt](/postImages/wireguard/new-client.png "Settings")**

#### Setp 5:

**![Alt](/postImages/wireguard/created-client.png "Settings")**