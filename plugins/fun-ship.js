
var handler = async (m, { conn, command, text }) => {

if (!text) return conn.reply(m.chat, '🥰 *Escribe el nombre de dos personas para calcular su amor*', m, rcanal, )
let [text1, ...text2] = text.split(' ')

text2 = (text2 || []).join(' ')
if (!text2) return conn.reply(m.chat, `🥰 *Escribe el nombre de la segunda persona*`, m, rcanal, )
let love = `*💘 Ship del Amor💘*

*💘 Pareja:* ${text1} 💕${text2} 
*Compatibilidad:* ${Math.floor(Math.random() * 100)}% 
😻🙌 Hay quimica, pero aún pueden mejorar 
💍 ¿Deberían casarce? 🤔`

m.reply(love, null, { mentions: conn.parseMention(love) })

}
handler.help = ['ship', 'love']
handler.tags = ['fun']
handler.command = /^(ship|love)$/i

handler.register = true

export default handler
