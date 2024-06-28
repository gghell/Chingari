import AvonCommand from "../../base/AvonCommand.js";

export default class Invite extends AvonCommand {
  constructor(client: any) {
    super(client);
    this.name = "invite";
    this.aliases = ["inv"];
    this.desc = "Provides you with the Invite link of the bot";
    this.usage = "invite";
    this.cat = "info";
    this.exec = async (message: any, args: any, prefix: any) => {
      return message.reply({
        content: `Here You Go!`,
        components: [
          this.client.utils.actionRow([
            this.client.utils.button(
              `link`,
              `Invite Me`,
              null,
              null,
              `https://discord.com/oauth2/authorize?client_id=1129516341578178682&permissions=8&scope=bot+applications.commands`,
              this.client.emoji.invite
            ),
            this.client.utils.button(
              `link`,
              `Support Server`,
              null,
              null,
              `${this.client.config.server}`,
              this.client.emoji.support
            ),
          ]),
        ],
      });
    };
  }
}
