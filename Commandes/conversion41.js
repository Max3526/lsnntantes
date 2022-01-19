module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv41')
        .then((m) => m.edit(`La taille : **41EU correspond à :  UK M 7 / US 8 / US W 9.5**`));
};

module.exports.help = {
    name: 'cv41'
};