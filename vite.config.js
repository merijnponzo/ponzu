import vue from "@vitejs/plugin-vue";

module.exports = {
  plugins: [vue()],
  build: {
    minify: true,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
};
