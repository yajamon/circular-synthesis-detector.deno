import { MaterialItem, SynthesisItem } from "../items.ts";

export const materialItems: MaterialItem[] = [
  MaterialItem.new("きれいな水", [{ name: "水" }]),
  MaterialItem.new("ヤギミルク水", [{ name: "水" }, { name: "食材" }]),
  MaterialItem.new("ナナシ草", [{ name: "植物" }]),
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
