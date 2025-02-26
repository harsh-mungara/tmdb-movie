module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@assets': './assets',
          '@src': './src',
        },
      },
    ],
    'jest-hoist',
    'react-native-reanimated/plugin',
  ],
};
