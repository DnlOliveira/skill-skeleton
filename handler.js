'use strict';

const sendMessage = require('./functions/sendMessage');

module.exports.start = (event, context, callback) => {
    const intent = event.request.intent.name;
    console.log(event);

    new Promise((resolve, reject) => {
        switch(intent) {
            case 'SendDirectMessage':
                const res = sendMessage();
                resolve(res);
                break;
            case 'ReadMessage':
                break;
        }
    })
    .then((res) => {
        console.log(res);
        callback(null, {
            "version": "1.0",
            "response": {
                "outputSpeech": {
                    "type": "PlainText",
                    "text": res.response
                },
                "card": {
                    "content": "Message for the Alexa companion app.",
                    "title": "Title for the Message",
                    "type": "Simple"
                },
                "shouldEndSession": true
            },
            "sessionAttributes": {}
        });
    });
};
