const cron = require("node-cron");
const Payment = require("../models/paymentModel");
const { triggerLambda } = require("../services/lambdaService");

cron.schedule("0 0 1 * *", async () => {

    console.log("Running batch job");

    const payments = await Payment.find({ processed: false });

    for (let pay of payments) {

        if (pay.status === "SUCCESS") {
            await triggerLambda("start", pay.instanceId);
        } else {
            await triggerLambda("stop", pay.instanceId);
        }

        pay.processed = true;
        await pay.save();
    }

});