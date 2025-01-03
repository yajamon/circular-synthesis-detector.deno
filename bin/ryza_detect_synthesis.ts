import { parseArgs } from "jsr:@std/cli";

import { detectSynthesisPathsBottumUp } from "../detect.ts";

import { materialItems, synthesisItems } from "../dataset/ryza.ts";

const parsed = parseArgs(Deno.args);

if (parsed._.length < 2) {
  console.error(
    "Usage: deno run task_ryza.ts <base item name> <target item name>",
  );
  Deno.exit(1);
}

const baseItemName = parsed._[0].toString();
const targetItemName = parsed._[1].toString();

const result = detectSynthesisPathsBottumUp(
  materialItems,
  synthesisItems,
  baseItemName,
  targetItemName,
);

for (const path of result) {
  console.log(path.map((item) => item.name).join(" -> "));
}
