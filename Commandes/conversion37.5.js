module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size37.5')
        .then((m) => m.edit(`La taille : **37.5 EU** correspond à :  UK M --> **4.5** / US --> **5** / US W --> **6.5**`));
};

module.exports.help = {
    name: 'size37.5'
};