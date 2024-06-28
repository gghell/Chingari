import AvonCommand from "../../base/AvonCommand.js";
import {
  getCount,
  getPremServerList,
  getUserPremtier,
} from "../../api/db/premium.js";
import Badges from "./Badges.js";
import axios from "axios";

const badge = new Badges();

export default class Profile extends AvonCommand {
  constructor(client: any) {
    super(client);
    this.name = "profile";
    this.aliases = ["pr", "badges", "badge"];
    this.cat = "utility";
    this.vc = false;
    this.samevc = false;
    this.desc = "Shows the profile for a user";
    this.usage = "profile [user]";
    this.premium = {
      guild: false,
      user: false,
    };
    this.dev = false;
    this.dispatcher = false;
    this.playing = false;
    this.exec = async (message: any, args: any, prefix: any) => {
      let user: any;
      let badges: string | undefined = "";

      if (message.mentions.users.filter((x: any) => x !== this.client.user).first()) {
        user = message.mentions.users.filter((x: any) => x !== this.client.user).first();
      } else if (args[0]) {
        try {
          user = await this.client.users.fetch(args[0]);
        } catch (error) {
          console.error("Failed to fetch user:", error);
          return message.reply({
            embeds: [
              this.client.utils
                .errorEmbed()
                .setDescription(`${this.client.emoji.cross} Please provide me a valid user`),
            ],
          });
        }
      } else {
        user = message.author;
      }

      if (!user) {
        return message.reply({
          embeds: [
            this.client.utils
              .errorEmbed()
              .setDescription(`${this.client.emoji.cross} Please provide me a valid user`),
          ],
        });
      }

      let check: boolean = this.client.utils.checkUserPrem(user.id);

      let guild;
      try {
        guild = await this.client.guilds.fetch(this.client.config.supportId);
      } catch (error) {
        console.error("Failed to fetch guild:", error);
        return;
      }

      if (!guild) return;

      let mem;
      try {
        mem = await axios({
          url: `https://discord.com/api/v10/guilds/${guild.id}/members/${user.id}`,
          method: `GET`,
          headers: {
            Authorization: `Bot ${this.client.config.token}`,
          },
        });
      } catch (error) {
        console.error("Failed to fetch member:", error);
        return;
      }

      if (!mem) {
        badges = "";
      } else {
        mem = mem.data;
        let roles = mem.roles;
        // ... Process badges based on roles
      }

      // Process badges
      // You can add the badge processing code here based on user.id and roles as in your original code.

      let premiumInfo: string | undefined;
      if (check === false) {
        premiumInfo = "Not A Premium User";
      } else {
        let list = await getPremServerList(user.id);
        let cnt = await getCount(user.id);
        let upgrades = list.length;
        let upgradesLeft = cnt.COUNT;
        let Tier: string | undefined;
        let tier = await getUserPremtier(user.id);
        if (tier.TIER === "none" || tier.TIER === "unknown") Tier = "Info Not Available";
        else if (tier.TIER === "bronze") Tier = "Bronze Tier";
        else if (tier.TIER === "silver") Tier = "Silver Tier";
        else if (tier.TIER === "gold") Tier = "Gold Tier";
        else if (tier.TIER === "diamond") Tier = "Diamond Tier";
        else if (tier.TIER === "special") Tier = "Special Tier";
        else Tier = "Info Not Available";
        premiumInfo = `Premium Tier: \`${Tier}\`\nUsing Premium In: \`${upgrades}\` Servers\nUpgrades Left: \`${upgradesLeft}\`\nExpires On: <t:${this.client.utils.checkPremTime(
          user.id
        )}:R>`;
      }

      let em = this.client.utils
        .premiumEmbed(message.guildId)
        .setAuthor({
          name: `${this.client.user.username}`,
          iconURL: this.client.user.displayAvatarURL(),
        })
        .setTitle(`${user.username}'s Profile`)
        .setURL(`https://discord.com/users/${user.id}`)
        .setDescription(
          `__**Chingari Achievements**__\n${badges}\n\n__**Premium Info**__\n${premiumInfo}`
        )
        .setThumbnail(user.displayAvatarURL({ dynamic: true }));

      let b1 = this.client.utils.button(
        `link`,
        `Premium`,
        null,
        null,
        `${this.client.config.server}`,
        this.client.emoji.premium
      );
      let b2 = this.client.utils.button(
        `link`,
        `Support`,
        null,
        null,
        `${this.client.config.server}`,
        this.client.emoji.support
      );
      let row = this.client.utils.actionRow([b1, b2]);

      return message.reply({
        embeds: [em],
        components: [row],
      });
    };
  }
}
