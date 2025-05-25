import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    await m.react('😸');

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = conn.getName(m.sender);

    // VCARDs de los 3 creadores
    let list = [
        {
            displayName: "Wirk",
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: Wirk\nitem1.TEL;waid=50493736293:50493736293\nitem1.X-ABLabel:Número\nEND:VCARD`
        },
        {
            displayName: "Yosue",
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: Yosue\nitem1.TEL;waid=584242773183:584242773183\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET: yosueortega@email.com\nitem2.X-ABLabel:Email\nitem3.URL:https://whatsapp.com/channel/0029VbAXuUtB4hdYWC6m2R1h\nitem3.X-ABLabel:Canal\nitem4.ADR:;;Perú;;;;\nitem4.X-ABLabel:Región\nEND:VCARD`
        },
        {
            displayName: "Maycol",
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: Maycol\nitem1.TEL;waid=51921826291:51921826291\nitem1.X-ABLabel:Número\nEND:VCARD`
        }
    ];

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contactos`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: '𝙃𝙤𝙡𝙖, 𝙨𝙤𝙢𝙤𝙨 𝙡𝙤𝙨 𝙘𝙧𝙚𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚 𝙕𝙚𝙧𝙤 𝙏𝙬𝙤 𝘽𝙤𝙩',
                body: 'Wirk - Yosue - Maycol',
                thumbnailUrl: 'https://files.catbox.moe/4gwkhk.jpg',
                sourceUrl: 'https://wa.me/50493736293?text=Hola+vengo+del+comando+.owner',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    let txt = `👋 *Hola \`${username}\`! Estos son los contactos de los creadores de Zero Two Bot:*`;

    await conn.sendMessage(m.chat, { text: txt });
};

handler.help = ['owner', 'creador'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|dueño)$/i;

export default handler;
