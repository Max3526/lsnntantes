module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv38.5')
        .then((m) => m.edit(`La taille : **38.5EU correspond à :  UK M 5.5 / US 6 / US W 7.5**`));
};

module.exports.help = {
    name: 'cv38.5'
};