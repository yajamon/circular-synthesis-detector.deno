import { assert } from "jsr:@std/assert";
import { MaterialItem } from "./items.ts";

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
