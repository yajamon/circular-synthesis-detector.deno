import { assert } from "jsr:@std/assert";
import { MaterialItem, SynthesisItem } from "./items.ts";

Deno.test("MaterialItem生成", () => {
  // Act
  const materialItem = MaterialItem.new("マジックグラス", [
    { name: "植物類" },
    { name: "薬の材料" },
  ]);

  // Assert
  assert(materialItem.name === "マジックグラス");
  assert(materialItem.category[0].name === "植物類");
  assert(materialItem.category[1].name === "薬の材料");
});

Deno.test("SynthesisItem生成", () => {
  // Arrange
  const mandragora = MaterialItem.new("マンドラゴラの根", [
    { name: "薬の材料" },
    { name: "エリキシル" },
    { name: "毒の材料" },
  ]);
  const water = MaterialItem.new("水", [{ name: "液体" }]);

  // Act
  const item = SynthesisItem.new(
    "ヒーリングサルヴ",
    [
      { name: "薬品" },
    ],
    1,
    {
      items: [
        { kind: "category", category: { name: "植物類" } },
        { kind: "specific", item: mandragora },
        { kind: "specific", item: water },
      ],
    },
  );

  // Assert
  assert(item.name === "ヒーリングサルヴ");
  assert(item.category[0].name === "薬品");
  assert(item.synthesisLevel === 1);
  assert(item.recipe.items.length === 3);
  assert(item.recipe.items[0].kind === "category");
  assert(item.recipe.items[0].category.name === "植物類");
  assert(item.recipe.items[1].kind === "specific");
  assert(item.recipe.items[1].item.name === "マンドラゴラの根");
  assert(item.recipe.items[2].kind === "specific");
  assert(item.recipe.items[2].item.name === "水");
});
