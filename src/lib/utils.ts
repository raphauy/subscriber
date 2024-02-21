import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const schema = z.object({
	name: z.string().optional(),
	email: z.string({required_error: "el email es obligatorio.", invalid_type_error: "el email no es válido"}).email(),
})

export type ContactFormValues = z.infer<typeof schema>
