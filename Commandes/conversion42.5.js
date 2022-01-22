module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size42.5')
        .then((m) => m.edit(`La taille : **42.5 EU** correspond à :  UK M --> **8** / US --> **9** / US W -->  **10.5**`));
};

module.exports.help = {
    name: 'size42.5'
};