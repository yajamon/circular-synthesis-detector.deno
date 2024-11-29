import { detectCircularSynthesisPathsBottomUp } from "../detect.ts";

import { materialItems, synthesisItems } from "../dataset/ryza.ts";

if (Deno.args.length < 1) {
  console.error("Usage: deno run task_ryza.ts <item name>");
  Deno.exit(1);
}

const itemName = Deno.args[0];

const result = detectCircularSynthesisPathsBottomUp(
  materialItems,
  synthesisItems,
  itemName,
);

for (const path of result) {
  console.log(path.map((item) => item.name).join(" -> "));
}
