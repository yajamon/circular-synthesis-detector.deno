import { detectSynthesisPathsBottumUp } from "../detect.ts";

import { materialItems, synthesisItems } from "../dataset/ryza.ts";

if (Deno.args.length < 2) {
  console.error(
    "Usage: deno run task_ryza.ts <base item name> <target item name>",
  );
  Deno.exit(1);
}

const baseItemName = Deno.args[0];
const targetItemName = Deno.args[1];

const result = detectSynthesisPathsBottumUp(
  materialItems,
  synthesisItems,
  baseItemName,
  targetItemName,
);

for (const path of result) {
  console.log(path.map((item) => item.name).join(" -> "));
}
