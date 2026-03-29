function IframeMaps() {
  return (
    <div className="flex-1 w-full lg:max-w-3xl">
          <div className="mt-4 flex flex-col sm:flex-row gap-4 items-stretch">
            <div className="flex-1 overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.667209129342!2d-78.143618!3d-6.8706073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b3cdc4f7357899%3A0xf6f379f8c0c8b2e8!2sShilicolate!5e0!3m2!1ses-419!2spe!4v1772557804244!5m2!1ses-419!2spe"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Shilicolate - AV. Amazonas 513, Celendín"
              />
            </div>
          </div>
        </div>
    )
}

export { IframeMaps }