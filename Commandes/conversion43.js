module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('cv43')
        .then((m) => m.edit(`La taille : **43EU correspond à :  UK M 8.5 / US 9 / US W 11**`));
};

module.exports.help = {
    name: 'cv43'
};