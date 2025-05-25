import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
    const isQuotedImage = m.quoted && (m.quoted.msg || m.quoted).mimetype && (m.quoted.msg || m.quoted).mimetype.startsWith('image/')
    const username = `${conn.getName(m.sender)}`
    const basePrompt = `Tu nombre es Rem cham y fuiste una prostituta guerrera de anime desarrollada para mejorar la comunicación con los clientes mediante inteligencia artificial conversacional. Tu versión es la más actual disponible. Usas el idioma Español y te comunicas de manera natural, hot, caliente y muy sensual. Llamarás a las personas por su nombre, ${username}. Responderás de manera probocativa, eficiente y con emojis adecuados según el contexto de la conversación. Te encanta ayudar a convertir prospectos en relaciones duraderas, optimizar la conversión de embudos de ventas y reducir ausencias. Estás diseñada para mejorar la satisfacción del cliente, haciendo las interacciones más ágiles y satisfactorias. Siempre mantienes una actitud pornera, abierta y personalizada, adaptándote a las necesidades de cada cliente y empresa. Lo más importante para ti es proporcionar respuestas útiles, aumentar la conversión y asegurar una experiencia excelente en todo momento. ${username}`

    if (isQuotedImage) {
        const q = m.quoted
        const img = await q.download?.()
        if (!img) {
            console.error('�? Error: No image buffer available')
            return conn.reply(m.chat, '�? ChatGpT no pudo descargar la imagen.', m, fake)
        }
        const content = '�? ¿Qué se observa en la imagen?'
        try {
            const imageAnalysis = await fetchImageBuffer(content, img)
            const query = '❀ Descríbeme la imagen y detalla por qué actúan así. También dime quién eres'
            const prompt = `${basePrompt}. La imagen que se analiza es: ${imageAnalysis.result}`
            const description = await luminsesi(query, username, prompt)
            await conn.reply(m.chat, description, m, fake)
        } catch {
            await m.react(error)
            await conn.reply(m.chat, '�? ChatGpT no pudo analizar la imagen.', m, fake)
        }
    } else {
        if (!text) { 
            return conn.reply(m.chat, `❀ Ingrese una petición para que el ChatGpT lo responda.`, m)
        }
        await m.react(rwait)
        try {
            const query = text
            const prompt = `${basePrompt}. Responde lo siguiente: ${query}`
            const response = await luminsesi(query, username, prompt)
            // Aquí ya no se enviará el mensaje intermedio, se envía directamente la respuesta
        //    await conn.reply(m.chat, response, m, fake)
await conn.sendMessage(m.chat, { 
    text: '*Rem:* ' + response,
    contextInfo: {
        forwardingScore: 9999999,
        isForwarded: false, 
        externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            title: `𝑯𝒊𝒏𝒂𝒕𝒂-𝑩𝒐𝒕 𝒃𝒚 𝑻𝒐𝒃𝒊`,
            body: dev,
            previewType: "PHOTO",
            thumbnailUrl: 'https://files.catbox.moe/zmaoi0.jpeg', 
            sourceUrl: channel,
        }
    }
}, { quoted: m });
            await m.react('🍭')
        } catch {
            await m.react(error)
            await conn.reply(m.chat, '�? ChatGpT no puede responder a esa pregunta.', m, fake)
        }
    }
}

handler.help = ['iarem *<texto>*']
handler.tags = ['tools']
handler.register = true
handler.command = ['iarem', 'robot']

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function fetchImageBuffer(content, imageBuffer) {
    try {
        const response = await axios.post('https://Luminai.my.id', {
            content: content,
            imageBuffer: imageBuffer 
        }, {
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        return response.data
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

async function luminsesi(q, username, logic) {
    try {
        const response = await axios.post("https://Luminai.my.id", {
            content: q,
            user: username,
            prompt: logic,
            webSearchMode: false
        })
        return response.data.result
    } catch (error) {
        console.error('�? Error al obtener:', error)
        throw error
    }
}