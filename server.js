require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

require("./batch/paymentBatch");

const PORT=process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Mongo Connected");
    app.listen(PORT, () =>
        console.log(`🚀 Server running on port ${PORT}`)
    );
})
.catch(err => {
    console.log("Mongo error:", err.message);
});