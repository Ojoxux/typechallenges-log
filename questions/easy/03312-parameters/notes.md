# 03312 - parameters

## 🤔 詰まったこと

### 1. `infer` キーワードが何をしているのかわからない
- `infer U` って何？どうやって型を「推論」するの？
- なぜ `...args: infer U` で引数の型が取得できるの？

### 2. 条件付き型（Conditional Types）の構文が理解できない
- `T extends (...args: infer U) => any ? U : never` の読み方がわからない
- なぜこの書き方で関数の引数だけを取り出せるの？

### 3. 関数の型の書き方が複雑
- `(...args: any[]) => any` この書き方の意味がわからない
- なぜ `...args` でスプレッド構文を使うの？

### 4. `typeof` を使った型の取得が理解できない
- `typeof foo` で関数の型が取得できることがわからない
- 値から型を取得するという概念が理解できない

## 💡 学んだこと

### 1. `infer` は「型を推論してキャッチする」魔法のキーワード
```ts
// infer U は「この部分の型を推論してUという名前で保存して」という意味
T extends (...args: infer U) => any
//                    ↑
//              ここの型を推論してUに保存
```

### 2. 条件付き型の仕組み(Conditional Types)
```ts
// if文のように動作する
T extends Pattern ? TrueType : FalseType
//        ↑            ↑         ↑
//    条件（型の形）   真の場合   偽の場合
```

### 3. 関数の型の解剖
```ts
// 関数の型は (引数) => 戻り値 の形で表現される
const foo = (arg1: string, arg2: number): void => {}
//          ↑                              ↑
//      引数の型                       戻り値の型

// (...args: any[]) => any は「任意の引数を持つ関数」を表す
```

### 4. `typeof` による型の取得
```ts
const foo = (arg1: string, arg2: number): void => {}
typeof foo // (arg1: string, arg2: number) => void という型になる
```

### 5. 全体の動作フロー
```ts
// 1. 関数の型を受け取る
MyParameters<typeof foo>

// 2. 条件付き型で関数の形かチェック
T extends (...args: infer U) => any

// 3. 関数の形なら、infer U で引数の型を推論して取得
// foo の場合: [string, number] が U に入る

// 4. U を返す（引数の型のタプル）
? U : never
```

### 6. なぜこの解法が動作するのか
- TypeScriptの型システムは「パターンマッチング」ができる
- `infer` を使うことで、マッチした部分の型を変数のように保存できる
- 関数の型 `(...args: Type[]) => ReturnType` の `Type[]` 部分だけを取り出している
