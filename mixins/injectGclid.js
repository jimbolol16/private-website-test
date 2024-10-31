import { addGclid } from "@/utils/queryStrings";

const injectGclid = {
  mounted() {
    /**
     * Store the gclid for later use.
     * We need to check if gclid is present in the url to save it in the localstorage
     * in order to keep the track of paid leads
     */
    addGclid(window.location.search);
  },
};
export default injectGclid;
