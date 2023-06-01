const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

// --- CRUD Functions ---
const seedUsers = async (req, res) => {
  try {
    await prisma.users.deleteMany();
    await prisma.users.create([
      {
        title: "Interview With a Vampire",
        author: "Anne Rice",
        year_published: "1976",
      },
      { title: "IT", author: "Stephen King", year_published: "1986" },
      { title: "The Hobbit", author: "J.R.R. Tolkin", year_published: "1996" },
      { title: "Dune", author: "Frank Herbert", year_published: "1965" },
      { title: "Gone Girl", author: "Gillian Flynn", year_published: "2012" },
      {
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        year_published: "1934",
      },
    ]);

    res.json({ status: "ok", msg: "seeding successful" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding error" });
  }
};

// this works!
const getUsers = async (req, res) => {
  try {
    const allUsers = await prisma.users.findMany({});
    res.json(allUsers);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get users" });
  }
};

// this works!
const getOneUser = async (req, res) => {
  try {
    const oneUser = await prisma.users.findUnique({
      where: { id: req.body.id },
    });
    res.json(oneUser);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error getting the user" });
  }
};

// this works!
const putUsers = async (req, res) => {
  // we encrypt the password using the bcrypt dependency
  const hash = await bcrypt.hash(req.body.password, 12);
  try {
    await prisma.users.create({
      data: {
        email: req.body.email,
        password: hash,
        role: req.body.role,
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mobile: req.body.mobile,
        address_line1: req.body.address_line1,
        address_line2: req.body.address_line2,
        city: req.body.city,
        postcode: req.body.postcode,
        country: req.body.country,
        is_seller: req.body.is_seller,
      },
    });
    res.json({ status: "OK", msg: "user saved" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "cannot save user" });
  }
};

//this works!
const deleteUser = async (req, res) => {
  try {
    await prisma.users.delete({ where: { id: req.body.id } });

    // await prisma.users.findByIdAndDelete(req.params.id);
    res.json({ status: "ok", msg: "user deleted" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", msg: "error deleting user" });
  }
};

// this works!
const patchUser = async (req, res) => {
  // we encrypt the password using the bcrypt dependency
  const hash = await bcrypt.hash(req.body.password, 12);

  try {
    const updatedUser = {};

    if ("email" in req.body) updatedUser.email = req.body.email;
    if ("password" in req.body) updatedUser.password = hash;
    if ("role" in req.body) updatedUser.role = req.body.role;
    if ("username" in req.body) updatedUser.username = req.body.username;
    if ("firstname" in req.body) updatedUser.firstname = req.body.firstname;
    if ("lastname" in req.body) updatedUser.lastname = req.body.lastname;
    if ("mobile" in req.body) updatedUser.mobile = req.body.mobile;
    if ("address_line1" in req.body)
      updatedUser.address_line1 = req.body.address_line1;
    if ("address_line2" in req.body)
      updatedUser.address_line2 = req.body.address_line2;
    if ("city" in req.body) updatedUser.city = req.body.city;
    if ("postcode" in req.body) updatedUser.postcode = req.body.postcode;
    if ("country" in req.body) updatedUser.country = req.body.country;
    if ("is_seller" in req.body) updatedUser.is_seller = req.body.is_seller;

    // await prisma.users.findByIdAndUpdate(req.params.id, updatedUser);
    console.log("updatedUser", updatedUser);
    await prisma.users.update({
      where: { id: req.body.id },
      data: updatedUser,
    });

    res.json({ status: "ok", msg: "user updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", msg: "error in updating user" });
  }
};

module.exports = {
  seedUsers,
  getUsers,
  getOneUser,
  putUsers,
  deleteUser,
  patchUser,
};
