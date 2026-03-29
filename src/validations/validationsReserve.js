import Joi from 'joi'

const reservationsValidate = Joi.object({
  clientName: Joi
    .string()
    .pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)
    .min(2)
    .max(50)
    .required()
    .messages({
      'string.base': 'El nombre debe ser una cadena de texto',
      'string.empty': 'El nombre no puede estar vacío',
      'string.min': 'El nombre debe tener mínimo 2 caracteres',
      'string.max': 'El nombre no puede tener más de 50 caracteres',
      'string.pattern.base': 'El nombre solo puede contener letras y espacios',
      'any.required': 'El nombre es requerido'
    }),
  email: Joi
    .string()
    .min(8)
    .max(100)
    .pattern(/^[a-zA-Z0-9._%+-áéíóúÁÉÍÓÚñÑ]+@(gmail\.com|hotmail\.com|yahoo\.com)$/)
    .required()
    .messages({
      'string.base': 'El correo debe ser una cadena de caracteres',
      'string.empty': 'El correo no puede estar vacío',
      'string.min': 'El correo debe contener mínimo 8 caracteres',
      'string.max': 'El correo solo puede contener máximo 100 caracteres',
      'string.pattern.base': 'Ingrese un correo válido (gmail, hotmail, yahoo) (.com)',
      'any.required': 'El correo es requerido'
    }),
  phone: Joi
    .string()
    .required()
    .pattern(/^[0-9]{9}$/)
    .messages({
      'string.base': 'El teléfono debe ser una cadena de caracteres',
      'string.empty': 'El teléfono no puede estar vacío',
      'string.pattern.base': 'El teléfono debe contener exactamente 9 dígitos',
      'any.required': 'El teléfono es requerido'
    }),
  numberPeople: Joi
    .number()
    .integer()
    .min(1)
    .max(20)
    .required()
    .messages({
      'number.base': 'El número de personas debe ser un número',
      'number.min': 'Debe haber al menos 1 persona',
      'number.max': 'El máximo es 20 personas',
      'any.required': 'El número de personas es requerido'
    }),
  reservationDate: Joi
    .date()
    .min('now')
    .required()
    .messages({
      'date.base': 'La fecha de reservación debe ser válida',
      'date.min': 'La fecha debe ser posterior a hoy',
      'any.required': 'La fecha de reservación es requerida'
    }),
  reservationTime: Joi
    .string()
    .pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)
    .required()
    .messages({
      'string.base': 'La hora debe ser una cadena de texto',
      'string.pattern.base': 'La hora debe estar en formato HH:MM (ej: 14:30)',
      'any.required': 'La hora de reservación es requerida'
    }),
  reason: Joi
    .string()
    .valid('Cumpleaños', 'Aniversario', 'Negocios', 'Casual', 'Otro')
    .required()
    .messages({
      'string.base': 'El motivo debe ser una cadena de texto',
      'any.only': 'El motivo debe ser: cumpleaños, aniversario, negocios, casual u otro',
      'any.required': 'El motivo es requerido'
    }),
  specialRequeriment: Joi
    .string()
    .max(200)
    .allow('')
    .optional()
    .messages({
      'string.base': 'Los requerimientos especiales deben ser texto',
      'string.max': 'Los requerimientos no pueden exceder 200 caracteres'
    }),
  message: Joi
    .string()
    .max(500)
    .allow('')
    .optional()
    .messages({
      'string.base': 'El mensaje debe ser texto',
      'string.max': 'El mensaje no puede exceder 500 caracteres'
    })
})
export {reservationsValidate}