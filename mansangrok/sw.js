// 기존 브라우저의 오프라인 워커를 퇴역시킨다. 새 페이지에서는 등록하지 않는다.
self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', (event) => event.waitUntil((async () => {
  for (const name of await caches.keys()) {
    if (name.startsWith('mansangrok-precache-')) await caches.delete(name);
  }
  const scope = self.registration.scope;
  const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  await self.registration.unregister();
  for (const client of clients) {
    // 탐색 완료를 기다리면 활성화와 맞물릴 수 있다. 실패도 활성화를 막지 않는다.
    if (client.url.startsWith(scope)) void client.navigate(client.url).catch(() => {});
  }
})()));
