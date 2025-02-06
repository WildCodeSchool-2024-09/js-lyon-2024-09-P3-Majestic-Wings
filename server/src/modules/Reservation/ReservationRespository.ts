import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type ReservationData = {
  id: number;
  reservation_date: string;
  user_id: number;
  plane_id: number;
  departure_airport_id: number;
  arrival_airport_id: number;
};

class ReservationRepository {
  async create(newReservation: Omit<ReservationData, "id">) {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into reservation (user_id, plane_id, reservation_date, departure_airport_id, arrival_airport_id) values (?,?,?,?,?)",
      [
        newReservation.user_id,
        newReservation.plane_id,
        newReservation.reservation_date,
        newReservation.departure_airport_id,
        newReservation.arrival_airport_id,
      ],
    );

    // Return the array of items
    return result.insertId;
  }

  async getAirportId(airportName: string) {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>(
      "select id from airports where name = ?",
      [airportName],
    );

    // Return the array of items
    return rows as ReservationData[];
  }
}
export default new ReservationRepository();
