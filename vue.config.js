module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "V币账户",
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 32,
            propList: ["*"],
            exclude: "./node_modules/*",
          }),
        ],
      },
    },
  },
};
