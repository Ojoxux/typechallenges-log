/**
 * このとき、実行時に「オブジェクトから K に指定されたプロパティだけを取り出す関数」を作るとしたら、どう書く？
 */

type MyPick2<T, K extends keyof T> = {
  [P in K]: T[P];
};

function pick<T, K extends keyof T>(obj: T, keys: K[]): MyPick2<T, K> {
    const result = {} as MyPick2<T,K>
    for (const key of keys) {
        result[key] = obj[key];
    }
    return result;
}
