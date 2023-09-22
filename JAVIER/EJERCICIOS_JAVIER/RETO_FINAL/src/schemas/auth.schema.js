import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Username is requerid",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      mensaje: "Inavalid Email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      mensaje: "Password must be at least 6 characters",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email es obligatorio",
    })
    .email({
      mensaje: "El formato del correo no es valido",
    }),
  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .min(6, {
      mensaje: "la contraseña debe tener al menos seis caracteres",
    }),
});
