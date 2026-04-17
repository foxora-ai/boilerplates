import { z } from "zod";
import { publicProcedure, router } from "../lib/trpc";

export const helloRouter = router({
  get: publicProcedure.query(() => {
    return { message: "Hello from tRPC!" };
  }),

  greet: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(({ input }) => {
      return { message: `Hello, ${input.name}!` };
    }),

  list: publicProcedure
    .input(z.object({ limit: z.number().min(1).max(100).default(10) }))
    .query(({ input }) => {
      return Array.from({ length: input.limit }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
      }));
    }),
});
