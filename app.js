const TwitchBot = require('twitch-bot')

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
    })
})

Bot.on('error', err => {
    console.log(err)
})