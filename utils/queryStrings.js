// Taken from https://support.google.com/google-ads/answer/7012522

/**
 * Get gclid value from URL
 * @param {String} p
 * @returns gclid value
 */
const getParam = (p) => {
  var match = RegExp("[?&]" + p + "=([^&]*)").exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
};

/**
 * Get expiration from gclid value
 * @param {String} value
 * @returns
 */
const getExpiryRecord = (value, expiryPeriod) => {
  const expiryDate = new Date().getTime() + expiryPeriod;

  return {
    value: value,
    expiryDate: expiryDate,
  };
};

/**
 * Save gclid in localstorage for later usage
 */
const addGclid = (metadata) => {
  const gclidParam = getParam("gclid");
  const gclsrcParam = getParam("gclsrc");
  const isGclsrcValid = !gclsrcParam || gclsrcParam.indexOf("aw") !== -1;
  const expiryPeriod = 90 * 24 * 60 * 60 * 1000; // 90 days, in ms

  if (gclidParam && isGclsrcValid) {
    const gclidRecord = getExpiryRecord(metadata || gclidParam, expiryPeriod);
    localStorage.setItem("gclid", JSON.stringify(gclidRecord));
  }
};

/**
 * Retrieve gclid from localstorage to setup form submissions
 */
const retrieveGclid = () => {
  const gclidRecord = JSON.parse(localStorage.getItem("gclid"));
  const isGclidValid =
    gclidRecord && new Date().getTime() < gclidRecord.expiryDate;

  if (isGclidValid) {
    return gclidRecord.value;
  }

  return null;
};

/**
 * Add referrer partnership code and store it in the localstorage for later usage
 */
const addPartnershipReferrer = () => {
  const referrer = getParam("rpc");
  const expiryPeriod = 90 * 24 * 60 * 60 * 1000; // 90 days, in ms

  if (referrer) {
    const partnershipRecord = getExpiryRecord(referrer, expiryPeriod);
    localStorage.setItem(
      "partnership_referrer",
      JSON.stringify(partnershipRecord)
    );
  }
  return referrer;
};

/**
 * Retrieve partnership referrer code from localstorage
 */
const retrievePartnershipReferrer = () => {
  const partnershipRecord = JSON.parse(
    localStorage.getItem("partnership_referrer")
  );
  const ispartnershipRecordValid =
    partnershipRecord && new Date().getTime() < partnershipRecord.expiryDate;

  if (ispartnershipRecordValid) {
    return partnershipRecord.value;
  }

  return null;
};

export {
  addGclid,
  retrieveGclid,
  addPartnershipReferrer,
  retrievePartnershipReferrer,
  getParam,
};
