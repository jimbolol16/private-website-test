import TypeDetect from "type-detect";

const isEmpty = (object) => {
  let isEmptyData = false;
  switch (TypeDetect(object).toLowerCase()) {
    case "object":
      isEmptyData = JSON.stringify(object) === "{}";
      break;
    case "array":
      isEmptyData = !object || (object && object.length === 0);
      break;
    case "undefined":
      isEmptyData = true;
      break;
    default:
      break;
  }
  return isEmptyData;
};

export default isEmpty;
