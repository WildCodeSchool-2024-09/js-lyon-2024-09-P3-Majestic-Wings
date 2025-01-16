import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

type Cabines = {
  code: string;
  libelle: string;
  photo: string;
  plan: string;
};

class CabinesRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from cabine");

    // Return the array of items
    return rows as Cabines[];
  }
}

export default new CabinesRepository();
