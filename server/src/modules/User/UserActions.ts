import type { RequestHandler } from "express";
import UserRepository from "./UserRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const users = await UserRepository.readAll();
    // Respond with the items in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the item data from the request body

    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      mail: req.body.mail,
      phone_number: req.body.phone_number,
      password: req.body.password,
    };

    const check = Object.values(newUser);

    for (let i = 0; i < check.length; i++) {
      if (check[i] === undefined || check[i] === null) {
        res.sendStatus(400);
      }
    }
    const insertId = await UserRepository.create(newUser);
    res.status(201).json({ insertId });

    // Create the item
    // const insertId = await UserRepository.create(newUser);
    // // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    // res.status(201).json({ insertId });

    // res.status(400);

    // // Create the item
    // const insertId = await UserRepository.create(newUser);
    // // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    // res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const userId = Number(req.params.id);
    const user = await UserRepository.read(userId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, add, read };
