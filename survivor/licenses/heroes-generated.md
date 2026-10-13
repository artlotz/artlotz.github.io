# 플레이어 원화 출처와 생성 기록

2026-10-13. 플레이어 외형 개선 요청에 따라 세 주무기의 주인공을 새로 제작했다. OpenAI 내장 `image_gen` 도구를 사용했으며 CLI/API 우회는 사용하지 않았다. Kenney 원화나 타 게임의 캐릭터를 수정한 결과가 아니다. 이 생성물에 Kenney의 CC0 고지를 적용하지 않는다.

## 파일과 가공

- 게임용 PNG: `public/assets/heroes/{kunai,shotgun,sword_arc}/`.
- 생성 원본: `scripts/assets/sources/heroes/`. 생성 결과는 작업 공간으로 복사해 보존한다.
- 재현: `scripts/assets/prepare-heroes.py`, `scripts/assets/heroes-manifest.json`.
- 가공 범위: 실제 알파 도형 분리, 프레임별 명시한 발 위치 정렬, 역할별 공통 배율로 정규 캔버스에 배치. 얼굴·복장·몸체를 코드로 다시 그리거나 색을 바꾸지 않는다. 넓은 사망 포즈도 같은 역할의 배율을 유지한다.
- 기본 아틀라스는 걷기8·대기1·달리기3·피격1·사망1·후면1·대기 중복1의16포즈다. 별도 보행 시트에서 반대 팔 동작의 포즈를 추가 생성했다. 실제 게임에 선택한 프레임과 위치는 manifest에 기록한다.
- 3/4 우측 시점과 후면 정지 포즈를 사용한다. 완전한8방향 보행 세트라고 표기하지 않는다.

## 최종 원화와 프롬프트

생성 파일 식별자와 당시 프롬프트를 기록한다. 생성 참조는 본 작업에서 만든 그림이며 원작 게임이나 타인의 캐릭터를 참조 이미지로 입력하지 않았다. 첫 자체 생성 후보 `exec-7cfda46f-07ea-45e6-9d59-91d396b9807b.png`는 공통 그림체 참고이며 게임용 프레임으로 채택하지 않았다.

### 수리검: 청록 전투복 생존자

원본: `exec-666dd3d8-aab5-4e5b-83a7-fc98aecd60cc.png`.

> Use case: stylized-concept. Reference image is appearance/style reference only. Produce a polished production game animation atlas of THIS SAME FEMALE urban ranger, short dark hair, teal combat jacket, orange scarf, charcoal suit, identical detailed cel shaded face/outfit. Keep quality. Transparent PNG. EXACT 4 columns x 4 rows equally spaced cells, no text/no lines. 16 ENTIRE figures, small gutters, same scale and feet baseline in every cell. Consistent 3/4 right-facing camera slightly from above. CRITICAL: real 8-pose walking cycle in first two rows: frame1 LEFT leg forward RIGHT leg back; frame2 left leg contacting ground; frame3 legs together passing; frame4 LEFT leg moving BACK, RIGHT leg moving forward; frame5 RIGHT leg forward LEFT leg back (opposite frame1); frame6 right leg contacting ground; frame7 legs together opposite passing; frame8 RIGHT leg moving BACK, LEFT moving forward. Arms swing opposite legs. DO NOT repeat the same silhouette in all 8 walking frames. The progression must show clear alternating contact, passing, opposite contact and passing. Row3: cell1 idle both feet planted shoulder width, cell2 run LEFT foot forward, cell3 run passing feet, cell4 run RIGHT foot forward. Row4: cell1 injured recoil standing; cell2 lying defeated on her side entirely contained WITHIN cell padding, body not beyond cell; cell3 back view standing facing away, cell4 duplicate idle. ALL frames same height scale, even lineart quality, full character entirely visible, neutral transparent space no floor/no shadow rectangle. No handheld weapon. No photorealism. This is 16 sprites NOT a poster.

### 산탄총: 주황 장갑 생존자

원본: `exec-0bc33b4b-275f-4e24-a9ac-c983b26e4a1a.png`.

> Use case: stylized-concept. Reference image specifies premium cel-shaded rendering quality and consistent atlas only. Create a DISTINCT original handsome MALE shotgun-specialist urban survival action hero, athletic robust 4.5 heads tall proportion, short dark hair with shaved sides, composed small normal eyes, rust-orange tactical padded vest over navy shirt, charcoal combat trousers, heavy boots and gloves, utility belt. Not female, not toddler, not civilian cartoon. Same detailed premium mobile action game style as reference. NO weapons in hands, rendered separately. Actual transparent PNG. EXACT 4 columns x4 rows regularly spaced atlas16cells, each entire figure wholly inside own cell with generous padding, constant body scale and foot baseline, no text/no grid/no stage. Consistent 3/4 FRONT right-facing view slightly above, NOT pure side profile. Row1+2 continuous real8 WALK frames:1 LEFT leg forward RIGHT back,2 left contact,3 passing legs close,4 right leg moving forward left back,5 RIGHT leg forward LEFT back,6 right contact,7 opposite passing legs close,8 left moving forward. Arms opposite legs. MUST have alternating left/right contact poses, do NOT duplicate same legs in all frames. Row3:1 planted idle,2 runLEFTfootforward,3 runpassing,4 runRIGHTfootforward. Row4:1 injured recoil,2 defeated lying on side no blood ENTIRELY inside that cell,3 backview samecostume,4 duplicateidle. Crisp readable silhouette, no huge round eyes, no smile, no watermark, no extra object, no backdrop or base platform, transparency retained.

### 아크 블레이드: 은발 생존자

원본: `exec-dee5e6bf-a681-473f-897c-7c29b994bab8.png`.

> Use case: stylized-concept. Use reference ONLY for premium cel-shaded action sprite style and sheetlayout. Make a DIFFERENT original urban survival melee specialist: athletic young adult female, cool silver bob hair, determined attractive normal small eyes, short indigo armored combat coat with subtle pale gold trim, white fitted inner shirt, charcoal leg armor and darkboots, gloves and belt. 4.5 heads tall heroic compact proportion, not hugeheaded toddler, not civilian. No handheld weapons, no swords on back. Professional polished HD sprite illustration, same quality as reference. Transparent PNG. ONE EXACT evenly spaced4column x4row atlas16cells, no gridlines/text. Full body allframes, each figure INSIDE owncell with comfortablepadding, constant body scale and feetbaseline. Fixed 3/4 FRONT view facing right slightlyabove, not pure profile. First2rows8ACTUAL WALK CYCLE poses:1 leftlegfarforward rightback,2 leftfootcontact,3 legsclosepassing,4 rightmovingforward leftback,5 rightlegfarforward leftback (oppositeframe1),6 rightfootcontact,7 oppositepassing,8 leftmovingforward. Arms swing opposite legs. Do not repeat same legfront across frames. Row3cells1-4: idle feetplanted, runleftlegforward, runpassing, runrightlegforward. Row4cells1-4: hurtrecoil standing, defeatedlyingonside fullywithin cell(no blood), backview samecostume, duplicateidle. No platform, no floor, no scenery, no objects, no border, no typography or watermark, subtle footcontactshadowonly. Crisp elegant readable combat hero silhouette.

## 보행 보충 시트

원본 `exec-76ad9635-85b3-41ed-a598-248c025d3d6e.png`: 청록 여성·주황 남성의2행×4열. 원본 `exec-5f475750-8e29-4bb6-9043-0cc7d90bf396.png`: 은발 여성의1행×4열. 아래 공통 요구와 각 인물 원화 참조를 사용했다.

> Supplementary actual walking game sprite frames, transparent PNG. Preserve character identity and costume colors/materials/proportions/style. Constant body size and feet baseline within each cell, facing 3/4 front right slightly above. The visible near arm swings forward/right rather than always backward. Near thigh-pouch leg trails backward/left and far leg steps forward/right. Four poses: opposite full contact, midstance, close legs passing, opposite toe-off. Full head, boots and coat contained in each cell; no overlap, grid, text, platform, floor, background, weapons or extra objects. Keep real alpha and crisp cel-shaded rendering.

보충 부분은 프롬프트의 공통 요약이다. 생성 지시에 보행 위상을 지정했다고 해서 완전한8방향·골격 애니메이션을 제공한다고 주장하지 않는다. 실제 사용 결과는 게임 화면과 [검수 기록](../../docs/REBUILD_VERIFY.md)에서 확인한다.
