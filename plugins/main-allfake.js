import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

//creador y otros
global.creador = 'Wa.me/527421168105'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'Wa.me/527421168105'
global.namech = '˙˒𖥻˚𝐑𝐞𝐦𝐛𝐨𝐭 - 𝐂𝐡𝐚𝐧𝐧𝐞𝐥﹋꥟'
global.namechannel2 = '『✯ 𝗧𝗲𝗮𝗺 𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗞𝗮𝗿𝗮 ✯』'
global.namegrupo = 'シ︎ 𝗥𝗲𝗺-𝗯𝗼𝘁 🌹'
global.namecomu = '『𝗚𝗿𝘂𝗽𝗼 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 𝗥𝗲𝗺𝗯𝗼𝘁✯』'
global.namecomu2 = '𝗧𝗵𝗲𝗥𝗲𝗺𝗯𝗼𝘁'
global.colab1 = '𝗧𝗵𝗲𝗥𝗲𝗺𝗯𝗼𝘁'
global.colab2 = '𝗧𝗵𝗲𝗥𝗲𝗺𝗯𝗼𝘁'
global.colab3 = '𝗧𝗵𝗲𝗥𝗲𝗺𝗯𝗼𝘁'

//Reacciones De Comandos.!
global.rwait = '🕒'
global.done = '✅'
global.error = '✖️'

//Emojis determinado de CrowBot
global.emoji = '🪷'
global.emoji2 = '💙'
global.emoji3 = '🐱'
global.emoji4 = '👑'
global.emoji5 = '♥️'
global.emojis = [emoji, emoji2, emoji3, emoji4, emoji5].getRandom()

//mensaje en espera
global.wait = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗮 ...*';
global.waitt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗮 ...*';
global.waittt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗮 ...*';
global.waitttt = '🕒 *𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼, 𝗦𝗼𝘆 𝗟𝗲𝗻𝘁𝗮...*';

//Enlaces
var canal = 'https://whatsapp.com/channel/0029VbAXuUtB4hdYWC6m2R1h'
var grupo = 'https://chat.whatsapp.com/E9j3js91NjYAYQvGW6Et2T'  
var github = 'https://github.com/Ado926/RYw' 
var facebook = 'https://www.facebook.com' 
let instagram = 'https://www.instagram.com/KTNUCHINXD'

global.redes = [canal, grupo, github, facebook, instagram].getRandom()

//Imagen
let category = "imagen"
const db = './media/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//tags
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

global.authsticker = `┊👑Bot\n┊↳${botname}\n\n┊👑Usuario\n┊↳ @${conn.getName(m.sender)}`;

global.packsticker = `┊ 𝐒𝐘𝐀 𝐓𝐞𝐚𝐦\n↳https://github.com/Ado926\n\n┊ 👹Info:\n↳Wa.me/50493732693`;

//Fakes
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

//Id Channel
global.idchannel = '0029VbAXuUtB4hdYWC6m2R1h@newsletter'
global.canalIdM = ["0029VbAXuUtB4hdYWC6m2R1h@newsletter", "0029VbAXuUtB4hdYWC6m2R1h@newsletter", "0029VbAXuUtB4hdYWC6m2R1h@newsletter"]
global.canalNombreM = ["🦊 𝐓𝐨𝐛𝐢 | 𝐤𝐚𝐫𝐚 🦊", "✯ 𝗥𝗲𝗺𝗯𝗼𝘁 - 𝐂𝐡𝐚𝐧𝐞𝐥  ✯", "⏤͟͟͞͞☆ 𝗥𝗲𝗺𝗯𝗼𝘁 𝐓𝐞𝐬𝐭 『𝑍𝑜𝑟𝑜』"]
global.channelRD = await getRandomChannel()
// global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "3876577197-120363302285079181@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${packname}`, orderTitle: 'Bang', thumbnail: icons, sellerJid: '0@s.whatsapp.net'}}}

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363319651994475@newsletter', newsletterName: "𝐓ꫀׁׅܻ݊ᥲm 𝐊ꫀ𝑟𝑎 x 𝐓𝑜𝑏𝑖", serverMessageId: -1 }
}}, { quoted: m }
  
global.icono = [ 
'https://files.catbox.moe/zmaoi0.jpeg',
'https://files.catbox.moe/3x3hyt.jpeg',
'https://files.catbox.moe/bifa1c.jpeg',
'https://files.catbox.moe/vsk6zd.jpeg',
'https://files.catbox.moe/xorpj9.jpeg',
'https://files.catbox.moe/p71j48.jpeg',
].getRandom()

global.urls = [
"https://qu.ax/CrCna.mp4",
"https://qu.ax/iQQdA.mp4",
];
let gifUrl = urls[Math.floor(Math.random() * urls.length)];

const canalName = [
"⏤͟͟͞͞⋆⬪࣪ꥈ🦊★ ׄ ꒱ 𝑹𝒆𝒎𝒃𝒐𝒕 - 𝑲.𝑻.𝑨 ୭",
"𝐓𝐞𝐚𝐦 𝐊𝐚𝐫𝐚 🐢 ℍ𝕠𝕤𝕥𝕚𝕟𝕘"
].getRandom()
const randomCanalName =
canalName[Math.floor(Math.random() *
canalName.length)];

 const canalId = [
"120363319651994475@newsletter", "120363224371664828@newsletter"
].getRandom()

const randomCanalId = canalId[Math.floor(Math.random() * canalId.length)];

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: 100, newsletterName: channelRD.name, }, externalAdReply: { showAdAttribution: true, title: textbot, body: dev, mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdM.length)
let id = canalIdM[randomIndex]
let name = canalNombreM[randomIndex]
return { id, name }
}         
