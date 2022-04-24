module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@views': './src/views',
          '@routes': './src/routes',
          '@themes': './src/themes',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
