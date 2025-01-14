import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  mail: string;
  phone_number: number;
  password: string;
};

class UserRepository {
  async create(user: Omit<User, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (firstname, lastname, age, mail, phone_number, password) values (?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.age,
        user.mail,
        user.phone_number,
        user.password,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * from USER order by lastname ASC"
    );

    // Return the array of items
    return rows as User[];
  }

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * from USER where id = ?",
      [id]
    );

    // Return the first row of the result, which represents the category
    return rows[0] as User;
  }
}
export default new UserRepository();
