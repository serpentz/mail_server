const nodemailer = require('nodemailer');

const assets = require('../assets')


let html_temp = assets.default.templates.outmail.temp
console.log(html_temp)

// async..await is not allowed in global scope, must use a wrapper
async function main(from, to, text = "") {

	let return_data = {response: {error: false}}

	// console.error(from,to,subject,text,html)
	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	let testAccount = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
	    pool: true,
	    host: 'smtp.gmail.com',
	    port: 587,
	    secure: false, // true for 46s5, false for other ports
	    auth: {
	        user: "absalomcherinet01@gmail.com", // generated ethereal user
	        pass: "plzzxzcxjqhhdmxq" // generated ethereal password
	    }
	});

	/* =--------------------------------- TEST TRANSPORTER BEGIN -----------------------------------=
		let transporter = nodemailer.createTransport({
			pool: true,
			host: 'smtp.ethereal.email',
			port: 587,
			secure: false, // true for 46s5, false for other ports
			auth: {
				user: testAccount.user, // generated ethereal user
				pass: testAccount.pass  // generated ethereal password
			}
		});
	=--------------------------------- TEST TRANSPORTER END --------------------------------------= */

	let info;

	if (to == "Ticonlabs@gmail.com") {
		info = await transporter.sendMail({
			from,
			to,
			subject: `Get in Touch w/ Ticon: ${ from }`,
			text
		}).catch(error)

		return_data.response = info

	} else {

		// send mail with defined transport object
		info = await transporter.sendMail({
			from,
			to,
			subject: "Working together!",
			text,
			html: html_temp
		}).catch(error)

		return_data.response = info

	}

	if(!info.messageId){
		return_data.error  = true
	}

	return info

}

const sendMail =  (from, to, text) => {

	let response = {
		error: false,
		data: {
			sent_to: to
		}
	}

	return main(from, to, text)
}

function callback(respo){
	// console.log(`respo: ${JSON.stringify(respo)}`)

	let response = {
		error: false,
		data: {
			sent_to: respo
		}
	}



	return respo
}

function error(e){
	// console.log(`respo: ${JSON.stringify(respo)}`)

	let response = {
		error: true,
		data: {
			message: e.message
		}
	}

	return response
}

async function send(from,to,text){
	let response =  await sendMail(from,to,text).then(callback)
}

// main().catch(console.error);
// let sendMail = (from,to,subject,text,html) => main(from,to,subject,text,html).catch(err => console.log(err))
// console.log("sendMail" + sendMail())

module.exports = { sendMail }
