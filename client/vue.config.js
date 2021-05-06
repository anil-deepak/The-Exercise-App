module.exports = {
  lintOnSave: false,
  outputDir: "../dist",
  devServer: {
    proxy: "http://localhost:3000",
  },
};
