require("dotenv").config();
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const logger2 = async (req, res, next) => {
  const email = req.body.email;
  // const queryObject={}
  // if(email){
  //   queryObject.email=email
  // }

  try {
    //     const products =await auto.find(queryObject)
    //      res.status(200).json({ products,nbHits:products.length})
    //    console.log(products[0].email);
    const mail = async () => {
      const config = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.email,
          pass: process.env.password,
        },
      });
      await config.sendMail({
        form: "test@gmail.com",
        to: "yashvarshney7011@gmail.com",
        subject: `Dear ${req.body.name} is enquiring`,
        html: `
        <div>
        Dear ${req.body.name}<br><br>
        mobile number : ${req.body.phone}<br><br>
        Email ID : ${req.body.email}<br><br>
        message : ${req.body.message}<br><br>
        `,
      });
      {
        console.log("done");
      }
    };

    mail().catch((e) => console.log(e));
  } catch (error) {
    console.log(error);
  }

  console.log("yash varshney");
  next();
};

module.exports = logger2;
