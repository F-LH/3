const Discord = require("discord.js");
  const kboosh = new Discord.Client();
    const kbooshtoken = "NjM4MzAwODA5Mjg0ODEyODA0.XbavzQ.zdOKfiFgJlmaZ3tX5NwL2gHBZHc"
      kboosh.on('ready', () => {
        kboosh.user.setGame(`We`,'https://www.twitch.tv/flh_');
          console.log('Im Ready!');
  
        });

  kboosh.on('message', message => {
    if (message.content.split(' ')[0] == '!greet')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   kboosh.on("message", message => {
       var prefix = "%";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "b")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});
kboosh.login(kbooshtoken);