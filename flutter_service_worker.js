'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "58d9bcec1630472d189332715d712cc6",
"assets/assets/faces/10C.png": "1963502749c024e1590789bab3632bc9",
"assets/assets/faces/10D.png": "39ef422e15761450c33f8cb3ee369ebe",
"assets/assets/faces/10H.png": "60ab387c8c1c50dd3a75255500218b94",
"assets/assets/faces/10S.png": "b208cd7f21ce87cf950936ab6fb3e717",
"assets/assets/faces/2C.png": "136dab439961d61f4b9c1f939e07828d",
"assets/assets/faces/2D.png": "1451de5d494406e395215276a2489a7c",
"assets/assets/faces/2H.png": "ebe434953cb5c82ec5c8e38b8e735489",
"assets/assets/faces/2S.png": "33c964ae685ff65233d2ac2c35b96072",
"assets/assets/faces/3C.png": "6ed5bf64f008d72e83c67f81468ab7c5",
"assets/assets/faces/3D.png": "690d5a477dfe9ed93261bd814c0a40d6",
"assets/assets/faces/3H.png": "7278d51dda50bd4b8c8cadb7fe349953",
"assets/assets/faces/3S.png": "9638bf9f29919b027765992a81f6d39b",
"assets/assets/faces/4C.png": "23c51e0b449e342f8b7f6c8fd57e2137",
"assets/assets/faces/4D.png": "89eaac32133444fe40876cb51f697f13",
"assets/assets/faces/4H.png": "6695f1d514765572dfe7e5dd0863dfce",
"assets/assets/faces/4S.png": "5156259e1f30dece1376dc5695a9a1d4",
"assets/assets/faces/5C.png": "3ac88eddd1ac03bfc901de76424b5aba",
"assets/assets/faces/5D.png": "24fd440cbb52affc5242a507c9dec4d1",
"assets/assets/faces/5H.png": "5457f189cabc0476511c7ed1421b419d",
"assets/assets/faces/5S.png": "5ab3d8627d0c4d17c86c73d90817900b",
"assets/assets/faces/6C.png": "5c96f40f637a6b2ed34d5e837d81ef7b",
"assets/assets/faces/6D.png": "ff1c62992cf49b6164401d1d9f77a20c",
"assets/assets/faces/6H.png": "84564e31bf0a0e8bcd5fdd3d4aa12cc3",
"assets/assets/faces/6S.png": "c99b0f04000841e5f3db53d64b3f7034",
"assets/assets/faces/7C.png": "4808cc416c976dbd5c3cb629a0f102a5",
"assets/assets/faces/7D.png": "58d872f063752027e59e15af4d090123",
"assets/assets/faces/7H.png": "c8475b530ea9f0970ff829c97f3e7abf",
"assets/assets/faces/7S.png": "82d62864ff67ff7b5e20150316d26872",
"assets/assets/faces/8C.png": "a46a54d93ff6e543497d205db97fd460",
"assets/assets/faces/8D.png": "fcafeaf2d610109aa1916208080ab711",
"assets/assets/faces/8H.png": "1e9e59b0d6f684908f3ad7d2fe942a42",
"assets/assets/faces/8S.png": "497eed1efa7e554de5b62bc9eb2b5ae6",
"assets/assets/faces/9C.png": "4f8d0d8f2ebaeacf99e7134221d6da49",
"assets/assets/faces/9D.png": "1d495bb1ebf632dca66a538b61bae19a",
"assets/assets/faces/9H.png": "33ab7891b4259ea8d8823a352ef38cdf",
"assets/assets/faces/9S.png": "50caac183ef66afe6cdda1d2e3daafda",
"assets/assets/faces/AC.png": "17ca9f77b395a41c6d45cbff350573bb",
"assets/assets/faces/AD.png": "f37d608fb18056bc4f83737d633c5cf5",
"assets/assets/faces/AH.png": "a762540d55018bcf43ffba8b6343c9c9",
"assets/assets/faces/AS.png": "e6a6d2f8a350079dcad97e814d3559e7",
"assets/assets/faces/backside.png": "3df70b1ed908b8d72ee7a31f35f6e465",
"assets/assets/faces/JC.png": "1595a3ea21f452c290cf26af7ae53ede",
"assets/assets/faces/JD.png": "d5682eb454510b9cdf54beb9c5a0e5f5",
"assets/assets/faces/JH.png": "fdf4ffc434ac567c6b77905cb1b11c8a",
"assets/assets/faces/JS.png": "89d2c97e62fcaec36c80dbdd725f216f",
"assets/assets/faces/KC.png": "aa73cfd0e548d87f4af4a18a8d2c3c8f",
"assets/assets/faces/KD.png": "6b5b30c00309e3cfae486f543bc1809a",
"assets/assets/faces/KH.png": "3b48ae8207b07a1f9477d7e6135ca211",
"assets/assets/faces/KS.png": "e8d1a4cfe9d8dca64733c050e65e9dfd",
"assets/assets/faces/QC.png": "d6296277472d7e9594d0ebee0cb82cdc",
"assets/assets/faces/QD.png": "6940967da8669e3410fefd3a8a33aad9",
"assets/assets/faces/QH.png": "63afa62b47efa84b8b87d3e39ef42bc1",
"assets/assets/faces/QS.png": "9026849bcbad6fd92f7c3cb8f70e3cd4",
"assets/assets/faces/tempSlot.png": "fdd813822c9468f1b2c02fa24f79ef09",
"assets/assets/icon/icon.png": "7b40f7fca4854e49bb6bc35dcb33ecaf",
"assets/assets/images/backgroundloop.gif": "92b6b536f19122bf27a6207d4b004eaa",
"assets/assets/images/team10_logo.png": "3fb5f4d2daae0cf7068885a50ce9ce25",
"assets/assets/ui/about.png": "dcec7601df0e1cba2cbb4173d01d32e1",
"assets/assets/ui/equal.png": "00e2de0e6c542b0ca93b73f2b2901dcd",
"assets/assets/ui/help.png": "48781f135b3f85ed5d49e21dd104f3d2",
"assets/assets/ui/higher.png": "8ba377283c34341d28cf81e0c2ddfd76",
"assets/assets/ui/home.png": "873283862944f22db17508b9307770a0",
"assets/assets/ui/logo.png": "6f69f10edec486a62e3a406c3b532678",
"assets/assets/ui/lower.png": "0ae5a0cd79d08c88d3f55077b3842e3f",
"assets/assets/ui/play.png": "816d99285226162dec07b90f55408f3b",
"assets/assets/ui/quit.png": "4ef3bde859803abddc437a6b1fe34d35",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "7f2db10541e701ca31d8178821251b83",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1d6a2bec02ee871bdfed962af3b981e5",
"/": "1d6a2bec02ee871bdfed962af3b981e5",
"main.dart.js": "51458831d71027219376375043ab0fb0",
"manifest.json": "a723b23448b54be9ef394c00fa51eafe",
"version.json": "8904aa5b4cf20184611a8e12ed5c0457"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
