import {defineType, defineField} from 'sanity'

const localizedString = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({name: 'hu', type: 'string'}),
      defineField({name: 'en', type: 'string'}),
      defineField({name: 'ru', type: 'string'}),
      defineField({name: 'uk', type: 'string'}),
    ],
  })

const localizedText = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({name: 'hu', type: 'text', rows: 3}),
      defineField({name: 'en', type: 'text', rows: 3}),
      defineField({name: 'ru', type: 'text', rows: 3}),
      defineField({name: 'uk', type: 'text', rows: 3}),
    ],
  })

const localizedPT = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({name: 'hu', type: 'array', of: [{type: 'block'}]}),
      defineField({name: 'en', type: 'array', of: [{type: 'block'}]}),
      defineField({name: 'ru', type: 'array', of: [{type: 'block'}]}),
      defineField({name: 'uk', type: 'array', of: [{type: 'block'}]}),
    ],
  })

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'FAQ', value: 'faq'},
          {title: 'For therapists', value: 'for-therapists'},
          {title: 'Blog index', value: 'blog'},
          {title: 'Events index', value: 'events'},
          {title: 'Custom (new pages)', value: 'custom'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // Для custom страниц (и только для них) — slug
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'pageType'},
      hidden: ({document}) => document?.pageType !== 'custom',
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        localizedString('title', 'SEO Title'),
        localizedText('description', 'SEO Description'),
        defineField({name: 'ogImage', title: 'OG Image', type: 'image', options: {hotspot: true}}),
        defineField({name: 'noIndex', title: 'Noindex', type: 'boolean', initialValue: false}),
      ],
    }),

    // Контент (универсально)
    localizedString('h1', 'H1'),
    localizedPT('content', 'Content (Portable Text)'),

    // Специально под Home (строго как в ТЗ) — можно хранить тут же
    localizedString('h2Europe', 'H2: Europe'),
    localizedPT('textEurope', 'Text Europe'),
    localizedString('h2Budapest', 'H2: Budapest'),
    localizedPT('textBudapest', 'Text Budapest'),
    localizedString('h2Gdpr', 'H2: Anonymity & GDPR'),
    localizedPT('textGdpr', 'Text Anonymity & GDPR'),
    localizedString('h2Relocation', 'H2: Relocation'),
    localizedPT('textRelocation', 'Text Relocation'),
    localizedString('h2HowToBook', 'H2: How to book'),
    localizedPT('textHowToBook', 'Text How to book'),
  ],
})