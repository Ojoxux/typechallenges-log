import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const [id, slug] = process.argv.slice(2);

if (!id || !slug) {
  console.error("❌ Usage: npm run gen <id> <slug>");
  process.exit(1);
}

const dirName = `${id}-${slug}`;
const dirPath = join("questions", "easy", dirName);

if (existsSync(dirPath)) {
  console.warn(`⚠️ ${dirPath} already exists. Skipping.`);
  process.exit(0);
}

mkdirSync(dirPath, { recursive: true });

writeFileSync(join(dirPath, "index.ts"), `// ${id} - ${slug}\n\n`);
writeFileSync(
  join(dirPath, "test-cases.ts"),
  `import { Equal, Expect } from '@type-challenges/utils'\n\n`
);
writeFileSync(
  join(dirPath, "notes.md"),
  `# ${id} - ${slug}\n\n## 🤔 詰まったこと\n\n## 💡 学んだこと\n`
);

console.log(`✅ Created: ${dirPath}`);
