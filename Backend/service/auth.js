import jwt from "jsonwebtoken";
const secretKey = "WHATdoYouWant";

async function setUserToken(user) {
  const payload = {
    id: user._id,
    name: user.name,
  };
  const token = jwt.sign(payload, secretKey);
  return token;
}

async function getUSerToken(token) {
  const verify = jwt.verify(token, secretKey);
  return verify;
}

export { setUserToken, getUSerToken };
