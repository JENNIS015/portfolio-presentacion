const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const index = require("./route/index");
const { createServer } = require("http");
const logger = require("./logger");
const config = require("./config/config");
const { ALLOWED_DOMAINS,PORT } = config;
const app = express();
const helmet = require("helmet");
const compression = require("compression");
 

 

app.use(
  cors({
    credentials: true,
    origin: ALLOWED_DOMAINS,
    optionsSuccessStatus: 200,
  })
);
app.use(helmet());
app.use(compression());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

const server = new createServer(app);
server.listen(PORT, () => {
  logger.info(`Server is up and running on port ${PORT}`);
});

/* ---------------------- Servidor ----------------------*/
// dotenv.config({ silent: process.env.NODE_ENV === "production" });

module.exports = app;
