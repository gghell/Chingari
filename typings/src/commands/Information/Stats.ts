import AvonCommand from "../../base/AvonCommand.js";
import { cpu } from "systeminformation";
import { cpus, totalmem } from "node:os";
import {
  CommandInteraction,
  Message,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
} from "discord.js";

interface CustomClient extends Client {
  utils: any;
  cluster: any;
  config: any;
  emoji: any;
}

export default class Stats extends AvonCommand {
  constructor(client: CustomClient) {
    super(client);
    this.name = "stats";
    this.aliases = ["st", "stat"];
    this.desc = "Informs you about the current statistics of the bot";
    this.usage = "stats";
    this.cat = "info";
  }

  async exec(message: Message, args: any[], prefix: string) {
    const { client } = this;

    const em = client.utils
      .premiumEmbed(message.guildId)
      .setTitle(`${client.user.username} Stats`)
      .addFields([
        {
          name: `__Chingari Information__`,
          value: `Bot's Mention: ${client.user}\nBot's Tag: ${
            client.user.tag
          }\nBot's Version: 2.1.0\nTotal Servers: ${await client.cluster
            .broadcastEval((x: any) => x.guilds.cache.size)
            .then((result: any) =>
              result.reduce((a: any, b: any) => a + b, 0)
            )}\nTotal Users: ${await client.cluster
            .broadcastEval((c: any) =>
              c.guilds.cache
                .filter((x: any) => x.available)
                .reduce((a: any, g: any) => a + g.memberCount, 0)
            )
            .then((r: any) =>
              r.reduce((acc: any, memberCount: any) => acc + memberCount, 0)
            )}\nTotal Channels: ${await client.cluster
            .broadcastEval((x: any) => x.channels.cache.size)
            .then((r: any) =>
              r.reduce((a: any, b: any) => a + b, 0)
            )}\nLast Rebooted: <t:${Math.round(
            client.readyTimestamp / 1000
          )}:R>`,
        },
      ])
      .setThumbnail(client.user.displayAvatarURL());

    const cpuUsage = await getCpuUsage();
    const cpuFree = (100 - cpuUsage).toFixed(2);

    const buttons = [
      client.utils.button("custom_id", "Team Info", 2, "team"),
      client.utils.button("custom_id", "General Info", 2, "gen"),
      client.utils.button("custom_id", "System Info", 2, "sys"),
    ];

    const row = client.utils.actionRow(buttons);

    const msg = await message.reply({
      embeds: [em],
      components: [row],
    });

    const guild = await client.guilds
      .fetch(client.config.supportId)
      .catch(() => {});
    const members = await Promise.all([
      guild.members.fetch("1085376019445321829"),
      guild.members.fetch("785708354445508649"),
      guild.members.fetch("735003878424313908"),
      guild.members.fetch("985932799125115000"),
    ]);

    const collector = msg.createMessageComponentCollector({
      filter: (b: CommandInteraction) => {
        if (b.user.id === message.author.id) return true;
        else
          return b.reply({
            content: `${client.emoji.cross} You are not the command requester`,
            ephemeral: true,
          });
      },
      time: 100000 * 7,
    });

    collector.on("collect", async (interaction: CommandInteraction) => {
      if (interaction.isButton()) {
        switch (interaction.customId) {
          case "team":
            await interaction.update({
              embeds: [
                client.utils
                  .premiumEmbed(message.guildId)
                  .setAuthor({
                    name: `${client.user.username}`,
                    iconURL: client.user.displayAvatarURL(),
                  })
                  .setTitle(`${client.user.username} Stats`)
                  .addFields([
                    {
                      name: `__Developers__`,
                      value: `**1.** ${checkMemPresence(
                        members[0]
                      )} [RY4N](https://discord.com/users/1085376019445321829) [ID: 1085376019445321829] \n**2.** ${checkMemPresence(
                        members[1]
                      )} [!ItzAxo](https://discord.com/users/1092061892568174723) [ID: 1092061892568174723]`,
                    },
                    {
                      name: `__Owners__`,
                      value: `**1.** ${checkMemPresence(
                        members[3]
                      )} [Arshman](https://discord.com/users/985932799125115000) [ID: 985932799125115000]\n**2.** ${checkMemPresence(
                        members[2]
                      )} [KARTIK](https://discord.com/users/990587571690168321) [ID: 990587571690168321,
                    },
                  ])
                  .setThumbnail(client.user.displayAvatarURL()),
              ],
              components: [
                client.utils.actionRow([
                  client.utils.button("custom_id", "Team Info", 2, "team").setDisabled(true),
                  client.utils.button("custom_id", "General Info", 2, "gen"),
                  client.utils.button("custom_id", "System Info", 2, "sys"),
                ]),
              ],
            }).catch(() => {});
            break;
          case "gen":
            await interaction.deferUpdate();
            await msg.edit({
              embeds: [em],
              components: [
                client.utils.actionRow([
                  client.utils.button("custom_id", "Team Info", 2, "team"),
                  client.utils.button("custom_id", "General Info", 2, "gen").setDisabled(true),
                  client.utils.button("custom_id", "System Info", 2, "sys"),
                ]),
              ],
            }).catch(() => {});
            break;
          case "sys":
            await interaction.deferUpdate();
            await msg.edit({
              embeds: [
                client.utils
                  .premiumEmbed(message.guildId)
                  .setAuthor({
                    name: `${client.user.username}`,
                    iconURL: client.user.displayAvatarURL(),
                  })
                  .setTitle(`${client.user.username} Stats`)
                  .addFields([
                    {
                      name: `CPU Info`,
                      value: `Cores: ${(await cpu()).cores}\nModel: ${
                        cpus()[0].model
                      }\nSpeed: ${cpus()[0].speed}\nUsage: ${cpuUsage}%\nFree: ${cpuFree}%`,
                    },
                    {
                      name: `Memory Info`,
                      value: `Total: ${(totalmem() / 1024 / 1024).toFixed(2)} MB\nUsed: ${(
                        process.memoryUsage().heapUsed /
                        1024 /
                        1024
                      ).toFixed(2)} MB\nFree: ${(
                        totalmem() / 1024 / 1024 -
                        process.memoryUsage().heapUsed / 1024 / 1024
                      ).toFixed(2)} MB`,
                    },
                  ])
                  .setThumbnail(client.user.displayAvatarURL()),
              ],
              components: [
                client.utils.actionRow([
                  client.utils.button("custom_id", "Team Info", 2, "team"),
                  client.utils.button("custom_id", "General Info", 2, "gen"),
                  client.utils.button("custom_id", "System Info", 2, "sys").setDisabled(true),
                ]),
              ],
            }).catch(() => {});
            break;
        }
      }
    });

    collector.on("end", async () => {
      if (!msg) return;
      await msg.edit({
        components: [
          client.utils.actionRow(buttons.map((b) => b.setDisabled(true))),
        ],
      });
    });
  }
}

async function getCpuUsage(): Promise<number> {
  const cpuInfo = await cpu();
  const total = Object.values(cpus()[0].times).reduce((a, b) => a + b, 0) * 100;
  const usage = (process.cpuUsage().user + process.cpuUsage().system) * 1000;
  return (usage / total) * 100;
}

function checkMemPresence(member: any) {
  try {
    switch (member.presence?.status) {
      case "online":
        return "<a:x_online:1239642984916455544>";
      case "idle":
        return "<a:x_online:1239642984916455544>";
      case "dnd":
        return "<a:x_online:1239642984916455544>";
      case "offline":
      default:
        return "<a:cx_ping:1094533111020273736>";
    }
  } catch (e) {
    console.log(e);
    return "<a:cx_ping:1094533111020273736>";
  }
}
