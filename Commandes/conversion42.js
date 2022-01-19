module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv42')
        .then((m) => m.edit(`La taille : **42EU correspond à :  UK M 7.5 / US 8.5 / US W 10**`));
};

module.exports.help = {
    name: 'cv42'
};