module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size42')
        .then((m) => m.edit(`La taille : **42 EU** correspond à : UK M --> **7.5** | US --> **8.5** | US W --> **10**`));
};

module.exports.help = {
    name: 'size42'
};