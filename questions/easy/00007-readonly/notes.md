# 00007 - readonly

## 🤔 詰まったこと
```typescript
type MyReadonly<T keyof K extends keyof T> = {
    readonly [P in K]: T[P];
}
```

って書いて、Kに含まれてないキーが消えてたところ

## 💡 学んだこと


```typescript
type MyReadonly<T keyof K extends keyof T> = {
    readonly [P in K]: T[P];
}
```
と当初は書いていたが、これはTのキーのうち、Kで指定されたキーだけをreadonlyにして型にする
→つまり、それ以外のキーは型に登場すらしないから消えたように見える

### 例
```typescript
type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

type Test = MyReadonly<Todo, 'title'>;
```

これは展開するとこうなる：
```typescript
type Test = {
    readonly title: string;
}
```
→ descriptionとcompletedはもういない...😢

### 補足知識: Mapped Type は「何を書くか」で決まる
```typescript
type X<T> = {
    [K in 'a' | 'b']: T[K]; // ここで'a'と'b'しか指定してない
}
```
この場合は`a`と`b`しか使われない。それ以外は最初からスルーされる

だから、意識して「残す」か「消す」かをコントロールするのがポイント