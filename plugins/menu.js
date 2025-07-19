const { readEnv } = require("../lib/database");
const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const config = await readEnv();
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `👋 *Hello User, ${pushname}*


*📌 MAIN COMMANDS*  
▫️ .alive  
▫️ .menu  
▫️ .ai <text>  
▫️ .system  
▫️ .owner  

*📥 DOWNLOAD COMMANDS*  
▫️ .song <text>  
▫️ .video <text>  
▫️ .fb <link>  

*👥 GROUP COMMANDS*  
▫️ .add <number>  
▫️ .kick <@tag>  
▫️ .promote <@tag>  
▫️ .demote <@tag>  

*🔧 OWNER COMMANDS*  
▫️ .restart  
▫️ .update  

*🔄 CONVERT COMMANDS*  
▫️ .sticker <reply img>  
▫️ .img <reply sticker>  
▫️ .tr <lang> <text>  
▫️ .tts <text>  

👨‍💻 *Developers:* Kavindu Iduwara & Ishan Nimsara
`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://files.catbox.moe/rsp7v9.png",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
