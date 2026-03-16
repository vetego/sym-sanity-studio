import {defineType, defineField} from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {source: "title"},
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          {title: "Hungarian", value: "hu"},
          {title: "English", value: "en"},
          {title: "Russian", value: "ru"},
          {title: "Ukrainian", value: "uk"},
        ],
      },
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({name: "title", type: "string"}),
        defineField({name: "description", type: "text", rows: 3}),
        defineField({name: "ogImage", type: "image", options: {hotspot: true}}),
        defineField({name: "noIndex", type: "boolean", initialValue: false}),
      ],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{type: "block"}],
    }),
  ],
});
