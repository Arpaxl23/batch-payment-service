const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    userId: String,
    amount: Number,
    status: String,
    instanceId: String,
    processed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Payment", paymentSchema);