const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

// This now works!
const register = async (req, res) => {
  try {
    // check if the email already exists!!!
    const auth = await prisma.auth_users.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (auth) {
      return res.status(400).json({ status: "ok", msg: "duplicate email" });
    }

    // this is where we encrypt the password using the bcrypt dependency
    const hash = await bcrypt.hash(req.body.password, 12);

    //    Then we create the user or object
    await prisma.auth_users.create({
      data: {
        email: req.body.email,
        password: hash,
        role: req.body.role || "user",
      },
    });

    res.json({ status: "ok", msg: "user registered" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", msg: "invalid registration" });
  }
};

const login = async (req, res) => {
  try {
    // check if the login exists
    const auth = await prisma.auth_users.findUnique({
      where: { email: req.body.email },
    });
    if (!auth) {
      return res.status(400).json({ status: "error", msg: "not authorised" });
    }
    // check if the password is correct: we check the hash vs hash not the password itself

    const result = await bcrypt.compare(req.body.password, auth.password);
    if (!result) {
      return res
        .status(401)
        .json({ status: "error", msg: "email or password error" });
    }

    const payload = {
      email: auth.email,
      role: auth.role,
    };

    const access = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "20m",
      jwtid: uuidv4(),
    });

    const refresh = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "30d",
      jwtid: uuidv4(),
    });

    res.json({ access, refresh });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ status: "error", msg: "login failed" });
  }
};

const getAllAuthenticatedUsers = async (req, res) => {
  try {
    // check if the email already exists!!!
    const auth = await prisma.auth_users.findMany({});
    res.json(auth);
  } catch (error) {
    console.log(error);
    res.json({ status: "error", msg: "cannot get the users" });
  }
};

module.exports = { register, login, getAllAuthenticatedUsers };
