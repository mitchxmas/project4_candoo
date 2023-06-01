const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// const getRoles = async (req, res) => {
//   try {
//     const roles = await prisma.roles.findMany({});

//     res.json(roles.role);
//   } catch (error) {
//     console.error(error.message);
//     res.json({ status: "error", msg: "cannot get roles" });
//   }
// };

const getRoles = async (req, res) => {
  try {
    const allRoles = await prisma.auth_roles.findMany({});
    res.json(allRoles);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "cannot get roles" });
  }
};

module.exports = getRoles;
