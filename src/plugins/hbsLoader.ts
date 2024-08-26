import { plugin } from "bun";

await plugin({
  name: "hbsLoader",
  async setup(build) {
    build.onLoad({ filter: /\.hbs$/ }, async (args) => {
      const contents = await Bun.file(args.path).text();
      return {
        contents: `export default ${JSON.stringify(contents)}`,
        loader: "js",
      };
    });
  },
});
