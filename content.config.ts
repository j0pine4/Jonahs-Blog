import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        articles: defineCollection({
            type: 'page',
            source: 'Articles/*.md',
            schema: z.object({
                tags: z.array(z.string()),
                image: z.string().editor({input: 'media'}),
                date: z.date()
            })
        })
    }
})
