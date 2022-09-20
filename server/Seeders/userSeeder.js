import bcrypt from "bcryptjs";
import UserModel from "../Models/user.model.js";
import dotenv from "dotenv";
dotenv.config();
export const userSeeder = async () => {
  const users = [
    {
      name: "Foo",
      email: "foo@test.com",
      password: await bcrypt.hash("foo@321", 12),
      gender: "male",
    },
    {
      name: "Bar",
      email: "bar@test.com",
      password: await bcrypt.hash("bar@321", 12),
      gender: "male",
    },
  ];
  users.forEach(async (user) => {
    await UserModel.create(user);
  });
};
