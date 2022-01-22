module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size41')
        .then((m) => m.edit(`La taille : **41 EU** correspond à :  UK M --> **7** / US --> **8** / US W --> **9.5**`));
};

module.exports.help = {
    name: 'size41'
};