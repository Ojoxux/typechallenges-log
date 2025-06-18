type Profile = {
  username: string;
  age: number;
  bio: string;
};

type BadPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type ProfilePreview = BadPick<Profile, "username" | "bio">;
