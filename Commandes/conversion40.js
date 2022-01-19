module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv40')
        .then((m) => m.edit(`La taille : **40EU correspond à :  UK M 6 / US 7 / US W 8.5**`));
};

module.exports.help = {
    name: 'cv40'
};