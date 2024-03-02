import * as z from "zod";

export const schema = z.object({
    title: z.string().nonempty("the title is required"),
    image: z.string().url("must be an url"),
    category: z.string().nonempty("category is required"),
    description: z.string().nonempty("description is required"),
  })