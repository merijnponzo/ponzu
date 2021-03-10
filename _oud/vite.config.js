const path = require("path");

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, "main.js"),
      name: "Ponzu",
    },
    minify: "esbuild",
    assetsInlineLimit: 4096,
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
};
