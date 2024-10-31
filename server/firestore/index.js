const { initClient } = require("./client");
const FieldValue = require("firebase-admin").firestore.FieldValue;
const { v4: uuidV4 } = require("uuid");
// const { disableOnEnvironment } = require("../../utils/decorators");

/**
 * Save the lead data into firestore to later processing
 * @param {Object} formMetadata
 */
const storeFormMetadata = async function (formMetadata) {
  const id = formMetadata.email;
  const client = initClient();

  const docRef = client.collection(process.env.FIRESTORE_DATABASE).doc(id);
  let metadata = {
    email: formMetadata.email || null,
    firstname: formMetadata.firstName || null,
    lastname: formMetadata.lastName || null,
    timestamp: FieldValue.serverTimestamp(),
    comment: formMetadata.comment || null,
    phone: formMetadata.phone || null,
    address: formMetadata.address || null,
    hsutk: formMetadata.hsutk || null,
    page_uri: formMetadata.pageUri || null,
    page_name: formMetadata.pageName || null,
    ip_address: formMetadata.ipAddress || null,
    space: formMetadata.space || null,
    duration: formMetadata.duration || null,
    pipeline: formMetadata.pipeline || null,
    gclid: formMetadata.gclid || null,
    base: formMetadata.base || null,
    allow_commercial_notifications:
      formMetadata.allowCommercialNotifications || null,
    date: formMetadata.date || null,
    additional_services: formMetadata.additionalServices || {},
    id: uuidV4(),
    code: formMetadata.code || null,
    deal: formMetadata.deal || null,
    price: formMetadata.price || null,
    status: "initial",
    current_step: 0,

    // Partnership fields - collab form
    collaboratorIdNumber: formMetadata.collaboratorIdNumber || null,
    isCompany: formMetadata.isCompany || false,
    companyName: formMetadata.companyName || null,
    tradeName: formMetadata.tradeName || null,
    companyId: formMetadata.companyId || null,
    zipCode: formMetadata.zipCode || null,
    state: formMetadata.state || null,

    // Partnership fields - referrer
    partnership_code: formMetadata.partnershipCode || null,

    // livensa promo fields
    livensaPromo: formMetadata.livensaPromo || null,

    // ciudadela promo fields
    ciudadelaPromo: formMetadata.ciudadelaPromo || null,

    // cbre promo fields
    cbrePromo: formMetadata.cbrePromo || null,

    // students promo fields
    studentsPromo: formMetadata.studentsPromo || null,

    // resa promo fields
    resaPromo: formMetadata.resaPromo || null,

    // business lead
    businessLead: formMetadata.businessLead || null,
  };

  return await docRef.create(metadata);
};

const verifyBricodepotCoupon = async function (formMetadata) {
  const client = initClient();
  const docRef = client
    .collection(process.env.NUXT_PROMOTION_COLLECTION)
    .doc(formMetadata.code);

  return await client.runTransaction(async (transaction) => {
    const document = await transaction.get(docRef);

    if (!document.exists) {
      return {
        message: "invalidCode",
        code: 404,
      };
    }

    if (document.exists && document.get("used_at")) {
      return {
        message: "codeUsed",
        code: 400,
      };
    }

    await transaction.update(docRef, {
      used_at: new Date().toISOString(),
      email: formMetadata.email,
      phone: formMetadata.phone,
    });

    return {
      message: "OK",
      code: 200,
    };
  });
};

let decoratedStoreFormMetadata = storeFormMetadata;
let decoratedVerifyBricodepotCoupon = verifyBricodepotCoupon;

if (
  ["development", "staging"].indexOf(process.env.NUXT_APP_ENVIRONMENT) !== -1
) {
  decoratedStoreFormMetadata = async () => {};
  decoratedVerifyBricodepotCoupon = async () => {
    return {
      message: "OK",
      code: 200,
    };
  };
}

/**
 * Export decorated functions to avoid call them on development environment
 */
// const decoratedVerifyBricodepotCoupon = disableOnEnvironment(() => {
//   return {
//     message: "OK",
//     code: 200,
//   };
// }, ["development", "staging"])(verifyBricodepotCoupon);
// const decoratedStoreFormMetadata = disableOnEnvironment(() => {}, [
//   "development",
//   "staging",
// ])(storeFormMetadata);

export { decoratedVerifyBricodepotCoupon, decoratedStoreFormMetadata };
