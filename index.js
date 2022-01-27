const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'tetelbot',
		password: 'oauth:9asmbgghsozj0aggb9aokdg0gaoudh'
	},
	channels: [ 'tetelkasz' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`);
	}
    if(message.toLowerCase() === '!macetao'){
        client.say(channel, `"oque eu n tenho de tamanho, tenho de pika", marselao,2021`)
    }
    const [confirm, value] = message.split(' ')
    if(confirm == '!pdl'){
        somar(value)
        client.say(channel, `tetelkasz#2188 - ${elo.elo} - ${elo.div} - ${elo.pdl} `)
    }
    
    if(confirm == '!div'){
        div(value)
        client.say(channel, `tetelkasz#2188 - ${elo.elo} - ${elo.div} - ${elo.pdl} `)
    }
    if(confirm == '!elo'){
        newelo(value)
        client.say(channel, `tetelkasz#2188 - ${elo.elo} - ${elo.div} - ${elo.pdl} `) 
    }
    
});	

let elo = {
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