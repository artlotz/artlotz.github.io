// 오프라인 캐시는 유지하고, 온라인에서는 현재 배포의 HTML을 먼저 받는다.
// 빌드 때 plugin.mjs가 내용 지문과 파일 목록을 채운다. 저장 데이터는 건드리지 않는다.
const BUILD = 'a7a74ad2df';
const FILES = JSON.parse('["art/arena/backgrounds/arena.webp","art/arena/backgrounds/lobby.webp","art/arena/cards/ar-advance-signal.webp","art/arena/cards/ar-archive-fox.webp","art/arena/cards/ar-bloom-captain.webp","art/arena/cards/ar-bramble-tactician.webp","art/arena/cards/ar-cinder-scout.webp","art/arena/cards/ar-cold-current.webp","art/arena/cards/ar-ember-guide.webp","art/arena/cards/ar-frost-comet.webp","art/arena/cards/ar-glass-herald.webp","art/arena/cards/ar-iron-grove.webp","art/arena/cards/ar-last-watch.webp","art/arena/cards/ar-mist-priest.webp","art/arena/cards/ar-mountain-chorus.webp","art/arena/cards/ar-quiet-oracle.webp","art/arena/cards/ar-red-dusk.webp","art/arena/cards/ar-ring-keeper.webp","art/arena/cards/ar-river-council.webp","art/arena/cards/ar-rune-smith.webp","art/arena/cards/ar-seven-banners.webp","art/arena/cards/ar-sky-weaver.webp","art/arena/cards/ar-stone-sentinel.webp","art/arena/cards/ar-thunder-bearer.webp","art/arena/cards/ar-tide-saboteur.webp","art/arena/cards/ar-wind-runner.webp","art/arena/icons/gems.webp","art/arena/icons/gold.webp","art/arena/locations/ar-loc-changban-bridge.webp","art/arena/locations/ar-loc-crete-labyrinth.webp","art/arena/locations/ar-loc-crystal-channel.webp","art/arena/locations/ar-loc-dragon-gate.webp","art/arena/locations/ar-loc-ember-forge.webp","art/arena/locations/ar-loc-firstlight-tower.webp","art/arena/locations/ar-loc-frost-meadow.webp","art/arena/locations/ar-loc-huaguo-village.webp","art/arena/locations/ar-loc-merlin-inn.webp","art/arena/locations/ar-loc-reflection-gorge.webp","art/arena/locations/ar-loc-round-table.webp","art/arena/locations/ar-loc-stillfield.webp","art/arena/locations/ar-loc-underworld.webp","art/arena/locations/ar-loc-yellow-field.webp","assets/arena/classics/ancient-myth/atlas-list-1x.webp","assets/arena/classics/ancient-myth/atlas-list-2x.webp","assets/arena/classics/ancient-myth/atlas.webp","assets/arena/classics/arthurian/atlas-list-1x.webp","assets/arena/classics/arthurian/atlas-list-2x.webp","assets/arena/classics/arthurian/atlas.webp","assets/arena/classics/chu-han/atlas-list-1x.webp","assets/arena/classics/chu-han/atlas-list-2x.webp","assets/arena/classics/chu-han/atlas.webp","assets/arena/classics/classical-fantasy/atlas-list-1x.webp","assets/arena/classics/classical-fantasy/atlas-list-2x.webp","assets/arena/classics/classical-fantasy/atlas.webp","assets/arena/classics/fengshen/atlas-list-1x.webp","assets/arena/classics/fengshen/atlas-list-2x.webp","assets/arena/classics/fengshen/atlas.webp","assets/arena/classics/folk-heroes/atlas-list-1x.webp","assets/arena/classics/folk-heroes/atlas-list-2x.webp","assets/arena/classics/folk-heroes/atlas.webp","assets/arena/classics/greek-roman/athena-aegis-line.webp","assets/arena/classics/greek-roman/athena-strategy-of-wisdom.webp","assets/arena/classics/greek-roman/atlas-list-1x.webp","assets/arena/classics/greek-roman/atlas-list-2x.webp","assets/arena/classics/greek-roman/atlas.webp","assets/arena/classics/greek-roman/hades-gates-of-the-dead.webp","assets/arena/classics/greek-roman/hades-underworld-crown.webp","assets/arena/classics/greek-roman/zeus-olympian-storm.webp","assets/arena/classics/greek-roman/zeus-thunder-throne.webp","assets/arena/classics/journey-west/atlas-list-1x.webp","assets/arena/classics/journey-west/atlas-list-2x.webp","assets/arena/classics/journey-west/atlas.webp","assets/arena/classics/norse/atlas-list-1x.webp","assets/arena/classics/norse/atlas-list-2x.webp","assets/arena/classics/norse/atlas.webp","assets/arena/classics/norse/freyja-brisingamen.webp","assets/arena/classics/norse/freyja-seidr.webp","assets/arena/classics/references/ancient-myth/anubis-jackal-guide.webp","assets/arena/classics/references/ancient-myth/anubis-underworld-warden.webp","assets/arena/classics/references/ancient-myth/gilgamesh-humbaba-slayer.webp","assets/arena/classics/references/ancient-myth/gilgamesh-protective-stance.webp","assets/arena/classics/references/ancient-myth/ishtar-boar-vision.webp","assets/arena/classics/references/ancient-myth/ishtar-queen-of-night.webp","assets/arena/classics/references/ancient-myth/isis-mother-goddess.webp","assets/arena/classics/references/ancient-myth/isis-protective-form.webp","assets/arena/classics/references/arthurian/arthur-excalibur.webp","assets/arena/classics/references/arthurian/arthur-last-stand.webp","assets/arena/classics/references/arthurian/lancelot-dragon.webp","assets/arena/classics/references/arthurian/lancelot-grail.webp","assets/arena/classics/references/arthurian/merlin-eastern-wind.webp","assets/arena/classics/references/arthurian/merlin-eight-array.webp","assets/arena/classics/references/arthurian/morgan-enchantress.webp","assets/arena/classics/references/arthurian/morgan-morgan-le-fay.webp","assets/arena/classics/references/folk-heroes/aladdin-carpet-flight.webp","assets/arena/classics/references/folk-heroes/aladdin-lamp-of-wishes.webp","assets/arena/classics/references/folk-heroes/cu-chulainn-emers-counsel.webp","assets/arena/classics/references/folk-heroes/cu-chulainn-warp-spasm.webp","assets/arena/classics/references/folk-heroes/scheherazade-story-thread.webp","assets/arena/classics/references/folk-heroes/scheherazade-thousand-nights.webp","assets/arena/classics/references/folk-heroes/siegfried-dragon-blood.webp","assets/arena/classics/references/folk-heroes/siegfried-nibelung-hero.webp","assets/arena/classics/references/greek-roman/heracles-lion-hide.webp","assets/arena/classics/references/greek-roman/heracles-twelve-labors.webp","assets/arena/classics/references/norse/loki-giant-scheme.webp","assets/arena/classics/references/norse/loki-shapechanger.webp","assets/arena/classics/references/norse/odin-gungnir.webp","assets/arena/classics/references/norse/odin-one-eyed-seer.webp","assets/arena/classics/references/norse/thor-mjolnir.webp","assets/arena/classics/references/norse/thor-thunder-return.webp","assets/arena/classics/references/wuxia/bai-yutang-white-cloud.webp","assets/arena/classics/references/wuxia/lin-chong-leopard-spear.webp","assets/arena/classics/references/wuxia/lin-chong-snowy-mountain-temple.webp","assets/arena/classics/references/wuxia/wu-song-pilgrim-fist.webp","assets/arena/classics/references/wuxia/wu-song-tiger-slayer.webp","assets/arena/classics/references/wuxia/zhan-zhao-imperial-cat.webp","assets/arena/classics/references/wuxia/zhan-zhao-southern-hero.webp","assets/arena/classics/references/xianxia/houyi-celestial-arrow.webp","assets/arena/classics/references/xianxia/houyi-shooting-suns.webp","assets/arena/classics/references/xianxia/nuwa-mending-sky.webp","assets/arena/classics/references/xianxia/nuwa-refining-stones.webp","assets/arena/classics/references/xianxia/xi-wangmu-peaches.webp","assets/arena/classics/references/xianxia/xi-wangmu-western-queen.webp","assets/arena/classics/references/xianxia/zhang-sanfeng-taiji.webp","assets/arena/classics/three-kingdoms/atlas-list-1x.webp","assets/arena/classics/three-kingdoms/atlas-list-2x.webp","assets/arena/classics/three-kingdoms/atlas.webp","assets/arena/classics/wuxia/atlas-list-1x.webp","assets/arena/classics/wuxia/atlas-list-2x.webp","assets/arena/classics/wuxia/atlas.webp","assets/arena/classics/xianxia/atlas-list-1x.webp","assets/arena/classics/xianxia/atlas-list-2x.webp","assets/arena/classics/xianxia/atlas.webp","assets/arena/history/ar31/benz-motorwagen.webp","assets/arena/history/ar31/cleopatra.webp","assets/arena/history/ar31/eiffel-tower.webp","assets/arena/history/ar31/f35.webp","assets/arena/history/ar31/galileo-telescope.webp","assets/arena/history/ar31/giza-pyramid.webp","assets/arena/history/ar31/harriettubman.webp","assets/arena/history/ar31/jangyeongsil.webp","assets/arena/history/ar31/joanofarc.webp","assets/arena/history/ar31/leonardo.webp","assets/arena/history/ar31/provenance.json","assets/arena/history/ar31/sejong.webp","assets/arena/history/ar31/seondeok.webp","assets/arena/history/ar31/seven-branched-sword.webp","assets/arena/history/ar31/turtle-ship.webp","assets/arena/history/ar31/wright-flyer.webp","assets/arena/history/ar31/yisunshin.webp","assets/arena/history/ar32/provenance.json","assets/arena/history/ar32/sun-tzu-no-return.webp","assets/arena/history/ar32/zheng-he-single-decree.webp","assets/arena/strategy/ar28/atlas-list-1x.webp","assets/arena/strategy/ar28/atlas-list-2x.webp","assets/arena/strategy/ar28/atlas.webp","assets/arena/strategy/ar30/achilles-spear.webp","assets/arena/strategy/ar30/baiqi-charge.webp","assets/arena/strategy/ar30/caiwenji-resonance.webp","assets/arena/strategy/ar30/caochong-command.webp","assets/arena/strategy/ar30/huangzhong-bow.webp","assets/arena/strategy/ar30/huatuo-herbs.webp","assets/arena/strategy/ar30/ludongbin-return.webp","assets/arena/strategy/ar30/mazu-return.webp","assets/arena/strategy/ar30/pan-dance.webp","assets/arena/strategy/ar30/provenance.json","assets/arena/strategy/ar30/xiwangmu-orchard.webp","assets/arena/strategy/ar30/zhouyu-fire.webp","assets/arena/strategy/ar30/zhuangzi-butterfly.webp","assets/arena/ui-icons/card-exchange.svg","assets/arena/ui-icons/card-pick.svg","assets/arena/ui-icons/card-play.svg","assets/arena/ui-icons/hourglass.svg","assets/arena/ui-icons/open-book.svg","assets/arena/ui-icons/star-medal.svg","assets/arena/ui-icons/strategy.svg","assets/arena/ui-icons/upgrade.svg","assets/arena/ui/arena-sanctum-v2.webp","assets/firebaseTransport-CkCIA_up.js","assets/index-KSNceiat.js","assets/index-Vsd6ciUK.css","assets/index.esm-C5u9UQL-.js","assets/index.esm-HepDqgZl.js","assets/index.esm-rgndYosk.js","assets/index.esm-y_vBeZnB.js","audio/bgm/battle.ogg","audio/bgm/battle2.ogg","audio/bgm/battle3.ogg","audio/bgm/battle4.ogg","audio/bgm/boss.ogg","audio/bgm/boss2.ogg","audio/bgm/boss3.ogg","audio/bgm/boss4.ogg","audio/bgm/lobby.ogg","audio/sfx/attack-aoe.ogg","audio/sfx/buff.ogg","audio/sfx/card-discard.ogg","audio/sfx/card-draw.ogg","audio/sfx/card-place.ogg","audio/sfx/card-shuffle.ogg","audio/sfx/coin.ogg","audio/sfx/combo-big.ogg","audio/sfx/combo-small.ogg","audio/sfx/gacha-flip.ogg","audio/sfx/gacha-legend.ogg","audio/sfx/gacha-rare.ogg","audio/sfx/heal.ogg","audio/sfx/hit-crit.ogg","audio/sfx/hit-effective.ogg","audio/sfx/hit-strong.ogg","audio/sfx/hit-weak.ogg","audio/sfx/jingle-lose.ogg","audio/sfx/jingle-win.ogg","audio/sfx/levelup.ogg","audio/sfx/mana-full.ogg","audio/sfx/monster-attack.ogg","audio/sfx/monster-die.ogg","audio/sfx/player-hit.ogg","audio/sfx/poison.ogg","audio/sfx/shield.ogg","audio/sfx/star.ogg","audio/sfx/stun.ogg","audio/sfx/trick-get.ogg","audio/sfx/trick-use.ogg","audio/sfx/ui-cancel.ogg","audio/sfx/ui-click.ogg","audio/sfx/ui-confirm.ogg","audio/sfx/ui-locked.ogg","fonts/Galmuri11-Bold.woff2","fonts/Galmuri11.woff2","fonts/Pretendard-Regular.subset.woff2","fonts/Pretendard-SemiBold.subset.woff2","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-32.png","icons/icon-512.png","icons/icon.svg","icons/maskable-512.png","index.html","licenses/arena/CC0-1.0.txt","licenses/arena/README.md","licenses/arena/classics/manifest.json","licenses/arena/game-icons/LICENSE.txt","licenses/arena/game-icons/manifest.json","licenses/arena/manifest.json","licenses/arena/strategy/ar28-manifest.json","licenses/cc0-1.0.txt","licenses/dcss/LICENSE-DCSS.txt","licenses/dcss/README-DCSS.txt","licenses/fonts/Galmuri_OFL.txt","licenses/fonts/Pretendard_OFL.txt","licenses/kenney/casino-audio_License.txt","licenses/kenney/emotes-pack_License.txt","licenses/kenney/impact-sounds_License.txt","licenses/kenney/interface-sounds_License.txt","licenses/kenney/playing-cards-pack_License.txt","licenses/kenney/ui-audio_License.txt","licenses/kenney/ui-pack-pixel-adventure_License.txt","licenses/ninja-adventure/LICENSE.txt","licenses/ninja-adventure/README.md","licenses/ninja-adventure/SOURCE.txt","licenses/oga/ansimuz-parallax-forest_license.txt","licenses/oga/ansimuz-parallax-mountain_license.txt","licenses/oga/jap-oil-painting-landscapes_CC0.txt","licenses/oga/nidhoggn-backgrounds_CC0.txt","licenses/oga/nidhoggn-backgrounds_page-2026-10-10.txt","licenses/oga/tigitalart-seaview-parallax_CC0.txt","manifest.webmanifest"]');
const PREFIX = 'mansangrok-precache-';
const CACHE = PREFIX + BUILD;
const SCOPE = self.registration.scope;
const urlOf = (file) => new URL(file, SCOPE).href;
const SHELL = urlOf('index.html');
const isRequired = (file) => file === 'index.html' || /\.(?:js|mjs|css)$/i.test(file);
const pageBuilds = new Map();

self.addEventListener('message', (event) => {
  const client = event.source;
  if (event.data?.type !== 'MANSANGROK_PAGE_BUILD' || typeof event.data.build !== 'string' || !client?.url?.startsWith(SCOPE)) return;
  pageBuilds.set(client.id, event.data.build);
});

async function updateClient(client) {
  if (pageBuilds.get(client.id) === BUILD) return;
  const channel = new MessageChannel();
  const reported = await new Promise((resolve) => {
    // 응답 규약이 없는 옛 페이지도 갱신한다. 최신 HTML의 응답기는 앱 부팅 전에 head에서 준비된다.
    const timer = setTimeout(() => finish(undefined), 1000);
    const finish = (build) => {
      clearTimeout(timer);
      channel.port1.close();
      channel.port2.close();
      resolve(build);
    };
    channel.port1.onmessage = (event) => {
      if (event.data?.type === 'MANSANGROK_PAGE_BUILD') finish(event.data.build);
    };
    try {
      client.postMessage({ type: 'MANSANGROK_BUILD_QUERY' }, [channel.port2]);
    } catch {
      finish(undefined);
    }
  });
  // 질의 중 새 페이지가 빌드를 선언했거나 수동 탐색으로 옛 document가 사라졌으면 갱신하지 않는다.
  const current = await self.clients.get(client.id);
  if (!current?.url.startsWith(SCOPE) || reported === BUILD || pageBuilds.get(client.id) === BUILD) return;
  // activate는 메시지 판별까지만 기다린다. 탐색 완료까지 기다리면 활성화와 맞물릴 수 있다.
  void current.navigate(current.url).catch(() => {});
}

async function precache() {
  const cache = await caches.open(CACHE);
  try {
    // HTML과 실행 코드가 모두 있어야 새 빌드를 설치한다. addAll은 한 묶음으로 저장한다.
    const required = ['index.html', ...FILES.filter((file) => file !== 'index.html' && isRequired(file))];
    await cache.addAll(required.map((file) => new Request(urlOf(file), { cache: 'no-cache' })));
    // 그림·소리·폰트·아이콘 하나의 실패가 정상적인 코드 업데이트를 막지 않는다.
    await Promise.all(FILES.filter((file) => !isRequired(file)).map(async (file) => {
      try {
        const response = await fetch(new Request(urlOf(file), { cache: 'no-cache' }));
        if (response.ok) await cache.put(urlOf(file), response);
      } catch {
        // 선택 에셋은 나중에 필요할 때 네트워크에서 다시 받는다.
      }
    }));
  } catch (error) {
    await caches.delete(CACHE);
    throw error;
  }
  await self.skipWaiting();
}

async function ownCaches() {
  const owned = [];
  for (const name of await caches.keys()) {
    if (!name.startsWith(PREFIX)) continue;
    const cache = await caches.open(name);
    if (await cache.match(SHELL, { ignoreSearch: true, ignoreVary: true })) owned.push(name);
  }
  return owned;
}

async function activate() {
  const previous = (await ownCaches()).filter((name) => name !== CACHE);
  // 생성 순서상 가장 최근 구 버전은 지연 로딩 중인 옛 코드가 사용할 수 있게 보존한다.
  for (const name of previous.slice(0, -1)) await caches.delete(name);
  await self.clients.claim();
  if (previous.length === 0) return;
  const clients = await self.clients.matchAll({ type: 'window' });
  await Promise.all(clients.filter((client) => client.url.startsWith(SCOPE)).map(updateClient));
}

async function cached(request) {
  const options = { cacheName: CACHE, ignoreSearch: true, ignoreVary: true };
  const hit = await caches.match(request, options);
  if (hit) return hit;
  for (const name of (await ownCaches()).reverse()) {
    if (name === CACHE) continue;
    const previous = await caches.match(request, { ...options, cacheName: name });
    if (previous) return previous;
  }
}

async function respond(request) {
  if (request.mode === 'navigate') {
    try {
      const response = await fetch(new Request(request, { cache: 'no-cache' }));
      if (!response.ok) throw new Error(`HTML: HTTP ${response.status}`);
      const cache = await caches.open(CACHE);
      await cache.put(SHELL, response.clone()).catch(() => {});
      return response;
    } catch (error) {
      const fallback = await cached(SHELL);
      if (fallback) return fallback;
      throw error;
    }
  }
  const hit = await cached(request);
  if (hit) return hit;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(CACHE);
    await cache.put(request, response.clone()).catch(() => {});
  }
  return response;
}

self.addEventListener('install', (event) => event.waitUntil(precache()));
self.addEventListener('activate', (event) => event.waitUntil(activate()));
self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || !request.url.startsWith(SCOPE)) return;
  event.respondWith(respond(request));
});
