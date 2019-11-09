var express = require('express');
var router = express.Router();
var actions = require("../actions/mailer.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 /* POST email server. */
 router.post('/send', function(req, res, next) {
   let {email: {from, to, subject, text, html}} = req.body
   console.log(actions.sendMail(from, to, subject, text, html))
   res.json({ from, to, subject, text, html} );
 });

module.exports = router;
