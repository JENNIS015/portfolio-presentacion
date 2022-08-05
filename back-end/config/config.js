const dotenv = require("dotenv");
dotenv.config({
  silent: process.env.NODE_ENV === "production",
});

module.exports = {
  EMAIL: {
    PASS: process.env.PASS,
    PORT: process.env.PORT,
    HOST: process.env.HOST,
  },
  PORT: process.env.PORT_SERVER_LOCAL,
  LOCAL_CLIENT_APP: process.env.LOCAL_CLIENT_APP,
  REMOTE_CLIENT_APP: process.env.REMOTE_CLIENT_APP,
  ALLOWED_DOMAINS:
    process.env.DONE_ENV === "production"
      ? [process.env.REMOTE_CLIENT_APP, process.env.REMOTE_SERVER_API]
      : [process.env.LOCAL_CLIENT_APP, process.env.LOCAL_SERVER_API],
};
