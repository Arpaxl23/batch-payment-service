const Payment = require("../models/paymentModel");

exports.createPayment = async (req, res) => {

    const pay = await Payment.create(req.body);

    res.json(pay);
};