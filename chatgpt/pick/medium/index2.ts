type User2 = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
};

function sendNotification(user: Pick<User2, "name" | "email">) {
  console.log(`Sending mail to ${user.name} (${user.email})`);
}
