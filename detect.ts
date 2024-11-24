import {
  ItemName,
  MaterialItem,
  SynthesisCategory,
  SynthesisItem,
} from "./items.ts";

export const detectCircularSynthesisPathsBottomUp = (
  materiarItems: MaterialItem[],
  synthesisItems: SynthesisItem[],
  targetItemName: ItemName,
): SynthesisItem[][] => {
  const materialItemMap = new Map<ItemName, MaterialItem>();
  const synthesisItemMap = new Map<ItemName, SynthesisItem>();
  type CategoryMapElement = {
    kind: "material" | "synthesis";
    name: ItemName;
  };
  const categoriesMap = new Map<SynthesisCategory, Set<CategoryMapElement>>();

  // 探索のためにマップに変換
  for (const item of materiarItems) {
    materialItemMap.set(item.name, item);
    for (const category of item.category) {
      // カテゴリから逆引きできるようにする
      if (!categoriesMap.has(category)) {
        categoriesMap.set(category, new Set());
      }
      categoriesMap.get(category)!.add({ kind: "material", name: item.name });
    }
  }
  for (const item of synthesisItems) {
    synthesisItemMap.set(item.name, item);
    for (const category of item.category) {
      // カテゴリから逆引きできるようにする
      if (!categoriesMap.has(category)) {
        categoriesMap.set(category, new Set());
      }
      categoriesMap.get(category)!.add({ kind: "synthesis", name: item.name });
    }
  }

  // 探索する

  return [];
};
