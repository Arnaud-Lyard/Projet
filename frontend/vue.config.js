const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Liquid Measurement Converter",
    themeColor: "#ffd100"
  },
})
