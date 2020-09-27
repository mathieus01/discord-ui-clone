export interface UserModel {
  name: string;
  avatar: string;
  isBot: boolean;
  isOnline: boolean;
}

export function loadUsers(): UserModel[] {
  return [
    {
      name: 'Mauricio Nunes',
      avatar: 'https://instagram.fbsb10-1.fna.fbcdn.net/v/t51.2885-19/s320x320/118807675_3370415962979188_6853675403339852059_n.jpg?_nc_ht=instagram.fbsb10-1.fna.fbcdn.net&_nc_ohc=ePkzE-lIBkkAX-Xubu9&oh=bf6f2aa4de2242f861552badc194c580&oe=5F985547',
      isBot: false,
      isOnline: true
    },
    {
      name: 'Raquel Lira',
      avatar: 'https://instagram.fbsb10-1.fna.fbcdn.net/v/t51.2885-19/s320x320/70305774_788416611612986_2139046713027985408_n.jpg?_nc_ht=instagram.fbsb10-1.fna.fbcdn.net&_nc_ohc=HnEGHG0dBZYAX-Agu-3&oh=b0b7ec628082c8658064bfc9241ba252&oe=5F9700F4',
      isBot: false,
      isOnline: true
    },
    {
      name: 'Rerissy Cleine',
      avatar: 'https://instagram.fbsb10-1.fna.fbcdn.net/v/t51.2885-19/s320x320/101264370_538134433529425_9070294106730659840_n.jpg?_nc_ht=instagram.fbsb10-1.fna.fbcdn.net&_nc_ohc=lGZ23g44Wo8AX_wtWL1&oh=8b6a7700f5b445f949050e4d68baee6f&oe=5F9AC31E',
      isBot: false,
      isOnline: true
    },
    {
      name: 'Lucas Lourenco',
      avatar: 'https://instagram.fbsb10-1.fna.fbcdn.net/v/t51.2885-19/s320x320/25010424_2010246195878246_3721854247365509120_n.jpg?_nc_ht=instagram.fbsb10-1.fna.fbcdn.net&_nc_ohc=GwlTlHPp18gAX_kCv_n&oh=a560ba2d6e710b7c646adae83b9a2877&oe=5F98C7D4',
      isBot: false,
      isOnline: false
    },
    {
      name: 'Pedro Arthur',
      avatar: 'https://instagram.fbsb10-1.fna.fbcdn.net/v/t51.2885-19/s320x320/44303233_544075722726422_3229078536232894464_n.jpg?_nc_ht=instagram.fbsb10-1.fna.fbcdn.net&_nc_ohc=rX8Z8Px8t8MAX_ZE5L0&oh=d6b86619c4e6b87305da32487b365156&oe=5F9A63FF',
      isBot: false,
      isOnline: false
    },
    {
      name: 'Siri',
      avatar: '',
      isBot: true,
      isOnline: true
    },
  ]
}
