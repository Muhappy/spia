module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ... any other plugins you might have
      ["transform-inline-environment-variables"],
      ["module:react-native-dotenv", {
        moduleName: "@env",
        path: ".env",
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      }],
    ],
  };
};
