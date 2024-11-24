import { assert } from "jsr:@std/assert";

import { detectCircularSynthesisPathsBottomUp } from "./detect.ts";
import { MaterialItem, SynthesisItem } from "./items.ts";

Deno.test("循環調合を探す", () => {
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
    "薬のもと",
  );

  // Assert
  assert(result.length === 1);
  assert(result[0][0].name === "薬のもと");
  assert(result[0][1].name === "薬のもと");
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
  assert(result.length === 0);
});
