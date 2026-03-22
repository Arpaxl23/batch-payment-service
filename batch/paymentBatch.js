const cron = require("node-cron");
const Payment = require("../models/paymentModel");
const { triggerLambda } = require("../services/lambdaService");

cron.schedule("* * 1 * *", async () => {

    console.log("Running batch job");

    const payments = await Payment.find({ processed: false });

    for (let pay of payments) {

        const instanceId = process.env.INSTANCE_ID; // ⭐ stable

        if (pay.status === "SUCCESS") {
            await triggerLambda("start", instanceId);
        } else {
            await triggerLambda("stop", instanceId);
        }

        pay.processed = true;
        await pay.save();
    }

});