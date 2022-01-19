module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv36.5')
        .then((m) => m.edit(`La taille : **36.5EU correspond à :  UK M 4 / US 4.5 / US W 6**`));
};

module.exports.help = {
    name: 'cv36.5'
};