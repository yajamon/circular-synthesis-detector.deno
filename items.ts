/**
 * アイテムの共通インターフェース
 */
export interface Item {
  name: string;
  category: [SynthesisCategory];
}

/**
 * 調合カテゴリ
 */
export interface SynthesisCategory {
  name: string;
}

/**
 * 素材アイテム
 */
export interface MaterialItem extends Item {
}

/**
 * 調合アイテム
 */
export interface SynthesisItem extends Item {
  synthesisLevel: number;
}

/**
 * 調合レシピ
 */
export interface SynthesisRecipe {
  items: [SynthesisRecipeElement];
}

/**
 * 調合レシピの要素
 *
 * 調合レシピの要素は、特定のアイテムか、特定のカテゴリに属するアイテムを要求する。
 */
type SynthesisRecipeElement = {
  kind: "specific";
  item: Item;
} | {
  kind: "category";
  category: SynthesisCategory;
};
