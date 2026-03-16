import {defineField, defineType} from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    // title: text()
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),

    // slug: text() (в Keystatic это обычный текст, НЕ slug type)
    defineField({
      name: "slug",
      title: "Slug (for URL)",
      type: "string",
      validation: (r) =>
        r
          .required()
          .min(1)
          .custom((v) => {
            if (typeof v !== "string") return "Slug must be a string";
            // мягкая валидация под URL-слаг: латиница/цифры/дефисы
            if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v)) {
              return "Use lowercase latin letters, numbers and hyphens (e.g. my-event-1)";
            }
            return true;
          }),
    }),

    // audience: select()
    defineField({
      name: "audience",
      title: "Audience",
      type: "string",
      initialValue: "clients",
      options: {
        layout: "radio",
        list: [
          {title: "Clients", value: "clients"},
          {title: "Professionals", value: "professionals"},
        ],
      },
      validation: (r) => r.required(),
    }),

    // startAt: datetime()
    defineField({
      name: "startAt",
      title: "Start (Budapest time)",
      type: "datetime",
      options: {dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm", timeStep: 15},
      validation: (r) => r.required(),
    }),

    // endAt: datetime(required:false)
    defineField({
      name: "endAt",
      title: "End (optional)",
      type: "datetime",
      options: {dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm", timeStep: 15},
    }),

    // secondaryTimeText: text()
    defineField({
      name: "secondaryTimeText",
      title: "Secondary time (optional)",
      type: "string",
    }),

    // mode: select()
    defineField({
      name: "mode",
      title: "Mode",
      type: "string",
      initialValue: "online",
      options: {
        layout: "radio",
        list: [
          {title: "Online", value: "online"},
          {title: "Offline", value: "offline"},
        ],
      },
      validation: (r) => r.required(),
    }),

    // locationText: text(multiline:true)
    defineField({
      name: "locationText",
      title: "Location text (optional)",
      type: "text",
      rows: 3,
    }),

    // priceText: text()
    defineField({
      name: "priceText",
      title: "Price (text)",
      type: "string",
      validation: (r) => r.required(),
    }),

    // registrationUrl: url()
    defineField({
      name: "registrationUrl",
      title: "Registration URL",
      type: "url",
    }),

    // shortDescription: text(1 line)
    defineField({
      name: "shortDescription",
      title: "Short description (1 line)",
      type: "string",
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

    // details: Keystatic text(multiline:true) -> Sanity rich text (Portable Text)
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [{type: "block"}],
    }),

    // hosts: array of objects, includes photo
    defineField({
  name: "hosts",
  title: "Hosts",
  type: "array",
  of: [{type: "eventHost"}],
}),


    // status: select()
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "scheduled",
      options: {
        layout: "radio",
        list: [
          {title: "Scheduled", value: "scheduled"},
          {title: "Canceled", value: "canceled"},
        ],
      },
      validation: (r) => r.required(),
    }),

    // statusNote: text(multiline:true)
    defineField({
      name: "statusNote",
      title: "Status note (optional)",
      type: "text",
      rows: 3,
    }),

    // language: text()
    defineField({
      name: "language",
      title: "Language (optional)",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "slug",
      media: "hosts.0.photo",
    },
  },
});
