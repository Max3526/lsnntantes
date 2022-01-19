module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv36')
        .then((m) => m.edit(`La taille : **36EU correspond à :  UK M 3.5 / US 4 / US W 5.5**`));
};

module.exports.help = {
    name: 'cv36'
};