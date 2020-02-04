////////////////////////////////////////////
//*This the code for the script,  feel   *//
//* free to play around with it^^        *// 
//*Made by: lobster/loster31345 from WiAD*//
//*Requested by: Myian (twitch.tv/myian) *//
////////////////////////////////////////////

const tmi = require("tmi.js");
const robot = require('robotjs');
var player = require('play-sound')(opts = {});
const { ConfigUsername, ConfigPassword, ConfigChannel, Prefix, rewardID } = require('./config.json');
const path = require("path");
const JSONCommands = require("./commands.json");
const JSONReedem = require("./Reedem_points.json");

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: ConfigUsername,
        password: ConfigPassword
    },
    channels: [ConfigChannel] 
};

const client = new tmi.client(options);

client.connect();

client.on("chat", function(channel, user, message, self){
    if(self) return;
    if(message.startsWith(Prefix)) {
        try {
            console.log(process.env.Path);
            console.log(JSONCommands[message].Response);
            client.action(ConfigChannel, JSONCommands[message].Response);
        } catch(err) { console.log(err)}
    }
    else if(user['custom-reward-id'] === rewardID) { 
        try {
            var i;
            for (i = 0; i < JSONReedem[message].Keys.length; i++) {
                console.log(JSONReedem[message].Keys[i]);
                robot.keyTap(JSONReedem[message].Keys[i]);
            } 
            player.play(JSONReedem[message].Audio, (err) => {
                if (err) console.log(`Could not play sound: ${err}`);
            });
            client.action(ConfigChannel, JSONReedem[message].Response);
        } catch(err) {}
  
    }
    console.log(user['message-type']);
});

