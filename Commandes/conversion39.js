module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size39')
        .then((m) => m.edit(`La taille : **39 EU** correspond à :  UK M --> **6** / US -->  **6.5** / US W --> **8**`));
};

module.exports.help = {
    name: 'size39'
};