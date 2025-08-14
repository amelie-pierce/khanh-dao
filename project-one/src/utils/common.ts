export const combineClassNames = (
  basedClass: string,
  ...otherArgs: (string | undefined)[]
) => {
  const combined = otherArgs
    .filter(Boolean)
    .map((arg) => basedClass + arg)
    .join(" ");

  return basedClass + ` ${combined}`;
};

export const checkDisabled = (disabled: boolean) => {
  return disabled ? "disabled" : "";
};

export const currencyConverter = (price: number) => {
  return Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 10,
    style: "currency",
    currency: "USD",
  }).format(price);
};
