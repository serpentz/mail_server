var express = require('express')
var router = express.Router()
var actions = require('../actions/mailer.js')

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' })
})

/* POST email server. */
router.post(
    '/send/recipient',
    asyncMiddleware(async function(req, res, next) {
        let {
            email: { from, to, subject, text }
        } = req.body
        let response = {}
        try {
            let response = await actions.sendMail(from, to)
            console.log(response)
            res.json(response)
        } catch (a) {
            console.log('line 27')
            response.error = true
            response.data = {
                message: a.message
            }
            console.log(a.message)
            res.json({ response })
        }
    })
)

router.post(
    '/send/ticon',
    asyncMiddleware(async function(req, res, next) {
        let {
            email: { from, to, subject, text }
        } = req.body
        let response = {}
        try {
            let response = await actions.sendMail(
                from,
                'Ticonlabs@gmail.com',
                text
            )
            console.log(response)
            res.json(response)
        } catch (e) {
            console.error(e)
        }
    })
)

module.exports = router
