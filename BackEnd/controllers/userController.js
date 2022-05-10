const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ApiError = require("../handlers/apiError");
const { User } = require("../models/models");

const generateJWT = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

module.exports.registration = async (req, res, next) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    return next(ApiError.badRequest("Incorrect email and password!"));
  }

  const canditate = await User.findOne({ where: { email } });

  if (canditate) {
    return next(ApiError.badRequest("User with this email already exists!"));
  }

  const hashPassword = await bcrypt.hash(password, 4);
  const user = await User.create({ email, role, password: hashPassword });
  const token = generateJWT(user.id, user.email, user.role);

  return res.json({ token });
};

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return next(ApiError.internal("User with this email not found!"));
  }

  let comparePasswordWithDB = bcrypt.compareSync(password, user.password);

  if (!comparePasswordWithDB) {
    return next(ApiError.badRequest("You entered the wrong password!"));
  }

  const token = generateJWT(user.id, user.email, user.role);

  return res.json({ token });
};

module.exports.checkUser = async (req, res) => {
  const { id, email, role } = req.user;
  const token = generateJWT(id, email, role);
  return res.json({ token });
};
