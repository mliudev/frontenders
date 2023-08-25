import { context } from "esbuild";

let ctx = await context({
  entryPoints: ["./src/index.ts"],
  outdir: "./dist",
  bundle: true,
  sourcemap: true,
  logLevel: "info",
});

await ctx.watch();

let { host, port } = await ctx.serve({
  servedir: "./dist",
});
