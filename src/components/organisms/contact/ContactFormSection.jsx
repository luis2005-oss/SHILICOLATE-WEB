import { useState } from "react"
import emailjs from '@emailjs/browser'
import { messageValidator } from "../../../validations/validationsMessage"

const GOLD       = "#d4af37"
const GOLD_LINE  = "linear-gradient(to right, #d4af37, #c8895a)"

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
      setName(''); setEmail(''); setPhone(''); setMessage('')
    } catch (err) {
      console.error(err)
      setError(err.message || 'Ocurrió un error al enviar el mensaje')
    }
  }

  const inputClass = `
    bg-transparent outline-none
    font-serif font-light text-[0.95rem] text-[#f5e8d5]
    placeholder-[#7a5c45] py-2
    transition-colors duration-200
    border-b border-[#d4af3733] focus:border-[#d4af37]
  `

  return (
    <section className="relative bg-[#1a0d08] px-4 pb-20 -mt-12 z-20">
      <div
        className="max-w-3xl mx-auto rounded-xl px-8 sm:px-14 py-12 relative overflow-hidden"
        style={{ border: `0.5px solid ${GOLD}33` }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Esquinas doradas */}
        <span className="absolute top-0 left-0 w-8 h-8 pointer-events-none" style={{ borderTop: `1.5px solid ${GOLD}88`, borderLeft: `1.5px solid ${GOLD}88` }} />
        <span className="absolute top-0 right-0 w-8 h-8 pointer-events-none" style={{ borderTop: `1.5px solid ${GOLD}88`, borderRight: `1.5px solid ${GOLD}88` }} />
        <span className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none" style={{ borderBottom: `1.5px solid ${GOLD}88`, borderLeft: `1.5px solid ${GOLD}88` }} />
        <span className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none" style={{ borderBottom: `1.5px solid ${GOLD}88`, borderRight: `1.5px solid ${GOLD}88` }} />

        {/* Cabecera */}
        <div className="mb-8">
          <span
            className="inline-block mb-5 font-serif text-[11px] tracking-[0.25em] uppercase pb-1"
            style={{ color: GOLD, borderBottom: `0.5px solid ${GOLD}55` }}
          >
            Ponte en contacto
          </span>
          <h2 className="font-serif font-bold text-[clamp(1.6rem,3vw,2.2rem)] text-[#f5e8d5] leading-tight m-0">
            Envíanos{" "}
            <em
              className="italic font-normal"
              style={{ background: "linear-gradient(135deg,#d4af37,#c8895a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              un mensaje
            </em>
          </h2>
          <div className="w-9 h-px my-4 opacity-70" style={{ background: GOLD_LINE }} />
          <p className="font-serif font-light text-[0.9rem] text-[#7a5c45] m-0">
            Comunícate con nosotros y te responderemos.
          </p>
        </div>

        {error   && <p className="text-[#e07070] text-[0.82rem] mb-4">{error}</p>}
        {success && <p className="text-[#7ec88a] text-[0.82rem] mb-4">{success}</p>}

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="font-serif text-[11px] tracking-[0.15em] uppercase" style={{ color: GOLD }}>Nombre completo</label>
              <input type="text" placeholder="Ej: Juan Pérez" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-serif text-[11px] tracking-[0.15em] uppercase" style={{ color: GOLD }}>Correo electrónico</label>
              <input type="email" placeholder="Ej: juan@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-serif text-[11px] tracking-[0.15em] uppercase" style={{ color: GOLD }}>Teléfono</label>
            <input type="text" placeholder="Ej: 999 999 999" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-serif text-[11px] tracking-[0.15em] uppercase" style={{ color: GOLD }}>Mensaje</label>
            <textarea placeholder="Escribe aquí tu mensaje..." value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputClass} resize-none h-28`} />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-3.5 text-[#1a0d08] font-serif font-medium text-[0.9rem] tracking-[0.12em] uppercase border-none rounded-[2px] cursor-pointer transition-[opacity,transform] duration-200 hover:opacity-90 hover:-translate-y-px active:scale-[0.99]"
            style={{ background: "linear-gradient(135deg, #d4af37, #c8895a)" }}
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  )
}

export { ContactFormSection }