module.exports = {

   publicPath: process.env.NODE_ENV === 'production'
    ? '/Divers/Timer/'
    : '/',
  pwa: {
    themeColor: '#96b0ca',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // ...other Workbox options...
    },
    manifestOptions : {
      display:'standalone'
    }
  }
}
