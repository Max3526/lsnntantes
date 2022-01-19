const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
let recentUsers = [];
const COOLDOWN = 12;
const talkedRecently = new Set();
const chalk = require('chalk');
var prefix = "!";

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.login(process.env.TOKEN);

client.on('ready', () => {
  

    var memberCount = client.users.size;
    var servercount = client.guilds.size;
    var memberNumber = client.users.size;
    var serverNumber = client.guilds.size;
     
    var servers = client.guilds.array().map(g => g.name).join(',');
   client.user.setStatus('invisble')
   console.log("--------------------------------------");
   console.log('--> ' + (chalk.yellow('Bot By iTex le crack ')) +' \n--> ' + (chalk.green('Connecter avec succès  ')) + ' \n--> ' + (chalk.magenta('Name Bot:              '))+ `[ ${client.user.username} ]` + ' \n--> '+(chalk.magenta('Le préfix actuel:      ')) +  `[ ${prefix} ]`  + '\n--> '+ (chalk.magenta('Nombre d\'utilisateurs: ')) + `[ ${client.users.size} ]` + '\n--> '+ (chalk.magenta('Nombre salon:          ')) + `[ ${client.channels.size} ]` + '\n--> '+ (chalk.magenta('Nombre de serveurs:    ')) + `[ ${client.guilds.size} ]`);
   console.log("--------------------------------------");
   console.log('--> ' + (chalk.green('Prêt !')));
   console.log('______________________________________');
   
     
   });
   
   //////////////////////////////////////////////////////////////////////////////////
   
   client.on('message', async (message) => {
       
   if (message.content.startsWith(prefix + 'pub')) {
       
       
   message.delete().catch(O_o=>{});
    if(message.author.id !== "329544759783849996") return message.channel.send({
           embed: {
             title: `${message.author.username}`,
             description: `Vous ne pouvez pas utilisé **cette commande** !!`
           }
         }).then(msg => {
         msg.delete(10000).catch(() => {});
       }).catch(e => {
           client.log.error(e);
       });
   
   
   
       if(message.deletable) message.delete();
       i = 0;
       message.guild.members.forEach(member => {
   
   
       member.send({
       embed: {
         color: 3553599,
         description: `test`,
        image: {
          
         }
       }
     }).catch(e => {
         if (e.code === 50007) {
        console.log('--> ' + (chalk.red('Impossible d\'envoyer un message à')) +' : ' + (chalk.magenta(`${member.user.username}`)) + ' \n===============================');
         }
         else {
           client.log.error(e);
         }
   });
          
           console.log('--> ' + (chalk.cyan('Message envoyé a')) +' : ' + (chalk.magenta(`${member.user.username}`)) + ' \n===============================');
   
         })
   
   }
   
   });
   
   ////////////////////////////////////////////////////////////////////////////////////
   
   
