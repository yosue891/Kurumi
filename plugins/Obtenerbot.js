import fetch from 'node-fetch';

const hurufGaya = {
    a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
    h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
    o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
    v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
    '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
    '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
};

const handler = async (m, { conn, text, isOwner, msg }) => {
    if (!isOwner) return m.reply(msg.owner);
    if (!text) return m.reply(`Ejemplo de uso:
.reactch https://whatsapp.com/channel/xxx/123 ❤️
.reactch https://whatsapp.com/channel/xxx/123 ❤️|5
Agrega *--raw* si no quieres usar letras con estilo.`);

    const [mainText, offsetStr] = text.split('|');
    const args = mainText.trim().split(" ");
    const link = args[0];

    if (!link.includes("https://whatsapp.com/channel/")) {
        return m.reply("❌ ¡Enlace no válido!\nEjemplo: .reactch https://whatsapp.com/channel/xxx/idmensaje ❤️|3");
    }

    const channelId = link.split('/')[4];
    const rawId = link.split('/')[5];
    if (!channelId || !/^\d+$/.test(rawId)) return m.reply("❌ ID del mensaje no válido o enlace incompleto.");

    const rawMessageId = parseInt(rawId);
    const offset = parseInt(offsetStr?.trim()) || 1;

    const textoNormal = args.slice(1).join(' ');
    const textoSinLink = textoNormal.replace(link, '').replace('--raw', '').trim();
    if (!textoSinLink) return m.reply("❌ Ingresa texto o emoji para reaccionar.");

    const usarRaw = text.includes('--raw');
    const emoji = usarRaw
        ? textoSinLink
        : textoSinLink.toLowerCase().split('').map(c => {
            if (c === ' ') return ' ';
            return hurufGaya[c] || c;
        }).join('');

    try {
        const metadata = await conn.newsletterMetadata("invite", channelId);
        let exitosos = 0, fallidos = 0;
        for (let i = 0; i < offset; i++) {
            const msgId = (rawMessageId - i).toString();
            try {
                await conn.newsletterReactMessage(metadata.id, msgId, emoji);
                exitosos++;
            } catch {
                fallidos++;
            }
        }
        m.reply(`✅ Se reaccionó con *${emoji}* a ${exitosos} mensaje(s) en el canal *${metadata.name}*\n❌ Falló en ${fallidos} mensaje(s)`);
    } catch (err) {
        console.error(err);
        m.reply("❌ ¡Error al procesar la solicitud!");
    }
};

handler.command = ["reactch", "rch"];
handler.owner = true;
handler.desc = "Reacciona a mensajes en canales de WhatsApp";
handler.tags = ["tools"];
handler.help = [".reactch <link> <emoji>|<cantidad>"];

export default handler;
