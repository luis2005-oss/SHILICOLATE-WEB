import { useState } from "react"
import emailjs from '@emailjs/browser'
import { messageValidator } from "../../../validations/validationsMessage"

function ContactFormSection() {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [phone, setPhone]     = useState('')
  const [message, setMessage] = useState('')
  const [error, setError]     = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      await messageValidator.validateAsync({ name, email, phone, message })

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, email, phone, message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSuccess('Mensaje enviado con éxito')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setError(err.message || 'Ocurrió un error al enviar el mensaje')
    }
  }

  return (
    <section className="relative bg-[#1a0d08] px-4 pb-20 -mt-12 z-20">
      <div
        className="
          max-w-2xl mx-auto
          border border-[#c8895a33] rounded-xl
          px-8 sm:px-14 py-12
          backdrop-blur-xl
        "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Cabecera */}
        <div className="mb-8">
          <span
            className="
              inline-block mb-5
              font-serif text-[11px] tracking-[0.25em] uppercase
              text-[#c8895a] border-b border-[#c8895a55] pb-1
            "
          >
            Ponte en contacto
          </span>
          <h2 className="font-serif font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-[#f5e8d5] leading-tight m-0">
            Envíanos <em className="italic font-normal text-[#c8895a]">un mensaje</em>
          </h2>
          <div className="w-9 h-px bg-[#c8895a] opacity-50 my-4" />
          <p className="font-serif font-light text-[0.9rem] text-[#7a5c45] m-0">
            Comunícate con nosotros y te responderemos a la brevedad.
          </p>
        </div>

        {/* Feedback */}
        {error   && <p className="text-[#e07070] text-[0.82rem] mb-4">{error}</p>}
        {success && <p className="text-[#7ec88a] text-[0.82rem] mb-4">{success}</p>}

        {/* Formulario */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="flex flex-col gap-1.5 group">
              <label className="font-serif text-[11px] tracking-[0.15em] uppercase text-[#c8895a]">
                Nombre completo
              </label>
              <input
                type="text"
                placeholder="Ej: Juan Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                  bg-transparent border-b border-[#c8895a33]
                  focus:border-[#c8895a] outline-none
                  font-serif font-light text-[0.95rem] text-[#f5e8d5]
                  placeholder-[#7a5c45] py-2
                  transition-colors duration-200
                "
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5 group">
              <label className="font-serif text-[11px] tracking-[0.15em] uppercase text-[#c8895a]">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="Ej: juan@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  bg-transparent border-b border-[#c8895a33]
                  focus:border-[#c8895a] outline-none
                  font-serif font-light text-[0.95rem] text-[#f5e8d5]
                  placeholder-[#7a5c45] py-2
                  transition-colors duration-200
                "
              />
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex flex-col gap-1.5 group">
            <label className="font-serif text-[11px] tracking-[0.15em] uppercase text-[#c8895a]">
              Teléfono
            </label>
            <input
              type="text"
              placeholder="Ej: 999 999 999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="
                bg-transparent border-b border-[#c8895a33]
                focus:border-[#c8895a] outline-none
                font-serif font-light text-[0.95rem] text-[#f5e8d5]
                placeholder-[#7a5c45] py-2
                transition-colors duration-200
              "
            />
          </div>

          {/* Mensaje */}
          <div className="flex flex-col gap-1.5 group">
            <label className="font-serif text-[11px] tracking-[0.15em] uppercase text-[#c8895a]">
              Mensaje
            </label>
            <textarea
              placeholder="Escribe aquí tu mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                bg-transparent border-b border-[#c8895a33]
                focus:border-[#c8895a] outline-none
                font-serif font-light text-[0.95rem] text-[#f5e8d5]
                placeholder-[#7a5c45] py-2 resize-none h-28
                transition-colors duration-200
              "
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="
              w-full mt-2 py-3.5
              bg-[#c8895a] hover:bg-[#d9a070]
              text-[#1a0d08] font-serif font-medium
              text-[0.9rem] tracking-[0.12em] uppercase
              rounded-[2px] border-none cursor-pointer
              transition-[background,transform] duration-200
              hover:-translate-y-px active:scale-[0.99]
            "
          >
            Enviar mensaje
          </button>

        </form>
      </div>
    </section>
  )
}

export { ContactFormSection }