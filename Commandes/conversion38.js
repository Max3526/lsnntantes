module.exports.run = (client, message, args) => {
    let début = Date.now();
    message.channel.send('size38')
        .then((m) => m.edit(`La taille : **38 EU** correspond à :  UK M --> **5** / US -->  **5.5** / US W --> **7**`));
};

module.exports.help = {
    name: 'size38'
};