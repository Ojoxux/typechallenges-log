# 🧠 Type-Challengesの学習記録リポジトリ

TypeScript の型システムを鍛えるためのチャレンジ記録リポジトリです。  
実際にコードを書きながらTypeScriptの型仕様をを学習しています。

---

## ✅ 解答状況（自動生成）

<!--progress-start-->

👉 `npm run progress` を実行すると、ここに最新の進捗表が生成されます。

<!--progress-end-->

---

## 🎯 目的・学習方針

- 型の構文や挙動を**手で書いて学ぶ**（読むだけではなく）
- **詰まった点・学びは `notes.md` に記録**
- 実務でも役立つ「型の思考力」を身につけたい！！

---

## 🛠 環境構成

- TypeScript（strict モード）
- テンプレート自動生成 CLI（`npm run gen <difficulty> <id> <slug>`）
- GitHub Actions による型チェック CI

---

## 📁 ディレクトリ構成

```
.
├── questions/
│ └── easy/<question-number>-<question-name>/
│ ├── index.ts # 解答
│ ├── test-cases.ts # 型テスト
│ └── notes.md # 詰まりポイントと学び
├── scripts/
│ ├── generate.ts # 問題テンプレ生成 CLI
│ └── generate-progress.ts # README 用進捗表自動生成
└── progress.md # 自動生成された進捗表（貼り付け用）
```

---

## 📅 Weekly Log

| 週  | 達成したこと |
| --- | ------------ |

---
