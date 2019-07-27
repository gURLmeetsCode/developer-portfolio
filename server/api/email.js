const router = require('express').Router()
const nodemailer = require('nodemailer');

if (process.env.NODE_ENV !== 'production') require('../../secrets.js')


let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
});


transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});


router.post('/', (req, res, next) => {
    var name = req.body.fullName
    var email = req.body.email
    var message = req.body.text
    var content = `name: ${name} \n email: ${email} \n message: ${message} `

    var mail = {
      from: name,
      to: process.env.USER,
      subject: 'New Message from Contact Form',
      text: content
    }

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
})








module.exports = router
