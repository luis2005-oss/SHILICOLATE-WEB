export const formatPrice = (price) => {
  const number = Number(price) || 0;
  return `$${number.toFixed(2)}`;
};