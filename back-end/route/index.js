const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const {EMAIL} = require("../config/config.js");
const logger=require("../logger")
const transport = {

  host: EMAIL.HOST,
  port: EMAIL.PORT,

  auth: {
    user: "info@jennifersanchez.dev",
    pass: EMAIL.PASS,
  },
  // === add this === //
  tls: { rejectUnauthorized: false },
};

 
const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});
router.get("/", (req,res)=>{
  return res.send("Hello World")
})
router.post("/contact", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `name: ${name} \n email: ${email} \n message: ${message} `;

  const mail = {
    from: name,
    to: "info@jennifersanchez.dev", //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content,
  };
  logger.info(`Email sent: ${email}`);
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err)
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

module.exports = router;
