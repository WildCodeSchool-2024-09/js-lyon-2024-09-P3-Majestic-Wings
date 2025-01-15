import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

type Prestation = {
  code: string;
  libelle: string;
  option: string;
};

class PrestationsRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from prestation");

    // Return the array of items
    return rows as Prestation[];
  }
}

export default new PrestationsRepository();
