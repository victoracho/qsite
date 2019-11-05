import appConfig from 'src/config/app'

//=== Auto load api routes from modules available in: src/config/app.js "modules"
let pages = {}

if (appConfig && appConfig.modules) {
  const modules = appConfig.modules

  // Get each config page from package
  modules.forEach(name => {
    try {
      //Get pages according to app config in: src/config/app.js "isBackend"
      let page = (appConfig.isBackend) ?
        require(`@imagina/${name}/_config/backendPages`).default :
        require(`@imagina/${name}/_config/frontendPages`).default

      pages[name] = page
    } catch (e) {
    }
  })
}

//=== Set default pages of APP
pages.app = {
  home: {//Page home
    permission: null,
    activated: true,
    path: '/home',
    name: 'app.home',
    layout: () => appConfig.isBackend ?
      import('@imagina/qsite/_layouts/master.vue') : import('src/layouts/master.vue'),
    page: () => appConfig.isBackend ?
      import('@imagina/qsite/_pages/master/index.vue') : import('src/pages/index.vue'),
    title: 'sidebar.pageHome',
    icon: 'fas fa-home',
    authenticated: appConfig.isBackend
  }
}

//Add pages "not found" only when it isn't SSR mode. Always leave this as last one
if (process.env.MODE !== 'ssr') {
  pages.app.notFound = {
    permission: null,
    activated: true,
    path: '*',
    name: 'app.not.found',
    layout: () => import('@imagina/qsite/_layouts/blank.vue'),
    page: () => import('@imagina/qsite/_pages/master/404'),
    title: 'sidebar.pageNotFound',
    icon: 'fas fa-chart-bar'
  }
}

export default pages
