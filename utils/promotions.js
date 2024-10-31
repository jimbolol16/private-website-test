const { decoratedVerifyBricodepotCoupon } = require("../server/firestore");

const activePromotions = {
  bricodepot: decoratedVerifyBricodepotCoupon,
};

export { activePromotions };
