module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size35.5')
    .then((m) => m.edit(`La taille : **35.5 EU** correspond à :  UK M --> **3** / US --> **3.5** / US W --> **5**`));
};

module.exports.help = {
    name: 'size35.5'
};
