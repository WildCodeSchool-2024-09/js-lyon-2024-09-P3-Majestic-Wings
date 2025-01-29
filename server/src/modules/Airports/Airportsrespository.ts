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
  brand: string;
  model: string;
  image: string;
};

class AirportsRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>(
      "select distinct isocountry from airports order by isocountry ASC",
    );

    // Return the array of items
    return rows as Airports[];
  }

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from airports where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the category
    return rows[0] as Airports;
  }

  async readPosition() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>(
      " SELECT airports.*, plane.brand, plane.model, plane.image FROM airports INNER JOIN  plane ON airports.id = plane.airport_id WHERE airports.isocountry = 'France'; ",
    );

    // Return the array of items
    return rows as Airports[];
  }
}
export default new AirportsRepository();
