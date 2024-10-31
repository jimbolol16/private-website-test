import { addPartnershipReferrer } from "@/utils/queryStrings";

const injectPartnershipCode = {
  mounted() {
    /**
     * Store the partnership referrer for later use.
     * We need to check if gclid is present in the url to save it in the localstorage
     * in order to keep the track of paid leads
     */
    addPartnershipReferrer(window.location.search);
  },
};
export default injectPartnershipCode;
