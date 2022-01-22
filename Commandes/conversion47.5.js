module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size47.5')
        .then((m) => m.edit(`La taille : **47.5 EU** correspond à :  UK M --> **12** / US --> **13** / US W --> **10**`));
};

module.exports.help = {
    name: 'size47.5'
};