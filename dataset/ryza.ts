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
  MaterialItem.new("乾いた木くず", [{ name: "火薬" }]),
  MaterialItem.new("紙くず", [{ name: "燃料" }]),
  MaterialItem.new("よく燃える樹皮", [{ name: "燃料" }, { name: "木材" }]),
  MaterialItem.new("パルマ樹皮", [{ name: "燃料" }, { name: "木材" }]),
  MaterialItem.new("自然油", [{ name: "燃料" }]),
  MaterialItem.new("ノライモ", [{ name: "食材" }]),
  MaterialItem.new("ケモノ肉", [{ name: "食材" }]),
  MaterialItem.new("新鮮な肉", [{ name: "食材" }]),
  MaterialItem.new("クーケンフルーツ", [
    { name: "食材" },
    { name: "薬の材料" },
  ]),
  MaterialItem.new("何かのタマゴ", [{ name: "食材" }, { name: "燃料" }]),
  MaterialItem.new("七色葡萄", [{ name: "木の実" }]),
  MaterialItem.new("パルマの実", [{ name: "木の実" }, { name: "水" }]),
  MaterialItem.new("フレスベリー", [{ name: "木の実" }, { name: "調味料" }]),
  MaterialItem.new("アブラ木の実", [
    { name: "木の実" },
    { name: "食材" },
    { name: "燃料" },
  ]),
  MaterialItem.new("ハチの巣", [{ name: "ハチの巣" }, { name: "火薬" }]),
  MaterialItem.new("銀のハチの巣", [{ name: "ハチの巣" }, { name: "火薬" }]),
  MaterialItem.new("アイヒェロア", [{ name: "きのこ" }]),
  MaterialItem.new("群体きのこ", [{ name: "きのこ" }]),
  MaterialItem.new("ユピトピニオン", [{ name: "きのこ" }, { name: "気体" }]),
  MaterialItem.new("きれいな貝殻", [{ name: "魚介類" }]),
  MaterialItem.new("サルディン", [{ name: "魚介類" }]),
  MaterialItem.new("エグゾフィッシュ", [{ name: "魚介類" }, { name: "気体" }]),
  MaterialItem.new("プルムル", [{ name: "魚介類" }, { name: "鉱石" }]),
  MaterialItem.new("シュラブ", [{ name: "魚介類" }]),
  MaterialItem.new("ナナホシ", [{ name: "虫" }]),
  MaterialItem.new("ハニーアント", [{ name: "虫" }, { name: "調味料" }]),
  MaterialItem.new("束縛する鋼糸", [{ name: "糸素材" }]),
  MaterialItem.new("丈夫なつる", [{ name: "糸素材" }, { name: "植物" }]),
  MaterialItem.new("綿毛草", [{ name: "糸素材" }, { name: "植物" }]),
  MaterialItem.new("アイヒェ", [{ name: "木材" }]),
  MaterialItem.new("丈夫な丸太", [{ name: "木材" }]),
  MaterialItem.new("ウィングプラント", [{ name: "植物" }, { name: "気体" }]),
  MaterialItem.new("ぷにぷに玉・青", [{ name: "ぷにぷに" }]),
  MaterialItem.new("ぷにぷに玉・緑", [{ name: "ぷにぷに" }]),
  MaterialItem.new("大きな羽根", [{ name: "動物素材" }]),
  MaterialItem.new("動物の毛皮", [{ name: "動物素材" }]),
  MaterialItem.new("大きな骨", [{ name: "動物素材" }]),
  MaterialItem.new("ヘビの脱け殻", [{ name: "動物素材" }]),
  MaterialItem.new("魔石の欠片", [{ name: "神秘の力" }]),
  MaterialItem.new("スピリットフラワー", [
    { name: "花" },
    { name: "神秘の力" },
  ]),
  MaterialItem.new("大ぷに玉", [{ name: "ぷにぷに" }]),
  MaterialItem.new("ヤギ肉", [{ name: "重要" }]),
  MaterialItem.new("塩草", [{ name: "植物" }]),
];

export const synthesisItems: SynthesisItem[] = [
  SynthesisItem.new("爆粉うに", [{ name: "爆弾" }], 2, {
    items: [
      { kind: "category", category: { name: "うに" } },
      { kind: "category", category: { name: "火薬" } },
      { kind: "category", category: { name: "燃料" } },
    ],
  }),
  SynthesisItem.new("クラフト", [{ name: "爆弾" }], 4, {
    items: [
      { kind: "category", category: { name: "うに" } },
      { kind: "category", category: { name: "火薬" } },
      { kind: "category", category: { name: "燃料" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
  SynthesisItem.new("フラム", [{ name: "爆弾" }], 6, {
    items: [
      { kind: "specific", item: { name: "セキネツ鉱" } },
      { kind: "category", category: { name: "火薬" } },
      { kind: "category", category: { name: "燃料" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
  SynthesisItem.new("グラスビーンズ", [{ name: "薬品" }], 2, {
    items: [
      { kind: "category", category: { name: "薬の材料" } },
      { kind: "category", category: { name: "花" } },
      { kind: "category", category: { name: "食材" } },
    ],
  }),
  SynthesisItem.new("ドライビスク", [{ name: "食品" }], 4, {
    items: [
      { kind: "specific", item: { name: "小麦粉" } },
      { kind: "specific", item: { name: "クーケンフルーツ" } },
      { kind: "category", category: { name: "薬の材料" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
  SynthesisItem.new("施しの軟膏", [{ name: "薬品" }], 5, {
    items: [
      { kind: "specific", item: { name: "苦い根っこ" } },
      { kind: "category", category: { name: "薬の材料" } },
      { kind: "category", category: { name: "花" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
  SynthesisItem.new("草刈り鎌", [{ name: "採取" }], 4, {
    items: [
      { kind: "specific", item: { name: "大きな骨" } },
      { kind: "specific", item: { name: "研磨剤" } },
      { kind: "category", category: { name: "金属" } },
      { kind: "category", category: { name: "木材" } },
    ],
  }),
  SynthesisItem.new("薪割り斧", [{ name: "採取" }], 5, {
    items: [
      { kind: "specific", item: { name: "アイヒェ" } },
      { kind: "specific", item: { name: "研磨剤" } },
      { kind: "category", category: { name: "金属" } },
      { kind: "category", category: { name: "燃料" } },
    ],
  }),
  SynthesisItem.new("ハンマー", [{ name: "採取" }], 13, {
    items: [
      { kind: "specific", item: { name: "白霊岩" } },
      { kind: "specific", item: { name: "丈夫な丸太" } },
      { kind: "specific", item: { name: "風化した石材" } },
      { kind: "category", category: { name: "神秘の力" } },
    ],
  }),
  SynthesisItem.new("フラムロッド", [{ name: "採取" }], 28, {
    items: [
      { kind: "specific", item: { name: "聖樹の大枝" } },
      { kind: "specific", item: { name: "フラム" } },
      { kind: "category", category: { name: "宝石" } },
      { kind: "category", category: { name: "火薬" } },
    ],
  }),
  SynthesisItem.new("釣り竿", [{ name: "採取" }], 10, {
    items: [
      { kind: "specific", item: { name: "おいしい練り餌" } },
      { kind: "specific", item: { name: "錬金繊維" } },
      { kind: "category", category: { name: "木材" } },
      { kind: "category", category: { name: "虫" } },
    ],
  }),
  SynthesisItem.new("虫取り網", [{ name: "採取" }], 14, {
    items: [
      { kind: "specific", item: { name: "香る蜜木" } },
      { kind: "specific", item: { name: "錬金繊維" } },
      { kind: "category", category: { name: "木材" } },
      { kind: "category", category: { name: "気体" } },
    ],
  }),
  SynthesisItem.new("中和剤・赤", [{ name: "中和剤" }], 1, {
    items: [
      { kind: "category", category: { name: "花" } },
      { kind: "category", category: { name: "水" } },
    ],
  }),
  SynthesisItem.new("中和剤・青", [{ name: "中和剤" }], 1, {
    items: [
      { kind: "category", category: { name: "魚介類" } },
      { kind: "category", category: { name: "水" } },
    ],
  }),
  SynthesisItem.new("中和剤・黄", [{ name: "中和剤" }], 1, {
    items: [
      { kind: "category", category: { name: "砂" } },
      { kind: "category", category: { name: "水" } },
    ],
  }),
  SynthesisItem.new("中和剤・緑", [{ name: "中和剤" }], 1, {
    items: [
      { kind: "category", category: { name: "植物" } },
      { kind: "category", category: { name: "水" } },
    ],
  }),
  SynthesisItem.new("研磨剤", [{ name: "雑貨" }], 2, {
    items: [
      { kind: "specific", item: { name: "白灰砂" } },
      { kind: "category", category: { name: "砂" } },
      { kind: "category", category: { name: "鉱石" } },
    ],
  }),
  SynthesisItem.new("ゼッテル", [{ name: "雑貨" }, { name: "燃料" }], 9, {
    items: [
      { kind: "specific", item: { name: "紙くず" } },
      { kind: "category", category: { name: "植物" } },
      { kind: "category", category: { name: "水" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
];
