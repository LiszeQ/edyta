module.exports = {
    name: "clear",
    category: 'Administratorskie',
    description: "Czyszczenie chatu",

    async run (client, message, args) {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Nie możesz usunąc wiadomości byczqu')

        const amount = args.join(" ");

        if(!amount) return message.reply('Podaj ile chcesz usunąć wiadomości')

        if(amount > 100) return message.reply(`Nie możesz usunąć powyżej 100 wiadomości`)

        if(amount < 1) return message.reply(`Musisz usunąć conajmniej jedną wiadomość`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send('Powyślnie usunięto nie chce mi sie liczyc ile wiadomosci')

    }
}