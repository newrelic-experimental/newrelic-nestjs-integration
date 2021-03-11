## NestJs New Relic Integration

### Example App Architecture

![NestJs_NewRelic_architecture](https://user-images.githubusercontent.com/6328360/110844220-0fb81580-82a1-11eb-99b7-2863c18f8ef1.png)

The above diagram shows the (dockerized) architecture of the example app with the following components:
 * `nest network` - where all the microservices reside
 * `parent` container - the outer left
 * `child` container - in the middle
 * booth `parent` and `child` have New Relic NodeJs Agent installed (and required by each of the microservices)
 
 ### Hot to run
 
#### Prerequisites
* New Relic Account (sign up [here](https://newrelic.com/signup))
* New Relic License Key (find instructions [here](https://docs.newrelic.com/docs/accounts/accounts-billing/account-setup/new-relic-license-key/))
* Docker` is installed on your machine.

#### Setup
Find two `newrelic.ts` config file in `/src` directory inside both `parent` and `child`

Change two config variables in each file

```
app_name: ['YOUR_APP_NAME'],
license_key: 'YOUR_LICENSE_KEY'
```
to a desired `app_name` and paste your New Relic License Key acquired in previous steps to `license_key` variable.


#### Start
Run `docker-compose up` and wait for all images to install and start the app.

#### Use
The `parent` service has the following endpoints:
* GET `localhost:3000/`
* GET `localhost:3000/cats/create`
* GET `localhost:3000/cats/getAll`

Call any of these endpoints and you'll see a following message in the console:
<img width="837" alt="Screenshot 2021-03-11 at 20 04 34" src="https://user-images.githubusercontent.com/6328360/110847596-0466e900-82a5-11eb-9286-4b465dac3710.png">

This particular example is a console log showing the flow of the GET `localhost:3000/cats/create` request. It's visible that `parent` calls `child` and gets a response back
intercepting `child`'s response carrying a `mongodb` record being created by `child`'s interaction with `mongodb` service.

#### New Relic Observability Platform

Once you make a few calls, go to you New Relic account where the app data is being send and navigate to `Explorer` and find the app (by the name you gave it to during the setup)
Go to `Distributed Tracing` and click on one of `Root Entry Spans`

You should be able to see `Distributed Tracing` spans captureg by New Relic Agents installed in both `parent` and `child`
<img width="1713" alt="Screenshot 2021-03-11 at 20 15 50" src="https://user-images.githubusercontent.com/6328360/110848964-96232600-82a6-11eb-80f1-75d9499ad1f2.png">