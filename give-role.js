const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'give-role',
    category: 'Administratorskie',
    run: async (client, message, args) => {

        message.delete();

        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(` <:WrongMark:760598426991460403> Nie masz permisji byczqu`).then(m => m.delete({ timeout: 5000 }));

        if (!args[0] || !args[1]) return message.channel.send(" <:WrongMark:760598426991460403> Żle! Uzyj `<nick || ID osoby > <nazwa roli || ID roli>").then(m => m.delete({ timeout: 5000 }))

        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole) return message.channel.send(' <:WrongMark:760598426991460403> On ma tą role').then(m => m.delete({ timeout: 5000 }));

             const embed = new MessageEmbed()
                 .setTitle(`Nazwa roli: ${roleName.name}`)
                 .setDescription(`${message.author} Dał role ${roleName} dla ${member.user}`)
                 .setColor('RANDOM')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setFooter(new Date().toLocaleString())

            return member.roles.add(roleName).then(() => message.channel.send(embed));
        } catch (e) {
            return message.channel.send(' <:WrongMark:760598426991460403>  Spróbuj ponownie później...').then(m => m.delete({ timeout: 5000 })).then(() => console.log(e))
        }
    }
}