module.exports = {
  i18n: {
    defaultLocale: 'zh',
    localeDetection: false,
    locales: [
      'bn',
      'de',
      'en',
      'es',
      'fr',
      'he',
      'id',
      'ja',
      'ko',
      'pt',
      'ru',
      'sv',
      'te',
      'vi',
      'zh',
    ],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/public/locales',
};
