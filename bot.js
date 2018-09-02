const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json");
const ytdl = require('ytdl-core'); 
const { Client, Attachment } = require('discord.js');
const fs = require('fs');

client.on("ready", () => {
    console.log(`BOT DA UNIT FOI INICIADO`);  
    client.user.setPresence({ game: { name: `Duvidas? ${config.prefix}ajuda `, type: 1, url: 'https://www.twitch.tv/UNIT'} });
    
});
client.on("guildCreate", guild => {
    console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});
  
client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
    
});
client.on('guildMemberAdd', member => {
    let avatar = member.user.avatarURL
  
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(avatar)
    .addField(':tada: | Bem vindo(a)!', `Bem vindo(a) ao Servidor da UNIT-SE,  ${member}!`)
    .addField(`:family_mwgb: | Você foi o usuário número ${member.guild.memberCount}`, `Tomare que goste do nosso Universo!`)
    .setFooter(`© UNIT-SE`)
    .setTimestamp()
    client.channels.get('483200288195608576').send({embed});
  });
  client.on('message', message => {
    //if(message.author.bot) return;
    //if(message.channel.type === "dm") return;
    //if(!message.content.startsWith(config.prefix)) return;
    //if(message.channel.id === config.chatnoperm ) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    
    if (comando === 'codigodobot') { 
        const buffer = fs.readFileSync('./bot.js');
        const attachment = new Attachment(buffer, 'bot.js');
        message.channel.send(`${message.author}, O codigo do bot foi enviado!!`, attachment);
    }
    if (comando === 'c.c'){
        message.member.addRole("483199437540294657");
        message.reply('Ok, entao você está Curso Ciência da Computação');
    }
    if (comando === 's.i'){
        message.member.addRole("483199663353233408");
        message.reply('Ok, entao você está Curso Sistema da Informação');
    }
    if (comando === 'e.s'){
        message.member.addRole("483199870623154186");
        message.reply('Ok, entao você está Curso Engenharia De Software');
    }
    if (comando === "removerall"){
        message.member.removeRole("483199437540294657");
        message.member.removeRole("483199663353233408");
        message.member.removeRole("483199870623154186");
        message.reply('Seus cargos foram zerados.');
    }

});


client.login(config.token);
