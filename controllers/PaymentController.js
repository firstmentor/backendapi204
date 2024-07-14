require('dotenv').config({ path: './.env' })
// const key =process.env.STRIPE_SECRET_KEY
// console.log(key)
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


class PaymentController{
    static processPayment = async (req, res) => {
        console.log(req.body)
        const mypayment = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: "INR",
            metadata: {
                company: "Ecommerce"
            }
        })
        console.log(mypayment)
        res
        .status(200)
        .json({ success: true, client_secret: mypayment.client_secret });
       
    }

    static sendStripeApiKey = async (req, res) => {

        res.status(200).json({
            stripeApiKey: process.env.STRIPE_API_KEY
        })
    }
}

module.exports = PaymentController