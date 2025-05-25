import axios from 'axios'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, args, usedPrefix, command }) {
    let user = global.db.data.users[m.sender]
    let name2 = conn.getName(m.sender)

    if (user.registered === true) {
        return m.reply(`💙 Ya te encuentras registrado.\n\n¿Quieres volver a registrarte?\n\nUsa este comando para eliminar tu registro:\n*${usedPrefix}unreg*`)
    }

    if (!Reg.test(text)) return m.reply(`Eʟ ғᴏʀᴍᴀᴛᴏ ɪɴɢʀᴇsᴀᴅᴏ ᴇs ɪɴᴄᴏʀʀᴇᴄᴛᴏ\n\nUsᴏ ᴅᴇʟ ᴄᴏᴍᴀɴᴅᴏ: ${usedPrefix + command} nombre.edad\nEjemplo : *${usedPrefix + command} ${name2}.14*`)

    let [_, name, splitter, age] = text.match(Reg)
    if (!name) return m.reply('💙 El nombre no puede estar vacío.')
    if (!age) return m.reply('💙 La edad no puede estar vacía.')
    if (name.length >= 100) return m.reply('💙 El nombre es demasiado largo.')

    age = parseInt(age)
    if (isNaN(age) || age > 100 || age < 5) return m.reply('*La edad ingresada es incorrecta*')

    user.name = name.trim()
    user.age = age
    user.regTime = +new Date
    user.registered = true
    user.money += 600
    user.estrellas += 15
    user.exp += 245
    user.joincount += 5
    user.tokens = (user.tokens || 0) + 12
    user.zerocoins = (user.zerocoins || 0) + 5

    let who
    if (m.quoted && m.quoted.sender) {
        who = m.quoted.sender
    } else {
        who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    }

    let phone = new PhoneNumber('+' + who.replace('@s.whatsapp.net', ''))
    let nationality = 'Desconocido'

    if (phone.isValid()) {
        try {
            let { data } = await axios.get(`https://delirius-apiofc.vercel.app/tools/country?text=${phone.getNumber('international')}`)
            if (data?.result?.name) nationality = `${data.result.name} ${data.result.emoji}`
        } catch (e) {
            console.error('Error al obtener país:', e)
        }
    }

    let sn = createHash('md5').update(m.sender).digest('hex')
    let publi = 'https://whatsapp.com/channel/0029VapASNA9cDDT9yfhXr30'
    let rcanal = {
        contextInfo: {
            externalAdReply: {
                title: 'Nuevo usuario registrado',
                body: 'ZeroTwo Bot',
                mediaType: 1,
                thumbnailUrl: 'https://files.catbox.moe/ojsmx7.jpeg',
                sourceUrl: publi,
                showAdAttribution: true,
                renderLargerThumbnail: true
            }
        }
    }

    let regbot = `┏━━━━━━━━━━━━━━━━━━━━⬣
┃⋄ *🎀 Registro - ZeroTwo*
┗━━━━━━━━━━━━━━━━━━━━⬣
•┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
「✧」Nombre: ${name}
「🎂」Edad: ${age} años
「🌍」País: ${nationality}
•┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•
「🎁」Recompensas:
> • 15 Estrellas ✨
> • 5 ZeroCoins 🪙
> • 245 Experiencia ⚡
> • 12 Tokens 💎
꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷
> ${publi}`

    await m.react('📪')
    await conn.sendMessage(m.chat, {
        text: regbot,
        contextInfo: {
            externalAdReply: {
                title: '⊱『🦁 Registrado/a 』⊰',
                body: dev,
                thumbnailUrl: 'https://files.catbox.moe/ojsmx7.jpeg',
                sourceUrl: publi,
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })

    let channelID = '120363387375075395@newsletter'
    let messageContent = `◉ *Usuario:* ${m.pushName || 'Anónimo'}
◉ *País:* ${nationality}
◉ *Verificación:* ${user.name}
◉ *Edad:* ${age} años
◉ *Número de serie:*\n⤷ ${sn}

😽 *Recompensa:* 600 Remcoins 😼
*¡Bienvenido/a al bot!*`

    await conn.sendMessage(channelID, {
        text: messageContent, ...rcanal
    })
}

handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'registrarse', 'registrar']

export default handler