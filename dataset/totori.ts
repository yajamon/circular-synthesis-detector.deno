import { MaterialItem, SynthesisItem } from "../items.ts";

export const materialItems: MaterialItem[] = [
  MaterialItem.new("マジックグラス", [
    { name: "植物類" },
    { name: "薬の材料" },
    { name: "中和剤" },
  ]),
  MaterialItem.new("マンドラゴラの根", [
    { name: "薬の材料" },
    { name: "エリキシル" },
    { name: "毒の材料" },
    { name: "中和剤" },
  ]),
  MaterialItem.new("水", [{ name: "液体" }, { name: "中和剤" }]),
];

export const synthesisItems: SynthesisItem[] = [
  SynthesisItem.new("ヒーリングサルヴ", [{ name: "薬品" }], 1, {
    items: [
      { kind: "category", category: { name: "植物類" } },
      { kind: "specific", item: { name: "マンドラゴラの根" } },
      { kind: "specific", item: { name: "水" } },
    ],
  }),
  SynthesisItem.new("錬金炭", [{ name: "雑貨" }, { name: "火薬" }], 7, {
    items: [
      { kind: "category", category: { name: "木材" } },
      { kind: "category", category: { name: "火薬" } },
    ],
  }),
  SynthesisItem.new("薬のもと", [{ name: "薬の材料" }], 15, {
    items: [
      { kind: "category", category: { name: "薬の材料" } },
      { kind: "category", category: { name: "植物類" } },
    ],
  }),
];
