import {defineField, defineType} from "sanity";

export default defineType({
  name: "eventHost",
  title: "Host",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Role (optional)",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: {hotspot: true},
    }),
  ],
});
