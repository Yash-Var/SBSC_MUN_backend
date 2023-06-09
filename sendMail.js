require("dotenv").config();
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const logger = async (req, res, next) => {
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
        to: req.body.email,
        subject: "Thanks Enquiring..",
        html: `
        <div>
        Dear ${req.body.name}<br><br>

        Thankyou for contacting Shaheed Bhagat Singh College Model United Nations Society.<br><br>

        We've received your message and our team is currently working on it. <br>We will revert back to you as soon as possible. <br><br>Thankyou for your patience.
        <br><br>
        Regards<br>
        Team SBSC MUN<br>
        Shaheed Bhagat Singh College<br>
        University of Delhi<br>
        </div>
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

module.exports = logger;
