const itemDimensions = {
  // Common items
  small: {
    width: 80,
    height: 90,
    depth: 70,
    factor: 1.5,
  },
  medium: {
    width: 100,
    height: 160,
    depth: 90,
    factor: 1.5,
  },
  large: {
    width: 120,
    height: 240,
    depth: 100,
    factor: 1.5,
  },
};

const PRODUCT_MAPPING_INTERVAL = {
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7.5,
  7.5: 9,
  9: 12,
  12: 15,
  15: 20,
  20: 25,
  25: 30,
  30: 35,
  35: 40,
  40: 45,
  45: 50,
  50: 51,
};

const performSpace = (width, height, depth, factor) => {
  const cubeMeters = Math.max(width * height * depth * factor, 0) / 2;
  return cubeMeters / 1e6;
};

const roundToNearestPlan = (value) => {
  const nearestPlan = Object.entries(PRODUCT_MAPPING_INTERVAL)
    .sort((a, b) => a[0] - b[0])
    .reduce((a, b) =>
      Math.abs(parseFloat(a[0]) - value) > Math.abs(parseFloat(b[0]) - value)
        ? b
        : a
    );

  if (nearestPlan[0] >= value) {
    return nearestPlan[0];
  }

  return nearestPlan[1];
};

export { itemDimensions, performSpace, roundToNearestPlan };
