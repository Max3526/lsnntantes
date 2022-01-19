module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv45.5')
        .then((m) => m.edit(`La taille : **45.5EU correspond à :  UK M 10.5 / US 11.5 / US W 10**`));
};

module.exports.help = {
    name: 'cv45.5'
};