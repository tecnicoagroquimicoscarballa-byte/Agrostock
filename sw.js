// AgroStock: version pinned locally until the user explicitly requests an update.
// Do not use automatic network-first navigation here: it causes silent version changes.
const CACHE='agrostock-manual-release-106';
const ASSETS=['./index.html','./manifest.webmanifest','./icons/icon.svg'];
const INDEX='./index.html';
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('agrostock-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 const request=event.request;
 const url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin)return;
 const navigation=request.mode==='navigate'||url.pathname.endsWith('/index.html');
 if(navigation){
  const manual=url.searchParams.has('actualizar');
  event.respondWith((async()=>{
   const cache=await caches.open(CACHE);
   if(!manual){
    const saved=await cache.match(INDEX);
    if(saved)return saved;
   }
   try{
    const response=await fetch(new Request(request,{cache:'no-store'}));
    if(response.ok)await cache.put(INDEX,response.clone());
    return response;
   }catch(error){
    const saved=await cache.match(INDEX);
    if(saved)return saved;
    throw error;
   }
  })());
  return;
 }
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  const saved=await cache.match(request);
  if(saved)return saved;
  const response=await fetch(request);
  if(response.ok)await cache.put(request,response.clone());
  return response;
 })());
});
