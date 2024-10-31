const { initializeApp, cert, getApps } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const initClient = () => {
  // Avoid initialize multiple times if is already initialized
  if (!getApps().length) {
    initializeApp({
      credential: cert(
        JSON.parse(
          Buffer.from(
            process.env.GOOGLE_APPLICATION_CREDENTIALS,
            "base64"
          ).toString("ascii")
        )
      ),
      projectId: "box2box-cloud",
    });
  }

  return getFirestore();
};

export { initClient };
