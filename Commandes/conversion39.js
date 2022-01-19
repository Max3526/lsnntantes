module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv39')
        .then((m) => m.edit(`La taille : **39EU correspond à :  UK M 6 / US 6.5 / US W 8**`));
};

module.exports.help = {
    name: 'cv39'
};