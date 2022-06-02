module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@views': './src/views',
          '@routes': './src/routes',
          '@themes': './src/themes',
          '@assets': './src/assets',
          '@api': './src/api',
          '@mocks': './src/mocks'
        }
      }
    ]
  ]
};
