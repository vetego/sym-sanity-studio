import {defineType, defineField, defineArrayMember} from "sanity";

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
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short public summary used on blog cards and as fallback meta description.",
      validation: Rule => Rule.required().max(170),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {type: "block"},
        {
          type: "image",
          title: "Image",
          options: {hotspot: true},
          fields: [
            defineField({
              name: "alt",
              title: "Alt text",
              type: "string",
              description: "Short description for screen readers and search engines. Not meant to be shown as a caption.",
            }),
          ],
        },
        defineArrayMember({
          name: "ctaButton",
          title: "CTA button",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Button text",
              type: "string",
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "Link",
              type: "url",
              description: "Full web address, e.g. https://app.speakyourmind.help/ru/choose-psychologist",
              validation: Rule => Rule.required().uri({scheme: ["http", "https"]}),
            }),
          ],
          preview: {
            select: {title: "label", subtitle: "url"},
            prepare: ({title, subtitle}) => ({title: title || "CTA button", subtitle}),
          },
        }),
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
      description: "Optional. Defaults to the post title.",
      validation: Rule => Rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
      description: "Optional. Defaults to excerpt.",
      validation: Rule => Rule.max(170),
    }),
    defineField({
      name: "ogImage",
      title: "Social sharing image",
      type: "image",
      options: {hotspot: true},
    }),
  ],
});