import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { createLead, getAllLeads } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  leads: router({
    create: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          organization: z.string().optional(),
          interestArea: z.enum(["collaboration", "investment", "commercialization", "general"]),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        await createLead(input);
        
        // Send email notification to owner
        const interestAreaLabels = {
          collaboration: "Collaboration",
          investment: "Investment",
          commercialization: "Commercialization",
          general: "General Inquiry"
        };
        
        await notifyOwner({
          title: `New Lead: ${input.name} - ${interestAreaLabels[input.interestArea]}`,
          content: `
New lead submission from AirQuality.co website:

Name: ${input.name}
Email: ${input.email}
Organization: ${input.organization || "Not provided"}
Interest Area: ${interestAreaLabels[input.interestArea]}
Message: ${input.message || "No message provided"}

Submitted at: ${new Date().toLocaleString()}
          `.trim()
        });
        
        return { success: true };
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      // Only allow admin users to view leads
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await getAllLeads();
    }),
  }),
});

export type AppRouter = typeof appRouter;
