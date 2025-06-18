type User = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
};

type UserPreview = Pick<User, "name" | "email">;
