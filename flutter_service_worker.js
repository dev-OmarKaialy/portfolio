'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/COMMIT_EDITMSG": "7b5088027e9209563fb557eea0e73354",
".git/logs/HEAD": "7106371d17a5002a573bce270bbcc107",
".git/logs/refs/remotes/origin/main": "39ea606f4da6cb673288c7af27ad608c",
".git/logs/refs/heads/main": "4d9486acada6795a1e315ac303c26ecc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/FETCH_HEAD": "1f0331eb548967c28f0b383fab21f8d1",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/5d/860512c00b8bf7322b4903b8e35e788c0c2613": "74e59d4f27646679263abf6b25fc6b44",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/30/87dbfe1e0ff815163310e1182274eda2f3b583": "3161b67e3cc70b366e06ae6f85ac5db5",
".git/objects/6e/964325153bf22977d4c7f17098c6366225049e": "e7da6b4cf5d05b2087126d3479385229",
".git/objects/e7/63711648a40abfb1abcfe973c80c752d8639a0": "6444b60d23c27f7314d755956786f000",
".git/objects/2d/cafe5c134444813db72010b25b64918605cd1e": "dd9844f2fb8de3d6a542a04e7aa3a68b",
".git/objects/8f/c2236921f0fcaf0d09e8b4cdb243cd07fd5f59": "62533a83072b8929d7cf261dce90de62",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/86/0b08e20efa2be3b6848b108438a370201270c3": "64297418bb4276c4f4c536adb2994d3d",
".git/objects/4e/d4cab56531f0c44a785a3e57389e2cfe3d1a18": "182e51b31877885d18516dc534071a1d",
".git/objects/3d/051163eb235ba6b94408583884176c837b3f13": "7c88ba2e47a631efe81a29ca55ca0704",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/15503a2ed97af70983905addc9c9e8f5f6c16b": "7a6ba68c0e9d495131323c9daa4bd864",
".git/objects/ea/ba0c5e088000b49012647832aaabe5da3afba3": "ad22838b8bc6a7175af573d164ec20be",
".git/objects/e1/89a3fe47345da4f99c2e5d902be8681b517715": "12856de2a7e46f99dd80fb567cb14749",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/11/d3cd590e51397c72ae9d5808751b0ed2b9b469": "603b23d799165ad00344fbe1dd788c91",
".git/objects/93/6467557a55e6f1313ac8c2497d0252d418a279": "817c61057a6252e124202ab01afaa881",
".git/objects/56/007032b58dc67c15aa686b2f5fd0c44b443d2b": "eb2af59386d2cb9e99304c6fb5c6e5dd",
".git/objects/85/72d1aff829bc1ea6fa9fca64647fa8230c47e2": "54c9bbd776b7499f5acae15dc042ee29",
".git/objects/a9/7423577c112adc7bb968344df6c4afd4f32a24": "2acbc6bb31740c90c4fac0e489eb3dd4",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/ec/05cd73b9e985539e942788fc6fed12bebab5ee": "a9de0f55bcd3299d956ab3a1edc892ff",
".git/objects/65/c350eedff6c4903e7d6321a40e200470630849": "23e06aa7460664f6a68aa8f5710c9d6a",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/dd/beb9d599f08473ecd6cfbe2a948d00dc9a3b4d": "2dd5dd8fce8d5402b7a7bd358707d900",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/de/9f51384ddbc9b54639da91451f61ca4423b10d": "b47fc7cd6d2ee519779cd0870d1849dc",
".git/objects/44/8b04733b2647076b9cf308b00bb4ad67a76a78": "87b4fba8fafe49c1e84a79e7d9abc235",
".git/objects/44/e44b3d4c369e111598db76e7b5f2cef81ca75d": "7538bf2c3b6628fbae99ee91f7abfcd2",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/03/ad3e8f6ef0c4992d83732c6f23c6b9224f1fb7": "466016b127ef65aa03a79a1f82a201ba",
".git/objects/9d/27fe307efd5a6eb8d8e801583d93367e3a1508": "5e86e36b84734629aeb6868fe6369f1a",
".git/objects/91/e727b0d167a11d23f410b0358e2010962402d6": "3c268a2f1e7b3feecaa649665cc138f4",
".git/objects/7f/12a9d782b68a0fddf62fd2478fc09d4a7c1057": "0cda409cbe35295e2a04870ec505021e",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/d1/2c5d88df0da62f63077cdbdce336e6186dc5f2": "9edcb6d9b428e63c3f3b61da6c19434b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/cf598d6590d8a0d101910667a21d6c055ee473": "747ae1f496dc3b2f2d6801242a2c8417",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/c1/0b0b434a27ad195a862dd170ee6ccddf2118c4": "d3b80ca069356419d76820e0ec53b1e0",
".git/objects/ab/0aa35702bc6aa0d1cb399caaa82784cefdde56": "f46e8e4bbfa45ca20981b3c50f39b9ef",
".git/objects/50/e4b57585ee419db99874bd1fe35296c2904739": "aaf5d6010b716adbab2951ef89167b7d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/0c4eaaadadea4802a4ff0ed2a8cb1d7a87c5d6": "d89881d796c2fd573ca07031768b620f",
".git/objects/b5/bbbb139efa9303dde5e80308f1a30ba0ea2439": "de423fa05d7b825c0042e40199212908",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/c7/2f72375111556822bd31dc8e2b2eb625fafb53": "cde97f367f59503a2d800b264d6b3035",
".git/objects/78/93bdfa3abb6bd321dae02517dd237335206b4c": "f5b3ca571c9aa00da6dfb729cffc7e1b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/main": "69693322deb1b7c35aacc98e10c3036c",
".git/refs/heads/main": "14ff3ff2d1632d88f0bb446ca0c41000",
".git/index": "253ede5d88a26d8e48123f8469e4e5c7",
".git/config": "452f96435d654e2b2ac5321b772c188b",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "e151d7a6f42f17e9ea335c91d07b3739",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "7123fc90bde7f744199c6f689d7924f6",
"assets/assets/images/loading.gif": "b688ed090d7c4f62ea24bd4bb88d5b3c",
"assets/NOTICES": "4309eea779b6b18793cbac7dbf6cb292",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "1a5cd219969f67a595124c1bbb0bd5f6",
"assets/fonts/MaterialIcons-Regular.otf": "e60b36306335fbdafd2777029db31435",
"assets/AssetManifest.json": "8e87f069f367106c1648afc19e81b38e",
"assets/AssetManifest.bin.json": "e6fbcab0e71571fd0b417a8e0a6eacd0",
"assets/AssetManifest.bin": "7e43666de1942dbca5a5369b5691c551",
"manifest.json": "4d2a074e955647542596586cbde41715",
"flutter_bootstrap.js": "d36a8226ae013a75d98cdbb983548442",
"index.html": "40686f3047037b931632506823599c70",
"/": "40686f3047037b931632506823599c70",
"main.dart.js": "985dd84b303873776810320da9096b69",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
