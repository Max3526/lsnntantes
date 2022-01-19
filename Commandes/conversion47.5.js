module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv47.5')
        .then((m) => m.edit(`La taille : **47.5EU correspond à :  UK M 12 / US 13 / US W 10**`));
};

module.exports.help = {
    name: 'cv47.5'
};