const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./RedBot.json')
const { Client, RichEmbed } = require('discord.js');
var chineseGovernment = false
var disable = [197411437788790784, "place"]
var enable = ["place", "holder"]
var dumb = ["place", "holder"]


client.on('ready', () => {
    var generalChannel = client.channels.get("619951754758586428") // #core-2
    var todoChannel = client.channels.get("619988026793394216")
    console.log("Connected as RedBot!")
    client.user.setActivity("the anarchy of the students", {type: "Watching"})
    generalChannel.send("I was down, but now I'm up.")  
})


client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'dickolas-cage-cult');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Hello ${member}, welcome to Full Deck!`);
});

client.on('messageDelete', function(message, channel) {
    if (message.content.includes("pbmimic")) {
        return
    } else {
        if (message.guild.id == 540660438728441856) {
            if (enable.includes(message.guild.id)) {
                message.channel.send(message.author + " is displaying self-censorship at its finest!", {files: ["./images/Ethi_Chinese.gif"]})
                return
            } else {
                return
            }
        } else if (disable.includes(message.guild.id)) {
            return
        } else if (enable.includes(message.guild.id)) {
            message.channel.send(message.author + " just deleted a message. You'd better have a good reason...")
        } else if (dumb.includes(message.guild.id)) {
            message.channel.send(message.author + ' just deleted a message saying "' + message + '"')
        } else {
            return
        }
    }
});


client.on('message', async (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }

if (receivedMessage.content === 'how to embed') {
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('An embed')
      // Set the color of the embed
      .setColor(0xFF00FF)
      // Set the main content of the embed
      .setDescription('Hello, this is an embed!');
    // Send the embed to the same channel as the message
    receivedMessage.channel.send(embed);
  }

//responses without pinging
function filterSay(i1, i2, i3, i4, i5, i6, o1) {
    if (receivedMessage.content.includes(i1) || receivedMessage.content.includes(i2) || receivedMessage.content.includes(i3) || receivedMessage.content.includes(i4) || receivedMessage.content.includes(i5) || receivedMessage.content.includes(i6)) {
        receivedMessage.channel.send(o1)
    }
}

filterSay ("owo", "Owo", "OWO", "uwu", "Uwu", "UWU", "ew")

filterSay ("hello there", "Hello there", "HELLO THERE", "hello THERE", "HELLO there", "hEllO thErE", "General Kenobi.")

filterSay ("sogh", "s o g h", "Sogh", "S o g h", "SOGH", "S O G H", "You mean `sigh`.")

//commands just for me
if (receivedMessage.author.tag == "Caeruleus#6736") {
    if (receivedMessage.content.startsWith("todo:")) {
        receivedMessage.channel.send("I've put that in my notebook, boss!")
        var todoChannel = client.channels.get("619988026793394216")
        todoChannel.send(receivedMessage.content)
    } else if (receivedMessage.content.startsWith(config.prefix + "mimic ")) {
      receivedMessage.delete(1000); //Supposed to delete message
      receivedMessage.channel.send(receivedMessage.content.slice(8, receivedMessage.content.length))
      return
   }
   if (receivedMessage.content.startsWith("msbomb")) {
    var dUser = receivedMessage.guild.member(receivedMessage.mentions.users.first()) || receivedMessage.guild.members.get(args[0]);
    var i = 0
    var num = parseInt(receivedMessage.content.slice(7, receivedMessage.content.length))
    receivedMessage.channel.send("tactical explosives requested")  
    for (i = 0; i<num; i++) {
        dUser.send("bombed");
    }
    receivedMessage.channel.send(i + " tactical explosives deployed")
   }
}

//possibly the most important part of the bot--the Pidge engine
function greenheart (p1) {
    if (receivedMessage.content.includes(p1)) {
        receivedMessage.react('💚')
    }
}

greenheart ("pidge")
greenheart ("Pidge")
greenheart ("PIDGE")
greenheart ("p i d g e")
greenheart ("P i d g e")
greenheart ("P I D G E")

//defining conversation engine
function hearSay (p1, p2, p3, p4, p5, p6, o1) {
    if (receivedMessage.content.includes(client.user.id) && ((receivedMessage.content.includes(p1)) || (receivedMessage.content.includes(p2)) || (receivedMessage.content.includes(p3)) || (receivedMessage.content.includes(p4)) || (receivedMessage.content.includes(p5)) || (receivedMessage.content.includes(p6)))) {
        receivedMessage.channel.send(o1)
    }
}

//begin talking section, add new messages here
hearSay ("bedtime", "goodnight", "Bedtime", "Goodnight", "sleep", "Sleep", "Goodnight " + receivedMessage.author.toString() + "!")

hearSay ("wake", "Wake", "good morning", "Good morning", "morning", "Morning", "Good morning " + receivedMessage.author.toString() + "!")

hearSay ("hi ", "Hi ", "hello", "Hello", "hola", "Hola", "Hello " + receivedMessage.author.toString() + "!")

hearSay ("love you", "Love you", "LOVE YOU", "ily", "ILY", "Ily", "I love you too, " + receivedMessage.author.toString() + " :heart:")

hearSay ("fuck you ", "Fuck you ", "fk you ", "Fk you ", "screw you ", "Screw you", "If it were anyone except you, I'd consider it.")

hearSay ("agree with me", "Agree with me", "agrees with me", "Agrees with me", "Don't you agree", "don't you agree", "I agree completely and absolutely with everything that " + receivedMessage.author.toString() + " just said.")

hearSay ("hey bae", "Hey bae", "hey baeee", "Hey baeee", "hey baeeee", "Hey baeeee", "lmao no")

hearSay ("good afternoon", "Good afternoon", null, null, null, null, "Good afternoon " + receivedMessage.author.toString() + "!")

hearSay ("good evening", "Good evening", null, null, null, null, "Good evening " + receivedMessage.author.toString() + "!")

hearSay ("sick", "Sick", "SICK", "sad", "Sad", "SAD", "I'm sorry to hear that--I hope you feel better soon.")

hearSay ("suck", "Suck", "SUCK", null, null, null, "lmao that's Kody's job")

hearSay ("eat my ass", "Eat my ass", "EAT MY ASS", null, null, null, "Not with what you've been putting in it.")

hearSay ("fuck off", "Fuck off", "screw off", "Screw off", "go away", "Go away", "Sometimes you make me want to.")

hearSay ("help", "Help", "HELP", "h e l p", "H e l p", "H E L P", "```Hi, I'm PurpleBot! \
My prefix is 'pb', but if you just want a casual conversation, you can ping me while saying something and I'll (probably) respond! I have a few different commands, including: \
" +"\n" + "    - pbheart, which will have me send a heart of the specified colour. For red, don't list a colour. \
" +"\n" + "    - pbwolfram sends your input to Wolfram|Alpha and gives you the result. It's been disabled for now, but I'm sure the Boss is working 24/7 to fix it. \
" +"\n" + "    - pbkick is admin-only, and does exactly what you think it does. There is a slight glitch where an admin can't kick another admin, but just take away their roles first and you'll be fine. \
" +"\n" + "    - pbimage displays an image based on keywords, it's up to you to figure out which keywords do what. \
" +"\n" + "    - pbobtain... well... that's special. \
" +"\n" + "    - pbprofile [@user] sends the user's current profile picture--leave it blank to get your own! \
" +"\n" + "    - pbpoll will turn your message into an instant poll using my super-secret pollmaking tools! \
" +"\n" + "    - pbdelete will alow you to enable or disable my delete-scouting. \
" +"\n" + "    - Any message that starts with //TODO will be added to your todo list, otherwise known as your DMs. \
" +"\n" + "There are a few other commands and functions that you'll have to discover on your own, and the Boss is always adding new stuff, so keep your eyes open! \
" +"\n" +"\n" + " \
If you have an idea for a feature you want the Boss to add to me, send him a DM or ping him!```")


if (receivedMessage.author.tag == "Ellie A#1860" && (receivedMessage.content.includes(client.user.id) && ((receivedMessage.content.includes("fuck yourself")) || (receivedMessage.content.includes("Fuck yourself")) || (receivedMessage.content.includes("screw yourself")) || (receivedMessage.content.includes("Screw yourself")) || (receivedMessage.content.includes("fk yourself")) || (receivedMessage.content.includes("Fk yourself"))))) {
receivedMessage.channel.send("B- But I left my Hexbugs in the other room!")

} else {
    hearSay ("fuck yourself", "Fuck yourself", "screw yourself", "Screw yourself", "fk yourself", "Fk yourself", "Do it to me yourself, coward.")
}


if (receivedMessage.content.startsWith('//TODO') || receivedMessage.content.startsWith('//todo')) {
    var task = receivedMessage.content.substr(7)
    todoCommand(task, receivedMessage)
    receivedMessage.channel.send('Added to the list!')
}


if (receivedMessage.content.startsWith(config.prefix)) { //looks for the prefix
        processCommand(receivedMessage)
}

if (receivedMessage.content.startsWith("!role")) {
        var fullCommand = receivedMessage.content.substr(1) // Remove the bot's prefix
        var splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
        var primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
        var arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

        roleCommand(arguments, receivedMessage)
    }

})



function processCommand(receivedMessage) {
    var fullCommand = receivedMessage.content.substr(2) // Remove the bot's prefix
    var splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    var primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    var arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments


    switch (primaryCommand) {
        case "heart":
            heartCommand(arguments, receivedMessage)
            break;
        case "role":
            roleCommand(arguments, receivedMessage)
            break;
        case "help":
            helpCommand(arguments, receivedMessage)
            break;
        case "playing":
            statusPlaying(arguments, receivedMessage)
            break;
        case "watching":
            statusWatching(arguments, receivedMessage)
            break;
        case "listening":
            statusListening(arguments, receivedMessage)
            break;
        case "streaming":
            statusStreaming(arguments, receivedMessage)
            break;
        case "multiply":
            multiplyCommand(arguments, receivedMessage)
            break;
        case "add":
            addCommand(arguments, receivedMessage)
            break;
        case "kick":
            kickCommand(arguments, receivedMessage)
            break;
        case "image":
            imageCommand(arguments, receivedMessage)
            break;
        case "obtain":
            obtainCommand(arguments, receivedMessage)
            break;
        case "credit":
            creditCommand(arguments, receivedMessage)
            break;
        case "delete":
            enableCommand(arguments, receivedMessage)
            break;
        case "profile":
            pfpCommand(arguments, receivedMessage)
        case "todo":
            var task = receivedMessage.content()
            todoCommand(task, receivedMessage)
            console.log(task)
            break;
        case "poll":
            receivedMessage.react('✅')
            receivedMessage.react('❌')
        default:
            console.log("That's not a proper command, silly!")
    }
}

function heartCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send(":" + arguments + "_heart:")
    } else {
        receivedMessage.channel.send(":heart:")
    }
}

function roleCommand(arguments, receivedMessage) {
    var roleList = "placeholder"
    var errorMSG = "Hmm, that didn't work. Try checking the pinned messages or server management page for a list of roles, and remember that I'm case-sensitive: " + roleList
    if (arguments.length == 0 || arguments == "list") {
        receivedMessage.channel.send("Try checking the pinned messages or server management page for a list of roles.")
    } else {
        var str = String(arguments)
        var myRole = receivedMessage.guild.roles.find(role => role.name === str)
        console.log(myRole)
        console.log(typeof arguments)
        if (receivedMessage.channel.permissionsFor(myRole).has("ADMINISTRATOR", true)) {
            receivedMessage.channel.send("That role has admin privileges, and I'm not supposed to give those out.")
        } else if (receivedMessage.member.roles.has(myRole.id)) {
            receivedMessage.member.removeRole(myRole.id).catch(errorMSG)
            receivedMessage.channel.send("You no longer have the `" + str + "` role.")
        } else {
            receivedMessage.member.addRole(myRole.id).catch(errorMSG)
            receivedMessage.channel.send("You now have the `" + str + "` role.")
        }
    }
}

function helpCommand(arguments, receivedMessage) {
    receivedMessage.channel.send("```Hi, I'm RedBot! \
My prefix is 'rb', but if you just want a casual conversation, you can ping me while saying something and I'll (probably) respond! I have a few different commands, including: \
" +"\n" + "    - rbheart, which will have me send a heart of the specified colour. For red, don't list a colour. \
" +"\n" + "    - rbrole [rolename] will add the role if you don't have it and take it away if you do. THIS IS CASE SENSITIVE, the role must be spelled exactly as it appears on the list. Please note that I cannot give out admin roles. \
" +"\n" + "    - rbkick is admin-only, and does exactly what you think it does. There is a slight glitch where an admin can't kick another admin, but just take away their roles first and you'll be fine. \
" +"\n" + "    - rbimage displays an image based on keywords, it's up to you to figure out which keywords do what. \
" +"\n" + "    - rbobtain... well... that's special. \
" +"\n" + "    - rbprofile [@user] sends the user's current profile picture--leave it blank to get your own! \
" +"\n" + "    - rbpoll will turn your message into an instant poll using my super-secret pollmaking tools! \
" +"\n" + "    - rbdelete will alow you to enable or disable my delete-scouting. \
" +"\n" + "    - Any message that starts with //TODO will be added to your todo list, otherwise known as your DMs. \
" +"\n" + "There are a few other commands and functions that you'll have to discover on your own, and the Boss is always adding new stuff, so keep your eyes open! \
" +"\n" +"\n" + " \
If you have an idea for a feature you want the Boss to add to me, send him a DM or ping him!```")
}

function statusPlaying(arguments, receivedMessage) { 
    var str = String(arguments)
    var inputs = str.replace(/,/g, " ")
    client.user.setActivity(inputs, {type: "Playing"})
}

function statusWatching(arguments, receivedMessage) { 
    var str = String(arguments)
    var inputs = str.replace(/,/g, " ")
    client.user.setActivity(inputs, {type: "Watching"})
}

function statusStreaming(arguments, receivedMessage) { 
    var str = String(arguments)
    var inputs = str.replace(/,/g, " ")
    client.user.setActivity(inputs, {type: "Streaming"})
}

function statusListening(arguments, receivedMessage) { 
    var str = String(arguments)
    var inputs = str.replace(/,/g, " ")
    client.user.setActivity(inputs, {type: "Listening"})
}


function multiplyCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        receivedMessage.channel.send("I need more n u m b e r s for this.")
        return
    }
    let product = 1 
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
}

function addCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        receivedMessage.channel.send("I need more n u m b e r s for this.")
        return
    }
    var sum = 0
    arguments.forEach((value) => {
        sum = sum + parseFloat(value)
    })
    receivedMessage.channel.send("The sum of " + arguments + " is: " + sum.toString())
}


function kickCommand(arguments, receivedMessage) {
    if (receivedMessage.author.tag == "Caeruleus#6736" || receivedMessage.author.tag == "JoeTheXPig#7415" || receivedMessage.author.tag == "killerunicorn3#1220" || receivedMessage.author.tag == "Ellie A#1860" || receivedMessage.author.tag == "Rennash#3846") {
            if (arguments.length == 0) {
                receivedMessage.channel.send("https://cdn.discordapp.com/attachments/371684147388874754/621878088036253707/image0.jpg")
            } else {
                // Easy way to get member object though mentions.
                var member = receivedMessage.mentions.members.first();
                // Kick
                 member.kick().then((member) => {
                    // Successmessage
                    receivedMessage.channel.send("Ok Boss, I've kicked " + member.displayName + " for you. I'm sure they deserved it.");
                }).catch(() => {
                    // Failmessage
                    receivedMessage.channel.send("Please inspect my code, there's been an error.");
            
        })
            }
        } else {
            receivedMessage.channel.send("Nice try, but only the Boss can do that.")
        }
}


function imageCommand(arguments, receivedMessage) {
    var input = String(arguments) + ".png"
    console.log(input)
    if (!arguments.length > 0) {
        receivedMessage.channel.send("Please select an image.")
    } else {
            receivedMessage.channel.send(new Discord.Attachment("./images/" + input, input))
        .catch(() => {
            // Failmessage
            receivedMessage.channel.send("Sorry, but I don't have a picture of that yet.");
            
        })
    }
}

function obtainCommand(arguments, receivedMessage) {
    var str = String(arguments)
    var inputs = str.replace(/,/g, " ")
    switch (inputs) {
        case "coochie":
            receivedMessage.channel.send("lmao none of that for any of us")
            break;
        case "homemade brownies":
            receivedMessage.channel.send("regular or Central style?")
            break;
        default:
             receivedMessage.channel.send("Sorry, but " + inputs + " are really hard to obtain!")
    }
}

function enableCommand(arguments, receivedMessage) {
    if (disable.includes(receivedMessage.guild.id)) {
        disable.splice(disable.indexOf(receivedMessage.guild.id), 1)
    } else if (enable.includes(receivedMessage.guild.id)) {
        enable.splice(enable.indexOf(receivedMessage.guild.id), 1)
    } else if (dumb.includes(receivedMessage.guild.id)) {
        dumb.splice(dumb.indexOf(receivedMessage.guild.id), 1)
    } 

    if (arguments == "disable") {
        disable.push(receivedMessage.guild.id)
        receivedMessage.channel.send("Disabled!")
    } else if (arguments == "enable") {
        enable.push(receivedMessage.guild.id)
        receivedMessage.channel.send("Enabled!")
    } else if (arguments == "enabledumb") {
        dumb.push(receivedMessage.guild.id)
        receivedMessage.channel.send("Enabled!")
    }
}

function creditCommand(arguments, receivedMessage) {
    receivedMessage.channel.send("```Coded by: the Boss" + "\n" + "PurpleBot image by: Maison```")
}

function pfpCommand(arguments, receivedMessage) {
    if (arguments.length>0) {
        var firstping = receivedMessage.mentions.users.last()
        //console.log(firstping)
        receivedMessage.channel.send(firstping.avatarURL)
        //console.log("done")
    } else {
        receivedMessage.channel.send(receivedMessage.author.avatarURL)
    }
}

function todoCommand(task, receivedMessage) {
    receivedMessage.author.send(task)
}



client.login(config.token) // Replace XXXXX with your bot token






