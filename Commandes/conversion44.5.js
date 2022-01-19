module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv44.5')
        .then((m) => m.edit(`La taille : **44.5EU correspond à :  UK M 9.5 / US 10.5 / US W 12**`));
};

module.exports.help = {
    name: 'cv44.5'
};