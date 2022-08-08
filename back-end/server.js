const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const index = require("./route/index");
const { createServer } = require("http");
const logger = require("./logger");
//const config = require("./config/config");
const app = express();
const helmet = require("helmet");
const compression = require("compression");

app.use(
  cors({
    optionsSuccessStatus: 200,
    credentials: true, // This is important.
    origin: "https://jennifersanchez.dev",
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
server.listen(process.env.PORT, () => {
  logger.info(`Server is up and running on port ${process.env.PORT}`);
});

module.exports = app;
