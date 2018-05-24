'use strict';

const sendMessage = () => {
    console.log('sendMessage hit');
    return { response: 'from sendMessage'}
};

module.exports = sendMessage;