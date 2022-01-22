module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size44.5')
        .then((m) => m.edit(`La taille : **44.5 EU** correspond à :  UK M --> **9.5** / US --> **10.5** / US W --> **12**`));
};

module.exports.help = {
    name: 'size44.5'
};