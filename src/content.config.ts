// src/content.config.ts
import { defineCollection, reference } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

export const collections = {
  // Kundenstimmen
  testimonials: defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: './src/content/testimonials'
    }),
    schema: ({ image }) => z.object({
      id: z.string().describe('Einzigartiger Identifier (z.B. david-hamann)'),
      name: z.string().describe('Name des Kunden'),
      company: z.string().describe('Firma des Kunden'),
      quote: z.string().describe('Kundenstimme'),
      image: image().optional().describe('Optionales Portraitbild')
    })
  }),

  // Kundenprojekte
  referenzen: defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: './src/content/referenzen'
    }),
    schema: ({ image }) => z.object({
      id: z.string().describe('Einzigartiger Identifier (z.B. recherche-dienste)'),
      title: z.string().describe('Projekt-Titel'),
      client: z.string().describe('Kundenname'),
      service: z.string().describe('Service-Typ'),
      description: z.string().describe('Kurze Beschreibung'),
      thumbnail: image().optional().describe('Screenshot oder Projektbild'),
      thumbnailAlt: z.string().optional().describe('Alt-Text für Thumbnail'),
      link: z.string().optional().describe('Link zu Detailseite'),
      testimonialId: z.string().optional().describe('Verknüpftes Testimonial (id)')
    })
  })
}
