export default class AvonConfig extends Object {
  token: string;
  prefix: string;
  nodes: object[];
  spotiId: string;
  owners: string[];
  spotiSecret: string;
  spotiNodes: object[];
  webhooks: object;
  supportId: string;
  color: string;
  server: string;
  voteUrl: string;
  voteApi: string;
  setupBgLink: string;
  constructor() {
    super();
    this.token =
      "";
    this.prefix = "+";
    this.nodes = [
      {
        name: `RY4N`,
          url: ``,
          auth: ``,
          secure: true,
      },
    ];
    this.voteApi =
      "";
    this.webhooks = {
      guildCreate:
        "",
      guildDelete:
        "",
      Cmds: "",
    };
    this.server = "https://discord.gg/ZnPSDuXSVX";
    this.spotiId = "bf5ee2a72bae40ffadc71a47280e5ff9";
    this.spotiSecret = "053469ffeb3844079fab734ebf30902";
    this.owners = ["1085376019445321829"];
    this.color = "#ff0000";
    this.supportId = "1092123729401745510";
    this.spotiNodes = [
      {
        id: `RY4N`,
        host: ``,
        port: ,
        password: ``,
        secure: true,
      },
    ];
    this.voteUrl = "https://top.gg/bot/1129516341578178682";
    this.setupBgLink =
      "e8https://cdn.discordapp.com/attachments/1123319552525221948/1255638216065814720/standard_2.gif?ex=667ddbb7&is=667c8a37&hm=5a36ba239e0ba75ae501c24006b550a01411e7e6fd08ab89be291f5c73d1c6fd&";
  }
}
