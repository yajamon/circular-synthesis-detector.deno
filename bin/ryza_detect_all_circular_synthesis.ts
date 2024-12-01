import { detectCircularSynthesisPathsBottomUp } from "../detect.ts";

import { materialItems, synthesisItems } from "../dataset/ryza.ts";

for (const item of synthesisItems) {
  const itemName = item.name;

  const result = detectCircularSynthesisPathsBottomUp(
    materialItems,
    synthesisItems,
    itemName,
  );

  for (const path of result) {
    console.log(path.map((item) => item.name).join(" -> "));
  }
}
