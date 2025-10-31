# type-challengesの学習記録リポジトリ

TypeScript の型システムを鍛えるためのチャレンジ記録リポジトリです。  
実際にコードを書きながらTypeScriptの型仕様をを学習しています。

---

## ✅ 解答状況（自動生成）

<!--progress-start-->

## ✅ Type Challenges Progress

| No. | 問題名 | 難易度 | ステータス | ノート |
|-----|--------|--------|------------|--------|
| 00004 | pick | easy | ✅ 解答済み | [notes](./questions/easy/00004-pick/notes.md) |
| 00007 | readonly | easy | ✅ 解答済み | [notes](./questions/easy/00007-readonly/notes.md) |
| 00011 | tuple | easy | ✅ 解答済み | [notes](./questions/easy/00011-tuple-to-object/notes.md) |
| 00014 | first | easy | ✅ 解答済み | [notes](./questions/easy/00014-first-of-array/notes.md) |
| 00018 | length | easy | ✅ 解答済み | [notes](./questions/easy/00018-length-of-tuple/notes.md) |
| 00043 | exclude | easy | ✅ 解答済み | [notes](./questions/easy/00043-exclude/notes.md) |
| 00189 | awaited | easy | ✅ 解答済み | [notes](./questions/easy/00189-awaited/notes.md) |
| 00268 | if | easy | ✅ 解答済み | [notes](./questions/easy/00268-if/notes.md) |
| 00533 | concat | easy | ✅ 解答済み | [notes](./questions/easy/00533-concat/notes.md) |
| 00898 | includes | easy | ✅ 解答済み | [notes](./questions/easy/00898-includes/notes.md) |
| 03057 | push | easy | ✅ 解答済み | [notes](./questions/easy/03057-push/notes.md) |
| 03060 | unshift | easy | ✅ 解答済み | [notes](./questions/easy/03060-unshift/notes.md) |
| 03312 | parameters | easy | ✅ 解答済み | [notes](./questions/easy/03312-parameters/notes.md) |
| 00002 | get | medium | ✅ 解答済み | [notes](./questions/medium/00002-get-return-type/notes.md) |
| 00003 | omit | medium | ✅ 解答済み | [notes](./questions/medium/00003-omit/notes.md) |
| 00015 | last | medium | ✅ 解答済み | [notes](./questions/medium/00015-last-of-array/notes.md) |
| 00016 | pop | medium | ✅ 解答済み | [notes](./questions/medium/00016-pop/notes.md) |
| 00106 | trim | medium | ✅ 解答済み | [notes](./questions/medium/00106-trim-left/notes.md) |
| 00108 | trim | medium | ✅ 解答済み | [notes](./questions/medium/00108-trim/notes.md) |
| 00527 | append | medium | ✅ 解答済み | [notes](./questions/medium/00527-append-to-object/notes.md) |
| 00612 | kebabcase | medium | ✅ 解答済み | [notes](./questions/medium/00612-kebabcase/notes.md) |
| 03192 | reverse | medium | ✅ 解答済み | [notes](./questions/medium/03192-reverse/notes.md) |
| 04425 | greater | medium | ✅ 解答済み | [notes](./questions/medium/04425-greater-than/notes.md) |
| 04803 | trim | medium | ✅ 解答済み | [notes](./questions/medium/04803-trim-right/notes.md) |
| 10969 | integer | medium | ✅ 解答済み | [notes](./questions/medium/10969-integer/notes.md) |
| 18142 | all | medium | ✅ 解答済み | [notes](./questions/medium/18142-all/notes.md) |
| 18220 | filter | medium | ✅ 解答済み | [notes](./questions/medium/18220-filter/notes.md) |
| 5312 | join | medium | ✅ 解答済み | [notes](./questions/medium/5312-join/notes.md) |
| 00223 | isany | hard | ✅ 解答済み | [notes](./questions/hard/00223-isany/notes.md) |

<!--progress-end-->

---

## 型システムを学ぶ目的

- 型の構文や挙動を**手で書いて学ぶ**（読むだけではなく）
- **詰まった点・学びは `notes.md` に記録**
- 実務でも役立つ「型の思考力」を身につけたい！！

---

## 環境構成

- TypeScript（strict モード）
- テンプレート自動生成 CLI（`npm run gen <difficulty> <id> <slug>`）
- GitHub Actions による型チェック CI

---

## ディレクトリ構成

```
.
├── questions/
│ └── <question-difficulty>/<question-number>-<question-name>/
│     ├── index.ts # 解答
│     ├── test-cases.ts # 型テスト
│     └── notes.md # 詰まりポイントと学び
├── scripts/
│ ├── generate.ts # 問題テンプレ生成 CLI
│ └── generate-progress.ts # README 用進捗表自動生成
└── progress.md # 自動生成された進捗表（貼り付け用）
```
