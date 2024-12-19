import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Planes = {
  id: number;
  brand: string;
  model: string;
  capacity: number;
  autonomy: number;
  speed: number;
  luggages: number;
  image: string;
};

class PlanesRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from plane");

    // Return the array of items
    return rows as Planes[];
  }
}

export default new PlanesRepository();
