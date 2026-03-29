import React from "react";

// Crear el contexto
const CartContext = React.createContext();

// Hook personalizado
export const useCart = () => {
  const context = React.useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }

  return context;
};

// Provider
export const CartProvider = ({ children }) => {

  // Cargar carrito desde localStorage
  const [cartItems, setCartItems] = React.useState(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      return JSON.parse(savedCart);
    }

    return [];
  });

  // Guardar carrito en localStorage cada vez que cambie
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Agregar producto
  const addToCart = (product) => {
    setCartItems((prevItems) => {

      const existingItem = prevItems.find(
        (item) => item.idProduct === product.idProduct
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.idProduct === product.idProduct
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      const newProduct = {
        ...product,
        price: Number(product.price) || 0,
        quantity: 1
      };

      return [...prevItems, newProduct];
    });
  };

  // Eliminar producto
  const removeFromCart = (idProduct) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.idProduct !== idProduct)
    );
  };

  // Actualizar cantidad
  const updateQuantity = (idProduct, quantity) => {

    if (quantity <= 0) {
      removeFromCart(idProduct);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.idProduct === idProduct
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Vaciar carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Total de productos
  const getTotalItems = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  // Total del precio
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) =>
        total + Number(item.price || 0) * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};