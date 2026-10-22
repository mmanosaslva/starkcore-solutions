import { z } from 'zod';

// Shared by the route handler (server validation) and the contact form (client validation),
// so both enforce the same limits (plan-seguridad.md §4.1).
export const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(120).optional().default(''),
  email: z.string().trim().max(254).email(),
  message: z.string().trim().min(1).max(5000),
  consent: z.literal(true),
  website: z.string().max(200).optional().default(''),
  turnstileToken: z.string().trim().min(1).max(2048),
});

export type ContactPayload = z.infer<typeof contactSchema>;
