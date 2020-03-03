export default [
  {
    id: "project-0",
    name: "Re-planning the architecture of a direct networking company.",
    challenge:
      "An already existing system with bad performance, SEO and croppy user experience. Non-existing, outsourced development team.",
    whatAchieved:
      "We set up a fully remote team of 6 which were blending well with the already existing teammates. We used the most relevant technologies to improve perfomance and SEO. Many of the frontends got redesigned according to our daily standards. Read more in the attachment (PDF).",
    tech:
      "Gatsby for creating performing front-ends. AWS lambda - serverless architecture for creating scalable backends. CircleCI for continous delivery, Cypress.io for good E2E test coverage."
  },
  {
    id: "project-1",
    name: "Hackathon winner-solution chatbot",
    challenge:
      "Create a working chatbot which is allowing users to follow/interact with sport events nearly in real time.",
    whatAchieved:
      "A custom made service following certain football leagues. We identified the pain point of receiving information however it is hard to see action. The service fetches videos based on different API-s, an communicate with the user via facebook messenger.",
    tech:
      "Dialogflow as a chatbot engine. Google pubsub engine for triggering backend integrations. Node JS / Typescript for background functions. Dialogflow and facebook messenger API integration."
  },
  {
    id: "project-2",
    projectTitle: "Slight form realtime agent",
    challenge:
      "Build a form which converts leads in realtime, what call-center colleagues can follow up almost immediately.",
    whatAchieved:
      "We have built a two-sided form, where a call-center agent can follow the user status in realtime. The service signalizes if the user possible abandoned the form. In that case the call-center agent would automatically connect with the user, and try to convert it to a lead.",
    tech:
      "Firebase firestore realtime database which partially saving user inputs instead of waiting the user to finish the form. React SPA for the call-center agent side, which reads real-time data coming from the database. REST API integrations with another nodeJS server."
  },

  {
    id: "project-3",
    name: "Bezpi realtime webRTC connection",
    challenge:
      "Create a two-sided P2P connection for sharing video and audio. The components of this P2P would be integrated into already existing platforms.",
    whatAchieved:
      "Integrated P2P connection with heavy usage of webRTC, where video and audio would be equally available. An interesting fact that one side was a web browser, another was a native mobile application.",
    tech:
      "React-Redux for managing the SPA state of the frontend-application. WebRTC to establish the P2P connection. Firebase realtime database to host the required parameters and clean up after the call has been identified."
  }
]
