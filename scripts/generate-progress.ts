import {
  readdirSync,
  statSync,
  existsSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { join } from "path";

const basePath = "questions";
const difficulties = ["warm", "easy", "medium", "hard", "extreme"];

let markdown = `## ✅ type-challenges Progress\n\n| No. | 問題名 | 難易度 | ステータス | ノート |\n|-----|--------|--------|------------|--------|\n`;

for (const difficulty of difficulties) {
  const dir = join(basePath, difficulty);
  if (!existsSync(dir)) continue;

  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    if (!statSync(fullPath).isDirectory()) continue;

    const [id, slug] = entry.split("-", 2);
    const indexPath = join(fullPath, "index.ts");
    const notePath = join(fullPath, "notes.md");

    const hasAnswer =
      existsSync(indexPath) &&
      readFileSync(indexPath, "utf8").trim().length > 0;
    const hasNote = existsSync(notePath);

    const status = hasAnswer ? "✅ 解答済み" : "⏳ 着手中";
    const noteLink = hasNote ? `[notes](./${fullPath}/notes.md)` : "-";

    markdown += `| ${id} | ${slug} | ${difficulty} | ${status} | ${noteLink} |\n`;
  }
}

writeFileSync("progress.md", markdown);
console.log("📊 progress.md を生成しました");
