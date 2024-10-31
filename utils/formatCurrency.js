const formatCurrency = (
  number = 0,
  currencyCode = "USD",
  minDecimal = 2,
  maxDecimal = 2,
  navigatorLocale
) =>
  new Intl.NumberFormat(navigatorLocale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: minDecimal,
    maximumFractionDigits: maxDecimal,
  }).format(number);

export default formatCurrency;
