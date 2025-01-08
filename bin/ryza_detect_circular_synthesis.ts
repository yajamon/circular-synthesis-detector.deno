import { detectCircularSynthesisPathsBottomUp } from "../detect.ts";
import type { SynthesisCategory } from "../items.ts";

import {
  appendCategoryEffects,
  materialItems,
  synthesisItems,
} from "../dataset/ryza.ts";

import { parseArgs } from "jsr:@std/cli";

const parsed = parseArgs(Deno.args, {
  alias: { "append-category": "a" },
  boolean: ["append-category"],
});

if (parsed._.length < 1) {
  console.error("Usage: deno run task_ryza.ts <item name>");
  Deno.exit(1);
}

if (parsed["append-category"]) {
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
}

const itemName = parsed._[0].toString();

const result = detectCircularSynthesisPathsBottomUp(
  materialItems,
  synthesisItems,
  itemName,
);

for (const path of result) {
  console.log(path.map((item) => item.name).join(" -> "));
}
