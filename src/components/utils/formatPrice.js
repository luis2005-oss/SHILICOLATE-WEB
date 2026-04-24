export const formatPrice = (price) => {
  const number = Number(price) || 0;
  return `S/.${number.toFixed(2)}`;
};