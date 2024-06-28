import AvonCommand from "../../base/AvonCommand.js";

import { Message } from "discord.js";  // Assuming you're using discord.js

export default class About extends AvonCommand {

  name: string;

  desc: string;

  usage: string;

  aliases: string[];

  cat: string;

  constructor(client: any) {  // You might want to replace 'any' with a more specific type if available

    super(client);

    this.name = "about";

    this.desc = "Provides you with the information of the bot";

    this.usage = "about";

    this.aliases = ["botinfo", "bi"];

    this.cat = "info";

  }

  exec = async (message: Message, args: string[], prefix: string): Promise<void> => {

    return message.reply({

      embeds: [

        this.client.utils.premiumEmbed(message.guildId).setDescription("Information about the bot."),

      ],

    });

  };

}