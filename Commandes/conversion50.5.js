module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv50.5')
        .then((m) => m.edit(`La taille : **50.5EU correspond à :  UK M 15 / US 16 / US W 10**`));
};

module.exports.help = {
    name: 'cv50.5'
};