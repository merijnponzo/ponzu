module.exports = {
  plugins: [
    require("rfs")({ baseValue: 16 }),
    require("autoprefixer"),
    require("postcss-combine-media-query"),
  ],
};
