module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv47')
        .then((m) => m.edit(`La taille : **47EU correspond à :  UK M 11.5 / US 12.5 / US W 10**`));
};

module.exports.help = {
    name: 'cv47'
};