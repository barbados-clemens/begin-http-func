const arc = require("@architect/functions");
const MessagingResponse = require('twilio').twiml.MessagingResponse;
exports.handler = arc.http.async(http)

async function http(req) {
    const twiml = new MessagingResponse();

    twiml.message('The Robots are coming! Head for the hills!');

    return {
        statusCode: 200,
        xml: twiml.toString(),
        cors: true,
    }
}
