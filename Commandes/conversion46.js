module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size46')
        .then((m) => m.edit(`La taille : **46 EU** correspond à :  UK M --> **11** / US --> **12** / US W --> **60**`));
};

module.exports.help = {
    name: 'size46'
};