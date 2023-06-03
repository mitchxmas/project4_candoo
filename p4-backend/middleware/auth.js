const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  if (!("authorization" in req.headers)) {
    return res.status(400).json({ status: "error", msg: "no token found" });
  }
  console.log("step 1, here we are");
  const token = req.headers["authorization"].replace("Bearer ", "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
      req.decoded = decoded;
      console.log("step 2, here we are, here is the token:", token);
      console.log("decoded?", decoded);

      next();
    } catch (error) {
      return res.status(401).json({
        status: "error",
        msg: "unauthorised",
      });
    }
  } else {
    return res.status(403).send({ status: "error", msg: "missing token" });
    console.log("step 3, here we are");
  }
};

const adminAuth = (req, res, next) => {
  if (!("authorization" in req.headers)) {
    return res.status(400).json({ status: "error", msg: "no token found" });
  }

  const token = req.headers["authorization"].replace("Bearer ", "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
      if (decoded.role === "admin") {
        req.decoded = decoded;
        next();
      } else {
        throw new error();
      }
    } catch (error) {
      return res.status(401).json({
        status: "error",
        msg: "unauthorised",
      });
    }
  } else {
    return res.status(403).send({ status: "error", msg: "missing token" });
  }
};

module.exports = { auth, adminAuth };
