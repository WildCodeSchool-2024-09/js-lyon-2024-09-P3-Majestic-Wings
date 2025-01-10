import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Options = {
  option_code: string;
  option_libelle: string;
  service_option: string;
};

class OptionsRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>(
      "select * from flight_option",
    );

    // Return the array of items
    return rows as Options[];
  }
}

export default new OptionsRepository();
