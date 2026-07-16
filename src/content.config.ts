import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content'; 
import { z } from 'astro/zod'

const works = defineCollection({
    loader: glob({pattern: "src/content/**/*.md"}),
    schema: ({image}) => z.object({
        title: z.string().max(50),
        slug: z.string(),
        client: z.string().max(50),
        category: z.enum(["Mobile App Game", "Cryptography Project", "Database Project", "Mobile App To do List", "Capstone Project"]),
        services: z.string().max(65),
        year: z.string().max(4),
        featuredImage: image(),
        imageTwo: image().optional(),
        imageThree: image().optional(),
        imageFour: image().optional(),
        liveSite: z.url(),
        description: z.string().max(350),
        isFeatured: z.boolean(),
        isDraft: z.boolean()
    })
})

export const collections = { works };