import { context } from "esbuild";

let ctx = await context({
  entryPoints: ["index.ts"],
  outdir: ".",
  bundle: true,
});

let { host, port } = await ctx.serve({
  servedir: ".",
});
