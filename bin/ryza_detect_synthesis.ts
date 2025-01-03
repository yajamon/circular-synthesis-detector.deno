import { parseArgs } from "jsr:@std/cli";

import { detectSynthesisPathsBottumUp } from "../detect.ts";
import type { SynthesisCategory } from "../items.ts";

import {
  appendCategoryEffects,
  materialItems,
  synthesisItems,
} from "../dataset/ryza.ts";

const parsed = parseArgs(Deno.args, {
  alias: { "append-category": "a" },
  boolean: ["append-category"],
});

if (parsed._.length < 2) {
  console.error(
    "Usage: deno run task_ryza.ts <base item name> <target item name>",
  );
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

const baseItemName = parsed._[0].toString();
const targetItemName = parsed._[1].toString();

const result = detectSynthesisPathsBottumUp(
  materialItems,
  synthesisItems,
  baseItemName,
  targetItemName,
);

for (const path of result) {
  console.log(path.map((item) => item.name).join(" -> "));
}
