import { MaterialItem, SynthesisItem } from "../items.ts";

export const materialItems: MaterialItem[] = [
  MaterialItem.new("きれいな水", [{ name: "水" }]),
  MaterialItem.new("ヤギミルク水", [{ name: "水" }, { name: "食材" }]),
  MaterialItem.new("ナナシ草", [{ name: "植物" }]),
  MaterialItem.new("アオツメクサ", [{ name: "植物" }, { name: "花" }]),
  MaterialItem.new("ヴァッサ麦", [{ name: "植物" }, { name: "食材" }]),
  MaterialItem.new("スイートリーフ", [{ name: "植物" }, { name: "食材" }]),
  MaterialItem.new("うに", [{ name: "うに" }]),
  MaterialItem.new("病忘れの花", [{ name: "花" }, { name: "薬の材料" }]),
  MaterialItem.new("北風の花", [{ name: "花" }, { name: "毒の材料" }]),
  MaterialItem.new("陽気な蜜花", [{ name: "花" }, { name: "調味料" }]),
  MaterialItem.new("ランタン草", [
    { name: "花" },
    { name: "植物" },
    { name: "神秘の力" },
  ]),
  MaterialItem.new("トーン", [{ name: "薬の材料" }, { name: "植物" }]),
  MaterialItem.new("セイタカトーン", [{ name: "薬の材料" }, { name: "植物" }]),
  MaterialItem.new("苦い根っこ", [{ name: "薬の材料" }, { name: "毒の材料" }]),
  MaterialItem.new("クスリゴケ", [{ name: "薬の材料" }, { name: "植物" }]),
  MaterialItem.new("クミネの実", [{ name: "毒の材料" }, { name: "食材" }]),
  MaterialItem.new("やわらかい砂", [{ name: "砂" }]),
  MaterialItem.new("白灰砂", [{ name: "砂" }]),
  MaterialItem.new("砂石", [{ name: "石材" }]),
  MaterialItem.new("甘露岩", [{ name: "石材" }, { name: "調味料" }]),
  MaterialItem.new("風化した石材", [{ name: "石材" }]),
  MaterialItem.new("古代の石柱", [{ name: "石材" }]),
  MaterialItem.new("セキネツ鉱", [{ name: "鉱石" }, { name: "火薬" }]),
  MaterialItem.new("アクア鉱", [{ name: "鉱石" }, { name: "水" }]),
  MaterialItem.new("イナズマ鉱", [{ name: "鉱石" }, { name: "原石" }]),
  MaterialItem.new("アマタイト鉱", [{ name: "鉱石" }]),
  MaterialItem.new("コベリナイト", [{ name: "鉱石" }]),
  MaterialItem.new("小さな晶石", [{ name: "原石" }, { name: "神秘の力" }]),
  MaterialItem.new("正体不明の原石", [{ name: "原石" }]),
  MaterialItem.new("大貝の白玉", [{ name: "原石" }, { name: "魚介類" }]),
];

export const synthesisItems: SynthesisItem[] = [
  SynthesisItem.new("中和剤・赤", [{ name: "中和剤" }], 1, {
    items: [
      { kind: "category", category: { name: "花" } },
      { kind: "category", category: { name: "水" } },
    ],
  }),
];
