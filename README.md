[![New Relic Experimental header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/Experimental.png)](https://opensource.newrelic.com/oss-category/#new-relic-experimental)

# New Relic NestJs Integration Example

### App Architecture

![NestJs_NewRelic_architecture](https://user-images.githubusercontent.com/6328360/112493022-b0b2d000-8d79-11eb-812f-9622b0917f8e.png)

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
  * just to confirm the app works
* POST `localhost:3000/cats/create`
  * to create a cat
  * with a json body payload containing 3 properties `name`, `age` & `breed`
    ```
    // for example 
    {
        "name": "Tom",
        "age": 3,
        "breed": "Persian"
    }
    ```
* GET `localhost:3000/cats/getAll`
  * to get all cats


Call any of these endpoints and you'll see a message (similar to the one below) in the console:
<img width="837" alt="Screenshot 2021-03-11 at 20 04 34" src="https://user-images.githubusercontent.com/6328360/110847596-0466e900-82a5-11eb-9286-4b465dac3710.png">

This particular example is a console log showing the flow of the GET `localhost:3000/cats/create` request. It's visible that `parent` calls `child` and gets a response back
intercepting `child`'s response carrying a `mongodb` record being created by `child`'s interaction with `mongodb` service.

#### New Relic Observability Platform

Once you make a few calls, go to you New Relic account where the app data is being send and navigate to `Explorer` and find the app (by the name you gave it to during the setup)
Go to `Distributed Tracing` and click on one of `Root Entry Spans`

You should be able to see `Distributed Tracing` spans captureg by New Relic Agents installed in both `parent` and `child`
<img width="1713" alt="Screenshot 2021-03-11 at 20 15 50" src="https://user-images.githubusercontent.com/6328360/110848964-96232600-82a6-11eb-80f1-75d9499ad1f2.png">

## Contributing
We encourage your contributions to improve New Relic NestJs Integration Example! Keep in mind when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project.
If you have any questions, or to execute our corporate CLA, required if your contribution is on behalf of a company,  please drop us an email at opensource@newrelic.com.

**A note about vulnerabilities**

As noted in our [security policy](../../security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

## License
New Relic NestJs Integration Example is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.
