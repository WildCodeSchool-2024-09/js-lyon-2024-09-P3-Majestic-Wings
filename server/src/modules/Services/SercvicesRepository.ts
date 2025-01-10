import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Services = {
  service_code: string;
  service_libelle: string;
  service_photo: string;
  service_plan: string;
};

class ServicesRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from service");

    // Return the array of items
    return rows as Services[];
  }
}

export default new ServicesRepository();
