const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'tetelbot',
		password: 'oauth:9asmbgghsozj0aggb9aokdg0gaoudh'
	},
	channels: [ 'oliverdez' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;
    if(message.toLowerCase() === '!macetao'){
        client.say(channel, `"oque eu n tenho de tamanho, tenho de pika", marselao,2021`)
    }
    if(message.toLowerCase() === 'oi'){
        client.say(channel, `Ola @${tags.username}, tudo bem? ja bebeu agua hoje?`)
    }
    if(message.toLowerCase() === 'oi' && tags.username == 'marselao'){
        client.say(channel, `Ola @${tags.username}, tudo bem? mod mais lindo daqui`)
    }
    if(message.toLowerCase() === 'oi' && tags.username == 'niniwr'){
        client.say(channel, `Ola @${tags.username}, tudo bem? Essa é o anjin do @tetelkasz`)
    }
    if(message.toLowerCase() == 'oi' && tags.username == 'ZzCrazyxX'){
        client.say(channel, `Ola @${tags.username}, tudo bem? Lindo e careca`)
    }
    const [confirm, value] = message.split(' ')
    if(confirm == '!pdl'){
        somar(value)
        client.say(channel, `${elo.id} - ${elo.elo} - ${elo.div} - ${elo.pdl} `)
    }
    
    if(confirm == '!div'){
        div(value)
        client.say(channel, `${elo.id} - ${elo.elo} ${elo.div} - ${elo.pdl} PDL`)
    }
    if(confirm == '!elo'){
        client.say(channel, `${elo.id} - ${elo.elo} ${elo.div} - ${elo.pdl} PDL`) 
    }
    if(confirm == '!rank'){
        newelo(value)
        client.say(channel, `${elo.id} - ${elo.elo} ${elo.div} - ${elo.pdl} PDL`) 
    }
    if(confirm == '!id'){
        newid(value)
        client.say(channel, `${elo.id} - ${elo.elo} ${elo.div} - ${elo.pdl} PDL`) 
    }
});	

let elo = {
    id: "",
    elo: "Diamante",
    div: 1,
    pdl: 0
}

const somar = (value) => {
    elo.pdl = value
}

const div = (value) => {
    elo.div = value
}

const newelo = (value) => {
    elo.elo = value
}
const newid = (value) => {
    elo.id = value
}