module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size45')
        .then((m) => m.edit(`La taille : **45 EU** correspond à :  UK M --> **10** / US --> **11** / US W --> **50**`));
};

module.exports.help = {
    name: 'size45'
};