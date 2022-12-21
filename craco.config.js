const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src", "components"),
      "@sass": path.resolve(__dirname, "src", "sass"),
    },
  },
};
