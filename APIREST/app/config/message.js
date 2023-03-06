import colors from 'colors';

const message = (msg, type) => {
    switch (type) {
        case 'danger':
            console.log(msg.bgRed);
            break;

        case 'success':
            console.log(msg.bgGreen);
            break;

        case 'warning':
            console.log(msg.bgYellow);
            break;

        default:
            console.log(msg.bgWhite);
            break;
    }
}

module.exports = message;