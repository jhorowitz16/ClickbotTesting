const TwitchBot = require('twitch-bot')
const robot = require("robotjs");


const Bot = new TwitchBot({
    username: 'ChatPlaysLive',
    oauth: 'oauth:wg7owpdxb4x51xboa3q1hgnvvhz383',
    channels: ['chatplayslive']
})

Bot.on('join', () => {

    Bot.on('message', chatter => {
        const name = chatter.username;
        const msg = chatter.message;
        const toSend = 'hello ' + name + '. ' + msg;
        Bot.say(toSend);
        console.log(toSend);

        robot.typeString(toSend +'\r');
        // robot.moveMouse(100, 100);

    });
});

Bot.on('error', err => {
    console.log(err)
});

console.log('start');