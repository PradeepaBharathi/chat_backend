const jwt = require("jsonwebtoken");

 function protect(req, res, next) {
  const token = req.headers["x-auth-token"];
  if (!token) {
    return res.status(400).json({ message: "Invalid Authorization" });
  }
  //console.log(token);
  const decode = jwt.verify(token, process.env.SECRET_KEY);
  req.user = decode;
  console.log(decode);
  next();
}
module.exports = { protect };