export const sendOrderToWhatsApp = (cartItems, total) => {

  const phone = "51932983227";

  let message = "Hola quisiera realizar un pedido de los siguientes productos: %0A%0A";

  cartItems.forEach((item) => {

    message += `${item.name} %0A`;
    message += `Cantidad: ${item.quantity} %0A%0a`;

  });

  message += `Total: S/.${total.toFixed(2)} %0A%0A`;


  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank");
};
