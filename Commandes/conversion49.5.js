module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size49.5')
        .then((m) => m.edit(`La taille : **49.5 EU** correspond à :  UK M --> **14** / US --> **15** / US W --> **10**`));
};

module.exports.help = {
    name: 'size49.5'
};