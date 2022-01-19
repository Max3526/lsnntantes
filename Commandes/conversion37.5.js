module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv37.5')
        .then((m) => m.edit(`La taille : **37.5EU correspond à :  UK M 4.5 / US 5 / US W 6.5**`));
};

module.exports.help = {
    name: 'cv37.5'
};