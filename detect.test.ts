import { assertEquals } from "jsr:@std/assert";

import {
  detectCircularSynthesisPathsBottomUp,
  detectSynthesisPathsBottumUp,
} from "./detect.ts";
import type { MaterialItem, SynthesisItem } from "./items.ts";

Deno.test("調合経路を探す", () => {
  // Arrange
  const materialItems: MaterialItem[] = [
    {
      name: "ラーメル麦",
      category: [{ name: "食材" }, { name: "植物類" }],
    },
  ];
  const synthesisItems: SynthesisItem[] = [
    {
      name: "ラーメル麦粉",
      category: [{ name: "食材" }, { name: "火薬" }],
      synthesisLevel: 3,
      recipe: {
        items: [
          { kind: "specific", item: { name: "ラーメル麦" } },
          { kind: "category", category: { name: "紙" } },
          { kind: "category", category: { name: "鉱石" } },
        ],
      },
    },
  ];

  // Act
  const result = detectSynthesisPathsBottumUp(
    materialItems,
    synthesisItems,
    "ラーメル麦",
    "ラーメル麦粉",
  );

  // Assert
  assertEquals(result.length, 1);
  assertEquals(result[0].length, 2);
  assertEquals(result[0][0].name, "ラーメル麦");
  assertEquals(result[0][1].name, "ラーメル麦粉");
});

Deno.test("循環調合を探す", () => {
  // Arrange
  const materialItems: MaterialItem[] = [
    {
      name: "マジックグラス",
      category: [{ name: "植物類" }, { name: "薬の材料" }, { name: "中和剤" }],
    },
    {
      name: "ラーメル麦",
      category: [{ name: "食材" }, { name: "植物類" }],
    },
    {
      name: "カーエン石",
      category: [{ name: "鉱石" }, { name: "火薬" }],
    },
    {
      name: "おいしい水",
      category: [{ name: "水" }],
    },
  ];
  const synthesisItems: SynthesisItem[] = [
    {
      name: "薬のもと",
      category: [{ name: "薬の材料" }],
      synthesisLevel: 15,
      recipe: {
        items: [
          { kind: "category", category: { name: "薬の材料" } },
          { kind: "category", category: { name: "植物類" } },
        ],
      },
    },
    {
      name: "中和剤・赤",
      category: [{ name: "中和剤" }],
      synthesisLevel: 2,
      recipe: {
        items: [
          { kind: "category", category: { name: "火薬" } },
          { kind: "category", category: { name: "水" } },
        ],
      },
    },
    {
      name: "ラーメル麦粉",
      category: [{ name: "食材" }, { name: "火薬" }],
      synthesisLevel: 3,
      recipe: {
        items: [
          { kind: "specific", item: { name: "ラーメル麦" } },
          { kind: "category", category: { name: "紙" } },
          { kind: "category", category: { name: "鉱石" } },
        ],
      },
    },
    {
      name: "ゼッテル",
      category: [{ name: "紙" }, { name: "燃料" }],
      synthesisLevel: 5,
      recipe: {
        items: [
          { kind: "category", category: { name: "植物類" } },
          { kind: "category", category: { name: "水" } },
          { kind: "category", category: { name: "中和剤" } },
        ],
      },
    },
  ];

  // Act
  const result = detectCircularSynthesisPathsBottomUp(
    materialItems,
    synthesisItems,
    "薬のもと",
  );
  const result2 = detectCircularSynthesisPathsBottomUp(
    materialItems,
    synthesisItems,
    "中和剤・赤",
  );

  // Assert
  assertEquals(result.length, 1);
  assertEquals(result[0][0].name, "薬のもと");
  assertEquals(result[0][1].name, "薬のもと");

  assertEquals(result2.length, 1);
  assertEquals(result2[0].length, 4);
  assertEquals(result2[0][0].name, "中和剤・赤");
  assertEquals(result2[0][1].name, "ゼッテル");
  assertEquals(result2[0][2].name, "ラーメル麦粉");
  assertEquals(result2[0][3].name, "中和剤・赤");
});

Deno.test("素材で探してもエラーにならない", () => {
  // Arrange
  const materialItems: MaterialItem[] = [
    {
      name: "マジックグラス",
      category: [{ name: "植物類" }, { name: "薬の材料" }, { name: "中和剤" }],
    },
  ];
  const synthesisItems: SynthesisItem[] = [
    {
      name: "薬のもと",
      category: [{ name: "薬の材料" }],
      synthesisLevel: 15,
      recipe: {
        items: [
          { kind: "category", category: { name: "薬の材料" } },
          { kind: "category", category: { name: "植物類" } },
        ],
      },
    },
  ];

  // Act
  const result = detectCircularSynthesisPathsBottomUp(
    materialItems,
    synthesisItems,
    "マジックグラス",
  );

  // Assert
  assertEquals(result.length, 0);
});

Deno.test("素材が直接指定されているケース", () => {
  // Arrange
  const materialItems: MaterialItem[] = [
    {
      name: "マジックグラス",
      category: [{ name: "植物類" }, { name: "薬の材料" }, { name: "中和剤" }],
    },
    {
      name: "ラーメル麦",
      category: [{ name: "食材" }, { name: "植物類" }],
    },
    {
      name: "カーエン石",
      category: [{ name: "鉱石" }, { name: "火薬" }],
    },
    {
      name: "おいしい水",
      category: [{ name: "水" }],
    },
  ];
  const synthesisItems: SynthesisItem[] = [
    {
      name: "薬のもと",
      category: [{ name: "薬の材料" }],
      synthesisLevel: 15,
      recipe: {
        items: [
          { kind: "category", category: { name: "薬の材料" } },
          { kind: "category", category: { name: "植物類" } },
        ],
      },
    },
    {
      name: "中和剤・赤",
      category: [{ name: "中和剤" }],
      synthesisLevel: 2,
      recipe: {
        items: [
          { kind: "category", category: { name: "火薬" } },
          { kind: "specific", item: { name: "おいしい水" } },
        ],
      },
    },
    {
      name: "ラーメル麦粉",
      category: [{ name: "食材" }, { name: "火薬" }],
      synthesisLevel: 3,
      recipe: {
        items: [
          { kind: "specific", item: { name: "ラーメル麦" } },
          { kind: "specific", item: { name: "ゼッテル" } },
          { kind: "category", category: { name: "鉱石" } },
        ],
      },
    },
    {
      name: "ゼッテル",
      category: [{ name: "紙" }, { name: "燃料" }],
      synthesisLevel: 5,
      recipe: {
        items: [
          { kind: "category", category: { name: "植物類" } },
          { kind: "category", category: { name: "水" } },
          { kind: "category", category: { name: "中和剤" } },
        ],
      },
    },
  ];

  const result = detectCircularSynthesisPathsBottomUp(
    materialItems,
    synthesisItems,
    "中和剤・赤",
  );

  // Assert
  assertEquals(result.length, 1);
  assertEquals(result[0].length, 4);
  assertEquals(result[0][0].name, "中和剤・赤");
  assertEquals(result[0][1].name, "ゼッテル");
  assertEquals(result[0][2].name, "ラーメル麦粉");
  assertEquals(result[0][3].name, "中和剤・赤");
});
