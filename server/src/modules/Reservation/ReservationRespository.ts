import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type ReservationData = {
  model: string;
  reservation_date: string;
  departureAirport: string;
  arrivalAirport: string;
};

class ReservationRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>(
      "select brand, model from plane order by brand ASC",
    );

    // Return the array of items
    return rows as ReservationData[];
  }
}
export default new ReservationRepository();
