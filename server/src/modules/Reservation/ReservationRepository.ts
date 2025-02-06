// async update(reservation: Reservation) {
//     // Execute the SQL UPDATE query to update an existing category in the "category" table
//     const [result] = await databaseClient.query<Result>(
//       "update category set name = ? where id = ?",
//       [resevation, category.id],
//     );

// Return how many rows were affected
// return result.affectedRows;
//   }CREATE TABLE reservation (
//     id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
//     user_id INT NOT NULL,
//     plane_id INT unsigned NOT NULL,
//     reservation_date DATE NOT NULL,
