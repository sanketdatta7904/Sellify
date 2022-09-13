const router = require("express").Router();
const KEY =  process.env.STRIPE_KEY
const Stripe = require('stripe')
const stripe = Stripe(KEY);

router.post("/payment", async (req, res) => {
  try{
    console.log(req.headers)
  console.log(req.body)
  const result = await stripe.paymentIntents.create(
    {
      amount: req.body.amount,
      payment_method_types: ['card'],
      currency: "usd",
    })
      if (result) {
        console.log("resposne in strip", result)
        res.status(200).json(result);
      }
  
  }catch(err){
    console.log("Error is stripe", err)
    res.status(500).json(err);
  }
  
});

module.exports = router;