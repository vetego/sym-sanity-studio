import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'legalPage',
  title: 'Legal Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'legalType',
      title: 'Legal Type',
      type: 'string',
      options: {
        list: [
          {title: 'Terms', value: 'terms-of-service'},
          {title: 'Cookie', value: 'cookie-policy'},
          {title: 'Privacy', value: 'privacy-policy'},
          {title: 'Personal Data', value: 'personal-data-processing'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'object',
          fields: [
            defineField({name: 'hu', type: 'string'}),
            defineField({name: 'en', type: 'string'}),
            defineField({name: 'ru', type: 'string'}),
            defineField({name: 'uk', type: 'string'}),
          ],
        }),
        defineField({
          name: 'description',
          type: 'object',
          fields: [
            defineField({name: 'hu', type: 'text', rows: 3}),
            defineField({name: 'en', type: 'text', rows: 3}),
            defineField({name: 'ru', type: 'text', rows: 3}),
            defineField({name: 'uk', type: 'text', rows: 3}),
          ],
        }),
        defineField({name: 'ogImage', type: 'image', options: {hotspot: true}}),
        defineField({name: 'noIndex', type: 'boolean', initialValue: false}),
      ],
    }),

    defineField({
      name: 'content',
      title: 'Content (Portable Text)',
      type: 'object',
      fields: [
        defineField({name: 'hu', type: 'array', of: [{type: 'block'}]}),
        defineField({name: 'en', type: 'array', of: [{type: 'block'}]}),
        defineField({name: 'ru', type: 'array', of: [{type: 'block'}]}),
        defineField({name: 'uk', type: 'array', of: [{type: 'block'}]}),
      ],
    }),
  ],
})