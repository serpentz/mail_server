var express = require('express');
var router = express.Router();
var actions = require("../actions/mailer.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 /* POST email server. */
 router.post('/send/recipient', function(req, res, next) {
   let {email: {from, to, subject, text}} = req.body
   actions.sendMail(from, to)
   res.json({ from, to, subject, text, error:false} );
 });

 router.post('/send/ticon', function(req, res, next) {
   let {email: {from, to, subject, text}} = req.body
   actions.sendMail(from, "Ticonlabs@gmail.com", subject, text)
   res.json({ from, to, subject, text, error:false} );
 });

module.exports = router;
