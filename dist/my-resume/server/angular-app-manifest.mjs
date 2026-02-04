
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-FDDC4ANV.js"
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
    'index.csr.html': {size: 586, hash: '93531409afdadac9cb44d7f65af820e99f2bf2cac9ab6dc56b84c7f566f6f017', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1099, hash: '2dd9012f263b418f6ca166d29597010ceb3bc8266f01b9d60b56dbce07d96cc9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33753, hash: '3556b7f43a83c49228f49653efdfe60686803c171552e0530a3a0a73461aede3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'technologies/index.html': {size: 14004, hash: 'dc40ac34dc2540f437bd21dfa9a7c90b837a709223e8eda59e8bf9233945e11b', text: () => import('./assets-chunks/technologies_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 22745, hash: '885a57b46deb4faa9933bd922031008e72329281263292c5c0c5040a7a1445bc', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'certificates/index.html': {size: 15982, hash: '1d34746da3320417e4b285738fe39728c4cee9f4e0e53c9b6dc93879995b7a54', text: () => import('./assets-chunks/certificates_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
