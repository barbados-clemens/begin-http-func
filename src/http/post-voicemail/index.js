
/* Respond with successful resource creation, CORS enabled
*/
let arc = require('@architect/functions')
const VoiceResponse = require('twilio').twiml.VoiceResponse;

exports.handler = arc.http.async(http)

async function http(req) {
    console.log(JSON.stringify(req, null, 2))
    // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();
    twiml.say('Hello. Please leave a message after the beep.');

    // Use <Record> to record and transcribe the caller's message
    twiml.record({ transcribe: true, maxLength: 60, playBeep: true, });

    // End the call with <Hangup>
    twiml.hangup();
    // response.type('text/xml');
    // response.send(twiml.toString());
    return {
        statusCode: 200,
        xml: twiml.toString(),
        cors: true,
    }
}
