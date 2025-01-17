//Get package information
import pjson from '@imagina/qsite/package.json'
//Parse domain to know from where is loading
let tagsToParceHost = ['http://', 'https://', ':8080', ':3000', 'www.']
let host = window.location.href
tagsToParceHost.forEach(tagToReplace => host = host.replace(tagToReplace, ''))
let loadFrom = host.split('/')[1]

export default {
  version: pjson.version,//Package version
  mode: (loadFrom && (['iadmin', 'ipanel'].indexOf(loadFrom) != -1)) ? loadFrom : 'iadmin',//Define load mode
  validateModeAccess: true,//Define if validate app mode access
  forceRoleAndDepartment: false,//Force to select role and department
  //UI Languages
  languages: {
    default: 'es',
    availables: ['en-us', 'es']
  },
  //Modules
  modules: [
    'qcrud',
    'quser',
    'qnotification',
    'qcommerce',
    'qblog',
    'qform',
    'qplan',
    'qad',
    'qdocument',
    'qplace',
    'qcheckin',
    'qlocations',
    'qappointment',
    'qbooking',
    'qevent',
    'qpage',
    'qredirect',
    'qmenu',
    'qmedia',
    'qslider',
    'qbanner',
    'qtranslation',
    'qrequestable',
    'qsite',
    'qchat',
    'qcredit'
  ],
  //Cache
  saveCache: {
    refresh: [
      'sessionData',
      'auth.department.id',
      'auth.role.id',
      'impersonatorData',
      'app.state.extra',
      'auth.organization.id'
    ],
    logout: [
      'offlineRequests',
      'site.default.locale',
    ]
  },
  //Reset Store
  resetStores: [
    'quserAuth/RESET'
  ],
  //Footer movile main action
  mobilMainAction: {
    icon: 'fas fa-home',
    color: 'primary',
    route: 'app.home'
  }
}
