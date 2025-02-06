import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Planes = {
  id: number;
  brand: string;
  model: string;
  image: string;
  capacity: number;
  size: string;
  autonomy: number;
  speed: number;
  luggages: number;
  airport_id: number;
  airportId: string;
};

class PlanesRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all planes from the "plane" table
    const [rows] = await databaseClient.query<Rows>("select * from plane");

    // Return the array of items
    return rows as Planes[];
  }
  async getModel(size: string) {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>(
      "select brand, model from plane where size = ? order by brand ASC",
      [size],
    );

    // Return the array of items
    return rows as [{ brand: string; model: string }];
  }

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID

    const [rows] = await databaseClient.query<Rows>(
      "SELECT distinct plane.id, plane.brand, plane.model, plane.capacity, plane.autonomy, plane.speed, plane.luggages, plane.image, cabine.photo, cabine.code, cabine.libelle,cabine.plan, airports.isocountry, GROUP_CONCAT(DISTINCT prestation.libelle ORDER BY prestation.libelle SEPARATOR ', ') AS cabine_prestations,GROUP_CONCAT(DISTINCT airports.name ORDER BY airports.name SEPARATOR ', ') AS airports_names FROM plane JOIN cabine ON plane.cabine = cabine.code LEFT JOIN prestation ON prestation.prestation = cabine.code JOIN airports ON airports.id = plane.airport_id WHERE plane.id = ? GROUP BY plane.id, cabine.code ORDER BY plane.brand, plane.model",
      //La requête SQL permet de sélectionner les différentes champs nécessaires à la mise en place de la page avion par ID, le GROUP CONCAT sert à grouper le libelle de la table prestation et SEPARATOR, de rajouter une virgule entre chaque mots.
      [id],
    );
    // Return the first row of the result, which represents the item
    return rows[0] as Planes;
  }
}

export default new PlanesRepository();
