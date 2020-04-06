////////////////////////////////////////////
//*This the code for the script,  feel   *//
//* free to play around with it^^        *// 
//*Made by: lobster/loster31345 from WiAD*//
//*Requested by: Myian (twitch.tv/myian) *//
////////////////////////////////////////////
//action can be replaced with say to not get colored text.
const tmi = require("tmi.js");
const robot = require('robotjs');
var player = require('play-sound')(opts = {});
const { ConfigUsername, ConfigPassword, ConfigChannel, Prefix } = require('./config.json');
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
            //console.log(process.env.Path); Only include when debugging audio player
            console.log(JSONCommands[message].Response);
            client.action(ConfigChannel, JSONCommands[message].Response);
	    var i;
            for (i = 0; i < JSONCommands[message].Keys.length; i++) {
		if(JSONCommands[message].Keys[i].includes(".:.")) {
			var array = JSONCommands[message].Keys[i].split(".:.");
			for(x = 0; x < array.length; x++) {
				console.log(array[x]);
				robot.keyToggle(array[x], 'down');
			}
			for(y = 0; y < array.length; y++) {
				console.log(array[y]);
				robot.keyToggle(array[y], 'up');
			}	
		} else {
                	console.log(JSONCommands[message].Keys[i]);
                	robot.keyTap(JSONCommands[message].Keys[i]);
			console.log(JSONCommands[message].Keys[i]);
		}
            } 
        } catch(err) { console.log(err)}
    }
    else if(user['custom-reward-id'] !== "undefined") { 
        try {
	    var ID = user['custom-reward-id'];
            var i;
            for (i = 0; i < JSONReedem[ID].Keys.length; i++) {
		if(JSONReedem[ID].Keys[i].includes(".:.")) {
			var array = JSONReedem[ID].Keys[i].split(".:.");
			for(x = 0; x < array.length; x++) {
				console.log(array[x]);
				robot.keyToggle(array[x], 'down');
			}
			for(y = 0; y < array.length; y++) {
				console.log(array[y]);
				robot.keyToggle(array[y], 'up');
			}
		} else {
                	console.log(JSONReedem[ID].Keys[i]);
                	robot.keyTap(JSONReedem[ID].Keys[i]);
			console.log(JSONReedem[ID].Keys[i]);
		}
            } 
            /*player.play(JSONReedem[rewardID].Audio, (err) => {
                if (err) console.log(`Could not play sound: ${err}`);
            });*/
            client.action(ConfigChannel, JSONReedem[ID].Response);
        } catch(err) { console.log(err); }
  
    }
	console.log(user['custom-reward-id']);
    console.log(user['message-type']);
});
