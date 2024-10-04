/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  proseWrap: "always",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
