const redis = require('redis')

const client = redis.createClient({
  url: process.env.STRING_CON
});

client.on('error', err => console.error('Redis Client Error', err));
client.on('ready', err => console.log('connect rdy'));
client.on('connect', err => console.log('connect ok'));

client.connect().then( async ()=> {
  client.set('mykey', 'myvalue', '1')
  
  const a = await client.get('mykey')
  console.log('a: ', a);
})

setInterval(async ()=> {
  const a = await client.get('mykey')
  console.log('a: ', a);
}, 1000)
