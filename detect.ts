import type {
  Item,
  ItemName,
  MaterialItem,
  SynthesisCategory,
  SynthesisItem,
} from "./items.ts";

export const detectSynthesisPathsBottumUp = (
  materialItems: MaterialItem[],
  synthesisItems: SynthesisItem[],
  beginItemName: ItemName,
  targetItemName: ItemName,
): Item[][] => {
  return [];
};

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

  // 素材を要求するアイテムを逆引きできるようにする
  type ReverceRecipeMapKey = `specific-${string}` | `category-${string}`;
  const reverseRecipeMap = new Map<ReverceRecipeMapKey, Set<ItemName>>();

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
    // レシピから逆引きできるようにする
    for (const el of item.recipe.items) {
      if (el.kind === "category") {
        const key: ReverceRecipeMapKey = `category-${el.category.name}`;
        if (!reverseRecipeMap.has(key)) {
          reverseRecipeMap.set(key, new Set());
        }
        reverseRecipeMap.get(key)!.add(item.name);
      } else if (el.kind === "specific") {
        const key: ReverceRecipeMapKey = `specific-${el.item.name}`;
        if (!reverseRecipeMap.has(key)) {
          reverseRecipeMap.set(key, new Set());
        }
        reverseRecipeMap.get(key)!.add(item.name);
      }
    }
  }

  // console.log(materialItemMap);
  // console.log(synthesisItemMap);
  // console.log(categoriesMap);
  // console.log(reverseRecipeMap);

  // 探索する
  type Path = SynthesisItem[];
  const queue: [SynthesisItem, Path][] = []; // できれば配列じゃないほうが良いのでは…
  const visited = new Set<ItemName>();
  const entrypint = synthesisItemMap.get(targetItemName);
  if (!entrypint) {
    return [];
  }
  const result: SynthesisItem[][] = [];

  queue.push([entrypint, [entrypint]]);
  visited.add(entrypint.name);
  while (queue.length > 0) {
    const [current, path] = queue.shift()!;

    // currentを素材にする調合を探す

    // アイテム指定から
    {
      const key: ReverceRecipeMapKey = `specific-${current.name}`;
      const nameSet = reverseRecipeMap.get(key);
      if (nameSet) {
        // アイテム指定の調合がある
        for (const nextItemName of nameSet) {
          // 目的の循環調合を発見した
          if (nextItemName === targetItemName) {
            const next = synthesisItemMap.get(nextItemName)!;
            const res = [...path, next];
            // console.log("目的の循環調合を発見した", res.map((p) => p.name));
            result.push(res);
          }

          if (visited.has(nextItemName)) {
            // 探索済み
            continue;
          }
          const next = synthesisItemMap.get(nextItemName);
          if (!next) {
            // 素材になる調合がない
            continue;
          }
          queue.push([next, [...path, next]]);
          visited.add(next.name);
        }
      }
    }

    // カテゴリ指定から
    for (const cat of current.category) {
      const key: ReverceRecipeMapKey = `category-${cat.name}`;
      if (!reverseRecipeMap.has(key)) {
        // このカテゴリを要求する調合はない
        // console.log("このカテゴリを要求する調合はない", key);
        continue;
      }
      for (const nextItemName of reverseRecipeMap.get(key)!) {
        // 目的の循環調合を発見した
        if (nextItemName === targetItemName) {
          const next = synthesisItemMap.get(nextItemName)!;
          const res = [...path, next];
          // console.log("目的の循環調合を発見した", res.map((p) => p.name));
          result.push(res);
        }

        if (visited.has(nextItemName)) {
          // 探索済み
          continue;
        }
        const next = synthesisItemMap.get(nextItemName);
        if (!next) {
          // 素材になる調合がない
          continue;
        }
        queue.push([next, [...path, next]]);
        visited.add(next.name);
      }
    }
  }

  return result;
};
