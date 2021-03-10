module.exports = {
  plugins: [
    require("rfs")({ baseValue: 22, factor: 30 }),
    require("autoprefixer"),
    require("postcss-combine-media-query"),
  ],
};
