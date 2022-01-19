module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv48.5')
        .then((m) => m.edit(`La taille : **48.5EU correspond à :  UK M 13 / US 14 / US W 10**`));
};

module.exports.help = {
    name: 'cv48.5'
};