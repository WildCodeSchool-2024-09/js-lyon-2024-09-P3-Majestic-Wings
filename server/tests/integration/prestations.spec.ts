import supertest from "supertest";

import "dotenv/config";

import app from "../../src/app";

import databaseClient from "../../database/client";

describe("GET /api/prestations", () => {
  it("should fetch prestations successfully", async () => {
    const response = await supertest(app).get("/api/prestations");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThanOrEqual(0);
    expect(response.body[0]).toHaveProperty("plan");
    expect(response.body[0]).toHaveProperty("libelle");
    expect(response.body[0]).toHaveProperty("photo");
  });
});
afterAll(async () => {
  await databaseClient.end();
});
