module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size36.5')
        .then((m) => m.edit(`La taille : **36.5 EU** correspond à :  UK M --> **4** / US --> **4.5** / US W --> **6**`));
};

module.exports.help = {
    name: 'size36.5'
};