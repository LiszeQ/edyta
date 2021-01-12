const Discord = require('discord.js');

module.exports = {
    name: "kick",
    category: 'Administratorskie',
    description: "Kick z serwera byczqu",

    async run (client, message, args) {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(' <:WrongMark:760598426991460403> Nie możesz tego użyć byczqu!')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(' <:WrongMark:760598426991460403> Nie mam permisji :/.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send(' <:WrongMark:760598426991460403> Podaj osobe byku');

        if(!member) return message.channel.send(' <:WrongMark:760598426991460403> Nie ma takiej osoby :/');
        if(!member.kickable) return message.channel.send(' <:WrongMark:760598426991460403> Nie możesz kicknąć tej osoby byczqu');

        if(member.id === message.author.id) return message.channel.send('Nie możesz :/');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Unspecified';

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('')
        })

        const kickembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('<:CheckMark:760598289929732128> Kicked Byczqu :/')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Wyrzucony:', member)
        .addField('Wyrzucny przez:', message.author)
        .addField('Powód:', reason)
        .setFooter('Czas wyrzucenia')
        .setTimestamp()

        message.channel.send(kickembed);


    }
}