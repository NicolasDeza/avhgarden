import { z } from "zod";
import { useForm } from "./useForm";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Minimum 2 caractères requis"),
  email: z.string().trim().email("Email invalide"),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(10, "Minimum 10 caractères requis"),
});

export function useContactForm() {
  const turnstile = useState<string | null>("turnstile");

  return useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    schema: contactSchema,
    endpoint: "/api/contact",
    getCaptchaToken: () => turnstile.value,
  });
}
