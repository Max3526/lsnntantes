module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size45.5')
        .then((m) => m.edit(`La taille : **45.5 EU** correspond à :  UK M --> **10.5** / US --> **11.5** / US W --> **10**`));
};

module.exports.help = {
    name: 'size45.5'
};