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
