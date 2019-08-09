//Layout container
import master from 'src/layouts/master'


//Middleware
import auth from '@imagina/quser/_router/middlewares/auth'
import access from '@imagina/quser/_router/middlewares/access'

export default {
  //Home Page
  index: {
    permission: 'isite.settings.manage',
    activated: true,
    path: '/site/index',
    name: 'app.site.index',
    layout: require('@imagina/qsite/_layouts/admin/index').default,
    containerLayout: master,
    title: 'qsite.sidebar.adminIndex',
    icon: 'fas fa-cog',
    middleware: [auth,access]
  },
}