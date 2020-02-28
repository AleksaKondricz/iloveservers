## USE CASES


1. Viiva

Challenge:

Redesign the architecture of a direct networking company. The business has many different front-ends supporting a core e-commerce shop. Good performance, fast loading times, strong SEO are crucial as they are the key factors towards elevated user experience and higher revenue.

What we had done:

 From a given design we have created multiple static sites with help of Gatsby JS. These sites were mostly presentational, but contained back-end functionality such as signing up, checking validity of promo-codes and so on. As the traffic would likely spike during campaigns, we deployed the backend entirely serverless.

 We created a development culture, and defined many base rules of cooperating. We have developed a CI/CD pipeline following guidelines of gitflow methodology. We have integrated AWS S3 deployments and AWS Cloudfront for hosting static sites.

 We maxed out performance optimizations, so the static sites would be scoring over 90+ in Page Speed Insights (similar high results on pingdom tools or gtmetrix).

Key technologies: [ICONS]

- Gatsby
- React
- Serverless
- Typescript
- AWS S3
- Circle CI
- Cypress.io

Site URL-s:

https://viivasocial.com
https://viivatravel.com

Publicly available documentation:

https://www.iloveservers.com/viiva-documentation.md

2. Rettfinans

Challenge:

Create an application which supports call-center agents to fill up loan submissions. Build a public submission portal where customers can create enquiries (and track these nearly real-time).

What we had done:

 We created a single page application for internal usage with React and Redux. The application would enable agents to search, update, delete or add new entries to the database. The application was hosted and accessible after authenticating, but we have created an Electron based desktop version of it, for local use.
 
 We wrote extensive backend logic with node JS and express JS integrated with few banking system API. We created a public API for incoming loan submissions. With help of firebase we connected the incoming loan submissions to the call-center agents screen's. 

 We have created a functionality signalizing the agent if a submission is likely to be abandoned. As submissions started with contact details, the agent could quickly react and support the application, with high chances to convert it as a lead.

Key technologies: [ICONS]

- React
- Redux
- Node JS
- Express JS
- Firebase firestore

Site URL-s:

The project was campaign based and it is not available anymore for outside access.

3. Downline waitlist page

Challenge:

Create a landing page, where future potential users can sign up on a waitlist. Waitlists are the new MVP, they need to be easy to use, easily sharable, highly performing. They usually contain a lot of 'heavyweight' content such as images and videos, but they also need to be lightweight.

What we had done:

Performance scores:

Pingdom tools: 92
GTmetrix: 98
Google PSI: 95
Geekflare: 99
Uptrends: 99

Average loading times: 500-1000ms


Key technologies: [ICONS]

- React
- React-helmet
- Gatsby
- Firebase

Site URL-s:

https://downline.us


4. Sports chatbot

Challenge:

Create a facebook integrated chatbot which notifies users on followed events

What we had done:

We created a custom chatbot service integrated with different API-s to follow sport events. Our main feature was that the user followed certain soccer fixtures, and he would have been notified in case of goalscoring. Uniqueness of the service was that in the background, the service was trying to pair a video together with the goal details, and if possible was including a short clip.

We created the chatbot engine with dialogflow, and integrated it with facebook messenger. The chatbot was using google cloud functions and pubsub engine, to activate endpoints and acquire event information. In case of an event, the background function would be triggered and push the relevant data to the facebook messenger of the subscribed users.

Key technologies: [ICONS]

- Dialogflow
- Google cloud function
- Google pubsub engine
- Facebook API
- Facebook messenger

Site URL-s:

https://www.iloveservers.com/chatbot-example-video.mp4