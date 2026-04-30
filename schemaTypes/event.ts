import {defineField, defineType} from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),

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
            if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v)) {
              return "Use lowercase latin letters, numbers and hyphens (e.g. my-event-1)";
            }
            return true;
          }),
    }),

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

    defineField({
      name: "startAt",
      title: "Start (Budapest time)",
      type: "datetime",
      options: {dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm", timeStep: 15},
      validation: (r) => r.required(),
    }),

    defineField({
      name: "endAt",
      title: "End (optional)",
      type: "datetime",
      options: {dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm", timeStep: 15},
    }),

    defineField({
      name: "secondaryTimeText",
      title: "Secondary time (optional)",
      type: "string",
    }),

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

    defineField({
      name: "locationText",
      title: "Location text (optional)",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "priceText",
      title: "Price (text)",
      type: "string",
      validation: (r) => r.required(),
    }),

    defineField({
      name: "registrationUrl",
      title: "Registration URL",
      type: "url",
    }),

    defineField({
      name: "shortDescription",
      title: "Short description (1 line)",
      type: "string",
    }),

    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [{type: "block"}],
    }),

    defineField({
      name: "hosts",
      title: "Hosts",
      type: "array",
      of: [{type: "eventHost"}],
    }),

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

    defineField({
      name: "statusNote",
      title: "Status note (optional)",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "language",
      title: "Language",
      type: "string",
      initialValue: "ru",
      options: {
        layout: "radio",
        list: [
          {title: "Русский", value: "ru"},
          {title: "English", value: "en"},
          {title: "Magyar", value: "hu"},
          {title: "Українська", value: "uk"},
        ],
      },
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
