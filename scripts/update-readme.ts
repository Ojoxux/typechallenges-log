// scripts/update-readme.ts
import { readFileSync, writeFileSync } from "fs";

const readmePath = "README.md";
const progressPath = "progress.md";

const readme = readFileSync(readmePath, "utf8");
const progress = readFileSync(progressPath, "utf8");

const updated = readme.replace(
  /<!--progress-start-->[\s\S]*?<!--progress-end-->/,
  `<!--progress-start-->\n\n${progress.trim()}\n\n<!--progress-end-->`,
);

writeFileSync(readmePath, updated);
console.log("✅ README.md に進捗表を挿入しました");
