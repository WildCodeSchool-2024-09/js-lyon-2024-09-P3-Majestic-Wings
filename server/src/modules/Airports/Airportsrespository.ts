import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Airports = {
  id: number;
  size: string;
  name: string;
  latitude: number;
  longitude: number;
  isocountry: string;
  isoregion: string;
  municipality: string;
};

class AirportsRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from airports");

    // Return the array of items
    return rows as Airports[];
  }
}

export default new AirportsRepository();
