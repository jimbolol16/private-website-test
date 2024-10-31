const functions = require("firebase-functions");
const { PubSub } = require("@google-cloud/pubsub");

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

// Pubsub configuration
const topicNameOrId =
  "projects/box2box-cloud/topics/gcf-website-form-submission-prod";

/*eslint-disable no-unused-vars */
exports.websiteFormSubmissionProd = functions
  .runWith({
    memory: "256MB",
  })
  .firestore.document("public_website_prod/{submissionId}")
  .onCreate(async (snap, context) => {
    // On form submission, create a pubsub message to delay the hubspot form creation
    const data = snap.data();

    // Create the pubsub message
    await pubSubClient
      .topic(topicNameOrId)
      .publishMessage({ data: Buffer.from(data.email) });
  });
