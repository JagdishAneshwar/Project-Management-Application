const jwt = require("jsonwebtoken");
const { privateKey } = require("../../config");

const fetchuser = (req, res, next) => {
  // get the user from jwt token and add id to req object

  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate uisng valid token" });
  }

  try {
    const data = jwt.verify(token, privateKey);
    // adding id to req object
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate uisng valid token" });
  }
};

module.exports = fetchuser;