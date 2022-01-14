//new bang
//wa : 6289695073357
//Ig : @gataunekell
//Fb : Nekell Ganss
//Jangan Lupa Donasi
//reuplod ijin wa.me//6289695073357
//────────────────────
const {
  WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers
} = require("@adiwajshing/baileys");
const { getBuffer, color, getGroupAdmins, createExif, getRandom, modStick, fetchJson } = require("./lib/function");
const { spawn, exec, execSync } = require("child_process");
const speed = require('performance-now');
const ig = require('insta-fetcher');
const hx = require("hxz-api");
const brainly = require('brainly-scraper');
const fs = require("fs");
const ffmpeg = require('fluent-ffmpeg');
const request = require('request');
const axios = require("axios");
const util = require('util')
const moment = require("moment-timezone");
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const imgbb = require('imgbb-uploader')
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const user = JSON.parse(fs.readFileSync('./database/regi.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands1.js')
let commandsDB = JSON.parse(fs.readFileSync('./lib/commands.json'))
const { uploadimg, upload } = require('./lib/uploadimg')
//▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(NekellH4xor)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
botname = "CornFake-Bot"
owner = ["6289695073357@s.whatsapp.net"];
name = "Nekell H4xor"
premium = ["6289695073357@s.whatsapp.net"];
battery = {
  persen: "" || "tidak terdeteksi",
  charger: "" || false
};
blocked = [];
hrmn = '•'
roomttt = [];
apikey1 = 'KurrXd'
apikey = 'e39b4bc1fbdc65408e6451fd'
lolkey ='e39b4bc1fbdc65408e6451fd'
defttt = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];
antideleted = true;
self = false;
//▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(NekellH4xor)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
// time
function tanggal(){
  myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
	myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
	var tgl = new Date();
	var day = tgl.getDate();
	bulan = tgl.getMonth();
	var thissDay = tgl.getDay(),
	thisDay = myDays[thissDay];
	var yy = tgl.getYear();
	var year = (yy < 1000) ? yy + 1900 : yy;
	return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`;
}

const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
}
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
if (time2 < "24:59:00") {
  var ucapanWaktu = "Selamat malam";
}
if (time2 < "19:00:00") {
  var ucapanWaktu = "Selamat senja";
}
if (time2 < "18:00:00") {
  var ucapanWaktu = "Selamat sore";
}
if (time2 < "15:00:00") {
  var ucapanWaktu = "Selamat siang";
}
if (time2 < "11:00:00") {
  var ucapanWaktu = "Selamat pagi";
}
if (time2 < "05:00:00") {
  var ucapanWaktu = "Selamat malam";
}

module.exports = (herman) => {
  herman.on("group-update", async(mem) => {
    metadata = await herman.groupMetadata(mem.jid);
    if (mem.announce == "false") {
      herman.sendMessage(metadata.id, `*[ Group Opened ]* \n\n${mns}group telah di buka oleh admin${mns}\n${mns}sekarang semua member bisa mengirim pesan${mns}`, MessageType.text);
      console.log(`[ GROUP OPENED ]\ngroup : ${metadata.subject}`);
    } else if (mem.announce == "true"){
      herman.sendMessage(metadata.id, `*[ Group Closed ]* \n\n${mns}group telah di tutup oleh admin${mns}\n${mns}sekarang hanya admin yang bisa mengirim pesan${mns}`, MessageType.text);
      console.log(`[ GROUP CLOSED ]\ngroup : ${metadata.subject}`);
    } else if (!mem.desc == "") {
      tag = mem.descOwner.split("@")[0] + "@s.whatsapp.net";
      herman.sendMessage(metadata.id, `*[ Group Description Change ]*\n\ndeskripsi group telah di ubah oleh owner ${mem.descOwner.split("@")[0]}\n\ndeskripsi baru: ${mem.desc}`, MessageType.text, {
        contextInfo:{mentionedJid:[tag]}
      });
      console.log(`[ DESCRIPTION CHANGE ]\ngroup : ${metadata.subject}`);
    } else if (mem.restrict == "false") {
      herman.sendMessage(metadata.id, `*[ Group Setting Change ]*\n\nfitur edit group telah di buka\nsekarang semua member dapat mengedit info group`, MessageType.text);
      console.log(`[ GROUP SETTING CHANGE ]\ngroup : ${metadata.subject}`);
    } else if (mem.restrict == "true") {
      herman.sendMessage(metadata.id, `*[ Group Setting Change ]*\n\nfitur edit group telah di tutup\nsekarang hanya admin yang dapat mengedit info group`, MessageType.text);
      console.log(`[ GROUP SETTING CHANGE ]\ngroup : ${metadata.subject}`);
    }
  });
  // Welcome Simple By Nekell H4xor
  herman.on("group-participants-update", async (anu) => {
    try {
      groupMet = await herman.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await herman.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await herman.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(herman.user.jid)) {
        herman.sendMessage(anu.jid, "Halo!", "conversation");
      }
      if (anu.action == "add" && !mem.includes(herman.user.jid)) {
        mdata = await herman.groupMetadata(anu.jid);
        memeg = mdata.participants.length;
        num = anu.participants[0];
        let v = herman.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `Halo Beban ${anu_user} Welcome\nIntro Dulu\n• Nama:\n• Umur:\n• Status:\n• Askot:\nDi isi ya biar Kenal Wkwk`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.ibb.co/cgFpnRL/20220114-162121.jpg`
        );
        buttons = [
          { buttonId: `.herman`, buttonText: { displayText: "Selamat Datang Beban Baru👍" }, type: 1 },
        ];
        imageMsg = (
          await herman.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "⌛Somoga Betah Di Grup Yang Gaguna Ini Ya!⌛",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await herman.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        herman.relayWAMessage(prep);
      }
      if (anu.action == "remove" && !mem.includes(herman.user.jid)) {
        mdata = await herman.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = herman.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `Kena Mental Kahh? Aowkwowk ${anu_user}`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${
           groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.ibb.co/cgFpnRL/20220114-162121.jpg`
        );
        buttons = [
          { buttonId: `.herman`, buttonText: { displayText: "Good Bye Beban!🥴" }, type: 1 },
        ];
        imageMsg = (
          await herman.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: "🏴‍☠️Akhir Nya Beban Keluarga Telah Berkurang, Semoga Tenang Di Alam Sana!🏴‍☠️",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await herman.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        herman.relayWAMessage(prep);
      }
      } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
  herman.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist){
      blocked.push(i.replace("c.us","s.whatsapp.net"));
    }
  });
  herman.on("CB:action,,battery", (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batteryLevel = parseInt(batteryLevelStr);
    battery.persen = `${batteryLevel}%`;
    battery.charger = json[2][0][1].live;
  });
  herman.on("message-delete",async(mek) => {
    if (mek.key.remoteJid == "status@broadcast") return;
    if (!mek.key.fromMe && mek.key.fromMe) return;
    if (antideleted === false) return;
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
    let date = new Date();
    let region = 'id';
    let getTime = new Date(0).getTime() - new Date('1 Januari 2021').getTime();
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((newdate * 1) + getTime) / 84600000) % 5];
    let localweek = newdate.toLocaleDateString(region, {
      weekday: 'long'
    });
    let localday = newdate.toLocaleDateString(region, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const type = Object.keys(mek.message)[0];
    herman.sendMessage(mek.key.remoteJid, `*[ ANTI DELETE ]*\n\n*nama* : @${mek.participant.split("@")[0]}\n*jam* : ${moment.localweek.localday}\n*Type* : ${type}`, MessageType.text, {quoted:mek.message, contextInfo: { "mentionedJid": [mek.participant]}})
  });
  herman.on("CB:Call", (num) => {
    let nomer;
    calling = JSON.parse(JSON.stringify(num));
    nomer = calling[1].from;
    herman.sendMessage(nomer, `Sorry ${herman.user.name} can't receive calls, \ncall = block`, MessageType.text)
    .then(() => {
      return herman.blockUser(nomer, 'add')
    })
  });
  herman.on("chat-update", async(mek) => {
    try {
      if (!mek.hasNewMessage) return;
      mek = mek.messages.all()[0];
      if (!mek.message) return
      if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
      //if (mek.key.fromMe) return
      if (mek.key && mek.key.remoteJid == "status@broadcast") return;
      global.blocked;
      mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
      const content = JSON.stringify(mek.message);
      const from = mek.key.remoteJid;
      const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage } = MessageType;
      const type = Object.keys(mek.message)[0];
      const cmd =
        type === "conversation" && mek.message.conversation
          ? mek.message.conversation
          : type == "imageMessage" && mek.message.imageMessage.caption
          ? mek.message.imageMessage.caption
          : type == "videoMessage" && mek.message.videoMessage.caption
          ? mek.message.videoMessage.caption
          : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
          ? mek.message.extendedTextMessage.text
          : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
          ? mek.message[type].selectedButtonId
          : "";
      const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'
      body = 
        type === 'listResponseMessage' && mek.message.listResponseMessage.title 
          ? mek.message.listResponseMessage.title 
          : type == 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId
          ? mek.message.buttonsResponseMessage.selectedButtonId
          : type == "conversation" && mek.message.conversation.startsWith(prefix)
          ? mek.message.conversation
          : type == "imageMessage" &&
            mek.message.imageMessage.caption.startsWith(prefix)
          ? mek.message.imageMessage.caption
          : type == "videoMessage" &&
            mek.message.videoMessage.caption.startsWith(prefix)
          ? mek.message.videoMessage.caption
          : type == "extendedTextMessage" &&
            mek.message.extendedTextMessage.text.startsWith(prefix)
          ? mek.message.extendedTextMessage.text
          : "";
      const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
      listbut = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
      const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
      const args = body.trim().split(/ +/).slice(1)
      const isCmd = body.startsWith(prefix)
      const q = args.join(' ')
      const botNumber = herman.user.jid
      const isGroup = from.endsWith("@g.us")
      const sender = mek.key.fromMe
        ? herman.user.jid
        : isGroup
        ? mek.participant
        : mek.key.remoteJid
      const totalchat = herman.chats.all()
      const groupMetadata = isGroup ? await herman.groupMetadata(from) : ''
      const isUser = user.includes(sender)
      const groupName = isGroup ? groupMetadata.subject : ''
      const groupId = isGroup ? groupMetadata.jid : ''
      const groupMembers = isGroup ? groupMetadata.participants : ''
      const groupDesc = isGroup ? groupMetadata.desc : ''
      const groupOwner = isGroup ? groupMetadata.owner : ''
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
      const isOwner = owner.includes(sender);
      const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
      const isGroupAdmins = groupAdmins.includes(sender) || false
      const conts = mek.key.fromMe ? herman.user.jid : herman.contacts[sender] || { notify: jid.replace(/@.+/, '') }
      const pushname = mek.key.fromMe ? herman.user.name : conts.notify || conts.vname || conts.name || '-'
      const more = String.fromCharCode(8206)
      const isAntiLink = isGroup ? antilink.includes(from) : false
      const readMore = more.repeat(4001)
      herman.updatePresence(from, Presence.recording)
      const isPrem = premium.includes(sender)
const sendButtonMsg = (text, footer, but = [], options = {}) => {
        const buttonMessagek = {
          contentText: text,
          footerText: footer,
          buttons: but,
          headerType: 1
        };
        herman.sendMessage(
          from,
          buttonMessagek,
          buttonsMessage,
          options
        )
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return herman.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
      }
      const fvideo = {
	 key: { 
	      participant: '6289695073357@s.whatsapp.net'
	       },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`, 
                 'seconds': '62874', 
                 'caption': 'video',
                 'jpegThumbnail': fs.readFileSync('./lib/herman26.jpg')
                        }
                       }
	                  }
	const ftrol = {

key: {

fromMe: false,

participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})

},

message: { 

orderMessage: {

itemCount: 10.0000,

status: 9999, 

surface: 3674,

message: `${pushname}\n⎇ ${command}`,

orderTitle: 'Ntah', 

thumbnail: fs.readFileSync('./lib/herman26.jpg'),

sellerJid: '0@s.whatsapp.net'

}

}

}
			
    const daftar1 = `
╭─❒ 「 DAFTAR DULU YA 」 ❒
├ 🚀Hai ${pushname} ${ucapanWaktu} 
├ 🚀Sebelum Memakai Bot Verif Dulu Ya
└❏`
       const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify\nJika Button Tidak kelihatan Ketik .verify ya```'
       const daftar3 = [
          {
            buttonId: `.verify`,
            buttonText: {
              displayText: '🗿Touch Here To verify🗿 © NekellH4xor',
            },
            type: 1,
          },]
	mess = {
				wait: '*Sabar Cokk Lagi Proses*',
				success: '*Donee Cokk... Jangan Lupa Vcs:v*',
				error: {
					stick: '*Gagal .Terjadi Kesalahan Saat Mengkonversi Gambar Ke Stiker*',
					Iv: '*Link Tidak Valid!*'
				},
				only: {
					group: '*Perintah Ini Hanya Bisa Di Gunakan Di Dalam Grup Saja!*',
					benned: '*Maaf Nomor Kamu Sudah Di Baned Hubungi Owner Untuk Membuka',
					ownerG: '*Maaf Perintah Ini Hanya Bisa Di Gunakan Oleh Owner Grup!*',
					ownerB: '*Maaf Perintah Ini Hanya Bisa Di Gunakan Oleh Owner Bot* ',
					premium: '*Maaf Fitur Ini Khusus Untuk Member Premium!*',
					userB: `Halo Kaa *${pushname}*, Kamu Belum Terdaftar Silahkan Ketik \n*${prefix}daftar*`,
					admin: '*Maaf Perintah Ini Hanya Bisa Di Gunakan Oleh Admin Grup!*',
					Badmin: '*Jadikan Bot Sebagai Admin Untuk Bisa Melakukan Perintah Ini!*',
					publikG: 'Maaf Bot Sekarang Sudah Di Private Oleh Owner\nUntuk Lebih Jelasnya Ktik \n*${prefix}infobot*'
				}
			}

		
      const sendStickerUrl = async(to, url) => {
console.log(color(time2, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/stick/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
herman.sendMessage(from, media, sticker, {quoted: mek})
console.log(color(time2, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))  
});
});
});
}
      if (self) {
        if (!isOwner || !botNumber) return
      }
      idttt = [];
      players1 = [];
      players2 = [];
      turn = [];
      for (let i of roomttt) {
        idttt.push(i.id)
        players1.push(i.player1)
        players2.push(i.player2)
        turn.push(i.turn)
      }
      const isTTT = isGroup ? idttt.includes(from) : false
	    const isPlayer1 = isGroup ? players1.includes(sender) : false
      const isPlayer2 = isGroup ? players2.includes(sender) : false
      const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
      }
      for (let i = 0; i < commandsDB.length ; i++) {
            if (budy == commandsDB[i].pesan) {
            herman.sendMessage(from, commandsDB[i].balasan, text, {quoted: mek})
            }
            }

      const reply = (teks) => {
        herman.sendMessage(from, teks, text, {quoted:mek})
        
        const sendMess = (hehe, teks) => {
				herman.sendMess(hehe, teks, text, {quoted:mek})
			}
      }
      const fakethumb = (teks, yes) => {
            herman.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./lib/image/fake.jpeg'),quoted:mek,caption:yes})
        }
        
      
      const sendMediaURL = async(url, text="", mids=[]) =>{
        if(mids.length > 0){
          text = normalizeMention(to, text, mids)
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
          request.head(uri, function (err, res, body) {
            mime = res.headers['content-type']
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        download(url, filename, async function () {
          console.log('done');
          let media = fs.readFileSync(filename)
          let type = mime.split("/")[0]+"Message"
          if(mime === "image/gif"){
            type = MessageType.video
            mime = Mimetype.gif
          }
          if(mime.split("/")[0] === "audio"){
            mime = Mimetype.mp4Audio
          }
          herman.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
          fs.unlinkSync(filename)
        });
      }
      
      const isMedia = type === "imageMessage" || type === "videoMessage";
      const isQuotedImage =
        type === "extendedTextMessage" && content.includes("imageMessage");
      const isQuotedVideo =
        type === "extendedTextMessage" && content.includes("videoMessage");
      const isQuotedAudio =
        type === "extendedTextMessage" && content.includes("audioMessage");
      const isQuotedSticker =
        type === "extendedTextMessage" && content.includes("stickerMessage");
      
      //▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(NekellH4xor)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
      if (isCmd && !isGroup) console.log("[",color("command","lime"),"]",time2,color(command,"lime"),"from",color(sender.split("@")[0],"cyan"))
      if (isCmd && isGroup) console.log("[",color("command","lime"),"]",time2,color(command,"lime"),"from",color(sender.split("@")[0],"cyan"),"in",color(groupName,"yellow"))
      if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))
      
   if (listbut == 'menu' || command == `${prefix}start`) {
        var menu = `${ucapanWaktu} kak ${pushname}
╭───────────────
│• *Info Bot*
│• 𝗡𝗮𝗺𝗲 : ${herman.user.name}
│• 𝗕𝗮𝘁𝗲𝗿𝗮𝗶 : ${battery.persen}
│• 𝗖𝗵𝗮𝗿𝗴𝗲𝗿 : ${battery.charger == true ? "sedang di cas" : "sedang tidak di cas"}
│• 𝙎𝙚𝙡𝙛 : ${self ? "mode self" : "mode public"}
│• 𝗣𝗵𝗼𝗻𝗲 : ${herman.user.phone.device_manufacturer}
│• 𝗦𝗲𝗿𝘃𝗲𝗿 : ${herman.browserDescription[1]}
│• 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : ${herman.browserDescription[2]}
│• 𝗠𝗼𝗱𝗲𝗹 : ${herman.user.phone.device_model}
│• 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 𝘄𝗮 : ${herman.user.phone.wa_version}
╰────────────────
         │ • *Info user*
         │ • 𝗡𝗮𝗺𝗲 : ${pushname}
         │ • 𝗢𝘄𝗻𝗲𝗿 : ${isOwner ? "Owner":"bukan Owner"}
         │ • 𝙉𝙤𝙢𝙤𝙧 : ${sender.split("@")[0]}
         ╰────────────────
${readMore}

*𖨠Info Menu*
 *${hrmn} ${prefix}totaluser*
 *${hrmn} ${prefix}report*
 
*𖨠Stiker*
 *${hrmn} ${prefix}sticker* _<reply image,gif>_
 *${hrmn} ${prefix}telesticker* _Text_
 *${hrmn} ${prefix}ttp* _Text_
 *${hrmn} ${prefix}attp1* _Text_
 *${hrmn} ${prefix}attp2* _Text_
 *${hrmn} ${prefix}attp3* _Text_
 *${hrmn} ${prefix}attp4* _Text_
 *${hrmn} ${prefix}takestick* _Reply Sticker_
 *${hrmn} ${prefix}toimg* _Reply stikcer,gif sticker_

*𖨠Group Menu*
 *${hrmn} ${prefix}antilink* _1=On Dan 0=Off_
 *${hrmn} ${prefix}daftar*
 *${hrmn} ${prefix}kicktime* _@_
 *${hrmn} ${prefix}hidetag* _Text_
 *${hrmn} ${prefix}tagall* _Text_
 *${hrmn} ${prefix}getpp* _Reply sticker,foto_
 *${hrmn} ${prefix}getinfo* _Text_
 *${hrmn} ${prefix}kapankah* _Text_
 *${hrmn} ${prefix}bisakah* _Text_
 *${hrmn} ${prefix}apakah* _Text_
 *${hrmn} ${prefix}benarkah* _Text_
  *${hrmn} ${prefix}rate* _Text_
 
*𖨠Rondom Menu*
 *${hrmn} ${prefix}randombokep*
 *${hrmn} ${prefix}darkjokes*
 *${hrmn} ${prefix}tourl*
 *${hrmn} ${prefix}wangy*
 *${hrmn} ${prefix}suit*

*𖨠Owner*
 *${hrmn} ${prefix}mode*
 *${hrmn} ${prefix}join*
 *${hrmn} ${prefix}leave*
 *${hrmn} >*
 *${hrmn} =>*
 *${hrmn} $*
 *${hrmn} ${prefix}delete*
 *${hrmn} ${prefix}addrespon*
 *${hrmn} ${prefix}delrespon*
 *${hrmn} ${prefix}addprem*
 *${hrmn} ${prefix}delprem*
 
 *𖨠Text Prome*
 *${hrmn} ${prefix}blackpink* _Text_
 *${hrmn} ${prefix}neon* _Text_
 *${hrmn} ${prefix}greenneon* _Text_
 *${hrmn} ${prefix}advanceglow* _Text_
 *${hrmn} ${prefix}futureneon* _Text_
 *${hrmn} ${prefix}sandwriting* _Text_
 *${hrmn} ${prefix}sandsummer* _Text_
 *${hrmn} ${prefix}sandengraved* _Text_
 *${hrmn} ${prefix}metaldark* _Text_
 *${hrmn} ${prefix}neonlight* _Text_
 *${hrmn} ${prefix}holographic* _Text_
 *${hrmn} ${prefix}text1917* _Text_
 *${hrmn} ${prefix}minion* _Text_
 *${hrmn} ${prefix}deluxesilver* _Text_
 *${hrmn} ${prefix}newyearcard* _Text_
 *${hrmn} ${prefix}bloodfrosted* _Text_
 *${hrmn} ${prefix}halloween* _Text_
 *${hrmn} ${prefix}jokerlogo* _Text_
 *${hrmn} ${prefix}fireworksparkle* _Text_
 *${hrmn} ${prefix}natureleaves* _Text_
 *${hrmn} ${prefix}bokeh* _Text_
 *${hrmn} ${prefix}toxic* _Text_
 *${hrmn} ${prefix}strawberry* _Text_
 *${hrmn} ${prefix}box3d* _Text_
 *${hrmn} ${prefix}roadwarning* _Text_
 *${hrmn} ${prefix}breakwall* _Text_
 *${hrmn} ${prefix}icecold* _Text_
 *${hrmn} ${prefix}luxury* _Text_
 *${hrmn} ${prefix}cloud* _Text_
 *${hrmn} ${prefix}summersand* _Text_
 *${hrmn} ${prefix}horrorblood* _Text_
 *${hrmn} ${prefix}thunder* _Text_
 *${hrmn} ${prefix}pornhub* _Text_
 *${hrmn} ${prefix}glitch* _Text_
 *${hrmn} ${prefix}avenger* _Text_
 *${hrmn} ${prefix}space* _Text_
 *${hrmn} ${prefix}ninjalogo* _Text_
 *${hrmn} ${prefix}marvelstudio* _Text_
 *${hrmn} ${prefix}lionlogo* _Text_
 *${hrmn} ${prefix}wolflogo* _Text_
 *${hrmn} ${prefix}stell3d* _Text_
 *${hrmn} ${prefix}wallgravity* _Text_

 *𖨠Rondom Anime*
 *${hrmn} ${prefix}bj*
 *${hrmn} ${prefix}ero*
 *${hrmn} ${prefix}cum*
 *${hrmn} ${prefix}feet*
 *${hrmn} ${prefix}yuri*
 *${hrmn} ${prefix}trap*
 *${hrmn} ${prefix}lewd*
 *${hrmn} ${prefix}feed*
 *${hrmn} ${prefix}eron*
 *${hrmn} ${prefix}solo*
 *${hrmn} ${prefix}gasm*
 *${hrmn} ${prefix}poke*
 *${hrmn} ${prefix}anal*
 *${hrmn} ${prefix}holo*
 *${hrmn} ${prefix}tits*
 *${hrmn} ${prefix}kuni*
 *${hrmn} ${prefix}kiss*
 *${hrmn} ${prefix}erok*
 *${hrmn} ${prefix}smug*
 *${hrmn} ${prefix}baka*
 *${hrmn} ${prefix}solog*
 *${hrmn} ${prefix}feetg*
 *${hrmn} ${prefix}lewdk*
 *${hrmn} ${prefix}waifu*
 *${hrmn} ${prefix}pussy*
 *${hrmn} ${prefix}femdom*
 *${hrmn} ${prefix}cuddle*
 *${hrmn} ${prefix}hentaigif*
 *${hrmn} ${prefix}cum_jpg*
 *${hrmn} ${prefix}blowjob*
 *${hrmn} ${prefix}erofeet*
 *${hrmn} ${prefix}holoero*
 *${hrmn} ${prefix}classic*
 *${hrmn} ${prefix}erokemo*
 *${hrmn} ${prefix}fox_girl*
 *${hrmn} ${prefix}futanari*
 *${hrmn} ${prefix}lewdkemo*
 *${hrmn} ${prefix}wallpaper*
 *${hrmn} ${prefix}pussy_jpg*
 *${hrmn} ${prefix}kemonomimi*
 *${hrmn} ${prefix}nsfw_avatar*
 
*𖨠Photo 360*
 *${hrmn} ${prefix}wetglass* _Text_
 *${hrmn} ${prefix}multicolor3d* _Text_
 *${hrmn} ${prefix}watercolor* _Text_
 *${hrmn} ${prefix}luxurygold* _Text_
 *${hrmn} ${prefix}galaxywallpaper* _Text_
 *${hrmn} ${prefix}lighttext* _Text_
 *${hrmn} ${prefix}beautifulflower* _Text_
 *${hrmn} ${prefix}puppycute* _Text_
 *${hrmn} ${prefix}royaltext* _Text_
 *${hrmn} ${prefix}heartshaped* _Text_
 *${hrmn} ${prefix}birthdaycake* _Text_
 *${hrmn} ${prefix}galaxystyle* _Text_
 *${hrmn} ${prefix}hologram3d* _Text_
 *${hrmn} ${prefix}greenneon* _Text_
 *${hrmn} ${prefix}glossychrome* _Text_
 *${hrmn} ${prefix}greenbush* _Text_
 *${hrmn} ${prefix}metallogo* _Text_
 *${hrmn} ${prefix}noeltext* _Text_
 *${hrmn} ${prefix}glittergold* _Text_
 *${hrmn} ${prefix}textcake* _Text_
 *${hrmn} ${prefix}starsnight* _Text_
 *${hrmn} ${prefix}wooden3d* _Text_
 *${hrmn} ${prefix}textbyname* _Text_
 *${hrmn} ${prefix}writegalacy* _Text_
 *${hrmn} ${prefix}galaxybat* _Text_
 *${hrmn} ${prefix}snow3d* _Text_
 *${hrmn} ${prefix}birthdayday* _Text_
 *${hrmn} ${prefix}goldplaybutton* _Text_
 *${hrmn} ${prefix}silverplaybutton* _Text_
 *${hrmn} ${prefix}freefire* _Text_
 
 *𖨠Rondom Nsfw*
 *${hrmn} ${prefix}chiisaihentai*
 *${hrmn} ${prefix}trap*
 *${hrmn} ${prefix}blowjob*
 *${hrmn} ${prefix}yaoi*
 *${hrmn} ${prefix}ecchi*
 *${hrmn} ${prefix}hololewd*
 *${hrmn} ${prefix}sideoppai*
 *${hrmn} ${prefix}animefeets*
 *${hrmn} ${prefix}animebooty*
 *${hrmn} ${prefix}animethighss*
 *${hrmn} ${prefix}hentaiparadise*
 *${hrmn} ${prefix}animearmpits*
 *${hrmn} ${prefix}hentaifemdom*
 *${hrmn} ${prefix}lewdanimegirls*
 *${hrmn} ${prefix}biganimetiddies*
 *${hrmn} ${prefix}animebellybutton*
 *${hrmn} ${prefix}hentai4everyone*
 
 *𖨠Photo Oxy*
 *${hrmn} ${prefix}shadow* _Text_
 *${hrmn} ${prefix}cup* _Text_
 *${hrmn} ${prefix}cup1* _Text_
 *${hrmn} ${prefix}romance* _Text_
 *${hrmn} ${prefix}smoke* _Text_
 *${hrmn} ${prefix}burnpaper* _Text_
 *${hrmn} ${prefix}lovemessage* _Text_
 *${hrmn} ${prefix}undergrass* _Text_
 *${hrmn} ${prefix}love* _Text_
 *${hrmn} ${prefix}coffe* _Text_
 *${hrmn} ${prefix}woodheart* _Text_
 *${hrmn} ${prefix}woodenboard* _Text_
 *${hrmn} ${prefix}summer3d* _Text_
 *${hrmn} ${prefix}wolfmetal* _Text_
 *${hrmn} ${prefix}nature3d* _Text_
 *${hrmn} ${prefix}underwater* _Text_
 *${hrmn} ${prefix}golderrose* _Text_
 *${hrmn} ${prefix}summernature* _Text_
 *${hrmn} ${prefix}letterleaves* _Text_
 *${hrmn} ${prefix}glowingneon* _Text_
 *${hrmn} ${prefix}fallleaves* _Text_
 *${hrmn} ${prefix}flamming* _Text_
 *${hrmn} ${prefix}harrypotter* _Text_
 *${hrmn} ${prefix}carvedwood* _Text_
 
 *𖨠Dowloader*
  *${hrmn} ${prefix}ytplay* _Text Lagu_
  *${hrmn} ${prefix}ytsearch* _Text Lagu_
  *${hrmn} ${prefix}ytmp3* _Text Lagu_
  *${hrmn} ${prefix}ytmp4* _Text Lagu_
  *${hrmn} ${prefix}fbdl* _Url_
  *${hrmn} ${prefix}twdl* _Url_
  *${hrmn} ${prefix}mediafire* _Url_
  *${hrmn} ${prefix}igdl* _Url_
  *${hrmn} ${prefix}ttnowm* _Url_
  *${hrmn} ${prefix}ttmp3* _Url_

*𖨠Wibu*
  *${hrmn} ${prefix}waifu*
  *${hrmn} ${prefix}loli*
  *${hrmn} ${prefix}neko*
  *${hrmn} ${prefix}husbu*
  *${hrmn} ${prefix}elf*
  *${hrmn} ${prefix}exo*
  *${hrmn} ${prefix}shota*
  *${hrmn} ${prefix}kanna*
  *${hrmn} ${prefix}sagiri*
  *${hrmn} ${prefix}megumin*
  *${hrmn} ${prefix}wallnime*
  
*│➸18+*
  *_Fitur Ini Khusus Premium!_*
  *${hrmn} ${prefix}nhentai* _Url_
  *${hrmn} ${prefix}nhentaisearch* _Url_
  *${hrmn} ${prefix}nekopoi* _Url_
  *${hrmn} ${prefix}nekopoisearch* _Url_
  *${hrmn} ${prefix}nhentaipdf* _Url_
  *${hrmn} ${prefix}xnxxsearch* _Link/Url_
  *${hrmn} ${prefix}xhamstersearch* _Link/Url_
  
 │❏ *_Jangan Lupa Donasi Ya😊_*
 │❏ *Sudah Di Kasih Free Jadi Harus Tau Aturan!*
 │❏ _© Created By NekellH4xor🔥_
`;
       const sendButtonsLoc = (from, title, text, desc, button, msg, men, file) => {
            return herman.SendButtonsLoc(from, {"text": '',"contentText": title + '\n' + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: fvideo, contextInfo: {"mentionedJid": men ? men : []}})
        }
        sendButtonMsg(menu, `runtime: ${runtime(process.uptime())}\nFacebook : Nekell Ganss`,[{
          buttonId: `${prefix}fb`,
          buttonText: {
            displayText: "FACEBOOK ☘️"
          },
          type: 1
            },{
           buttonId: `${prefix}ig`,
            buttonText: {
              displayText: "Instagram 📱"
            },
            type: 1
            },{
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: "OWNER 🐥"
            },
            type: 1
        }])
      } else if (listbut == "donasi") {
        const donate = `
*❏ Donate Pages*
├ *DANA : 089695073357*
`
        herman.sendMessage(from, fs.readFileSync("./lib/image/donasi.jpeg"), image, {quoted: fvideo, caption:donate})
              } else if (listbut == "github") {
        const donate = `
*❏ Donate Pages*
├ *Base By* : NekellH4xor
`
        herman.sendMessage(from, fs.readFileSync("./lib/image/fake.jpeg"), image, {quoted: fvideo, caption:donate})
      } else if (listbut == "sosial media") {
        const medsos = `
*❏ Sosial Media*
├ *github* : http://github.com/IamNekell404
├ *Wa* : https://wa.me/6289695073357
└ *Fb* : https://facebook.com/nekellganss
`
        herman.sendMessage(from, fs.readFileSync("./lib/image/medsos.jpeg"), image, {quoted: fvideo, caption: medsos})
      }   
      switch(command){
      case 'mode':
          sendButtonMsg(`${ucapanWaktu} ${isOwner == true ? "owner\nsilahkan pilih mode di bawah ini" : "kak\nanda bukan owner\njadi percumah kalo kamu pencet"}`,`${tanggal()}`,[{
            buttonId:`${prefix}self on`,
            buttonText: {
              displayText: `on`
            },
            type: 1
          },{
            buttonId: `${prefix}self off`,
            buttonText: {
              displayText: 'off'
            },
            type: 1
          }])
          break;
          case 'daftar':
					herman.updatePresence(from, Presence.composing)
					if (isUser) return reply('*ᴋᴀᴍᴜ ꜱᴜᴅᴀʜ ᴛᴇʀᴅᴀғᴛᴀʀ!*')
					user.push(sender)
					fs.writeFileSync('./database/regi.json', JSON.stringify(user))
					try {
					ppimg = await herman.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `╭─「 *_ᴘᴇɴᴅᴀғᴛᴀʀᴀɴ_* 」\`\`\`\n│ ᴘᴇɴᴅᴀғᴛᴀʀᴀɴ ʙᴇʀʜᴀꜱɪʟ ꜱɴ: \n│TM08GK8PPHBSJDH10J\`\`\`\n│\n│\`\`\`ᴘᴀᴅᴀ ${Date} ${time2}\`\`\`\n│\`\`\`「 ɴᴀᴍᴀ 」: ${pushname}\`\`\`\n│\`\`\`「 ɴᴏᴍᴏʀ 」: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴏᴛ\`\`\`\n│\`\`\`ꜱɪʟᴀʜᴋᴀɴ\`\`\`\n│\`\`\`ᴋɪʀɪᴍ ${prefix}menu\`\`\`\n│\`\`\`\n│ᴛᴏᴛᴀʟ ᴘᴇɴɢɢᴜɴᴀ: ${user.length} ᴏʀᴀɴɢ\`\`\`\n╰────────────────`
            
                    daftarimg = await getBuffer(ppimg)
					herman.sendMessage(from, daftarimg, image, {quoted: fvideo, caption: captionnya})
					break 
						case 'bc':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await herman.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await herman.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							herman.sendMessage(_.jid, bc, image, {caption: `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`})
						}
						herman.sendMessage(_.jid, bc, image, {caption: `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`})
						reply('Suksess broadcast')
						} else {
						for (let _ of anu) {
							sendMessage(_.jid, `「 *_ʙʀᴏᴀᴅᴄᴀꜱᴛ_* 」\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
/////////(DOWNLOAD)///////////(Nekell H4xor)//////////
case 'ytplay':
                    if (args.length == 0) return await reply(`Example: ${prefix + command} jika nanti ku tak di samping mu`)
                    await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${args.join(" ")}`).then(async(result) => {
                     await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`).then(async(result) => {
                                    result = result.result
                                    caption = `❖ Title    : *${result.title}*\n`
                                    caption += `❖ Size     : *${result.size}*`
                                    ini_buffer = await getBuffer(result.thumbnail)
                                    await herman.sendMessage(from, ini_buffer, image, { quoted: lol, caption: caption })
                                    get_audio = await getBuffer(result.link)
                                    await herman.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: lol })
                                })
                        })
                    break
                case 'ytsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'ytmp3':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=${ini_link}`)
                    get_result = get_result.result
                    caption = `❖ Title    : *${result.title}*\n`
                    caption += `❖ Size     : *${result.size}*`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await herman.sendMessage(from, ini_buffer, image, { quoted: lol, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await herman.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: lol })
                    break
                case 'ytmp4':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await herman.sendMessage(from, ini_buffer, image, { quoted: lol, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await herman.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: lol })
break             
//▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Nekell H4xor)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
case 'igdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    await herman.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                    break
                case 'igdl2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${ini_url}`)
                    ini_result = ini_url.result.media
                    for (var x of ini_result) {
                        ini_type = image
                        if (x.includes(".mp4")) ini_type = video
                        ini_buffer = await getBuffer(x)
                        await herman.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                    }
                    break
                case 'twtdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_url = ini_url[ini_url.length - 1].link
                    ini_buffer = await getBuffer(ini_url)
                    await herman.sendMessage(from, ini_buffer, video, { quoted: lol })
                    break
                case 'fbdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    await herman.sendMessage(from, ini_buffer, video, { quoted: mek })
break
case "tag":
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					herman.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
case 'tiktoknowm':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    await herman.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                case 'tiktokmusic':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${ini_link}`)
                    await herman.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
                    break
//▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Nekell H4xor)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
			case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					herman.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
						case 'totaluser':
					herman.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `╭────「 *TOTAL USER * 」\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${user.length}\n╰──────⎿ *CORNFAKE BOTZ* ⏋────`
					herman.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await herman.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				herman.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
        case 'self':
          if (!isOwner) return reply("anda bukan owner yak:)")
          if (args[0] === "on") {
            self = true;
            reply("bot sekarang telah menjadi self mode")
          } else if (args[0] === "off") {
            self = false;
            reply("bot sekarang telah menjadi public mode")
          }
          break;
          case 'info':
					me = herman.user
					user.push(sender)
					uptime = process.uptime()
					teks = `➽ *ɴᴀᴍᴀ ʙᴏᴛ* : ${me.name}\n➽ *ᴏᴡɴᴇʀ ʙᴏᴛ* : Hermansyah\n➽ *ᴘʀᴇғɪx* : | ${prefix} |\n\n➽ *ᴀᴋᴛɪғ ꜱᴇᴊᴀᴋ* :${runtime(process.uptime)}\n➽ *ᴛᴏᴛᴀʟ ᴘᴇɴɢɢᴜɴᴀ* : ${user.length} ᴜꜱᴇʀ\n➽\n*ꜱᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋꜱ ᴛᴏ* :\n➽ ALL MY FRIENDS`
					const daca = fs.readFileSync('lord.jpg');
				    herman.sendMessage(from, daca, image, {quoted: fvideo, caption: teks})
					break 
					case 'addprem':
					herman.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					addpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid
					premium = addpremium
					reply(`*Berhasil Menambahkan ${premium} Ke database User Premium*`)
					break
				case 'delprem':
					if (!isOwner) return reply(mess.only.ownerB)
					rprem = body.slice(13)
					premium.splice(`${rprem}@s.whatsapp.net`, 1)
					reply(`Berhasil Remove wa.me/${rprem} Dari User Premium`)
					break
case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
       case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
       case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
       case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
   	case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	  
			   
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
case 'report': // jan di ganti anjeng emang lu bisa fix bug?
                if (!isUser) return reply(mess.only.userB)
                if (args.length < 1) return reply(`Yang mau direport apaan? Contoh: #report fitur #info error`)
          				
                     const pesan = body.slice(8)
                      if (pesan.length > 300) return herman.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const tekst1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    herman.sendMessage('6289695073357@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
          case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await herman.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					herman.sendMessage(from, options, text,{quoted :mek})
					break
          case 'randombokep':
				herman.updatePresence(from, Presence.composing) 
				if (isPrem) return reply(mess.only.premium)    
				if (!isUser) return reply(mess.only.userB)
								
				 data = fs.readFileSync('./lib/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = randKey.teks
                 herman.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
	case 'kicktime':
					if (!isUser) return reply(mess.only.userB)
									
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					herman.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					herman.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					herman.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					herman.sendMessage(from, 'Jangan Nangis Yaa', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
					case 'delrespon':
          if (!isOwner) return reply('bukan kamu')
          if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(body.slice(11), commandsDB)
          reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
          break;
          case 'wangy':
if (!q) return
  qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya yametehhhh ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
break
          case 'waifu':
          case 'loli':
          case 'husbu':
          case 'elf':
          case 'neko':
          case 'shota':
          case 'exo':
          case 'bts':
          case 'art':
          case 'shinobu':
              getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`).then((gambar) => {
                        herman.sendMessage(from, gambar, image, { quoted: mek })
                    })
              break
          case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await herman.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
		  case 'addrespon':
          if (!isOwner) return reply('bukan kamu')
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
    break
case 'neko': 
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`)
get_result = ini_result.result
ini_img = await getBuffer(get_result)
herman.sendMessage(from, ini_img, image, {quoted:ftrol})
break

                  	case 'delete':
					case 'del':
					case 'd':
					if (!isGroup)return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					herman.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'spongebob':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await herman.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/knights/spongebob?apikey=hardianto&pp=${anu.display_url}`)
	 herman.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Anjim🗿')
	}
	break
case 'patrick':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await herman.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/knights/patrick?apikey=hardianto&pp=${anu.display_url}`)
	 herman.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana anjim 🗿')
	}
break
case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Nekell H4xor`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${apikey}&text=${ini_txt}`)
                    await herman.sendMessage(from, ini_buffer, sticker, { quoted: mek })
break
case 'toimg':
if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
sticWait(from)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Lexxy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Yah gagal, coba ulangi ^_^')
buffer = fs.readFileSync(ran)
fakethumb(buffer,'By Nekell H4xor')
fs.unlinkSync(ran)
})
break
case 'telesticker':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${apikey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        await herman.sendMessage(from, ini_buffer, sticker)
                    }
break
//▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Nekell H4xor)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
               case 'takestick':
                    if ((isMedia && !herman.message.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} Nekell|H4xor`)
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await herman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            herman.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
break
case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
		
                    if (args.length == 0) return reply(`Example: ${prefix + command} nekell h4xor`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${ini_txt}`)
                    herman.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
case 'kanna':
case 'sagiri':
case 'megumin':
case 'wallnime':
reply(mess.wait)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await herman.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Created By Nekell H4xor', imageMessage: imageMsg,
contentText:`Done ✓ Jangan Lupa Donasi Mekk`,buttons,headerType:4}
prep = await herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
herman.relayWAMessage(prep)
break 
case 'hentai':
case 'hentaigif': 		
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`)
get_result = ini_result.result
ini_img = await getBuffer(get_result)
herman.sendMessage(from, ini_img, image, {quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}`).then((gambar) => {
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: '📂️Next'},type:1}]
imageMsg = (await herman.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Created By Nekell H4xor', imageMessage: imageMsg,
contentText:`Done ✓ Jangan Lupa Donasi`,buttons,headerType:4}
prep = await herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
herman.relayWAMessage(prep)
})
break
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':
case 'trap':
case 'lewd':
case 'feed':
case 'eron':
case 'solo':
case 'gasm':
case 'poke':
case 'anal':
case 'holo':
case 'tits':
case 'kuni':
case 'kiss':
case 'erok':
case 'smug':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu':
case 'pussy':
case 'femdom':
case 'cuddle':
case 'eroyuri':
case 'cum_jpg':
case 'blowjob':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'wallpaper':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':
buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`).then((gambar) => {
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: '➡️Next'},type:1}]
imageMsg = (await herman.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Created By Nekell H4xor', imageMessage: imageMsg,
contentText:`Done ✓ Jangan Lupa Donasi Cokk`,buttons,headerType:4}
prep = await herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
herman.relayWAMessage(prep)
})
break
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
if (args.length == 0) return reply(`Teksnya Mana ?\nContoh : ${prefix + command} nekell h4xor`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
herman.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Done ✓ Jangan Lupa Donasi Mekk`, quoted : ftrol})
})
break
case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Nekell H4xor`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        herman.sendMessage(from, gambar, image, { quoted: lol })
                    })
break
case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Teksnya Mana ?\nContoh : ${prefix + command} nekell h4xor`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
herman.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Done Jangan Lupa Donasi`, quoted : ftrol})
})
break
case 'nhentai':
  if (isPrem) return reply(mess.only.premium)    
  if (!isUser) return reply(mess.only.userB)
  if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
break
case 'nhentaipdf':
  if (isPrem) return reply(mess.only.premium)    
  if (!isUser) return reply(mess.only.userB)
  if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await herman.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
break
case 'nhentaisearch':
  if (isPrem) return reply(mess.only.premium)    
  if (!isUser) return reply(mess.only.userB)
  if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
break
case 'nekopoi':
  if (isPrem) return reply(mess.only.premium)    
  if (!isUser) return reply(mess.only.userB)
  if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await herman.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
break
case 'nekopoisearch':
  if (isPrem) return reply(mess.only.premium)    
  if (!isUser) return reply(mess.only.userB)
  if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
break
case 'xhamstersearch':
  if (isPrem) return reply(mess.only.premium)    
  if (!isUser) return reply(mess.only.userB)
  if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
break
case 'xhamster':
  if (isPrem) return reply(mess.only.premium)    
  if (!isUser) return reply(mess.only.userB)
  if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${apikey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await herman.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
break
case 'xnxxsearch':
  if (isPrem) return reply(mess.only.premium)    
  if (!isUser) return reply(mess.only.userB)
  if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
break
case 'xnxx':
  if (isPrem) return reply(mess.only.premium)    
  if (!isUser) return reply(mess.only.userB)
  if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/${command}?apikey=${apikey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await herman.sendMessage(from, thumbnail, image, { quoted: lol, caption: ini_txt })
break
case 'suit':
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
//▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Nekell H4xor)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
case 'slot':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            herman.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
case 'bisakah':
  if (!isGroup) return reply(mess.only.group)
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              herman.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: ftrol })
              break
case 'apakah':
  if (!isGroup) return reply(mess.only.group)
              apakah = body.slice(1)
              const iya =['mungkin','bisa jadi','mungkin iya','iya']
              const wa = iya[Math.floor(Math.random() * iya.length)]
              herman.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ wa, text, { quoted: ftrol })
              break
case 'benarkah':
  if (!isGroup) return reply(mess.only.group)
              benarkah = body.slice(1)
              const y =['mungkin benar','salah','benar','mungkin']
              const hoh = y[Math.floor(Math.random() * y.length)]
              herman.sendMessage(from, '*Pertanyaan :* '+benarkah+'\n*Jawaban :* '+ hoh, text, { quoted: ftrol })
              break
       case 'kapankah':
         if (!isGroup) return reply(mess.only.group)
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              herman.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: ftrol })
              break
case 'rate':
rate = body.slice(1)
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
herman.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: ftrol })
break
case 'bucin':
              herman.sendMessage(from, "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna tetapi butuh yang tak pernah menyerah", text)
              break
case 'tagall':
                       if (!isGroupAdmins) return reply(mess.only.admin)
                        members_id = []
                        teks = (args.length > 1) ? body.slice(8).trim() : '*Info :*'
                        teks += '\n\n'
                        for (let mem of groupMembers) {
                           teks += `╠➥ @${mem.jid.split('@')[0]}\n`
                           members_id.push(mem.jid)
                        }
                        reply(teks)
                        break
case 'getpp':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await herman.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            herman.sendMessage(from, pict, image, {quoted: mek})
            break
case 'getinfo':
  if (!isGroup) return reply(mess.only.group)
 var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await herman.getStatus(`${yy}`, MessageType.text)
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const ncontact = herman.contacts[ambl] != undefined ? herman.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : herman.contacts[ambl].notify || herman.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(`› Name : ${ncontact}\n› Bio : ${p.status}`)
if (p.status == 401) {
reply('[ ! ] User private.')
}
break
        case 'swm':
        case 'stickerwm':
        case 'sticker':
        case 's':
          var a = "NEKELL GANTENG BANGET GA ADA OBAT!";
          var b = "KAMU KAYA KONTOL:V";
          if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
          const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           media = await herman.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          herman.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./lib/stick/data.exif', out, '-o', _out])
          .on('exit', () => {
          herman.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          const media = await herman.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          herman.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./lib/stick/data.exif', out, '-o', _out])
          .on('exit', () => {
          herman.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
          } else if (isQuotedSticker){
            const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await herman.downloadAndSaveMediaMessage(encmedia)
            createExif(a, b);
            modStick(media, herman, mek, from)
          } else {
          reply(`Kirim gambar dengan caption ${prefix}swm atau tag gambar yang sudah dikirim`)
          }
          break;
          case 'join':
          if (args.length === 0 ) return reply(`please input params\n${prefix}join _link gc wa_`)
          var link = body.slice(6)
          res = link.replace("https://chat.whatsapp.com/", "");
          done = await herman.acceptInvite(res)
          reply(`berhasil bergabung di ${done.gid}`)
          break;

  case 'help':
        case 'menu':
       if (!isUser) return reply(mess.only.userB)
          var menulist = herman.prepareMessageFromContent(from, {
            "listMessage" :{
              "title": `${ucapanWaktu} kak ${pushname} \n❀Bot Info❀\n❀*Name Bot*: ${botname}\n❀*Owner Bot*: ${name}\n❀*Prefix*: Multi Prefix\n❀*Baterai* ${battery.persen}\nNo Spam No Telfon!!!`,
              "description": `bot ini berjalan selama \n${runtime(process.uptime())} Suport Terus Ya Dan Jangan Lupa Donasi😊`,
              "buttonText": "Sellect",
              "listType": "SINGLE_SELECT",
              "sections": [{
                "title": `${tanggal()}`,
                "rows": [{
                    "title": "menu",
                    "rowId": "0",
                    "description": "©Created By NekellH4xor🔥"
                  },{
                    "title": "owner",
                    "rowId": "1",
                    "description": "©Created By NekellH4xor🔥"
                  },{
                    "title": "donasi",
                    "rowId": "2",
                    "description": "©Created By NekellH4xor🔥"
                  }]
              }]
            }
          }, {})
          herman.relayWAMessage(menulist, {waitForAck: false})
          break;    
          case 'leave':
          if (!isGroup) return reply("khusus gc")
          if (!groupAdmins) return reply("khusus group admin")
          herman.groupLeave(from)
          .then((res) => {
            herman.sendMessage(sender, "perintah untuk keluar berhasil di eksekusi", text)
          })
          break;
          case 'darkjokes':
				herman.updatePresence(from, Presence.composing) 
				if (!isUser) return reply(mess.only.userB)
								
				reply(mess.wait)
				 data = fs.readFileSync('./lib/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 herman.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`GELAP📸😎\`\`\`'})
				break  
				case 'asupan':
				herman.updatePresence(from, Presence.composing) 
				if (!isUser) return reply(mess.only.userB)
								
				reply(mess.wait)
				 data = fs.readFileSync('./lib/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 asu = await getBuffer(randKey.result)
                 herman.sendMessage(from, asu, image, {quoted: fvideo, caption: '\`\`\`ASUPAN😎📸\`\`\`'})
				break  
		
          case 'antilink':

	                if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply(mess.only.antiE)
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						herman.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var bro = antilink.indexOf(from)
						antilink.splice(bro, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break;
					case 'verify':
              
if (isRegister) return reply('Akun kamu sudah terverfikasi')
const serialUser = createSerial(18)
	         try {
								ppimg = await herman.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	         register.push(sender)
	        fs.writeFileSync('./database/regi.json', JSON.stringify(register))
	        addRegisterUser(sender, serialUser)
	     //////   addRegisteredUser(sender, serialUser)
	         const anuu = `「 *PENDAFTARAN USER* 」
*✘⃝⃝🚀 Nama:* ${pushname}
*✘⃝📖 API:* ${sender.split('@')[0]}
*✘⃝🔖 Serial:* ${serialUser}
*✘⃝👤 Total:* ${register.length} Pengguna

*「 BOT WHATSAAP 」*`
         herman = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${register.length}&seri=${serialUser}&pp=${ppimg}&bg=https://telegra.ph/file/42e197bd1f295a71cab5b.jpg`)
             buttons = [{buttonId: `!menu`,buttonText:{displayText: `🏷️MENU`},type:1},{buttonId:`${prefix}sc`,buttonText:{displayText:'SC BOT🚀'},type:1}]
              imageMsg = (await herman.prepareMessageMedia(ikyads, "imageMessage", { thumbnail: ikyads, })).imageMessage
              buttonsMessage = {footerText: 'By Nekell H4xor', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await herman.prepareMessageFromContent(from,{buttonsMessage},{quoted: fmek})
              herman.relayWAMessage(prep)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			herman.updatePresence(from, Presence.composing)
			reply(`*Terimakasih Telah Daftar Di ${NamaBot}*`)
		}, 2000)
		          man = fs.readFileSync('./🎧/hermanchanel2.mp3');
herman.sendMessage(from, man, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true})
        break;
          case 'owner':
          const vacrd = `BEGIN:VCARD\n`+`VERSION:3.0\n`+
                        `FN:Owner CornFake-Bot\n`+
                        `ORG:Developer ${herman.user.name}\n`+
                        'TEL;type=CELL;type=VOICE;waid=6289695073357' +
                        ':+6289695073357\n' + 
                        'END:VCARD'
          herman.sendMessage(from, {display: "ownerbot", vcard: vacrd}, contact, {quoted: mek})
          man = fs.readFileSync('./🎧/hermanchanel1.mp3');
herman.sendMessage(from, man, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true})
          break;
        case 'github':
          herman.sendMessage(from, "*❏ MAU NYARI SC YA? DI YT BANYAK COK TAPI YA DI ENC+GADA APIKEY:V", text)
          break;
          
          case 'fb':
      reply('https://facebook.com/nekellganss jangan lupa donasi✨')
      break;
      case 'gc':
      reply('https://chat.whatsapp.com/J9CRXS0KuDsLaH68uvuRcU📌')
      break;
      case 'ig':
      reply('Jangan Lupa Folow Ig Owner Ya @nekellgatau')
      break;
      case 'nekell':
      reply('Y')
      break;
          default:
        if (budy.includes("https://","http://",".")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				herman.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    herman.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			if (budy.startsWith('$')){
if (!isOwner) return reply("anda bukan owner yak:)")
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`@CornFakeBotz:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('>')){
if (!isOwner) return reply("anda bukan owner yak:)")
try {
return herman.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: fvideo})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.includes("Herman")){  // JAN DI UBAH TOD
        reply(`*${pushname}*, ngpain manggil owner gw`)
        const d = fs.readFileSync('./media/anjim.webp');
        herman.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Jangan Lupa Donasi", 'jpegThumbnail': fs.readFileSync('./media/herman.webp')}}}})
        }
if (budy.includes("kontol")){  // JAN DI UBAH TOD
        reply(`*${pushname}*, lu yang kontol`)
        }
        if (budy.includes("🗿")){  
        reply(`Njir Ada Batu Cok`)
        }
         if (budy.includes("donate")){  
        reply(`Dana : 089695073357`)
        }
         if (budy.includes("donasi")){  
        reply(`Dana : 089695073357`)
        }
        if (budy.includes("kell,Kell")){
        reply(`Iya Itu Owner Ku`)
        }
        if (budy.includes("Nekell,nekell")){
        reply(`Iya Itu Owner Ku`)
        }
if (body.startsWith(`${prefix}${command}`)) {
comd = `      ────────────────\nʜᴇɪ *${pushname}* !!!\nperintah/comand *${prefix}${command}*\nTidak Ada Dalam *${prefix}menu*\n      ────────────────`
herman.sendMessage(from, comd, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "JANGAN LUP DONASI MEKK", 'jpegThumbnail': fs.readFileSync('./media/lord.webp')}}}})
				  }
				  	if (budy.includes("bot")){
		herman.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./media/hai.mp3')
        herman.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
if (budy.startsWith('=>')){
if (!isOwner) return reply("anda bukan owner yak:)")
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
          if (isTTT && isPlayer2) {
            if (budy.startsWith("Y")){
              tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              number = tto[0].number;
              teksboard = `*[ TIC TAC TOE GAME ]*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${number[1]}${number[2]}${number[3]}
${number[4]}${number[5]}${number[6]}
${number[7]}${number[8]}${number[9]}

giliran = @${tty.player1.split('@')[0]}`
              herman.sendMessage(from, teksboard, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
            }
            if (budy.startsWith('N')) {
              tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              rooms = roomttt.filter(tokek => !tokek.id.includes(from))
              roomttt = rooms;
              herman.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
            }
          }
          if (isTTT && isPlayer1) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            s = '❎'
            main[0].number[noober] = s
            main[0].turn = main[0].player1
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player1.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              herman.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()
            
            if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()
            
            if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()
            
            if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()
            
            if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()
            
            if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()
            
            if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()
            
            if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()
            
            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=❌\nPlayer2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\ngiliran = @${tty.player2.split('@')[0]}`
            herman.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }
          if (isTTT && isPlayer2) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            s = '🅾️'
            main[0].number[noober] = s
            main[0].turn = main[0].player2
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            //▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player2.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              herman.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()
            
            if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()
            
            if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()
            
            if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()
            
            if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()
            
            if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()
            
            if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()
            
            if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()
            
            if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=❌\nPlayer2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\ngiliran = @${tty.player1.split('@')[0]}`
            herman.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });    //▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
};       //▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//
          //▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣(Herman Chanel)▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣//