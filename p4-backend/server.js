require("dotenv").config();

const express = require("express");
const cors = require("cors");
const users = require("./routers/users");
const services = require("./routers/services");
const orders = require("./routers/orders");
const auth = require("./routers/auth");
const roles = require("./routers/roles");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", auth);
app.use("/auth/roles", roles);

app.use("/api", users);
app.use("/api", services);
app.use("/api", orders);

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
