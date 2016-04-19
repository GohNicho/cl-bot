// ConnectedLab Slackbot for Quality of Life

// TODO: Remove yucky hard-coded stuff
var AUTH_TOKEN = 'xoxb-33874343796-wpQlvxhUNHZOzT0WUsTkmc6o'

// Begin Initialization stuff
if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('./botkit/lib/Botkit.js');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();

// Begin Controllers
controller.hears(['get names'], 'direct_message', function(bot, message) {
	bot.api.oauth.access
    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'robot_face',
    }, function(err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err);
        }
    });
    // bot.botkit.log(bot.api.users.list(1))
    bot.botkit.log(bot.api.auth.test(AUTH_TOKEN))
});