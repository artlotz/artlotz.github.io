// 오프라인 캐시는 유지하고, 온라인에서는 현재 배포의 HTML을 먼저 받는다.
// 빌드 때 plugin.mjs가 내용 지문과 파일 목록을 채운다. 저장 데이터는 건드리지 않는다.
const BUILD = '615fb5ff97';
const FILES = JSON.parse('["art/bg/battle-arena.webp","art/bg/battle-autumn.webp","art/bg/battle-cave-blue.webp","art/bg/battle-cave-lava.webp","art/bg/battle-cave.webp","art/bg/battle-desert.webp","art/bg/battle-dungeon-blood.webp","art/bg/battle-dungeon.webp","art/bg/battle-forest-bamboo.webp","art/bg/battle-forest-night.webp","art/bg/battle-forest-pixel.png","art/bg/battle-forest.webp","art/bg/battle-meadow.webp","art/bg/battle-peak-dark.webp","art/bg/battle-peak.webp","art/bg/battle-redwood.webp","art/bg/battle-snow-dusk.webp","art/bg/battle-snow.webp","art/bg/battle-swamp-dark.webp","art/bg/battle-swamp.webp","art/bg/battle-tower-dusk.webp","art/bg/battle-tower.webp","art/bg/battle-void.webp","art/bg/battle-waterside.webp","art/bg/lobby-dunes.webp","art/bg/lobby-dusk.png","art/bg/lobby-fortress.webp","art/bg/lobby-swamp.webp","art/bg/lobby-village.webp","art/characters/boy-walk.png","art/characters/boy.png","art/characters/cavegirl-walk.png","art/characters/cavegirl.png","art/characters/cavegirl2-spirit-walk.png","art/characters/cavegirl2-spirit.png","art/characters/caveman-walk.png","art/characters/caveman.png","art/characters/eskimo-walk.png","art/characters/eskimo.png","art/characters/fighter-white-blue-walk.png","art/characters/fighter-white-blue.png","art/characters/flam-walk.png","art/characters/flam.png","art/characters/gladiator-blue-walk.png","art/characters/gladiator-blue.png","art/characters/inspector-blue-walk.png","art/characters/inspector-blue.png","art/characters/inspector-green-walk.png","art/characters/inspector-green.png","art/characters/inspector-red-walk.png","art/characters/inspector-red.png","art/characters/knight-gold-blue-walk.png","art/characters/knight-gold-blue.png","art/characters/knight-gold-green-walk.png","art/characters/knight-gold-green.png","art/characters/knight-gold-walk.png","art/characters/knight-gold.png","art/characters/knight-green-walk.png","art/characters/knight-green.png","art/characters/knight-walk.png","art/characters/knight.png","art/characters/lion-orange-walk.png","art/characters/lion-orange.png","art/characters/lion-twin-spear-walk.png","art/characters/lion-twin-spear.png","art/characters/man-green-walk.png","art/characters/man-green.png","art/characters/mask-frog-walk.png","art/characters/mask-frog.png","art/characters/master-walk.png","art/characters/master.png","art/characters/monk-walk.png","art/characters/monk.png","art/characters/monk2-blue-walk.png","art/characters/monk2-blue.png","art/characters/monk2-walk.png","art/characters/monk2.png","art/characters/monkey-boxer-blue-walk.png","art/characters/monkey-boxer-blue.png","art/characters/monkey-green-walk.png","art/characters/monkey-green.png","art/characters/ninja-blue2-walk.png","art/characters/ninja-blue2.png","art/characters/ninja-bomb-walk.png","art/characters/ninja-bomb.png","art/characters/ninja-dark-walk.png","art/characters/ninja-dark.png","art/characters/ninja-eskimo-walk.png","art/characters/ninja-eskimo.png","art/characters/ninja-fire-walk.png","art/characters/ninja-fire.png","art/characters/ninja-leaf-walk.png","art/characters/ninja-leaf.png","art/characters/ninja-mage-black-blue-walk.png","art/characters/ninja-mage-black-blue.png","art/characters/ninja-red-walk.png","art/characters/ninja-red.png","art/characters/ninja-thunder-spear-walk.png","art/characters/ninja-thunder-spear.png","art/characters/ninja-water-walk.png","art/characters/ninja-water.png","art/characters/princess-walk.png","art/characters/princess.png","art/characters/red-gladiator-walk.png","art/characters/red-gladiator.png","art/characters/robot-green-walk.png","art/characters/robot-green.png","art/characters/samurai-blue-walk.png","art/characters/samurai-blue.png","art/characters/samurai-green-walk.png","art/characters/samurai-green.png","art/characters/samurai-red-blue-walk.png","art/characters/samurai-red-blue.png","art/characters/samurai-red-green-walk.png","art/characters/samurai-red-green.png","art/characters/samurai-red-walk.png","art/characters/samurai-red.png","art/characters/samurai-walk.png","art/characters/samurai.png","art/characters/shaman-fire-walk.png","art/characters/shaman-fire.png","art/characters/shaman-lion-blue-walk.png","art/characters/shaman-lion-blue.png","art/characters/shaman-lion-red-walk.png","art/characters/shaman-lion-red.png","art/characters/shaman-lion-walk.png","art/characters/shaman-lion.png","art/characters/sorcerer-black-blue-walk.png","art/characters/sorcerer-black-blue.png","art/characters/sorcerer-black-green-walk.png","art/characters/sorcerer-black-green.png","art/characters/sorcerer-black-walk.png","art/characters/sorcerer-black.png","art/characters/sorcerer-orange-walk.png","art/characters/sorcerer-orange.png","art/characters/spirit-green-walk.png","art/characters/spirit-green.png","art/characters/spirit-walk.png","art/characters/spirit.png","art/characters/sultan-walk.png","art/characters/sultan.png","art/characters/sultan2-walk.png","art/characters/sultan2.png","art/characters/tengu2-walk.png","art/characters/tengu2.png","art/characters/vampire-rainbow-walk.png","art/characters/vampire-rainbow.png","art/characters/woman-walk.png","art/characters/woman.png","art/faces/bamboo-thorn.png","art/faces/bamboo.png","art/faces/boy.png","art/faces/cavegirl.png","art/faces/cavegirl2-spirit.png","art/faces/caveman.png","art/faces/demon-cyclops-water.png","art/faces/demon-cyclops.png","art/faces/eskimo.png","art/faces/fighter-white-blue.png","art/faces/flam-monster.png","art/faces/flam.png","art/faces/frost-bat.png","art/faces/giant-samurai-blue.png","art/faces/giant-samurai-green.png","art/faces/giant-samurai-red.png","art/faces/gladiator-blue.png","art/faces/ice-ghost.png","art/faces/ice-giant.png","art/faces/ice-shell.png","art/faces/inspector-blue.png","art/faces/inspector-green.png","art/faces/inspector-red.png","art/faces/kappa-fire.png","art/faces/kappa-grass.png","art/faces/kappa-water.png","art/faces/knight-gold-blue.png","art/faces/knight-gold-green.png","art/faces/knight-gold.png","art/faces/knight-green.png","art/faces/knight.png","art/faces/lantern-fire.png","art/faces/lantern-grass.png","art/faces/lantern-water.png","art/faces/lava-lizard.png","art/faces/lion-orange.png","art/faces/lion-twin-spear.png","art/faces/man-green.png","art/faces/mask-frog.png","art/faces/master.png","art/faces/monk.png","art/faces/monk2-blue.png","art/faces/monk2.png","art/faces/monkey-boxer-blue.png","art/faces/monkey-green.png","art/faces/ninja-blue2.png","art/faces/ninja-bomb.png","art/faces/ninja-dark.png","art/faces/ninja-eskimo.png","art/faces/ninja-fire.png","art/faces/ninja-leaf.png","art/faces/ninja-mage-black-blue.png","art/faces/ninja-red.png","art/faces/ninja-thunder-spear.png","art/faces/ninja-water.png","art/faces/octopus-grass.png","art/faces/octopus-water.png","art/faces/orc.png","art/faces/princess.png","art/faces/red-gladiator.png","art/faces/robot-green.png","art/faces/ruin-wizard.png","art/faces/samurai-blue.png","art/faces/samurai-green.png","art/faces/samurai-red-blue.png","art/faces/samurai-red-green.png","art/faces/samurai-red.png","art/faces/samurai.png","art/faces/sand-eye.png","art/faces/sand-spider.png","art/faces/shaman-fire.png","art/faces/shaman-lion-blue.png","art/faces/shaman-lion-red.png","art/faces/shaman-lion.png","art/faces/shaman.png","art/faces/skeleton.png","art/faces/skull-blue.png","art/faces/skull-red.png","art/faces/slime-fire.png","art/faces/slime-grass.png","art/faces/slime-water.png","art/faces/snail.png","art/faces/sorcerer-black-blue.png","art/faces/sorcerer-black-green.png","art/faces/sorcerer-black.png","art/faces/sorcerer-orange.png","art/faces/spirit-green.png","art/faces/spirit.png","art/faces/squid-red.png","art/faces/sultan.png","art/faces/sultan2.png","art/faces/temple-spirit-grass.png","art/faces/temple-spirit.png","art/faces/tengu-blue.png","art/faces/tengu-red.png","art/faces/tengu2.png","art/faces/toad-boss.png","art/faces/toad.png","art/faces/tower-statue.png","art/faces/vampire-rainbow.png","art/faces/warden.png","art/faces/well-witch.png","art/faces/whelp.png","art/faces/woman.png","art/fx/aura.png","art/fx/boost.png","art/fx/circle-orange.png","art/fx/circle-spark.png","art/fx/circle-spark2.png","art/fx/circle-white.png","art/fx/explosion.png","art/fx/fire.png","art/fx/hit-circular.png","art/fx/hit-claw-double.png","art/fx/hit-claw.png","art/fx/hit-curved-double.png","art/fx/hit-curved.png","art/fx/hit-cut-double.png","art/fx/hit-cut.png","art/fx/hit-cutx.png","art/fx/ice-b.png","art/fx/ice-flake.png","art/fx/ice.png","art/fx/plant-b.png","art/fx/plant.png","art/fx/proj-energy.png","art/fx/proj-fireball.png","art/fx/proj-plant-spike.png","art/fx/proj-rock.png","art/fx/rock-b.png","art/fx/rock-spike.png","art/fx/rock.png","art/fx/shield-blue.png","art/fx/shield-yellow.png","art/fx/slash-01.png","art/fx/slash-02.png","art/fx/slash-03.png","art/fx/slash-arc.png","art/fx/smoke-ring.png","art/fx/smoke.png","art/fx/spark.png","art/fx/spirit-blue.png","art/fx/spirit-double.png","art/fx/spirit.png","art/fx/thunder.png","art/fx/water-pillar.png","art/fx/water.png","art/monsters/bamboo-idle.png","art/monsters/bamboo-thorn-idle.png","art/monsters/bamboo-thorn.png","art/monsters/bamboo.png","art/monsters/boar-idle.png","art/monsters/boar.png","art/monsters/demon-cyclops-idle.png","art/monsters/demon-cyclops-water-idle.png","art/monsters/demon-cyclops-water.png","art/monsters/demon-cyclops.png","art/monsters/flam-idle.png","art/monsters/flam.png","art/monsters/frost-bat-idle.png","art/monsters/frost-bat.png","art/monsters/golem.png","art/monsters/ice-ghost-idle.png","art/monsters/ice-ghost.png","art/monsters/ice-giant-idle.png","art/monsters/ice-giant.png","art/monsters/ice-shell-idle.png","art/monsters/ice-shell.png","art/monsters/kappa-fire-idle.png","art/monsters/kappa-fire.png","art/monsters/kappa-grass-idle.png","art/monsters/kappa-grass.png","art/monsters/kappa-water-idle.png","art/monsters/kappa-water.png","art/monsters/lantern-fire-idle.png","art/monsters/lantern-fire.png","art/monsters/lantern-grass-idle.png","art/monsters/lantern-grass.png","art/monsters/lantern-water-idle.png","art/monsters/lantern-water.png","art/monsters/lava-lizard-idle.png","art/monsters/lava-lizard.png","art/monsters/octopus-grass-idle.png","art/monsters/octopus-grass.png","art/monsters/octopus-water-idle.png","art/monsters/octopus-water.png","art/monsters/orc-idle.png","art/monsters/orc.png","art/monsters/ruin-wizard-idle.png","art/monsters/ruin-wizard.png","art/monsters/samurai-blue-idle.png","art/monsters/samurai-blue.png","art/monsters/samurai-green-idle.png","art/monsters/samurai-green.png","art/monsters/samurai-red-idle.png","art/monsters/samurai-red.png","art/monsters/sand-eye-idle.png","art/monsters/sand-eye.png","art/monsters/sand-spider-idle.png","art/monsters/sand-spider.png","art/monsters/shaman-idle.png","art/monsters/shaman.png","art/monsters/siren.png","art/monsters/skeleton-idle.png","art/monsters/skeleton.png","art/monsters/skull-blue-idle.png","art/monsters/skull-blue.png","art/monsters/skull-red-idle.png","art/monsters/skull-red.png","art/monsters/slime-fire-idle.png","art/monsters/slime-fire.png","art/monsters/slime-grass-idle.png","art/monsters/slime-grass.png","art/monsters/slime-water-idle.png","art/monsters/slime-water.png","art/monsters/snail-idle.png","art/monsters/snail.png","art/monsters/squid-red-idle.png","art/monsters/squid-red.png","art/monsters/temple-spirit-grass-idle.png","art/monsters/temple-spirit-grass.png","art/monsters/temple-spirit-idle.png","art/monsters/temple-spirit.png","art/monsters/tengu-blue-idle.png","art/monsters/tengu-blue.png","art/monsters/tengu-red-idle.png","art/monsters/tengu-red.png","art/monsters/toad-boss-idle.png","art/monsters/toad-boss.png","art/monsters/toad-idle.png","art/monsters/toad.png","art/monsters/tower-statue-idle.png","art/monsters/tower-statue.png","art/monsters/warden-idle.png","art/monsters/warden.png","art/monsters/well-witch-idle.png","art/monsters/well-witch.png","art/monsters/whelp-idle.png","art/monsters/whelp.png","art/ui/bar/bar-fill-blue.png","art/ui/bar/bar-fill-green.png","art/ui/bar/bar-fill-purple.png","art/ui/bar/bar-fill-red.png","art/ui/bar/bar-fill-white.png","art/ui/bar/bar-fill-yellow.png","art/ui/bar/bar-under.png","art/ui/button/arrow-down.png","art/ui/button/arrow-left.png","art/ui/button/arrow-right.png","art/ui/button/btn-hex-dark.png","art/ui/button/btn-hex-light.png","art/ui/button/btn-round-dark.png","art/ui/button/btn-round-light.png","art/ui/button/btn-wood-disabled.png","art/ui/button/btn-wood-hover.png","art/ui/button/btn-wood-pressed.png","art/ui/button/btn-wood.png","art/ui/deco/plate-left.png","art/ui/deco/plate-mid.png","art/ui/deco/plate-right.png","art/ui/deco/ribbon-left.png","art/ui/deco/ribbon-mid.png","art/ui/deco/ribbon-right.png","art/ui/dialog/dialog-box.png","art/ui/dialog/dialog-bubbles.png","art/ui/dialog/dialog-choice.png","art/ui/dialog/dialog-face-frame.png","art/ui/icon/atk-down.png","art/ui/icon/attack.png","art/ui/icon/book-double.png","art/ui/icon/book-flush.png","art/ui/icon/book-straight.png","art/ui/icon/book-triple.png","art/ui/icon/buff-up.png","art/ui/icon/card-back-dark.png","art/ui/icon/card-back.png","art/ui/icon/coin-spin.png","art/ui/icon/coin.png","art/ui/icon/debuff-down.png","art/ui/icon/def-down.png","art/ui/icon/defense.png","art/ui/icon/fire.png","art/ui/icon/gear.png","art/ui/icon/gem-red.png","art/ui/icon/gem.png","art/ui/icon/grass.png","art/ui/icon/heal.png","art/ui/icon/hp.png","art/ui/icon/job-alchemist.png","art/ui/icon/job-lancer.png","art/ui/icon/job-mage.png","art/ui/icon/job-monk.png","art/ui/icon/job-paladin.png","art/ui/icon/job-priest.png","art/ui/icon/job-scout.png","art/ui/icon/job-summoner.png","art/ui/icon/job-swordsman.png","art/ui/icon/key.png","art/ui/icon/lock.png","art/ui/icon/magnifier.png","art/ui/icon/mail.png","art/ui/icon/mana.png","art/ui/icon/poison.png","art/ui/icon/ring-max.png","art/ui/icon/ring-start.png","art/ui/icon/robe-attack.png","art/ui/icon/robe-cost.png","art/ui/icon/robe-heal.png","art/ui/icon/robe-life.png","art/ui/icon/rune-attack.png","art/ui/icon/rune-edge.png","art/ui/icon/rune-fire.png","art/ui/icon/rune-frost.png","art/ui/icon/rune-grass.png","art/ui/icon/rune-heal.png","art/ui/icon/rune-life.png","art/ui/icon/rune-strategy.png","art/ui/icon/rune-thirst.png","art/ui/icon/rune-venom.png","art/ui/icon/rune-ward.png","art/ui/icon/rune-water.png","art/ui/icon/staff-arcane.png","art/ui/icon/staff-fire.png","art/ui/icon/staff-grass.png","art/ui/icon/staff-water.png","art/ui/icon/star-empty.png","art/ui/icon/star.png","art/ui/icon/stun.png","art/ui/icon/tomb.png","art/ui/icon/trick.png","art/ui/icon/water.png","art/ui/orb/orb-bg-iron.png","art/ui/orb/orb-bg-iron2.png","art/ui/orb/orb-bg-metal.png","art/ui/orb/orb-bg-red.png","art/ui/orb/orb-fill-black.png","art/ui/orb/orb-fill-green.png","art/ui/orb/orb-fill-health.png","art/ui/orb/orb-fill-mana.png","art/ui/orb/orb-fill-purple.png","art/ui/orb/orb-fill-white.png","art/ui/orb/orb-fill-yellow.png","art/ui/orb/orb-over.png","art/ui/panel/fill-dark.png","art/ui/panel/fill-wood.png","art/ui/panel/panel-dark.png","art/ui/panel/panel-metal.png","art/ui/panel/panel-metal2.png","art/ui/panel/panel-metal3.png","art/ui/panel/panel-wood.png","art/ui/panel/slate-corner.png","art/ui/panel/slate-inset-deco.png","art/ui/panel/slate-inset.png","art/ui/panel/slate-rivet.png","art/ui/panel/slate.png","assets/advisor-SHYgjz2G.js","assets/firebaseTransport-DFLsLLLE.js","assets/index-BOu66xcU.js","assets/index-DimCsABk.css","assets/index.esm-C5u9UQL-.js","assets/index.esm-HepDqgZl.js","assets/index.esm-rgndYosk.js","assets/index.esm-y_vBeZnB.js","audio/bgm/battle.ogg","audio/bgm/battle2.ogg","audio/bgm/battle3.ogg","audio/bgm/battle4.ogg","audio/bgm/boss.ogg","audio/bgm/boss2.ogg","audio/bgm/boss3.ogg","audio/bgm/boss4.ogg","audio/bgm/lobby.ogg","audio/sfx/attack-aoe.ogg","audio/sfx/buff.ogg","audio/sfx/card-discard.ogg","audio/sfx/card-draw.ogg","audio/sfx/card-place.ogg","audio/sfx/card-shuffle.ogg","audio/sfx/coin.ogg","audio/sfx/combo-big.ogg","audio/sfx/combo-small.ogg","audio/sfx/gacha-flip.ogg","audio/sfx/gacha-legend.ogg","audio/sfx/gacha-rare.ogg","audio/sfx/heal.ogg","audio/sfx/hit-crit.ogg","audio/sfx/hit-effective.ogg","audio/sfx/hit-strong.ogg","audio/sfx/hit-weak.ogg","audio/sfx/jingle-lose.ogg","audio/sfx/jingle-win.ogg","audio/sfx/levelup.ogg","audio/sfx/mana-full.ogg","audio/sfx/monster-attack.ogg","audio/sfx/monster-die.ogg","audio/sfx/player-hit.ogg","audio/sfx/poison.ogg","audio/sfx/shield.ogg","audio/sfx/star.ogg","audio/sfx/stun.ogg","audio/sfx/trick-get.ogg","audio/sfx/trick-use.ogg","audio/sfx/ui-cancel.ogg","audio/sfx/ui-click.ogg","audio/sfx/ui-confirm.ogg","audio/sfx/ui-locked.ogg","fonts/Galmuri11-Bold.woff2","fonts/Galmuri11.woff2","fonts/Pretendard-Regular.subset.woff2","fonts/Pretendard-SemiBold.subset.woff2","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-32.png","icons/icon-512.png","icons/maskable-512.png","index.html","licenses/cc0-1.0.txt","licenses/dcss/LICENSE-DCSS.txt","licenses/dcss/README-DCSS.txt","licenses/fonts/Galmuri_OFL.txt","licenses/fonts/Pretendard_OFL.txt","licenses/kenney/casino-audio_License.txt","licenses/kenney/emotes-pack_License.txt","licenses/kenney/impact-sounds_License.txt","licenses/kenney/interface-sounds_License.txt","licenses/kenney/playing-cards-pack_License.txt","licenses/kenney/ui-audio_License.txt","licenses/kenney/ui-pack-pixel-adventure_License.txt","licenses/ninja-adventure/LICENSE.txt","licenses/ninja-adventure/README.md","licenses/ninja-adventure/SOURCE.txt","licenses/oga/ansimuz-parallax-forest_license.txt","licenses/oga/ansimuz-parallax-mountain_license.txt","licenses/oga/jap-oil-painting-landscapes_CC0.txt","licenses/oga/nidhoggn-backgrounds_CC0.txt","licenses/oga/nidhoggn-backgrounds_page-2026-10-10.txt","licenses/oga/tigitalart-seaview-parallax_CC0.txt","manifest.webmanifest"]');
const PREFIX = 'precache-';
const CACHE = PREFIX + BUILD;
const SCOPE = self.registration.scope;
const urlOf = (file) => new URL(file, SCOPE).href;
const SHELL = urlOf('index.html');
const isRequired = (file) => file === 'index.html' || /\.(?:js|mjs|css)$/i.test(file);
const pageBuilds = new Map();

self.addEventListener('message', (event) => {
  const client = event.source;
  if (event.data?.type !== 'CARD_GAME_PAGE_BUILD' || typeof event.data.build !== 'string' || !client?.url?.startsWith(SCOPE)) return;
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
      if (event.data?.type === 'CARD_GAME_PAGE_BUILD') finish(event.data.build);
    };
    try {
      client.postMessage({ type: 'CARD_GAME_BUILD_QUERY' }, [channel.port2]);
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
