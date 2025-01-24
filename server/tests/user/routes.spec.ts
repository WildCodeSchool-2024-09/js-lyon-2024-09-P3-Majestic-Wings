// Import the supertest library for making HTTP requests
import supertest from "supertest";

// Import the Express application
import app from "../../src/app";

// Import databaseClient
import databaseClient from "../../database/client";

import type { Result } from "../../database/client";

// Restore all mocked functions after each test
afterEach(() => {
  jest.restoreAllMocks();
});

// Test suite for the POST /api/items route
// Doesn't pass: maybe something to change in app config :/
describe("POST /api/user", () => {
  it("should add a new user successfully", async () => {
    // Mock result of the database query
    const result = { insertId: 1 } as Result;

    // Mock the implementation of the database query method
    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async () => [result, []]);

    // Fake user data

    const fakeUser = {
      firstname: "Nadir",
      lastname: "Haddouche",
      age: 21,
      mail: "nadir.haddouche@hotmail.com",
      phone_number: "0625336042",
      hashed_password: "miniardisedu69",
    };

    // Send a POST request to the /api/user endpoint with a test user
    const response = await supertest(app).post("/api/user").send(fakeUser);

    // Assertions
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.insertId).toBe(result.insertId);
  });

  it("should fail on invalid request body", async () => {
    // Mock result of the database query
    const result = { insertId: 1 } as Result;

    // Mock the implementation of the database query method
    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async () => [result, []]);

    // Fake item data with missing user_id
    const fakeUser = {
      firstname: "Nadir",
      lastname: "Haddouche",
      age: 21,
      mail: "nadir.haddouche@hotmail.com",
      phone_number: 0o625336042,
    };

    // Send a POST request to the /api/user endpoint with a test user
    const response = await supertest(app).post("/api/user").send(fakeUser);

    // Assertions
    expect(response.status).toBe(400);
  });
});
