
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-BVH5G22K.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-USG6YKOV.js"
    ],
    "route": "/projects"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-USG6YKOV.js"
    ],
    "route": "/projects/technology/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-USG6YKOV.js"
    ],
    "route": "/projects/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IH6UINHY.js"
    ],
    "route": "/technologies"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IH6UINHY.js"
    ],
    "route": "/technologies/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HIDPGKGV.js"
    ],
    "route": "/certificates"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-UHVIASZ6.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 0,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 586, hash: '844787ee06c28e55421e04843bcc05269f6a630371f34f0152dc3b829950f4b6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1099, hash: '4d1492e1374e352a907a7ab7fba85e2af49799e299734b8558214f7baebd1a08', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'certificates/index.html': {size: 15982, hash: '5e2c36243fb27b4b0e2e4134fa9669ebb02015bf40e77e5e383e95f8adcf2956', text: () => import('./assets-chunks/certificates_index_html.mjs').then(m => m.default)},
    'technologies/index.html': {size: 14004, hash: 'ef66e0652dc95906b0b064cdf736ac88fa6ffa0c2391511365c96567d2575d45', text: () => import('./assets-chunks/technologies_index_html.mjs').then(m => m.default)},
    'index.html': {size: 32983, hash: '904ce231d3f210ad4d942160fe81625293955553fd92443a6e077e6589cb6846', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 22283, hash: 'd24cfb9fe50265a051c290c11799655e4d87d461f4290161e3dfd634bb0b19ea', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
