import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["./src/index.jsx"],
  bundle: true,
  outfile: "dist/main.js",
  minify: true,
  target: "es2015",
  format: "esm",
  loader: { ".js": "jsx" },
});
