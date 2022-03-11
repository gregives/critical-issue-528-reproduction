const criticalCss = require("eleventy-critical-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["html", "css"]);
  eleventyConfig.addPlugin(criticalCss);

  return {
    dir: {
      input: "src",
      output: "out",
    },
  };
};
