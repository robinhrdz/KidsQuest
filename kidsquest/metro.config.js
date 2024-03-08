const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Ensure that resolver and assetsExts exist before trying to push to assetsExts
if (defaultConfig.resolver && defaultConfig.resolver.assetsExts) {
  defaultConfig.resolver.assetsExts.push("cjs");
}

module.exports = defaultConfig;
