import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let defaultImage = 'https://files.catbox.moe/nnz4de.jpg' // ← Aquí faltaba cerrar comillas

  if (chat.welcome) {
    let img
    try {
      let pp = await conn.profilePictureUrl(who, 'image')
      img = await (await fetch(pp)).buffer()
    } catch {
      img = await (await fetch(defaultImage)).buffer()
    }

    if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      let bienvenida = `┌─❦ 𝐙𝐞𝐫𝐨 𝐓𝐰𝐨\n│「 Welcome 」\n└┬❦ 「 ${taguser} 」\n   │😼 ${welmss}\n   │😼 ${groupMetadata.subject}\n   └───────────────┈ ⳹\n> ${dev}`
      await conn.sendMessage(m.chat, { image: img, caption: bienvenida, mentions: [who] }, { quoted: estilo })
    } else if (
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE ||
      m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE
    ) {
      let bye = `┌─❦ 𝐙𝐞𝐫𝐨 𝐓𝐰𝐨\n│「 ADIOS 👋 」\n└┬❦ 「 ${taguser} 」\n   │😒 Se fue\n   │😒 Jamás te quisimos aquí inútil\n   └───────────────┈ ⳹\n> ${dev}`
      await conn.sendMessage(m.chat, { image: img, caption: bye, mentions: [who] }, { quoted: estilo })
    }
  }

  return true
}