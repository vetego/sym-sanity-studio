import {defineConfig} from "sanity";
import {deskTool} from "sanity/desk";
import {schemaTypes} from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Speak Your Mind Studio",

  projectId: "5qiye63x",
  dataset: "production",

  plugins: [deskTool()],
  schema: {types: schemaTypes},
});
