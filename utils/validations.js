import { helpers } from "vuelidate/lib/validators";
import { isValidPhoneNumber } from "libphonenumber-js";
import zipCodes from "@/utils/zipCodes";

/**
 * Validate phone number
 */

const validatePhoneNumber = (value) => {
  return isValidPhoneNumber(value);
};

/**
 * Validate Zip Code according to the selected country.
 */
const validateZipCode = (value, vm) => {
  return vm.country
    ? helpers.regex("zipCodes", new RegExp(zipCodes[vm.country.code]))(value)
    : true;
};

export { validatePhoneNumber, validateZipCode };
