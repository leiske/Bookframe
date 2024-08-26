import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ['./index.ts', './src/helpers/helpers.js'],
  naming: '[name].[ext]',
  outdir: './dist',
  minify: true,
  sourcemap: "linked",
  plugins: [dts()]
})
