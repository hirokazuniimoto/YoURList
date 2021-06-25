//サービスワーカー登録 PWA
//キャッシュ名
var CACHE_NAME  = "PW-YoURList-190705-01";

//キャッシュするファイル名
var urlsToCache = [
    "index.html",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    "https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
];

//インストール時処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
        .open(CACHE_NAME)
        .then(function(cache){
            return cache.addAll(urlsToCache);
        })
    );
});

// フェッチ時のキャッシュロード処理（2019/07/18 更新）
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                if(response){
                    return response;
                }
                return fetch(event.request);
            })
    );
});


var CACHE_DYNAMIC_VERSION = 'dynamic-v1';

/*
self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetching something ...');
  event.respondWith(
    // キャッシュの存在チェック
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        } else {
          // キャッシュがなければリクエストを投げて、レスポンスをキャッシュに入れる
          return fetch(event.request)
            .then(function(res) {
              return caches.open(CACHE_DYNAMIC_VERSION)
                .then(function(cache) {
                  // 最後に res を返せるように、ここでは clone() する必要がある
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            })
            .catch(function() {
              // エラーが発生しても何もしない
            });
        }
      })
  );
});
*/
