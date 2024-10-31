import { performSpace, roundToNearestPlan } from "@/utils/itemDimensions";

const performSpaceEstimation = {
  data() {
    return {
      factor: 1.5,
    };
  },
  methods: {
    $_spaceEstimation(width, height, depth, factor) {
      return performSpace(width, height, depth, factor);
    },
    $_spaceEstimationRounded(width, height, depth, factor) {
      const spaceEstimated = +parseFloat(
        this.$_spaceEstimation(width, height, depth, factor)
      ).toFixed(2);
      return roundToNearestPlan(Math.max(spaceEstimated, 0));
    },
  },
};

export default performSpaceEstimation;
