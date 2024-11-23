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
