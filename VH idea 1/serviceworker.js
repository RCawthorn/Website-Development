
// We declare the name of our cache 'staticVanPWA' and the assets to store in the cache. And to perform that action, we need to attach a listener to self.

// self is the service worker itself. It enables us to listen to life cycle events and do something in return.

// The service worker has several life cycles, and one of them is the install event. It runs when a service worker is installed. It's triggered as soon as the worker executes, and it's only called once per service worker.

// When the install event is fired, we run the callback which gives us access to the event object.

// Caching something on the browser can take some time to finish because it's asynchronous.

// So to handle it, we need to use waitUntil() which, as you might guess, waits for the action to finish.

// Once the cache API is ready, we can run the open() method and create our cache by passing its name as an argument to caches.open(staticDevCoffee).

// Then it returns a promise, which helps us store our assets in the cache with cache.addAll(assets).

const staticVanPWA = "van-heroes-site-v1"
const assets = [
  "/",
  "/PWA.html",
  "/style.css",
  "/js/app.js",
"https://www.nationwidevehiclecontracts.co.uk/m/2/ford-transit-connect-2018-limited-l2.jpg" ,
"https://www.turner-rental.co.uk/wp-content/uploads/2018/08/Ford-Transit-Custom-Crew-Van.jpg" ,
"https://advanced-driving.co.uk/wp-content/uploads/2016/03/transit-van-429x300.jpg" ,
"https://www.van-discount.co.uk/wp-content/uploads/2019/12/ford-transit-minibus.png.webp" ,
"https://www.kendallcars.com/wp-content/uploads/2017/05/xford-transit-luton-XL.jpg.pagespeed.ic.c_2y61xBsX.webp" ,
"data:image/jpeg;base64,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" ,

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticVanPWA).then(cache => {
      cache.addAll(assets)
    })
  )
})


// Here, we use the fetch event to, well, get back our data. The callback gives us access to fetchEvent. Then we attach respondWith() to prevent the browser's default response.
// Instead it returns a promise because the fetch action can take time to finish.

// And once the cache ready, we apply the caches.match(fetchEvent.request). It will check if something in the cache matches fetchEvent.request.

// Then, it returns a promise. And finally, we can return the result if it exists or the initial fetch if not.

// Now the assets can be cached and fetched by the service worker which increases the load time of our images and also makes the site accessable when its offline.




self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

//   Here, we start by checking if the serviceWorker is supported by the current browser (as it's still not supported by all browsers).
//   Then, we listen to the page load event to register our service worker by passing the name
//    of our file serviceWorker.js to navigator.serviceWorker.register() as a parameter to register our worker.

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
