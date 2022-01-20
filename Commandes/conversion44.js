module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size44')
        .then((m) => m.edit(`La taille : **44EU correspond à :  UK M 9 / US 10 / US W 11.5**`));
};

module.exports.help = {
    name: 'size44'
};