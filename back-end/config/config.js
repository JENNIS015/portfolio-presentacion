const dotenv = require("dotenv");
dotenv.config({
  silent: process.env.NODE_ENV === "production",
});

module.exports = {
  EMAIL: {
    PASS: process.env.PASS,
    PORT: process.env.EMAIL_PORT,
    HOST: process.env.HOST,
  } 
};
