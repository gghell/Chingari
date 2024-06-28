export default class AvonEmoji extends Object {
  [x: string]: any;
  constructor(client: any) {
    super();
    this.tick = "<:x_tick:1239384584315994153>";
    this.cross = "<:x_cross:1239384581921050726>";
    this.playing = "<a:RedPlaying:1119154905995808778>";
    this.exclamation = "<:x_replit:1239384663257124975> ";
    this.queue = "<:cx_queue:1094533742430801950>";
    this.info = "<:x_info:1239384932019867689>";
    this.defSearch = "<:youtube:1163106015353524265>";
    this.premium = "<:x_diamond:1239384621301501982>";
    this.invite = "<:x_members:1239384660262387773>";
    this.support = "<:cx_Supporters:1094534920573046794>";
    this.spotiSearch = "<:spotify:1163105846054637638>";
    this.deezSearch = "<:deezer:1163105910705631292>";
    this.vote = "<:cx_vote:1094534750175240252>";
    this.soundSearch = "<:SoundCloud:1163105837259161701>";
    this.badges = {
      named: "<a:cx_Badges:1094541101454602290>",
      owner: "<:x_owner:1239384616624722010>",
      dev: "<:x_devs:1239384672106971237>",
      admin: "<:cx_admin:1094532849652215889>",
      codev: "<:x_automod:1239384669175152691>",
      author: "<:author_avon:1129990460128108554>",
      friend: "<:cx_Vip:1094534432104394812>",
      vip: "<:cx_Vip:1094534432104394812>",
      premiumUser: "<:cx_Vip:1094534432104394812>",
      mod: "<:support:1206112648693940234>",
      staff: "<:cx_staff:1094534082387529728>",
      supporter: "<:cx_staff:1094534082387529728>",
      user: "<:cx_staff:1094534082387529728>",
    };
    this.helpMenu = {
      music: "<:cx_headphone:1094534814251622500>",
      home: "<:cx_homo:1094534531312263228>",
      filters: "<:x_lol:1239384542591189053>",
      info: "<:cx_info:1094535301449400381>",
      utility: "<:cx_utility:1094535413030465667>",
      allCommands: "<:cx_commands:1094535451215401041>",
    };
    this.setup = {
      pause: "<:x_pause:1239384816990949437>",
      resume: "<:x_play:1239384607137337375>",
      skip: "<:x_play:1239384607137337375>",
      previous: "<:x_left:1241302391186260019>",
      shuffle: "<:x_cold:1239384573335568404>",
      author: "<:x_members:1239384660262387773>",
      nowPlaying: "<a:RedPlaying:1119154905995808778>",
      requester: "<:x_members:1239384660262387773>",
      duration: "<:x_time:1239384666121965708>",
      stop: "<:x_homes:1239384611822243921>",
      loop: "<:x_partner:1239384559188049981>",
      volLow: "<:x_defen:1239384550883463228>",
      volHigh: "<:x_headpone:1239384537260363836>",
      fav: "<:x_heart:1239384649361260585>",
      autoplay: "<:x_galaxy:1239384657393487994>",
      filters: "<:x_lol:1239384542591189053>",
    };
    this.avonNew = {
      emote: "<a:RedPlaying:1119154905995808778>",
      nowPlaying: "<a:RedPlaying:1119154905995808778>",
      requester: "<:x_members:1239384660262387773>",
      duration: "<:x_time:1239384666121965708>",
      author: "<:x_members:1239384660262387773>",
      pause: "<:x_pause:1239384816990949437>",
      resume: "<:x_play:1239384607137337375>",
      skip: "<:x_play:1239384607137337375>",
      fav: "<:x_heart:1239384649361260585>",
      previous: "<:x_left:1241302391186260019>",
      stop: "<:x_homes:1239384611822243921>",
    };
    this.spotify = {
      emote: "<a:RedPlaying:1119154905995808778>",
      filters: "<:x_lol:1239384542591189053>",
      nowPlaying: "<a:RedPlaying:1119154905995808778>",
      requester: "<:x_members:1239384660262387773>",
      duration: "<:x_time:1239384666121965708>",
      pause: "<:x_pause:1239384816990949437>",
      author: "<:x_members:1239384660262387773>",
      resume: "<:x_play:1239384607137337375>",
      stop: "<:x_homes:1239384611822243921>",
      loop: "<:x_partner:1239384559188049981>",
      shuffle: "<:x_replit:1239384663257124975>",
      forward: "<:x_18:1239384598828548197>",
      backward: "<:x_18:1239384598828548197>",
      volLow: "<:x_defen:1239384550883463228>",
      volHigh: "<:x_headpone:1239384537260363836>",
      previous: "<:x_left:1241302391186260019>",
      skip: "<:x_play:1239384607137337375>",
    };
    this.special = {
      emote: "<a:RedPlaying:1119154905995808778>",
      nowPlaying: "<a:RedPlaying:1119154905995808778>",
      requester: "<:x_members:1239384660262387773>",
      duration: "<:x_time:1239384666121965708>",
      pause: "<:x_pause:1239384816990949437>",
      author: "<:x_members:1239384660262387773>",
      resume: "<:x_play:1239384607137337375>",
      stop: "<:x_homes:1239384611822243921>",
      loop: "<:x_partner:1239384559188049981>",
      shuffle: "<:x_replit:1239384663257124975>",
      forward: "<:x_18:1239384598828548197>",
      backward: "<:x_18:1239384598828548197>",
      volLow: "<:x_defen:1239384550883463228>",
      volHigh: "<:x_headpone:1239384537260363836>",
      previous: "<:x_left:1241302391186260019>",
      skip: "<:x_play:1239384607137337375>",
    };
    this.noButtons = {
      emote: "<a:RedPlaying:1119154905995808778>",
      nowPlaying: "<a:RedPlaying:1119154905995808778>",
      author: "<:x_members:1239384660262387773>",
      requester: "<:x_members:1239384660262387773>",
      duration: "<:x_time:1239384666121965708>",
      filters: "<:x_lol:1239384542591189053>",
    };
    this.simple = {
      emote: "<a:nowplaying:1129817857727942738>",
      nowPlaying: "<a:RedPlaying:1119154905995808778>",
      requester: "<:x_members:1239384660262387773>",
      author: "<:x_members:1239384660262387773>",
      duration: "<:x_time:1239384666121965708>",
      filters: "<:x_lol:1239384542591189053>",
      pause: "<:x_pause:1239384816990949437>",
      resume: "<:x_play:1239384607137337375>",
      stop: "<:x_homes:1239384611822243921>",
      skip: "<:x_play:1239384607137337375>",
      loop: "<:x_partner:1239384559188049981>",
    };
    this.oldStyle = {
      emote: "<a:RedPlaying:1119154905995808778>",
      nowPlaying: "<a:RedPlaying:1119154905995808778>",
      author: "<:x_members:1239384660262387773>",
      requester: "<:x_members:1239384660262387773>",
      duration: "<:x_time:1239384666121965708>",
    };
  }
}
