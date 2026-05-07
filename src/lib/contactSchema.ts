import { z } from "zod";

export const SERVICE_VALUES = [
  "Hydroseed",
  "Landscape",
  "Soil prep",
  "Snow plowing",
  "Other",
] as const;

export type ServiceOption = (typeof SERVICE_VALUES)[number];

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be at most 100 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string(),
  service: z.enum(SERVICE_VALUES, { message: "Please select a service." }),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be at most 2000 characters."),
  /** Honeypot — must stay empty for legitimate submissions. */
  website: z.preprocess(
    (val) => (typeof val === "string" ? val : ""),
    z.string(),
  ),
});

export const contactFormSchemaWithPhone = contactFormSchema.superRefine((data, ctx) => {
  const digits = data.phone.replace(/\D/g, "");
  if (digits.length < 10) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Phone must include at least 10 digits.",
      path: ["phone"],
    });
  }
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export function phoneDigits(value: string): string {
  return value.replace(/\D/g, "");
}
