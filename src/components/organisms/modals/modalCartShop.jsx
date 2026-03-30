import { useState } from "react"
import { FiCheckCircle, FiTrash2, FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi"
import { useCart } from "../../../context/CartContext"
import { sendOrderToWhatsApp } from "../../utils/whatsappOrder"

function CartShop({ setCartShopOpen }) {
  const [isClose, setIsClose]   = useState(false)
  const [ordered, setOrdered]   = useState(false)

  const { cartItems, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart()

  const CloseModal = () => {
    setIsClose(true)
    setTimeout(() => setCartShopOpen(false), 400)
  }

  const handleBgClick = (e) => {
    if (e.target === e.currentTarget) CloseModal()
  }

  const handleOrder = () => {
    if (cartItems.length === 0) return
    sendOrderToWhatsApp(cartItems, getTotalPrice())
    setOrdered(true)
    setTimeout(() => {
      clearCart()
      setTimeout(CloseModal, 1500)
    }, 2000)
  }

  const total = Number(getTotalPrice() || 0)

  return (
    <div
      className={`
        fixed inset-0 bg-black/60 z-[998]
        flex justify-end items-start pt-[68px]
        transition-opacity duration-400
        ${isClose ? "opacity-0" : "opacity-100"}
      `}
      onClick={handleBgClick}
    >
      <section
        className="
          bg-[#1a0d08]
          border-l border-b border-[#c8895a33]
          rounded-bl-[10px]
          w-[400px] max-w-[95vw] max-h-[80vh]
          flex flex-col overflow-hidden
          font-serif
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#c8895a22] flex-shrink-0">
          <div className="flex flex-col gap-0.5">
            <span className="font-serif text-[10px] tracking-[0.22em] uppercase text-[#c8895a] opacity-70">
              Tu selección
            </span>
            <h2 className="font-serif font-bold text-[1.1rem] text-[#f5e8d5] m-0">
              Carrito
            </h2>
          </div>
          <button
            onClick={CloseModal}
            aria-label="Cerrar"
            className="
              w-[30px] h-[30px] rounded-[2px]
              border border-[#c8895a33] bg-transparent
              text-[#c4a98a] text-[0.9rem]
              flex items-center justify-center
              hover:bg-[#c8895a] hover:text-[#1a0d08] hover:border-[#c8895a]
              transition-all duration-200 cursor-pointer
            "
          >
            ✕
          </button>
        </div>

        {/* ── Contenido ── */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2 scrollbar-thin scrollbar-thumb-[#c8895a33]">

          {ordered ? (
            /* Estado: pedido realizado */
            <div className="flex-1 flex flex-col items-center justify-center gap-3 py-12 text-center">
              <FiCheckCircle size={44} className="text-[#7ec88a]" strokeWidth={1.5} />
              <p className="font-serif font-light text-[0.95rem] text-[#f5e8d5]">
                Pedido realizado con éxito
              </p>
            </div>

          ) : cartItems.length === 0 ? (
            /* Estado: vacío */
            <div className="flex-1 flex flex-col items-center justify-center gap-3 py-12 text-center">
              <FiShoppingCart size={40} className="text-[#c8895a] opacity-30" strokeWidth={1.5} />
              <p className="font-serif font-light text-[0.9rem] text-[#7a5c45]">
                No hay productos en el carrito
              </p>
            </div>

          ) : (
            /* Lista de items */
            cartItems.map((item) => {
              const price = Number(item.price || 0)
              return (
                <div
                  key={item.idProduct}
                  className="
                    flex items-center gap-3
                    bg-[#120804] border border-[#c8895a22]
                    rounded-[6px] p-2.5
                  "
                >
                  {/* Imagen */}
                  {item.URL && (
                    <img
                      src={item.URL}
                      alt={item.name}
                      className="w-12 h-12 object-contain rounded flex-shrink-0 bg-[#1a0d08]"
                    />
                  )}

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif font-bold text-[0.82rem] text-[#f5e8d5] truncate m-0 mb-0.5">
                      {item.name}
                    </p>
                    <span className="font-light text-[0.78rem] text-[#c8895a]">
                      S/ {price.toFixed(2)}
                    </span>
                  </div>

                  {/* Cantidad */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      onClick={() => updateQuantity(item.idProduct, item.quantity - 1)}
                      className="
                        w-[22px] h-[22px] rounded-[2px]
                        border border-[#c8895a33] bg-transparent
                        text-[#c4a98a] text-[0.75rem]
                        flex items-center justify-center cursor-pointer
                        hover:bg-[#c8895a22] hover:border-[#c8895a] hover:text-[#f5e8d5]
                        transition-all duration-150
                      "
                    >
                      <FiMinus size={11} />
                    </button>
                    <span className="font-serif font-medium text-[0.85rem] text-[#f5e8d5] w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.idProduct, item.quantity + 1)}
                      className="
                        w-[22px] h-[22px] rounded-[2px]
                        border border-[#c8895a33] bg-transparent
                        text-[#c4a98a] text-[0.75rem]
                        flex items-center justify-center cursor-pointer
                        hover:bg-[#c8895a22] hover:border-[#c8895a] hover:text-[#f5e8d5]
                        transition-all duration-150
                      "
                    >
                      <FiPlus size={11} />
                    </button>
                  </div>

                  {/* Eliminar */}
                  <button
                    onClick={() => removeFromCart(item.idProduct)}
                    aria-label="Eliminar"
                    className="
                      text-[#7a5c45] hover:text-[#e07070]
                      transition-colors duration-200
                      flex-shrink-0 cursor-pointer bg-transparent border-none p-1
                    "
                  >
                    <FiTrash2 size={14} />
                  </button>
                </div>
              )
            })
          )}
        </div>

        {/* ── Footer con total y botón ── */}
        {!ordered && cartItems.length > 0 && (
          <div className="border-t border-[#c8895a22] px-6 py-4 flex-shrink-0">
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-serif text-[0.78rem] tracking-[0.1em] uppercase text-[#7a5c45]">
                Total
              </span>
              <span className="font-serif font-bold text-[1.3rem] text-[#f5e8d5]">
                S/ {total.toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleOrder}
              className="
                w-full py-3
                bg-[#c8895a] hover:bg-[#d9a070]
                text-[#1a0d08] font-serif font-medium
                text-[0.85rem] tracking-[0.12em] uppercase
                border-none rounded-[2px] cursor-pointer
                transition-[background,transform] duration-200
                active:scale-[0.99]
              "
            >
              Realizar pedido
            </button>
          </div>
        )}

      </section>
    </div>
  )
}

export { CartShop }