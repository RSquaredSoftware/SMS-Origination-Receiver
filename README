## SMS Origination Example

This app is a very basic quickstart for receiving and handling inbound SMS messages to your phone numbers. Although it is designed for the R Squared Telecom SMS platform, this code should work for most SMS carriers that support SMS over API.

### Setup for Beginners

On your favorite cloud hosting service (GCP, DI, AWS, etc.) deploy a server with a regular 10gb+ primary drive with Debian 8. Using the cloud hosting provider's portal, make sure port 3000 is open.   
ssh into the server:  

`sudo su -`  
`$ apt-get update && apt-get upgrade -y`  

The version of Node.js in the repositories tend to be old so manually add the latest source  

```
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ apt-get install nodejs git -y
$ git clone https://github.com/RSquaredSoftware/SMS-Origination-Receiver.git
$ cd SMS-Origination-Receiver  
$ npm install  
```

The app should be fully installed and ready, just need to run it:  
`$ npm start`

### Configuring the Carrier

For this you will need to know the public IP of your server.  

Log into the carrier portal
