import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  mail: string;
  phone_number: number;
};

class UserRepository {
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
