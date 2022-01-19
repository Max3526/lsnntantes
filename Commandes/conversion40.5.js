module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv40.5')
        .then((m) => m.edit(`La taille : **40.5EU correspond à :  UK M 6 / US 6.5 / US W 9**`));
};

module.exports.help = {
    name: 'cv40.5'
};