import { detectCircularSynthesisPathsBottomUp } from "../detect.ts";

import { materialItems, synthesisItems } from "../dataset/ryza.ts";

import { parseArgs } from "jsr:@std/cli";

const parsed = parseArgs(Deno.args, {});

if (parsed._.length < 1) {
  console.error("Usage: deno run task_ryza.ts <item name>");
  Deno.exit(1);
}

const itemName = parsed._[0].toString();

const result = detectCircularSynthesisPathsBottomUp(
  materialItems,
  synthesisItems,
  itemName,
);

for (const path of result) {
  console.log(path.map((item) => item.name).join(" -> "));
}
