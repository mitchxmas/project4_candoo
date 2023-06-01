require("dotenv").config();

const express = require("express");
const cors = require("cors");
const users = require("./routers/users");
const services = require("./routers/services");
const auth = require("./routers/auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", users);
app.use("/api", services);

app.use("/auth", auth);

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
