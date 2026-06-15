import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }), // Shield protects your app from common attacks e.g. SQL injection

    detectBot({
      // Create a bot detection rule
      mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
      // Block all bots except the following
      allow: ["CATEGORY:SEARCH_ENGINE"], // Google, Bing, etc
    }),

    // Create a token bucket rate limit. Other algorithms are supported.
    slidingWindow({
      mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only

      interval: 60,
      max: 100,
    }),
  ],
});

export default aj;
