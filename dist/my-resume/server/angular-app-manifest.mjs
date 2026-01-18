
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-2U5PESFV.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7HHM5GHN.js"
    ],
    "route": "/projects"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7HHM5GHN.js"
    ],
    "route": "/projects/technology/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7HHM5GHN.js"
    ],
    "route": "/projects/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CMF2KRPL.js"
    ],
    "route": "/technologies"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CMF2KRPL.js"
    ],
    "route": "/technologies/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PEW6QRIQ.js"
    ],
    "route": "/certificates"
  },
  {
    "renderMode": 0,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 586, hash: '8fd9f887b3466995b853c37c8fa9ba08fba67e75cd5bf5d584ea3d2a04ebe447', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1099, hash: '47093739ef0f57a255dc41e88c2b8b6f26e440579f4690eb2bf155944413a189', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'technologies/index.html': {size: 2007, hash: 'c5e4845fb8aa516e456a228acb57b959691a5dca60f3a43554dc2bb35f15be2d', text: () => import('./assets-chunks/technologies_index_html.mjs').then(m => m.default)},
    'index.html': {size: 1968, hash: 'ff7f431dca83e9b3961e54fef56335ce09274f920f51bd823fe3bf4dd2605f70', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 7909, hash: '1dc90eaab4b13a92b8ba26fa2b82e68579f49b376c5efa078d97b86b50d4b485', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'certificates/index.html': {size: 3985, hash: 'd4a31f92c08c0b19e01d0911b2273eecd4fcb33c975cf38739a38ec86b34e8c5', text: () => import('./assets-chunks/certificates_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
