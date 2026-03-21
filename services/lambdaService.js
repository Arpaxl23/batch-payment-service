const axios = require("axios");

exports.triggerLambda = async (action, instanceId) => {

    try {

        const res = await axios.post(
            process.env.LAMBDA_URL,
            { action, instanceId }
        );

        console.log(res.data);

    } catch (err) {

        console.log("Lambda error:", err.message);

    }

};