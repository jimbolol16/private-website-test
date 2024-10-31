import formatCurrency from "@/utils/formatCurrency";

const formats = {
  filters: {
    formatCurrency: (value, currencyCode = "EUR", locale) => {
      if (!value) return "";

      const formattedNumber = formatCurrency(value, currencyCode, 2, 2, locale);
      return formattedNumber.replace("NaN", "--");
    },
  },
};

export default formats;
