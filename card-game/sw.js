// 과거에 등록한 캐시 우선 서비스 워커를 퇴역시키는 배포 파일.
// 새 페이지는 워커를 등록하지 않지만, 옛 페이지의 등록/업데이트 요청에는 이 파일을 계속 제공한다.
// 저장 데이터(IndexedDB, localStorage)는 건드리지 않는다.
const SCOPE = self.registration.scope;
const SHELL = new URL('index.html', SCOPE).href;

async function retire() {
  // precache-* 이름은 같은 출처의 여러 게임이 공유하므로 이 게임의 셸 소유도 확인한다.
  for (const name of await caches.keys()) {
    if (!name.startsWith('precache-')) continue;
    const cache = await caches.open(name);
    if (await cache.match(SHELL, { ignoreSearch: true, ignoreVary: true })) await caches.delete(name);
  }

  const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  await self.registration.unregister();
  // 모든 탭을 닫지 않아도 새 페이지를 받는다. 한 탭의 탐색 실패가 다른 탭을 막지 않는다.
  // activate에서 탐색 완료까지 기다리면 탐색이 활성화 완료를 기다릴 수 있으므로 요청만 발행한다.
  for (const client of clients) {
    if (client.url.startsWith(SCOPE)) void client.navigate(client.url).catch(() => {});
  }
}

self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', (event) => event.waitUntil(retire()));
