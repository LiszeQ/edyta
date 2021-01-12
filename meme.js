const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "meme",
    category: '4Fun',
    description: "Masz Memika",
    async run (client, message, args){
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Masz Memika Byczqu`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed);
    }
}