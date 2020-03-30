# TwitchChannelIntergration
Script-version: v0.2
Last-modified: 16.03.2020
Made by: lobster/loster31345 from WiAD
Requested by: Myian (twitch.tv/myian).

# TwitchChannelIntergration is a twitch script that brings the streamer and the viewer closer.

## Functions:
1. On commands in twicth will return a response/message.
2. On reedem_points will make the streamer either play a sound file, press some keys, move mouse or return a message in chat.
3. Every action is being logged in the console.
4. Simple and clean way to add and removed.

## Instructions on how to get it up
1. This folder is in a zip-file, so extract it.
2. This script is made in js, based around a node.js. So at first make sure you have node.js installed on your computer("https://nodejs.org/en/download/"). Its an installer so sud be easy getting it installed.
3. No need to go into the code itself. Theres some .json files in the folder. Lets focus on the config.json first.
    - Prefix : This is the custom first letter, so the script can see the different between normal chat and commands.
    - ConfigChannel : Is which channel the script sud listen for actions. Like if "twitch.tv/myian" is streaming, put "#Myian" here.
    - ConfigUsername : This is the scripts username, or if its you hosting the script, put your username here. Like if "twitch.tv/myian" is running the script, put "Myian" here.
    - ConfigPassword : Go to "https://twitchapps.com/tmi/", hit click connect and approve. they you sud see a something like "oauth:xxxxxxxxxxxxxxxxx" copy it and paste it into the config.
    - rewardID : This is connected to the Reedem_points function. Here you put the icon UUID, on which the reedem_points function sud activate.
4. Awesome!!!! you just finished filling the "config.json" file. If you have any answer regarding config.json dont be afraid to ask me (lobster/loster31345)^^
5. Now you can start adding some basic commands, open the "commands.json".
    - "" : is where you put your custom command, but remember the first letter gotta be you prefix you set in the config. 
    - Response : this is where you put the message/image that sud be sent back when a user writes the command.
6. Great, soon finished now. Same here dont be afraid to ask.
7. Only file left worth editing now is the "Reedem_points.json".
    - "" : Same here like it was in commands, only here you put the message that the reedemed_points sud be. 
    - Response : this is where you put the message/image that sud be sent back when a user sends in the points.
    - Keys : This is where you put the keys that sud be pressed, Array format! Like [ "a", "3", "q"].
    - Audio : This is where you put the path/link to the audio file that sud be played. Only tested with .mp3 files.
8. Huh, i think that was that. GOOD JOB!
9. Run the start.bat file, and the script is running.
Head to "https://github.com/l0b5ter/TwitchChannelIntergration-js-/tree/master/Example" to see a example.

Feel free to take a look at the script "app.js", however if you make a change dont come and say its not working. ill galdly help fix or improve it^^







How to solve some errors with script:                                                                                                 
        * Sript returning error on first run (tmi error).                                                                     
        Solution: Is there a folder named node_modules in your folder? If not the packages didnt get installed. Normally this comes from that you installed Nodejs as global and not localy. But to simple fix this download this zip(https://www.dropbox.com/s/uklz57zr29f004i/node_modules.rar?dl=1), and extract its content "node_modules" over to your folder.       
        * Script wont play any sound.                                                                                               
        Solution: look into the console, is there a error like "Could not play sound: Error: Could'nt find a suitable audio player". Make sure you have a good audio player installed (default player doesnt work), also ive only tested with .mp3 files.                  
                  Installation of audio player.                                                                               
                    Windows:                                                                                                           
                        1. Download MPlayer for Windows. Go to this page ("https://sourceforge.net/projects/mplayerwin/"), and click on the green Download button.                                                                                                              
                        2. Since its a zip file, extract it and put the folder somewhere safe.                                         
                        3. Add the folder containing the mplayer.exe file to your system path so that mplayer.exe can be invoked from any location on your system. Follow the instructions from this tutorial ("https://www.computerhope.com/issues/ch000549.htm") to add the folder to your system path. Add it under the variable named "Path" in both the user variables and system variables.                    
                        4. Save and hit OK.                                                                                         
                        5. open CMD and type mplayer. if you get "'mplayer' is not recognized as an internal or external command,     
                           operable program or batch file." your attempt on adding the folder to the path failed. So try again. However if you get something else, its installed.                                                                                             
                        6. Now you can run the script and hear the audio.
                    OS X:                                                                                                       
                        By default afplay should be installed, open the terminal and type "$ which afplay". This sud return the path                                                                                                                                       
        * Script wont press any buttons.                                                                                              
        Solution: Take a look in the "Reedem_points.json" file, did you format the '"Keys" : ' the right way? Its supposed to be array format you know. Like ["b", "c", "9", "0"].                                                                                             
        * Dont know what keybindings i can use.                                                                                    
        Solution: Take a look at http://robotjs.io/docs/syntax, it sud have all the special keys. numbers and letters are just a or 3.



#### Wanna support my work?                                                    
[![Become a Patron!](https://i.imgur.com/BbE01dL.png)](https://www.patreon.com/bePatron?u=31657981)
