# Company Engineering Summary

#### 1. Cooperation
  - [Distributed team introduction](#distributed-team-introduction)
  - [Rules of cooperating](#rules-of-cooperating)
  - [Roles of the developers](#roles-of-the-developers)
  - [Roles of the designers](#roles-of-the-designers)
  - [Tools used for cooperating](#tools-used-for-cooperating)
  - [Cooperating with external teams](#cooperating-with-external-teams)
  

#### 2. Architecture
  * [General introduction](#general-introduction)
  * [Legacy system introduction](#legacy-system-introduction)
  * [Current system introduction](#current-system-introduction)
  * [Front-end stack](#front-end-stack)
  * [Back-end stack](#back-end-stack)
  * [Development tools introduction](#development-tools-introduction)

#### 3. CI/CD
  * [Stack introduction](#stack-introduction)
  * [Source code management](#source-code-management)
  * [Front-end software testing](#front-end-software-testing)
  * [Back-end software testing](#back-end-software-testing)
  * [Environments](#environments)
  * [Integrations](#integrations)
  * [Pipeline](#pipeline)
  * [Deployment](#deployment)
  
#### 4. Front-end
 * [General overview](#fe-general-overview)
 * [Tools introduction](#fe-tools-introduction)
 * [Best practices](#fe-best-practices)

#### 5. Back-end
 * [General overview](#be-general-overview)
 * [Tools introduction](#be-tools-introduction)
 * [Best practices](#be-best-practices)
 
Documentation
======

### 1. Cooperation

#### Distributed team introduction

The current development team consist of several individuals from different timezones. As an addition to the USA office, the team is working fully remote. Everyone in the team is providing their own work environment and tools. Company does not provide anything material to these contractors.



**Coding team:**

DEV1 - Chicago, USA - GMT-6

DEV2 - Lagos, Nigeria - GMT+1

DEV3 - Warsaw, Poland - GMT+1

DEV4 - Warsaw, Poland - GMT+1

DEV5 - Novi Sad, Serbia - GMT+1


**Design team:**

DESIGN1 - Skopje, Macedonia - GMT+1

DESIGN2 - Novi Sad, Serbia - GMT+1

DESIGN3 - Skopje, Macedonia - GMT+1




Everyone has their own agreement with Company, but the working hours are generally flexible. Rule of thumb is:

- 20hrs / week for senior members
- 40hrs / week for junior team members

The design team is hired per project basis.

#### Rules of cooperating

The general rules of cooperations are loosely enforced. As a remote team, every team member is encouraged for overcommunicating. Slack, Zoom, emails, asana tasks are the main means of communication. Daily routine retroperspectively:

Product1 development (2019-07 - 2019-08):

- Weekly team meeting (monday) sprint planning meeting
- Every day daily standup
- Designers and developers free to schedule their own tasks
- Developers are expected to be available between 11:30 - 16:00 utah time
- Weekly workload for developers ~20hrs / ~40hrs

Product2, Product3 parallel development (2019-08 - 2019-09):

- Weekly team meeting (monday) for the entire team
- Every day daily standup both for Product2 and Product3 team
- Designers and developers free to schedule their own tasks
- Developers are expected to be available between 11:30 - 16:00 utah time
- Weekly workload for developers ~20hrs / ~40hrs

Product3 focus (2019-10 - ):

- Every day daily standup
- Designers are done with the design, focus is on developers
- Weekly workload increasted till delivery
- Developers are expected to be available between 11:30 - 16:00 utah time

#### Roles of the developers

DEV1:

Security expert, back-end developer and external dependency specialist. Most of his time is dedicated to direct requests either from PM or from CEO, making changes in the legacy systems. His other responsabilities include creating Thirdparty REST API wrapper, overseeing flex team API, and managing the AWS account at a certain level. His AWS tasks include domain management, s3 hosted websites management, lambda management.

DEV2:

Full-stack developer. Most of his duties include writing back-end code such as AWS lambdas. Experienced with writing unit tests, and has contributions to Product2 front and back-end. Responsible for setting up Product4 SPA core.

DEV3:

Junior front-end developer. Has major part delivering every project the external team has been assigned. She works tighly connected with the designer team making sure that the front-end solutions are matching up the criterias. She owns front-end (desktop, tablet, mobile) for Product1, Product2 and Prouct3.

DEV4:

Designer / front-end developer. Most of his work and tasks are connected to designing the frontends (Product3 and now Product4). Experienced in writing user interfaces and owns a big chunk of codebase from Product3 and Product4.

TECH LEAD:

First employee of the remote team. Devops, full-stack developer, architect. His main role is ensuring that technical conditions are given to the dev team, the build pipelines are working, site are being deployed, repositories are documented. Oversees project progress. Owns the architecture and core decisions of Product1, Product2, Product3 and the connecting backends.

#### Roles of the designers

DESIGN1:

Head of design. Owns all the design materials.

DESIGN3:

Junior designer. Supports DESIGN1 with minor designing tasks and decisions. Responsible for providing design templates into invision.

DESIGN2:

Senior designer. Works mostly on Product3 and Product4. Also supports the development process.

#### Tools used for cooperating

Slack for communications
Zoom for meetings
Github for source code management
Asana for ticket management
Invision for sharing designs

#### Cooperating with external teams

- [External Company](https://www.google.com/) - External Company

Means of communication: email

Means of meetings: Zoom call + live meetings

Contact persons:


CP1 (responsible for API development) - cp1@email.com

CP2 (main business contact person) - cp2@email.com

CP3 (technical support) - cp3@email.com

General email - gm@email.com


### 2. Architecture

#### General introduction

The architecture consist of different layers. Some of these layers belong to the company team, thus they are customizable and configurable. Some layers (database and shop engine) are hosted in third partner ThirdParty, and they are a full product, ready but not flexible at all. Because of this rigidness, many parts of the architecture glued together with converters and integrations.

- [JamStack](https://jamstack.org/) - JamStack explained.

In order to maximize site performance, it is recommended to send pre-compiled already done `.html` files to the end-user. Alternatively routes can be created dynamically on the server. However, mostly for cost effective reason, pre-generating the files during the build is a better solution here.

A JamStack based product receives its elements from an API or any kind of markdown, json, yaml file. Anything can be a source of elements, till it is consistent.

Generated builds are hosted in AWS S3 buckets and served via AWS own CDN.

- [Serverless](https://serverless.com/framework/docs/providers/aws/guide/quick-start/) - Quickstart with serverless.

Serverless allows to the team to, surprisingly, not have servers. This way all the maintenance hell and configuration challenges are gone. Serverless based architecture is cost effective and highly scalable. They are multiple ways and providers for serverless architecture. However AWS and its famous lambda is the perfect choise. Easy function warming, small cold starts, nice integration with other AWS specific services and CI/CD pipeline.

- [ThirdParty](http://ThirdParty.com/) - Backend engine

ThirdParty is a third party provider. Not customizable nor configurable.

#### Legacy system introduction

The entire legacy system runs on ThirdParty, both the front and the back-end. The front-end of it has a low quality UI and performance. Scores bad in SEO and performance by any metrix. In theory it is configurable and the customer service can help addressing unique needs in the site. However experience shows that it is a very cumbersome and expensive process to make ThirdParty update their system. 

- [Hades](https://github.com) - Legacy ThirdParty repository

- [ThirdParty](http://ThirdParty.com/) - ThirdParty Site

ThirdParty exposes an entire API to connect for its database and engine. The API has little bugs and descriptive. However it does not work with REST requests, but exposes an interface based on SOAP-UI. In order to overcome this, many integrations are written in the github repositories.



#### Current system introduction

 As mentioned above the current system looks like this:

 - Frontend repositories (Product1, Product2, Product3, Product4) are written in React with the Gatsby framework (help renders product pages, and heavily optimizes for an e-commerce use case.)

 - Backend repositories are using nodeJS with Typescript. These are all stateless functions, we don't hose any database or external process on our own. The backend functionality is mostly responsible to collect data from the frontend, format it, apply custom integrations, and pass it to ThirdParty endpoints.

#### Front-end stack

Brief list of major technologies used, details explanation can be found below.

- HTML
- Javascript
- React JS
- Create React App
- Gatsby JS
- Webpack JS
- AWS S3 buckets
- CSS in JS
- SASS
- REST API
- minor NPM libraries

#### Back-end stack

Brief list of major technologies used, details explanation can be found below.

- Serverless framework
- Node JS
- Javascript
- Typescript
- Jest
- AWS
- AWS S3 Buckets
- Sendgrid
- DynamoDB
- REST API

#### Development tools introduction

Brief list of major technologies used, details explanation can be found below.

- Google Lighthouse (performance testing)
= Jest (unit testing)
- Cypress (Automated E2E testing)
- Eslint (enforcing programming styles)
- CircleCI (CI/CD)
- Slack integration
- AWS integration

### 3. Deployment

#### Stack introduction

Github is used for code management, and keeping hosting the source code. CI/CD automatic triggers are active on several github events such as opening pull requests or merging against certain specific branches. The CI/CD is provided by circleCI. The built pages are hosted in AWS S3 buckets.

- [GitFlow](https://guides.github.com/introduction/flow/) - Branch management with git flow example

- [CircleCI](https://circleci.com/) - CI/CD tool

- [S3 hosting](https://medium.com/@kyle.galbraith/how-to-host-a-website-on-s3-without-getting-lost-in-the-sea-e2b82aa6cd38) - host static sites on S3 example



#### Source code management

The codebases are logically separated into smaller chunks, but all belong to the organizations. Fun fact that each repository is named after a greek god or a mythological character. They are not mixed repositories, which means that front-end and back-end code are separated. They have different steps in the deployment pipeline as well. Most of the repositories have main language Javascript, but there are a few (where legacy store or utilities are stored) with different language. However at each repository there is `README.md` file explaining the details.


DYONUSSOS => Product1 back-end

HERMES => Product2 back-end

HADES => Product3 legacy front-end

ZEUS => Product3 front-end (new)

APOLLO => Product3 back-end (new)

NIKE => Product4 front-end (new)

POSEIDON => Product2 front-end

ATHENA => Product utilities

THANNATOS => ThirdParty Lambda Technologies

APHRODITE => Product1 front-end

HEPHAESTUS => ThirdParty related lambda wrappers



#### Front-end software testing

With the current business requirements and deadline, writing tests are not prioritized. Therefore the code coverage of the front-end product is something to be improved. However two types of tests partly are applied and integrated in the build pipeline:

- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) - Performance testing

Integrated as a step for each front-end repository. The built, production bundle is checked with Google's performance measuring tool, Lighthouse. It measures and reports 4 core points:

  - Accessibility
  - Performance
  - Best Practices
  - SEO

  A benchmark score is generated in each of these properties. Optionally a limit can be activated in the build process. If a score does not pass its threshold value, the build fails, the developer is notified and the issue must be resolved. Thresholding is currently deactivated, but free to set and activate. Detailed Lighthouse reports are available for developers when the test run locally. All the front-end repositories have these tests integrated in their deploy pipelines.

  - [Cypress](https://www.cypress.io/) - E2E testing

Currently active only on Product1. Cypress.io is used to write, run, organize and manage tests. Due to lack of resources and time, other front-end repositories are lacking automated E2E tests. Product1 has more than 40 testcases, which are integrated in the deploy pipeline, but can be completed locally as well. 

#### Back-end software testing

The backend code is strongly test driven, thus it has a good coverage of useful, widely covering unit tests. Mocha and Chai is used for running the test, where external dependencies are mocked. Testing is part of the deploy pipeline, but also executed at pre-hooks. So every time when a developer commits something, all the units tests are being called, ensuring that no faulty code goes to github. They run locally but all external integrations are mocked. The focus of the unit test wonders around the code itself.

#### Environments

Environments are not actively regulated at the moment as the back-end engine is not part of product repositories. However S3 buckets and AWS lambdas are duplicated and marked with `dev` or `` prefix. Separating them take a very specific role in the deploy pipeline. The current environments are:

###### test:

Exists only on the local machine, responsible to provide a separate environment for automated E2E tests.

###### dev / staging:

Exists both on the local machine and in the cloud. On the local machine this is the environment where the code is being developed. In the cloud, this is staging environment. 

Each S3 bucket has a `production` and a `dev` variant assigned. The traffic from the product's domain is redirected to the `production` S3 bucket of the product.

Each AWS lambda handler has a `staging` or `production` pretag. They own identically the same integrations but in different environment. Their environment `pretag` is getting defined at the moment of deployment. Which is done strictly by the CI now.

###### production:

Not available, not recommended from the local machines. Manual deployments are not recommended, only controlled, CI deployments. Live domains are routed for S3 buckets in this environment, and back-end handlers are accessing `production` level tokens and secrets.

#### Integrations

CircleCI provides a feature called Orbs, which are basicly pre-written, configurable integrations. The below orbs are being actively used, or planned to be integrated:

- [Slack](https://circleci.com/orbs/registry/orb/circleci/slack) - Slack Orb

- [Cypress](https://github.com/cypress-io/circleci-orb) - Cypress Orb

- [Lighthouse](https://circleci.com/orbs/registry/orb/jamesmosier/lighthouse-stats) - Lighthouse Orb

- [Serverless](https://circleci.com/orbs/registry/orb/circleci/aws-serverless) - Serverless Orb

Detailed usage and set of commands can be found in each of the repository individually.

#### Pipeline

The detailed pipeline can be found at each of the repositories. Look for the `.circleci` folder in the repositories. However there are many common trait what deployment pipelines sharing.

They all provided by circleCI, and using default circleCI commands. They are defined in `.yaml` files. There is generally two workflow used both for front-end and back-end deployments:

DEVELOPMENT - STAGING PIPELINE (frontend):

Gets triggered when the developer opens a pull request, or updates an already opened pull request towards the `develop` branch. Rebuilds with each of the commit pushed. It has the `dev` environment enforced, and it targets only `dev` resources. Shared steps:

- Checkout in the github repository

- Installing dependencies

- Building front-end bundles (pulling product sites by API)

Products are fetched from a back-end API. Due how Gatsby works and pre-generates sites, the entire product list must be fetched during the build. Then the product list is getting mapped and an `.html` file is generated for each entry.

- Running tests

- Deploying the built bundles into the development S3 buckets

- Notification

MASTER - PRODUCTION PIPELINE (frontend):

Simple workflow, however depends directly on the successful execution of the development - staging pipeline. It gets always triggered when the master branch changes. As a first step, it requires manual confirmation, to ensure that updating production is intentional. Then it looks for the development S3 bucket of the given product, and copies its content to the production S3 bucket!

DEVELOPMENT - STAGING PIPELINE (backend):

The backend pipeline shares the same elements, however they are not stored in S3 buckets. They are stored and deployed to AWS Lambda function deployed directly from the CI server. How they trigger and behave is the same behaviour as the frontend deployment pipelines. 

MASTER - PRODUCTION PIPELINE (backend):

The backend pipeline shares the same elements, however they are not stored in S3 buckets. They are stored and deployed to AWS Lambda function deployed directly from the CI server. How they trigger and behave is the same behaviour as the frontend deployment pipelines.

#### Deployment

There is multi-level deployment as described above in the pipeline. Each deployed asset has a development and production version. This allow non-technical members to do continous QA, and notify developers in case something needs to be changed before it goes to production.

S3 bucket naming conventions:

STAGING BUCKET NAME: `beta-{{productName}}-com`

STAGING DEPLOYED URL `http://beta-{{productName}}-com.s3-website-us-east-1.amazonaws.com`


PRODUCTION BUCKET NAME: `{{productName}}-com`

PRODUCTION DEPLOYED URL `http://{{productName}}-com.s3-website-us-east-1.amazonaws.com`


*production URL-s are running under the official domain name of the product.

S3 lambda naming conventions:

STAGING LAMBDA NAME: `{{repositoryName}}-staging-{{handlerName}}`

PRODUCTION LAMBDA NAME: `{{repositoryName}}-production-{{handlerName}}`

### 4. Front-end

#### FE overview

The front-end stack is made of modern, scalable, javascript based solutions. Performance and ability for good SEO has high priority. That explains the usage of gatsby and pre-generated `.html` pages. Instead of rendering at the client, as it is common in the world of single page applications, the pages are created during the build process, and served combination of static `.html`, `.css` and `.js` files.

#### FE tools introduction

- [React](https://reactjs.org/) - Writing front-end components

Library/framework developed by Facebook. It is reponsible for creating the view layer. Heavily based on reusable and flexible UI based components. Possible to integrate it with any modern way of styling pages (such as external stylesheets or javascript generated locally scoped stylesheets). Coupled with GatsbyJS, this is the engine of the frontend.

- [Redux](https://redux.js.org/) - Global State management

Redux is used only at the e-commerce site. It is responsible for managing internal application state, such as content of checkout cart and currently displayed language / market. It copies state to the localstorage, thus making it persistent and providing better experience and ease of use to the user.

- [Gatsby](https://www.gatsbyjs.org/) - Static site generator

A framework responsible for generating high-performing, SEO friendly pages. Each page pre-compiled version starts with layouts and components written in React, then getting bundled into simple HTML, Javascript, CSS combinations with webpack. Gatsby already consist a lot of pre-defined optimization, ensuring that the front-ends would score high in performance and speed.

- [CSSinJS](https://cssinjs.org/) - Styling templates

CSS frameworks for styling. As they are modular (they apply only on the targeted files), they are very scalable. Personal preference, besides this approach, at other parts of the front-ends external SASS stylesheets are visible too.

- [Cypress](https://www.cypress.io/) - E2E testing

Tool to run E2E tests. Fast, easy to use and has extensive features generating better remarks about test results. Integrated in the deployment pipeline at each of the frontend repository.

- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) - Performance measure

Tool to run performance testing on built frontend versions. Checks for performance, accessability, SEO and best practices. Integrated in the deployment pipeline at each of the frontend repository.

- [Pupeteer](https://github.com/GoogleChrome/puppeteer) - Visual testing

Tool to run visual tests. Not integrated yet.

#### FE best practices

Most of the best practices consists from React and GatsbyJS guidelines. Besides this general programming practices are implemented as well such as DRY (Dont Repeat Yourself), KISS (Keep it stupid simple), decoupling view and data layers. Code is written in accordance with modern javascript linters such as EsLint and Prettier. ES6 features used heavily.

### 5. Back-end

#### BE overview

The backend is a current mix of legacy systems (such as ThirdParty engine), and our own custom layer. The reasoning why the custom later was introduced has multiple layer. Firstly ThirdParty hardly allows us to integrate custom notifications, integrations, reports or anything what we would want. Second is security. As we operate with public API, our layer serves for several security tasks such as validation payload, rate limiting, sanitizing user input. The third aspect that the backend has been written in such a spirit that it would allow us an easy switch to FLEX API. So our frontends - backend are tighly connected, so when FLEX API will become available ideally we would just need to change the request URL-s in the backend.

#### BE tools introduction

* [Serverless](https://serverless.com/) - Serverless FAAS framework

Serverless is a wrapper around `FAAS` approach. It consumes a fairly complicated `YAML` configuration and based on it, it pre-creates resources in certain cloud providers (AWS in this case). It helps organizing endpoints, validations, environment variables and many others. It is the core engine of the back-end repositories. It can build, validate, deploy code. Integrated in the pipeline.

* [AWS Lambda](https://aws.amazon.com/lambda/) - AWS lambda FAAS

`FAAS` stands for `Function as a service`. The concept behind it, that the developer gives only the code, but nothing else. Everything is taken care by the provider. This dramatically reduces the workload of a back-end engineer. All the server configuration and the related challenges are not done by the engineer anymore. It is event based, which means that the code is running only on a certain event, attached to https handlers and serving standard http methods (such as GET, POST, PUT ...). This makes `FAAS` architecture cheap (only running when needed) and incredibly scalable (all handled and billed accordingly by the cloud provider).

* [nodeJS](https://nodejs.org/en/) - nodeJS logic

Javascript for writing back-end solutions. NodeJS is an event driven language perfect for proxying requests, communicating with external services and asynchronous operations in general. Running in a single thread, lightweight, scalable and perfectly integrated with cloud providers `FAAS` offerings.

* [Typescript](https://www.typescriptlang.org/) - JS superset type checking

Typescript is a superset Javascript. It is a pre-compiled "language" responsible for using the proper types. Typescript never runs on the runtime, it is always compiled into pure javascript in the build process. Typescript plays along very nice with unit tests and TDD, and a helpful tool to provide high-quality code.

* [Chai](https://www.chaijs.com/) - Unit and integration testing
* [Mocha](https://mochajs.org/) - Unit and integration testing

Testing tools. Very similar to Jest. Used in TDD heavy development environment, where endpoint handlers and unit tests are written in the same time. When unit testing the external dependencies, database calls, API calls are mocked. The main priority goes for ensuring that the written code does what it is required to do. Unit tests are integrated both in the build pipeline, both in pre-commit hooks. Running them at pre-committing is a step to ensure, that no faulty code gets to the source code management system.

#### BE best practices

The back-end repositories are written in the spirit of `FAAS` code. Therefore they would rarely contain "heavy computing" operations, stateful parts, databases or else. The `FAAS` code main duty is to process, validate, filter information and communicate with integrated services. General guidelines of TDD applied, such as developing handlers with the help of unit tests. The codebase is flexible though, to take and align to any kind of programming approach.
