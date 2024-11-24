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
];

export const synthesisItems: SynthesisItem[] = [
  SynthesisItem.new("中和剤・赤", [{ name: "中和剤" }], 1, {
    items: [
      { kind: "category", category: { name: "花" } },
      { kind: "category", category: { name: "水" } },
    ],
  }),
];
