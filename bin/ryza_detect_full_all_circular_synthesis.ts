import { detectCircularSynthesisPathsBottomUp } from "../detect.ts";

import {
  appendCategoryEffects,
  materialItems,
  synthesisItems,
} from "../dataset/ryza.ts";
import type { SynthesisCategory } from "../items.ts";

// カテゴリ追加をアイテムごとにまとめる
const effects = new Map<string, SynthesisCategory[]>();
for (const ef of appendCategoryEffects) {
  const { category, items } = ef;
  for (const item of items) {
    if (!effects.has(item)) {
      effects.set(item, []);
    }
    effects.get(item)!.push(category);
  }
}

// カテゴリ追加を適用する
for (const item of synthesisItems) {
  const itemName = item.name;
  if (effects.has(itemName)) {
    item.category.push(...effects.get(itemName)!);
  }
}

// 全ての調合アイテムに対して、循環する調合パスを探す
for (const item of synthesisItems) {
  const itemName = item.name;

  const result = detectCircularSynthesisPathsBottomUp(
    materialItems,
    synthesisItems,
    itemName,
  );

  for (const path of result) {
    console.log(path.map((item) => item.name).join(" -> "));
  }
}
