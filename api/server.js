import express from "express";
import "dotenv/config";
import prisma from "./lib/prisma.js";

const app = express();
const users = [];

app.use(express.json());
app.post("/Users", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    },
  });
  users.push(req.body);
  res.status(201).json(req.body);
});
app.get("/Users", (req, res) => {
  res.status(200).json(users);
});

app.listen(3000);
