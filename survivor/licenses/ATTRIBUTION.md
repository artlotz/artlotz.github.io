# 에셋 출처와 라이선스

## 시티 브레이커 재개발

- 현재 플레이어는 `public/assets/heroes/`, 적·도시·장비·효과는 `public/assets/packages/`에 있습니다. 이전 자체 SVG인 `public/assets/rebuild/`는 현재 제품의 활성 경로에서 사용하지 않습니다. 탕탕특공대의 그림이나 캐릭터 파일을 반입하지 않았습니다.
- 플레이어3종: 본 프로젝트를 위해 내장 `image_gen`으로 생성한 전투 캐릭터. `public/assets/heroes/`의 실제 대기·보행·달리기·피격·사망·후면 PNG를 사용합니다. [생성 원본·프롬프트·가공 기록](heroes-generated.md). Kenney 또는 원작 게임의 캐릭터로 표기하지 않습니다.
- 적·보스: Kenney [Toon Characters](https://kenney.nl/assets/toon-characters), CC0. 실제 HD 포즈와 원본 형태를 유지한 팔레트 변형입니다. [원문 라이선스](kenney-toon-characters.txt), [배우별 원본·변형](actor-sources.txt).
- 전투 입자: Kenney Smoke Particles, CC0. 원본 정적 PNG에 배율·투명도 변화를 적용해 효과 시트를 구성했습니다. 원본 연속 애니메이션이라는 뜻이 아닙니다. [원문 라이선스](kenney-smoke-particles.txt), [탄·효과 원본과 가공](projectile-fx-sources.txt).
- 장비·지원·진화·수집물·일부 탄: Game-icons, 저자 Lorc·Delapouite·Sbed·Skoll, CC BY 3.0. 원문 실루엣의 색·방향·비율을 조정한 PNG입니다. [각 PNG별 원문 URL·저자·변형](equipment-sources.txt), [라이선스](game-icons/LICENSE.txt).
- 로켓: Kenney Tower Defense Top-Down, CC0. [원문 라이선스](kenney-tower-defense-top-down.txt).
- 도시 지도·소품: Kenney Road Textures, Racing Pack, Top-down Shooter, CC0. 실제 타일과 원본 소품을 배치·회전·색 조정한 지도입니다. [원문·사용 파일·라이선스](../assets/packages/world/SOURCES.txt), [배치 내역](../assets/packages/world/placement-source.txt).
- `public/audio/bgm/`: 기존 카드 게임에서 반입한 Ninja Adventure 음악. CC0. 원본은 `Audio/Musics/35 - Adventure.ogg`, `17 - Fight.ogg`, `34  - Fight.ogg`. [라이선스](ninja-adventure/LICENSE.txt).
- `public/audio/sfx/`: 기존 카드 게임에서 반입한 Ninja Adventure/Kenney 효과음. 기존 출처 고지 사본을 보존합니다.
- `public/assets/fonts/`: Pretendard, OFL 1.1. [라이선스](fonts/Pretendard_OFL.txt).

아래 목록에는 이전 균열 원정의 파일도 포함돼 있습니다. 이전 파일이 디렉토리에 남아 있다는 이유만으로 새 제품에서 사용하는 것은 아닙니다. 새 활성 에셋 연결은 `src/rebuild/art.ts`를 기준으로 확인할 수 있습니다.

## 이전 버전 반입 목록

- Ninja Adventure: 캐릭터·적·보스·타일셋·아이템·IceSpike. CC0 1.0. [LICENSE.txt](ninja-adventure/LICENSE.txt).
- Game-icons: 선정 아이콘 원문 SVG 28개. CC BY 3.0. 각 파일의 원문 URL, 저자, 라이선스는 아래에 기록했습니다.
- Pretendard: 카드 게임에서 반입한 서브셋 폰트. OFL 1.1. [OFL 원문](fonts/Pretendard_OFL.txt).
- Kenney: 카드 게임에서 반입한 효과음. CC0. 원본 고지 사본은 [kenney](kenney/)에 보존했습니다.
- 카드 게임에서 반입한 이펙트·UI 아이콘은 기존 Ninja Adventure·Kenney 등의 출처·고지를 그대로 따릅니다.

## Game-icons 원문·저자·라이선스

- weapon-arc-blade: [lorc/sword-spin.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/sword-spin.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- weapon-bolt-launcher: [carl-olsen/crossbow.svg](https://raw.githubusercontent.com/game-icons/icons/master/carl-olsen/crossbow.svg) — Carl Olsen, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- weapon-flame-orb: [lorc/fireball.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/fireball.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- weapon-flame-trail: [lorc/fire-zone.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/fire-zone.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- weapon-frost-ring: [lorc/snowflake-2.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/snowflake-2.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- weapon-frost-shard: [lorc/ice-bolt.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/ice-bolt.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- weapon-chain-lightning: [lorc/lightning-branches.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/lightning-branches.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- weapon-storm-drone: [delapouite/delivery-drone.svg](https://raw.githubusercontent.com/game-icons/icons/master/delapouite/delivery-drone.svg) — Delapouite, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- relic-iron-sigil: [lorc/anvil.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/anvil.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- relic-ember-lens: [delapouite/fire-gem.svg](https://raw.githubusercontent.com/game-icons/icons/master/delapouite/fire-gem.svg) — Delapouite, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- relic-frost-charm: [lorc/snowflake-1.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/snowflake-1.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- relic-storm-coil: [lorc/tesla-coil.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/tesla-coil.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- relic-clockwork: [lorc/clockwork.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/clockwork.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- relic-magnet: [lorc/magnet.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/magnet.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- relic-vital-seed: [delapouite/plant-seed.svg](https://raw.githubusercontent.com/game-icons/icons/master/delapouite/plant-seed.svg) — Delapouite, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- relic-scope: [delapouite/eye-target.svg](https://raw.githubusercontent.com/game-icons/icons/master/delapouite/eye-target.svg) — Delapouite, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- evolution: [delapouite/upgrade.svg](https://raw.githubusercontent.com/game-icons/icons/master/delapouite/upgrade.svg) — Delapouite, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- evolution-moon_wheel: [lorc/spinning-blades.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/spinning-blades.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- evolution-piercing_battery: [delapouite/laser-turret.svg](https://raw.githubusercontent.com/game-icons/icons/master/delapouite/laser-turret.svg) — Delapouite, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- evolution-meteor_orb: [lorc/fragmented-meteor.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/fragmented-meteor.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- evolution-lava_road: [lorc/volcano.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/volcano.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- evolution-eye_of_winter: [lorc/crystal-eye.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/crystal-eye.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- evolution-crystal_storm: [lorc/crystal-cluster.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/crystal-cluster.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- evolution-heaven_net: [delapouite/mesh-network.svg](https://raw.githubusercontent.com/game-icons/icons/master/delapouite/mesh-network.svg) — Delapouite, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- evolution-storm_squad: [delapouite/defense-satellite.svg](https://raw.githubusercontent.com/game-icons/icons/master/delapouite/defense-satellite.svg) — Delapouite, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- objective-altar: [delapouite/star-altar.svg](https://raw.githubusercontent.com/game-icons/icons/master/delapouite/star-altar.svg) — Delapouite, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- objective-supply: [lorc/locked-chest.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/locked-chest.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
- action-dash: [lorc/sprint.svg](https://raw.githubusercontent.com/game-icons/icons/master/lorc/sprint.svg) — Lorc, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
