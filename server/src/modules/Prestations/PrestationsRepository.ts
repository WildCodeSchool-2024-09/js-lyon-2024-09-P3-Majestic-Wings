import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

type Prestation = {
  code: string;
  libelle: string;
  prestation: string;
};

type Cabines = {
  code: string;
  libelle: string;
  photo: string;
  plan: string;
};

class PrestationsRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>(
      "   SELECT distinct prestation.prestation,MAX(cabine.photo) AS photo,MAX(cabine.plan) AS plan,MAX(cabine.libelle) AS libelle,GROUP_CONCAT(' ', prestation.libelle) AS prestations_libelles FROM cabine LEFT JOIN prestation ON cabine.code = prestation.prestation GROUP BY prestation.prestation;",
    );

    // Return the array of items
    return rows as Prestation[];
  }
}

export default new PrestationsRepository();
