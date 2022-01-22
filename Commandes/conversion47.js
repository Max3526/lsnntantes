module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size47')
        .then((m) => m.edit(`La taille : **47 EU** correspond à :  UK M --> **11.5** / US --> **12.5** / US W --> **10**`));
};

module.exports.help = {
    name: 'size47'
};