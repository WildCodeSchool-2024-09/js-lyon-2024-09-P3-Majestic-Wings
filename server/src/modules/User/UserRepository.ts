import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  mail: string;
  phone_number: number;
  hashed_password: string;
};

class UserRepository {
  async create(user: Omit<User, "id">) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (firstname, lastname, age, mail, phone_number, hashed_password) values (?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.age,
        user.mail,
        user.phone_number,
        user.hashed_password,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * from USER order by lastname ASC",
    );

    // Return the array of items
    return rows as User[];
  }

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * from USER where id = ?",
      [id],
    );

    return rows[0] as User;
  }
  async readByEmailWithPassword(mail: string) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where mail = ?",
      [mail],
    );

    return rows[0] as User;
  }
  async update(user: User) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      "update user set firstname = ?, lastname = ?, age = ?, phone_number = ? where id = ?",
      [user.firstname, user.lastname, user.age, user.phone_number, user.id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}
export default new UserRepository();
