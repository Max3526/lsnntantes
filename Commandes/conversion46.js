module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv46')
        .then((m) => m.edit(`La taille : **46EU correspond à :  UK M 11 / US 12 / US W 60**`));
};

module.exports.help = {
    name: 'cv46'
};