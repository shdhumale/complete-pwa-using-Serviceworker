# complete-pwa-using-workbox-sync-notification
This Example shows how we can create a pwa application using workbox.
This example contains all the aspect of the workbox such as 

1- Creating Manifest files :- This is not generating menifest file. 
Use online sites like https://app-manifest.firebaseapp.com/ or  https://tomitm.github.io/appmanifest/ 

2- Precaching [Precaching Static Files Caching]

3- Runtime caching 

4- Request routing

5- Strategies and also implementing different strategies. 
		'- cacheFirst :- Data will be shown from the cache .. static images etc.
		'- staleWhileRevalidate :- Avatar images.
		'- networkFirst :- Sometimes content must always be kept up to date (e.g., news articles, stock figures, etc.).

6- CORS 

7- Offline page to show or 404 page not found

8- Background sync 

9- Generating the compiled ready to use prodution version of sw.js in side build/sw.js files 

10- Connecting with Firebase DatabaseMetaData to fetch live data and cache it

11- Sync Operations

12- Notification operation 
