module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv49.5')
        .then((m) => m.edit(`La taille : **49.5EU correspond à :  UK M 14 / US 15 / US W 10**`));
};

module.exports.help = {
    name: 'cv49.5'
};