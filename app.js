const TwitchBot = require('twitch-bot')
const robot = require("robotjs");
const isNumeric = require("isnumeric");



const Bot = new TwitchBot({
    username: 'ChatPlaysLive',
    oauth: 'oauth:wg7owpdxb4x51xboa3q1hgnvvhz383',
    channels: ['chatplayslive']
})



const COOKIE_X = 250;
const COOKIE_Y = 470;

const STORE_X = 1550;
const STORE_BASE_Y = 300;
const STORE_INCREMENT = 65;


robot.moveMouse(COOKIE_X, COOKIE_Y);

Bot.on('join', () => {

    Bot.on('message', chatter => {
        const name = chatter.username;
        const msg = chatter.message;
        const cmd = chatter.message.charAt(0);
        const toSend = 'hello ' + name + '. ' + msg;
        Bot.say(toSend);
        console.log(toSend);

        if (cmd === 'c') {
            console.log('click');
            robot.moveMouse(COOKIE_X, COOKIE_Y);
            robot.mouseClick();
            Bot.say('lemme click');
        } else if (cmd === 'g') {
            console.log('get position');
            const pos = robot.getMousePos();
            console.log('position: ' + pos.x + ', ' + pos.y);
        } else if (isNumeric( cmd )) {
            console.log('spot' + cmd);
            robot.moveMouse(STORE_X, STORE_BASE_Y + (cmd - 1) * STORE_INCREMENT);
            robot.mouseClick();
        }
    });
});

Bot.on('error', err => {
    console.log(err)
});

console.log('start');