const Discord = require("discord.js");
module.exports= {
  name: 'ban',
  category: 'Administratorskie',
  description: 'banowanie',
  run: async(client,message,args,guild) => {
    let banned = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
  
    // MESSAGES
  
    if (!banned) {
      let baninfoembed = new Discord.MessageEmbed()
        .setTitle(" <:CheckMark:760598289929732128> Command: ban")
        .setDescription(
          ` <:CheckMark:760598289929732128> **Opis:** Banowanie jakiejś osoby. \n` +
            " **Jak użyć:**\n" +
            " %ban [osoba] (powód) \n" +
            " **Przykład:** \n" +
            " %ban <@597253939469221891> spam \n" 
        )
        .setColor("RANDOM");
      message.channel.send(baninfoembed);
  
      return;
    }
  
    if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(` <:WrongMark:760598426991460403> Nie możesz zbanować sam siebie`)
        .setColor("RANDOM");
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(` <:WrongMark:760598426991460403> Podaj powód`)
        .setColor("RANDOM");
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("BAN_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          " <:WrongMark:760598426991460403> Nie masz permisji byczqu :/"
        )
        .setColor("RANDOM");
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          " <:WrongMark:760598426991460403> Nie mam permisji do banowania :/"
        )
        .setColor("RANDOM");
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.members.ban(banned, { reason: reason });
  
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(` <:CheckMark:760598289929732128> **Banned Byczqu** ${banned.tag} Został pomyślnie zbanowany:`)
      .addField(`Z powodem: `,`${reason}`)
      .setColor("RANDOM");
  
    message.channel.send(successfullyembed);
  }
}