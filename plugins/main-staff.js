let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🤖 *Bot:* ${global.botname}
🪐 *Versión:* ${global.vs}

• 𝑨𝒍𝒃𝒆𝒓𝒕𝒐
🎩 *Rol:* Experiencia en ser homosexual
🍭 *Número:* Wa.me/18292753736

• 𝑳𝒂 𝒉𝒆𝒓𝒎𝑜𝒔𝒂 𝑯𝒆𝒍𝒆𝒏 
🎩 *Rol:* Experiencia en dañar su cell
🍭 *Número:* Wa.me/59164932981

• 𝑪𝒍𝒊𝒆𝒏𝒕𝒆
🎩 *Rol:* El es Riko y gracias a el Existe este bot
💛 *Número:* Wa.me/595994384940

• 𝑵𝒂𝒕𝒔𝒖 
🎩 *Rol:* Experiencia en chicas 
🍭 *Número:* Wa.me/524493440477

• 𝑱𝒖𝒂𝒏 𝑺𝒂𝒎𝒂𝒏𝒊𝒆𝒈𝒐 
🎩 *Rol:* El sabio Juan 
💛 *Número:* Wa.me/595985310669

• 𝑻𝒐𝒃𝒊 
🎩 *Rol:* Experiencia en nada
🍭 *Número:* Wa.me/527421168105
`
await conn.sendFile(m.chat, 'https://files.catbox.moe/dfoju3.jpeg', 'brook.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🎩 STAFF OFICIAL✨`,
body: dev,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono }}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main', 'crow']
handler.estrellas = 1;

export default handler