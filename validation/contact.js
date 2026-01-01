import { z } from "zod/v4";

export const contactSchema = z.strictObject({
    name: z
        .string({
            error: (issue) =>
                issue.input === undefined
                    ? "Name is required"
                    : "Name must be a string",
        })
        .trim()
        .min(1, "Please enter your name"),

    email: z
        .string({
            error: (issue) =>
                issue.input === undefined
                    ? "Email is required"
                    : "Email must be a string",
        })
        .trim()
        .refine((val) => val === "" || z.email().safeParse(val).success, {
            message: "Invalid email format",
        })
        .optional(),

    phone: z
        .string({
            error: (issue) =>
                issue.input === undefined
                    ? "Phone no. is required"
                    : "Phone no. must be a string",
        })
        .trim()
        .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number."),

    subject: z
        .string({
            error: (issue) =>
                issue.input === undefined
                    ? "Subject is required"
                    : "Subject must be a string",
        })
        .trim()
        .min(1, "Please enter the subject"),

    message: z
        .string({
            error: (issue) =>
                issue.input === undefined
                    ? "Message is required"
                    : "Message must be a string",
        })
        .trim()
        .min(1, "Please enter your message"),
});
