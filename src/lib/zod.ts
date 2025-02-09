import { object, string } from "zod"

export const registerSchema = object({
    firstName: string()
      .min(1, "Debes ingresar el nombre")
      .max(50, "El nombre no puede ser mayor a 50 caracteres.")
      .regex(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/, { message: "El nombre solo puede contener letras." }),
  
    instagram: string()
      .max(70, "El instagram no puede ser mayor a 70 caracteres.")
      .optional(),

    observations: string()
      .max(100, "Las observaciones no pueden ser mayores a 100 caracteres.")
      .optional(),
})