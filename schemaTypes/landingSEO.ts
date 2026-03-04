import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'landingSEO',
  title: 'Landing SEO',
  type: 'document',
  fields: [
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),

    defineField({ name: 'h1', title: 'H1', type: 'string' }),

    // H2/H3 + тексты блоков
    defineField({ name: 'h2Europe', title: 'H2: Europe', type: 'string' }),
    defineField({
      name: 'textEurope',
      title: 'Text: Europe',
      type: 'text',
      rows: 6,
    }),

    defineField({ name: 'h2Budapest', title: 'H2: Budapest', type: 'string' }),
    defineField({
      name: 'textBudapest',
      title: 'Text: Budapest',
      type: 'text',
      rows: 6,
    }),

    defineField({
      name: 'h2Privacy',
      title: 'H2: Anonymity & GDPR',
      type: 'string',
    }),
    defineField({
      name: 'textPrivacy',
      title: 'Text: Anonymity & GDPR',
      type: 'text',
      rows: 6,
    }),

    defineField({
      name: 'h2Relocation',
      title: 'H2: Relocation & Adaptation',
      type: 'string',
    }),
    defineField({
      name: 'textRelocation',
      title: 'Text: Relocation & Adaptation',
      type: 'text',
      rows: 6,
    }),

    defineField({ name: 'h2How', title: 'H2: How to book', type: 'string' }),
    defineField({
      name: 'textHow',
      title: 'Text: How to book',
      type: 'text',
      rows: 6,
    }),
  ],
})