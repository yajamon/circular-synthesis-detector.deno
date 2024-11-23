/**
 * アイテムの共通インターフェース
 */
export interface Item {
  name: ItemName;
  category: SynthesisCategory[];
}

type ItemName = string;

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
export const MaterialItem = {
  new: (name: string, category: SynthesisCategory[]): Item => {
    return {
      name,
      category,
    };
  },
};

/**
 * 調合アイテム
 */
export interface SynthesisItem extends Item {
  synthesisLevel: number;
  recipe: SynthesisRecipe;
}
export const SynthesisItem = {
  new: (
    name: string,
    category: SynthesisCategory[],
    synthesisLevel: number,
    recipe: SynthesisRecipe,
  ): SynthesisItem => {
    return {
      name,
      category,
      synthesisLevel,
      recipe,
    };
  },
};

/**
 * 調合レシピ
 */
export interface SynthesisRecipe {
  items: SynthesisRecipeElement[];
}

/**
 * 調合レシピの要素
 *
 * 調合レシピの要素は、特定のアイテムか、特定のカテゴリに属するアイテムを要求する。
 */
type SynthesisRecipeElement = {
  kind: "specific";
  item: { name: ItemName };
} | {
  kind: "category";
  category: SynthesisCategory;
};
