type Book = {
  title: string;
  author: string;
  pages: number;
};

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type BookPreview = MyPick<Book, "title">;
