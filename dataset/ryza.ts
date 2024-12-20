import { MaterialItem, SynthesisItem } from "../items.ts";

export const materialItems: MaterialItem[] = [
  MaterialItem.new("きれいな水", [{ name: "水" }]),
  MaterialItem.new("ヤギミルク", [{ name: "水" }, { name: "食材" }]),
  MaterialItem.new("植物エキス", [{ name: "水" }, { name: "薬の材料" }]),
  MaterialItem.new("ロテスヴァッサ鉱水", [
    { name: "水" },
    { name: "毒の材料" },
  ]),
  MaterialItem.new("泡立つ水", [{ name: "水" }, { name: "気体" }]),
  MaterialItem.new("ナナシ草", [{ name: "植物" }]),
  MaterialItem.new("コゲクサ", [{ name: "植物" }, { name: "燃料" }]),
  MaterialItem.new("幸せクローバー", [{ name: "植物" }, { name: "花" }, {
    name: "神秘の力",
  }]),
  MaterialItem.new("アオツメクサ", [{ name: "植物" }, { name: "花" }]),
  MaterialItem.new("食毒草", [{ name: "植物" }, { name: "毒の材料" }]),
  MaterialItem.new("ヴァッサ麦", [{ name: "植物" }, { name: "食材" }]),
  MaterialItem.new("メイプルリープ", [
    { name: "植物" },
    { name: "燃料" },
    { name: "エリキシル" },
  ]),
  MaterialItem.new("スイートリーフ", [{ name: "植物" }, { name: "食材" }]),
  MaterialItem.new("古代樹の枝", [
    { name: "植物" },
    { name: "エリキシル" },
    { name: "木材" },
  ]),
  MaterialItem.new("うに", [{ name: "うに" }]),
  MaterialItem.new("銀うに", [{ name: "うに" }, { name: "金属" }]),
  MaterialItem.new("黄金うに", [
    { name: "うに" },
    { name: "金属" },
    { name: "神秘の力" },
  ]),
  MaterialItem.new("病忘れの花", [{ name: "花" }, { name: "薬の材料" }]),
  MaterialItem.new("北風の花", [{ name: "花" }, { name: "毒の材料" }]),
  MaterialItem.new("陽気な蜜花", [{ name: "花" }, { name: "調味料" }]),
  MaterialItem.new("祝福の清花", [{ name: "花" }, { name: "神秘の力" }]),
  MaterialItem.new("追憶の霧花", [{ name: "花" }, { name: "燃料" }]),
  MaterialItem.new("静寂の月花", [{ name: "花" }, { name: "薬の材料" }]),
  MaterialItem.new("夜光花", [{ name: "花" }, { name: "薬の材料" }]),
  MaterialItem.new("ランタン草", [
    { name: "花" },
    { name: "植物" },
    { name: "神秘の力" },
  ]),
  MaterialItem.new("シャボン草", [
    { name: "花" },
    { name: "植物" },
    { name: "気体" },
  ]),
  MaterialItem.new("安らぎの花", [{ name: "花" }, { name: "薬の材料" }]),
  MaterialItem.new("清水の白姫", [
    { name: "花" },
    { name: "薬の材料" },
    { name: "エリキシル" },
  ]),
  MaterialItem.new("トーン", [{ name: "薬の材料" }, { name: "植物" }]),
  MaterialItem.new("セイタカトーン", [{ name: "薬の材料" }, { name: "植物" }]),
  MaterialItem.new("変異トーン", [{ name: "薬の材料" }, { name: "植物" }]),
  MaterialItem.new("三つ子トーン", [{ name: "薬の材料" }, { name: "植物" }]),
  MaterialItem.new("紅草", [{ name: "薬の材料" }, { name: "エリキシル" }]),
  MaterialItem.new("苦い根っこ", [{ name: "薬の材料" }, { name: "毒の材料" }]),
  MaterialItem.new("若木の枝葉", [{ name: "薬の材料" }, { name: "神秘の力" }]),
  MaterialItem.new("クスリゴケ", [{ name: "薬の材料" }, { name: "植物" }]),
  MaterialItem.new("肥沃な土壌", [{ name: "薬の材料" }, { name: "燃料" }]),
  MaterialItem.new("クミネの実", [{ name: "毒の材料" }, { name: "食材" }]),
  MaterialItem.new("クミネの毒液", [{ name: "毒の材料" }, { name: "水" }]),
  MaterialItem.new("腐木の樹皮", [{ name: "毒の材料" }, { name: "燃料" }]),
  MaterialItem.new("怨嗟の叫び", [{ name: "毒の材料" }, { name: "植物" }]),
  MaterialItem.new("キノコパウダー", [{ name: "毒の材料" }, { name: "気体" }]),
  MaterialItem.new("森の賢人", [{ name: "エリキシル" }, { name: "薬の材料" }]),
  MaterialItem.new("やわらかい砂", [{ name: "砂" }]),
  MaterialItem.new("燃える砂", [{ name: "砂" }, { name: "燃料" }]),
  MaterialItem.new("白灰砂", [{ name: "砂" }]),
  MaterialItem.new("汚染された腐葉土", [
    { name: "砂" },
    { name: "燃料" },
    { name: "毒の材料" },
  ]),
  MaterialItem.new("砂石", [{ name: "石材" }]),
  MaterialItem.new("甘露岩", [{ name: "石材" }, { name: "調味料" }]),
  MaterialItem.new("風化した石材", [{ name: "石材" }]),
  MaterialItem.new("古代の石柱", [{ name: "石材" }]),
  MaterialItem.new("サンゴ石", [{ name: "石材" }, { name: "原石" }]),
  MaterialItem.new("洞窟サンゴ", [{ name: "石材" }]),
  MaterialItem.new("リバーストン", [{ name: "石材" }, { name: "原石" }]),
  MaterialItem.new("水辺の苔石", [{ name: "石材" }, { name: "砂" }]),
  MaterialItem.new("鍾乳石の欠片", [{ name: "石材" }]),
  MaterialItem.new("白霊岩", [{ name: "石材" }]),
  MaterialItem.new("セキネツ鉱", [{ name: "鉱石" }, { name: "火薬" }]),
  MaterialItem.new("アクア鉱", [{ name: "鉱石" }, { name: "水" }]),
  MaterialItem.new("イナズマ鉱", [{ name: "鉱石" }, { name: "原石" }]),
  MaterialItem.new("アマタイト鉱", [{ name: "鉱石" }]),
  MaterialItem.new("コベリナイト", [{ name: "鉱石" }]),
  MaterialItem.new("ペントナイト", [{ name: "鉱石" }]),
  MaterialItem.new("モルディナイト", [{ name: "鉱石" }]),
  MaterialItem.new("彗星岩", [{ name: "鉱石" }, { name: "神秘の力" }]),
  MaterialItem.new("小さな晶石", [{ name: "原石" }, { name: "神秘の力" }]),
  MaterialItem.new("正体不明の原石", [{ name: "原石" }]),
  MaterialItem.new("大貝の白玉", [{ name: "原石" }, { name: "魚介類" }]),
  MaterialItem.new("琥珀の欠片", [{ name: "原石" }, { name: "砂" }]),
  MaterialItem.new("琥珀水晶", [{ name: "原石" }, { name: "鉱石" }]),
  MaterialItem.new("マグネマルモア", [{ name: "原石" }]),
  MaterialItem.new("乾いた木くず", [{ name: "火薬" }]),
  MaterialItem.new("マグマパウダー", [{ name: "火薬" }]),
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
  MaterialItem.new("甘露の実", [
    { name: "木の実" },
    { name: "食材" },
    { name: "調味料" },
  ]),
  MaterialItem.new("ハチの巣", [{ name: "ハチの巣" }, { name: "火薬" }]),
  MaterialItem.new("銀のハチの巣", [{ name: "ハチの巣" }, { name: "火薬" }]),
  MaterialItem.new("アイヒェロア", [{ name: "きのこ" }]),
  MaterialItem.new("夢見るきのこ", [{ name: "きのこ" }, { name: "気体" }]),
  MaterialItem.new("群体きのこ", [{ name: "きのこ" }]),
  MaterialItem.new("ユピトピニオン", [{ name: "きのこ" }, { name: "気体" }]),
  MaterialItem.new("きれいな貝殻", [{ name: "魚介類" }]),
  MaterialItem.new("サルディン", [{ name: "魚介類" }]),
  MaterialItem.new("エグゾフィッシュ", [{ name: "魚介類" }, { name: "気体" }]),
  MaterialItem.new("トゲトゲ", [{ name: "魚介類" }]),
  MaterialItem.new("セリヨル", [{ name: "魚介類" }]),
  MaterialItem.new("プルムル", [{ name: "魚介類" }, { name: "鉱石" }]),
  MaterialItem.new("シュラブ", [{ name: "魚介類" }]),
  MaterialItem.new("シゾール", [{ name: "魚介類" }]),
  MaterialItem.new("ソーンフィッシュ", [{ name: "魚介類" }]),
  MaterialItem.new("メイスフィッシュ", [{ name: "魚介類" }]),
  MaterialItem.new("ナナホシ", [{ name: "虫" }]),
  MaterialItem.new("ハニーアント", [{ name: "虫" }, { name: "調味料" }]),
  MaterialItem.new("灯篭ホタル", [{ name: "虫" }, { name: "神秘の力" }]),
  MaterialItem.new("ローズビー", [{ name: "虫" }, { name: "毒の材料" }]),
  MaterialItem.new("オオカブト", [{ name: "虫" }, { name: "鉱石" }]),
  MaterialItem.new("フラムドラグーン", [{ name: "虫" }, { name: "気体" }]),
  MaterialItem.new("スピアワーム", [{ name: "虫" }, { name: "薬の材料" }]),
  MaterialItem.new("アンバーフライ", [{ name: "虫" }, { name: "原石" }]),
  MaterialItem.new("ラピス・パピヨン", [{ name: "虫" }, { name: "神秘の力" }]),
  MaterialItem.new("ベビーヴルム", [{ name: "虫" }, { name: "竜素材" }]),
  MaterialItem.new("束縛する鋼糸", [{ name: "糸素材" }]),
  MaterialItem.new("丈夫なつる", [{ name: "糸素材" }, { name: "植物" }]),
  MaterialItem.new("綿毛草", [{ name: "糸素材" }, { name: "植物" }]),
  MaterialItem.new("アイヒェ", [{ name: "木材" }]),
  MaterialItem.new("丈夫な丸太", [{ name: "木材" }]),
  MaterialItem.new("苔むした流木", [{ name: "木材" }, { name: "植物" }]),
  MaterialItem.new("パルマ", [{ name: "木材" }]),
  MaterialItem.new("化石樹", [{ name: "木材" }]),
  MaterialItem.new("香る蜜木", [{ name: "木材" }, { name: "気体" }]),
  MaterialItem.new("異界の腐木", [{ name: "木材" }, { name: "毒の材料" }]),
  MaterialItem.new("ウィングプラント", [{ name: "植物" }, { name: "気体" }]),
  MaterialItem.new("スカイバブル", [{ name: "気体" }]),
  MaterialItem.new("ぷにぷに玉・青", [{ name: "ぷにぷに" }]),
  MaterialItem.new("ぷにぷに玉・緑", [{ name: "ぷにぷに" }]),
  MaterialItem.new("ぷにぷに玉・赤", [{ name: "ぷにぷに" }]),
  MaterialItem.new("ぷにぷに玉・黒", [{ name: "ぷにぷに" }]),
  MaterialItem.new("ぷにぷに玉・銀", [{ name: "ぷにぷに" }, { name: "宝石" }]),
  MaterialItem.new("ぷにぷに玉・金", [{ name: "ぷにぷに" }, { name: "宝石" }]),
  MaterialItem.new("大きな羽根", [{ name: "動物素材" }]),
  MaterialItem.new("動物の毛皮", [{ name: "動物素材" }]),
  MaterialItem.new("大きな骨", [{ name: "動物素材" }]),
  MaterialItem.new("ヘビの脱け殻", [{ name: "動物素材" }]),
  MaterialItem.new("巨獣の化石", [{ name: "動物素材" }]),
  MaterialItem.new("魔石の欠片", [{ name: "神秘の力" }]),
  MaterialItem.new("闇水晶の欠片", [
    { name: "神秘の力" },
    { name: "毒の材料" },
  ]),
  MaterialItem.new("魔導書の切れ端", [{ name: "神秘の力" }, { name: "燃料" }]),
  MaterialItem.new("古びた魔導書", [{ name: "神秘の力" }, { name: "燃料" }]),
  MaterialItem.new("メイブル樹皮", [{ name: "調味料" }, { name: "燃料" }]),
  MaterialItem.new("蜜木の枝", [{ name: "調味料" }, { name: "木材" }]),
  MaterialItem.new("スピリットフラワー", [
    { name: "花" },
    { name: "神秘の力" },
  ]),
  MaterialItem.new("スピリットフェザー", [
    { name: "糸素材" },
    { name: "神秘の力" },
  ]),
  MaterialItem.new("サビついた剣", [{ name: "金属" }]),
  MaterialItem.new("古き騎士の紋章", [{ name: "金属" }, { name: "神秘の力" }]),
  MaterialItem.new("魔獣の毒袋", [{ name: "毒の材料" }, { name: "動物素材" }]),
  MaterialItem.new("狂気の毒槍", [{ name: "毒の材料" }, { name: "動物素材" }]),
  MaterialItem.new("魔獣の背びれ", [
    { name: "食材" },
    { name: "動物素材" },
    { name: "糸素材" },
  ]),
  MaterialItem.new("土魚の暴牙", [{ name: "動物素材" }, { name: "毒の材料" }]),
  MaterialItem.new("甲獣の霊鎧", [
    { name: "鉱石" },
    { name: "原石" },
    { name: "虫" },
  ]),
  MaterialItem.new("魔獣の鱗", [{ name: "動物素材" }, { name: "鉱石" }]),
  MaterialItem.new("贖罪の大針", [{ name: "動物素材" }, { name: "毒の材料" }]),
  MaterialItem.new("竜肉", [{ name: "竜素材" }, { name: "食材" }]),
  MaterialItem.new("翼竜の翼", [{ name: "竜素材" }, { name: "気体" }]),
  MaterialItem.new("翼竜のタマゴ", [{ name: "竜素材" }, { name: "燃料" }]),
  MaterialItem.new("竜眼", [
    { name: "竜素材" },
    { name: "エリキシル" },
    { "name": "神秘の力" },
  ]),
  MaterialItem.new("大ぷに玉", [{ name: "ぷにぷに" }]),
  MaterialItem.new("巨大なツメ", [{ name: "動物素材" }]),
  MaterialItem.new("ゴーレムのコア", [{ name: "鉱石" }]),
  MaterialItem.new("英霊の魂", [{ name: "神秘の力" }]),
  MaterialItem.new("常世の焔", [
    { name: "燃料" },
    { name: "火薬" },
    { name: "神秘の力" },
  ]),
  MaterialItem.new("光る砂", [
    { name: "砂" },
    { name: "気体" },
    { name: "神秘の力" },
  ]),
  MaterialItem.new("太陽の花", [{ name: "花" }, { name: "エリキシル" }]),
  MaterialItem.new("永遠結晶", [{ name: "鉱石" }, { name: "原石" }]),
  MaterialItem.new("生ゴミ", [{ name: "食材" }, { name: "毒の材料" }]),
  MaterialItem.new("壊れた道具", [{ name: "金属" }, { name: "雑貨" }]),
  MaterialItem.new("燃えカス", [{ name: "毒の材料" }]),
  MaterialItem.new("ヤギ肉", [{ name: "重要" }]),
  MaterialItem.new("塩草", [{ name: "植物" }]),
  MaterialItem.new("共振の玉石", [{ name: "石材" }, { name: "金属" }]),
];

export const synthesisItems: SynthesisItem[] = [
  SynthesisItem.new("爆粉うに", [{ name: "爆弾" }], 2, {
    items: [
      { kind: "category", category: { name: "うに" } },
      { kind: "category", category: { name: "火薬" } },
      { kind: "category", category: { name: "燃料" } },
    ],
  }),
  SynthesisItem.new("氷びし", [{ name: "爆弾" }], 4, {
    items: [
      { kind: "category", category: { name: "水" } },
      { kind: "category", category: { name: "魚介類" } },
      { kind: "category", category: { name: "鉱石" } },
      { kind: "category", category: { name: "中和剤" } },
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
  SynthesisItem.new("レヘルン", [{ name: "爆弾" }], 8, {
    items: [
      { kind: "specific", item: { name: "アクア鉱" } },
      { kind: "category", category: { name: "水" } },
      { kind: "category", category: { name: "魚介類" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
  SynthesisItem.new("プラジグ", [{ name: "爆弾" }], 11, {
    items: [
      { kind: "specific", item: { name: "イナズマ鉱" } },
      { kind: "category", category: { name: "鉱石" } },
      { kind: "category", category: { name: "砂" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
  SynthesisItem.new("ルフト", [{ name: "爆弾" }], 10, {
    items: [
      { kind: "specific", item: { name: "ウィングプラント" } },
      { kind: "category", category: { name: "気体" } },
      { kind: "category", category: { name: "虫" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
  SynthesisItem.new("ノルデンブランド", [{ name: "魔法の道具" }], 18, {
    items: [
      { kind: "specific", item: { name: "レヘルン" } },
      { kind: "specific", item: { name: "スタルチウム" } },
      { kind: "category", category: { name: "水" } },
      { kind: "category", category: { name: "神秘の力" } },
    ],
  }),
  SynthesisItem.new("雷の呼び鈴", [{ name: "魔法の道具" }], 19, {
    items: [
      { kind: "specific", item: { name: "プラジグ" } },
      { kind: "specific", item: { name: "スタルチウム" } },
      { kind: "category", category: { name: "原石" } },
      { kind: "category", category: { name: "気体" } },
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
  SynthesisItem.new("ラーゼンプディング", [{ name: "食品" }], 14, {
    items: [
      { kind: "specific", item: { name: "何かのタマゴ" } },
      { kind: "specific", item: { name: "ハチミツ" } },
      { kind: "category", category: { name: "食材" } },
      { kind: "category", category: { name: "調味料" } },
    ],
  }),
  SynthesisItem.new("せせらぎの薫風", [{ name: "薬品" }], 16, {
    items: [
      { kind: "specific", item: { name: "スカイバブル" } },
      { kind: "specific", item: { name: "幸せクローバー" } },
      { kind: "category", category: { name: "気体" } },
      { kind: "category", category: { name: "きのこ" } },
    ],
  }),
  SynthesisItem.new("リストレア薬瓶", [{ name: "薬品" }], 19, {
    items: [
      { kind: "specific", item: { name: "ヒーリングチップ" } },
      { kind: "specific", item: { name: "森の賢人" } },
      { kind: "category", category: { name: "きのこ" } },
      { kind: "category", category: { name: "気体" } },
    ],
  }),
  SynthesisItem.new("ネクタル", [{ name: "薬品" }], 24, {
    items: [
      { kind: "specific", item: { name: "ぷにぷに玉・赤" } },
      { kind: "specific", item: { name: "古代樹の枝" } },
      { kind: "category", category: { name: "ぷにぷに" } },
      { kind: "category", category: { name: "エリキシル" } },
    ],
  }),
  SynthesisItem.new("魚油リキッド", [{ name: "薬品" }], 7, {
    items: [
      { kind: "specific", item: { name: "サルディン" } },
      { kind: "specific", item: { name: "塩草" } },
      { kind: "category", category: { name: "魚介類" } },
      { kind: "category", category: { name: "燃料" } },
    ],
  }),
  SynthesisItem.new("ウォーパウダー", [{ name: "薬品" }], 12, {
    items: [
      { kind: "specific", item: { name: "夢見るきのこ" } },
      { kind: "specific", item: { name: "キノコパウダー" } },
      { kind: "category", category: { name: "虫" } },
      { kind: "category", category: { name: "食材" } },
    ],
  }),
  SynthesisItem.new("イバラの抱擁", [{ name: "魔法の道具" }], 11, {
    items: [
      { kind: "specific", item: { name: "クミネの毒液" } },
      { kind: "specific", item: { name: "丈夫なつる" } },
      { kind: "category", category: { name: "毒の材料" } },
      { kind: "category", category: { name: "花" } },
    ],
  }),
  SynthesisItem.new("エネルジアニカ", [{ name: "魔法の道具" }], 17, {
    items: [
      { kind: "specific", item: { name: "スタルチウム" } },
      { kind: "specific", item: { name: "白霊岩" } },
      { kind: "category", category: { name: "木材" } },
      { kind: "category", category: { name: "神秘の力" } },
    ],
  }),
  SynthesisItem.new("百薬煎じ", [{ name: "薬品" }], 13, {
    items: [
      { kind: "specific", item: { name: "清水の白姫" } },
      { kind: "specific", item: { name: "紅草" } },
      { kind: "category", category: { name: "薬の材料" } },
      { kind: "category", category: { name: "魚介類" } },
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
  SynthesisItem.new("コンパス", [{ name: "採取" }], 12, {
    items: [
      { kind: "specific", item: { name: "魔導書の切れ端" } },
      { kind: "specific", item: { name: "ブロンズアイゼン" } },
      { kind: "specific", item: { name: "スピリットフラワー" } },
      { kind: "category", category: { name: "神秘の力" } },
    ],
  }),
  SynthesisItem.new("探索リュック", [{ name: "採取" }], 19, {
    items: [
      { kind: "specific", item: { name: "ビーストエア" } },
      { kind: "specific", item: { name: "アルケミーペイント" } },
      { kind: "category", category: { name: "雑貨" } },
      { kind: "category", category: { name: "神秘の力" } },
    ],
  }),
  SynthesisItem.new("鎌斧", [{ name: "採取" }], 18, {
    items: [
      { kind: "specific", item: { name: "薪割り斧" } },
      { kind: "specific", item: { name: "草刈り鎌" } },
      { kind: "category", category: { name: "動物素材" } },
      { kind: "category", category: { name: "木材" } },
    ],
  }),
  SynthesisItem.new("釣り竿網", [{ name: "採取" }], 22, {
    items: [
      { kind: "specific", item: { name: "虫取り網" } },
      { kind: "specific", item: { name: "釣り竿" } },
      { kind: "category", category: { name: "きのこ" } },
      { kind: "category", category: { name: "食材" } },
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
  SynthesisItem.new("おいしい練り餌", [{ name: "雑貨" }, { name: "食材" }], 7, {
    items: [
      { kind: "specific", item: { name: "小麦粉" } },
      { kind: "specific", item: { name: "クミネの実" } },
      { kind: "category", category: { name: "虫" } },
      { kind: "category", category: { name: "調味料" } },
    ],
  }),
  SynthesisItem.new(
    "アルケミーペイント",
    [{ name: "雑貨" }, { name: "毒の材料" }],
    15,
    {
      items: [
        { kind: "specific", item: { name: "七色葡萄" } },
        { kind: "specific", item: { name: "ミックスオイル" } },
        { kind: "category", category: { name: "花" } },
        { kind: "category", category: { name: "虫" } },
      ],
    },
  ),
  SynthesisItem.new(
    "インゴット",
    [{ name: "インゴット" }, { name: "金属" }],
    4,
    {
      items: [
        { kind: "specific", item: { name: "アマタイト鉱" } },
        { kind: "category", category: { name: "鉱石" } },
        { kind: "category", category: { name: "燃料" } },
      ],
    },
  ),
  SynthesisItem.new(
    "ブロンズアイゼン",
    [{ name: "インゴット" }, { name: "金属" }],
    8,
    {
      items: [
        { kind: "specific", item: { name: "コベリナイト" } },
        { kind: "specific", item: { name: "アマタイト鉱" } },
        { kind: "category", category: { name: "鉱石" } },
        { kind: "category", category: { name: "燃料" } },
      ],
    },
  ),
  SynthesisItem.new(
    "スタルチウム",
    [{ name: "インゴット" }, { name: "金属" }],
    16,
    {
      items: [
        { kind: "specific", item: { name: "彗星岩" } },
        { kind: "specific", item: { name: "ペントナイト" } },
        { kind: "category", category: { name: "燃料" } },
        { kind: "category", category: { name: "神秘の力" } },
      ],
    },
  ),

  SynthesisItem.new("クロース", [{ name: "クロース" }], 2, {
    items: [
      { kind: "category", category: { name: "糸素材" } },
      { kind: "category", category: { name: "動物素材" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
  SynthesisItem.new(
    "ネイチャークロス",
    [{ name: "クロース" }, { name: "植物" }],
    9,
    {
      items: [
        { kind: "specific", item: { name: "錬金繊維" } },
        { kind: "specific", item: { name: "植物エキス" } },
        { kind: "category", category: { name: "植物" } },
        { kind: "category", category: { name: "動物素材" } },
      ],
    },
  ),
  SynthesisItem.new(
    "ビーストエア",
    [{ name: "クロース" }, { name: "動物素材" }],
    17,
    {
      items: [
        { kind: "specific", item: { name: "動物の毛皮" } },
        { kind: "specific", item: { name: "翼竜の翼" } },
        { kind: "category", category: { name: "糸素材" } },
        { kind: "category", category: { name: "動物素材" } },
      ],
    },
  ),
  SynthesisItem.new("パールクリスタル", [{ name: "宝石" }], 13, {
    items: [
      { kind: "specific", item: { name: "大貝の白玉" } },
      { kind: "specific", item: { name: "白灰砂" } },
      { kind: "category", category: { name: "原石" } },
      { kind: "category", category: { name: "ぷにぷに" } },
    ],
  }),
  SynthesisItem.new("アンバーライト", [{ name: "宝石" }], 21, {
    items: [
      { kind: "specific", item: { name: "琥珀水晶" } },
      { kind: "specific", item: { name: "琥珀の欠片" } },
      { kind: "category", category: { name: "研磨剤" } },
      { kind: "category", category: { name: "虫" } },
    ],
  }),
  SynthesisItem.new("ハチミツ", [{ name: "調味料" }], 3, {
    items: [
      { kind: "category", category: { name: "ハチの巣" } },
      { kind: "category", category: { name: "花" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
  SynthesisItem.new("エルツ糖", [{ name: "調味料" }], 4, {
    items: [
      { kind: "specific", item: { name: "甘露岩" } },
      { kind: "specific", item: { name: "ハチミツ" } },
      { kind: "category", category: { name: "燃料" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
  SynthesisItem.new("旅人の水珠", [{ name: "水" }, { name: "神秘の力" }], 22, {
    items: [
      { kind: "specific", item: { name: "泡立つ水" } },
      { kind: "specific", item: { name: "ゼッテル" } },
      { kind: "category", category: { name: "木の実" } },
      { kind: "category", category: { name: "魚介類" } },
    ],
  }),
  SynthesisItem.new("超純水", [{ name: "水" }], 42, {
    items: [
      { kind: "specific", item: { name: "旅人の水珠" } },
      { kind: "specific", item: { name: "聖樹の葉" } },
      { kind: "category", category: { name: "木材" } },
      { kind: "category", category: { name: "砂" } },
    ],
  }),
  SynthesisItem.new(
    "ヒーリングチップ",
    [{ name: "薬の材料" }, { name: "気体" }],
    12,
    {
      items: [
        { kind: "specific", item: { name: "ミックスオイル" } },
        { kind: "specific", item: { name: "乾いた木くず" } },
        { kind: "category", category: { name: "燃料" } },
        { kind: "category", category: { name: "きのこ" } },
      ],
    },
  ),
  SynthesisItem.new("ミックスオイル", [{ name: "燃料" }], 10, {
    items: [
      { kind: "specific", item: { name: "自然油" } },
      { kind: "specific", item: { name: "パルマの実" } },
      { kind: "category", category: { name: "木の実" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
  SynthesisItem.new("小麦粉", [{ name: "食材" }], 4, {
    items: [
      { kind: "specific", item: { name: "ヴァッサ麦" } },
      { kind: "specific", item: { name: "紙くず" } },
      { kind: "category", category: { name: "燃料" } },
    ],
  }),
  SynthesisItem.new(
    "ゼラチンパウダー",
    [{ name: "食材" }, { name: "薬の材料" }],
    13,
    {
      items: [
        { kind: "specific", item: { name: "大きな骨" } },
        { kind: "category", category: { name: "動物素材" } },
        { kind: "category", category: { name: "魚介類" } },
        { kind: "category", category: { name: "ぷにぷに" } },
      ],
    },
  ),
  SynthesisItem.new("錬金繊維", [{ name: "糸素材" }], 6, {
    items: [
      { kind: "specific", item: { name: "綿毛草" } },
      { kind: "category", category: { name: "植物" } },
      { kind: "category", category: { name: "燃料" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
  SynthesisItem.new("混鉄鋼板", [{ name: "木材" }, { name: "金属" }], 17, {
    items: [
      { kind: "specific", item: { name: "インゴット" } },
      { kind: "specific", item: { name: "簡易建材" } },
      { kind: "category", category: { name: "ぷにぷに" } },
      { kind: "category", category: { name: "燃料" } },
    ],
  }),
  SynthesisItem.new("ミストリキッド", [{ name: "気体" }], 29, {
    items: [
      { kind: "specific", item: { name: "古びた魔導書" } },
      { kind: "specific", item: { name: "旅人の水珠" } },
      { kind: "category", category: { name: "燃料" } },
      { kind: "category", category: { name: "きのこ" } },
    ],
  }),
  SynthesisItem.new("フェザードラフト", [{ name: "気体" }], 42, {
    items: [
      { kind: "specific", item: { name: "エレメントコア・風" } },
      { kind: "specific", item: { name: "ミストリキッド" } },
      { kind: "category", category: { name: "竜素材" } },
      { kind: "category", category: { name: "動物素材" } },
    ],
  }),
  SynthesisItem.new("ぷにレザー", [{ name: "動物素材" }], 23, {
    items: [
      { kind: "specific", item: { name: "大ぷに玉" } },
      { kind: "specific", item: { name: "ネイチャークロス" } },
      { kind: "category", category: { name: "ぷにぷに" } },
      { kind: "category", category: { name: "きのこ" } },
    ],
  }),
  SynthesisItem.new(
    "マスターレザー",
    [{ name: "動物素材" }, { name: "竜素材" }],
    40,
    {
      items: [
        { kind: "specific", item: { name: "幻獣の毛皮" } },
        { kind: "specific", item: { name: "巨大なツメ" } },
        { kind: "category", category: { name: "竜素材" } },
        { kind: "category", category: { name: "木の実" } },
      ],
    },
  ),
  SynthesisItem.new(
    "精霊の小瓶",
    [{ name: "神秘の力" }, { name: "雑貨" }],
    33,
    {
      items: [
        { kind: "specific", item: { name: "ラピス・パピヨン" } },
        { kind: "specific", item: { name: "光る砂" } },
        { kind: "category", category: { name: "虫" } },
        { kind: "category", category: { name: "原石" } },
      ],
    },
  ),
  SynthesisItem.new("植物の種", [{ name: "種" }], 14, {
    items: [
      { kind: "specific", item: { name: "若木の枝葉" } },
      { kind: "category", category: { name: "調味料" } },
      { kind: "category", category: { name: "うに" } },
      { kind: "category", category: { name: "植物" } },
    ],
  }),
  SynthesisItem.new("石の種", [{ name: "種" }], 16, {
    items: [
      { kind: "specific", item: { name: "鍾乳石の欠片" } },
      { kind: "category", category: { name: "調味料" } },
      { kind: "category", category: { name: "うに" } },
      { kind: "category", category: { name: "石材" } },
    ],
  }),
  SynthesisItem.new("水の種", [{ name: "種" }], 16, {
    items: [
      { kind: "specific", item: { name: "植物エキス" } },
      { kind: "category", category: { name: "調味料" } },
      { kind: "category", category: { name: "うに" } },
      { kind: "category", category: { name: "魚介類" } },
    ],
  }),
  SynthesisItem.new("簡易建材", [{ name: "木材" }], 6, {
    items: [
      { kind: "specific", item: { name: "アイヒェ" } },
      { kind: "category", category: { name: "木材" } },
      { kind: "category", category: { name: "木の実" } },
    ],
  }),
  SynthesisItem.new("簡易石材", [{ name: "石材" }], 6, {
    items: [
      { kind: "specific", item: { name: "風化した石材" } },
      { kind: "category", category: { name: "石材" } },
      { kind: "category", category: { name: "燃料" } },
    ],
  }),
  SynthesisItem.new("海草土", [{ name: "砂" }], 5, {
    items: [
      { kind: "specific", item: { name: "塩草" } },
      { kind: "specific", item: { name: "やわらかい砂" } },
      { kind: "category", category: { name: "砂" } },
      { kind: "category", category: { name: "水" } },
    ],
  }),
  SynthesisItem.new("軟式ゴム石", [{ name: "魔法の道具" }], 7, {
    items: [
      { kind: "category", category: { name: "木の実" } },
      { kind: "category", category: { name: "砂" } },
      { kind: "category", category: { name: "ぷにぷに" } },
      { kind: "category", category: { name: "中和剤" } },
    ],
  }),
  SynthesisItem.new("誘魔香", [{ name: "雑貨" }, { name: "魔法の道具" }], 11, {
    items: [
      { kind: "specific", item: { name: "魔石の欠片" } },
      { kind: "specific", item: { name: "七色葡萄" } },
      { kind: "category", category: { name: "毒の材料" } },
      { kind: "category", category: { name: "気体" } },
    ],
  }),
  SynthesisItem.new(
    "強力な魚のエサ",
    [{ name: "雑貨" }, { name: "食材" }],
    12,
    {
      items: [
        { kind: "specific", item: { name: "クミネの実" } },
        { kind: "specific", item: { name: "七色葡萄" } },
        { kind: "category", category: { name: "魚介類" } },
        { kind: "category", category: { name: "きのこ" } },
      ],
    },
  ),
];
