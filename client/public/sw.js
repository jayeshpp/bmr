if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e4fb79cfd9026d96f11cd7eb4489621d"},{url:"/_next/static/chunks/23-7e3d309f12b7fa51.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/235-595828500f326362.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/236-98b0cb8424419fba.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/3-98ef1e0033fac9ce.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/459-54f517529336dae5.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/580-a09fc907c2b56655.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/648-f6b8f9aaad40be87.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/app/_not-found/page-cfe8478bcfa77997.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/app/about/page-ef172108c8cdf60f.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/app/contact/page-82acc877d74df791.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/app/events/page-b69417cebd82bc73.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/app/layout-7e5a0657473c9fd2.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/app/login/page-06a65de4836f0cbd.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/app/page-5d1100d663c771a8.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/app/profile/page-b5156a553c5c0e3d.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/app/register/page-d8cb663025f7a007.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/fd9d1056-c27dbcc00ecac88a.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/main-4bc15d9c9457a829.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/main-app-a2820aec009b93a3.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-d41b0d43670511a8.js",revision:"gMb0ZCrfvYgXEZdRsx8mo"},{url:"/_next/static/css/61ce79db646944f0.css",revision:"61ce79db646944f0"},{url:"/_next/static/gMb0ZCrfvYgXEZdRsx8mo/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/gMb0ZCrfvYgXEZdRsx8mo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/assets/icons/android-chrome-192x192.png",revision:"bb1bdf8cf6374f13a5bddf974ff0e5d7"},{url:"/assets/icons/android-chrome-384x384.png",revision:"47c5f36ee8c24e8d6e52489b4af73513"},{url:"/assets/icons/android-chrome-512x512.png",revision:"c120358e59aecc0ffb8e805a07f42fef"},{url:"/assets/icons/apple-touch-icon.png",revision:"3e55afd1e475ec3cc5eae78f148fbf3b"},{url:"/assets/icons/favicon-16x16.png",revision:"d81b3f389d27366d6d92db7bac71508d"},{url:"/assets/icons/favicon-32x32.png",revision:"fbe6b1daaaac85eb5b643e26ec5a1edf"},{url:"/assets/icons/icon-144x144.png",revision:"ae753385d2bd7ebe96972cb41e9088f8"},{url:"/assets/icons/icon-512x512.png",revision:"1a3dfcbf73249792c80080ef3ce64adb"},{url:"/assets/images/logo.png",revision:"1e0b31b38cc8bb01b39dabf84c46a631"},{url:"/assets/images/placeholder.jpg",revision:"d500ce9a5c4a790d9dbece602c13a59b"},{url:"/assets/images/profile-cover.jpg",revision:"97ea2931c8be8eedb497b898f98f8c5a"},{url:"/assets/screenshots/screenshot-desktop.png",revision:"000aa5171f9f64cfecd007548f90a572"},{url:"/assets/screenshots/screenshot-mobile.png",revision:"c39b2f9a95b8e35f173bab811a721de3"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));