module.exports = {
   publicPath: '/Divers/Timer',
  pwa: {
    themeColor: '#4DBA87',
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
