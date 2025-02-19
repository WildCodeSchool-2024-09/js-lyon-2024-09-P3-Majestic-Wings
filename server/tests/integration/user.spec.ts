import supertest from "supertest";

import "dotenv/config";

import app from "../../src/app";

import databaseClient from "../../database/client";

describe("POST /api/user", () => {
  it("should add a new user successfully", async () => {
    const fakeUser = {
      firstname: "Théophile",
      lastname: "Simoes",
      age: 33,
      mail: "theo.simoes@gmail.com",
      phone_number: "0633485292",
      password: "Toto",
    };

    const response = await supertest(app).post("/api/user").send(fakeUser);

    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.insertId).toBeDefined();
  });

  it("should fail on invalid request body", async () => {
    const fakeUser = {
      firstname: "Théophile",
      lastname: "Simoes",
      age: null,
      mail: "theo.simoes@gmail.com",
      phone_number: "0633485292",
    };

    const response = await supertest(app).post("/api/user").send(fakeUser);

    expect(response.status).toBe(500);
    expect(response.body).toEqual({});
  });
});

afterAll(async () => {
  await databaseClient.end();
});
