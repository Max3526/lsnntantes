module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size48')
        .then((m) => m.edit(`La taille : **48EU correspond à :  UK M 12.5 / US 13.5 / US W 80**`));
};

module.exports.help = {
    name: 'size48'
};