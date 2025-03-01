export type navLink = {
  title: string;
  isActive: boolean;
  route: string;
};

export type homeCard = {
  imgUrl: string;
  title: string;
  linkTitle: string;
  isActive:boolean;
  hasBorder:boolean;
};

export type sectionHeaderType = {
  title:string;
  numeration:string;
  description:string;
}

export type serviceCardType = {
  iconUrl:string;
  title:string;
  color:string;
  arrowIconUrl:string;
  isLast:boolean;
}
export type hotelCardType = {
  imgUrl:string;
  title:string;
  isFirst:boolean;
  description:string;
  starNum:number;
}
export type TeamMemType = {
  url:string;
  name:string;
  position:string;
}

export const navData: navLink[] = [
  {
    title: "მთავარი",
    isActive: true,
    route: "/",
  },
  {
    title: "სერვისები",
    isActive: false,
    route: "/services",
  },
  {
    title: "ჩვენი გუნდი",
    isActive: false,
    route: "/ourTeam",
  },
  {
    title: "სიახლეები",
    isActive: false,
    route: "/news",
  },
  {
    title: "კონტაქტი",
    isActive: false,
    route: "/contact",
  },
];
export const homeCards: homeCard[] = [
  { 
    imgUrl:'public/assets/card-1.svg',
    title:'ტურები რაჭაში',
    linkTitle:'გამოგვყევი',
    isActive:false,
    hasBorder:true
  },
  { 
    imgUrl:'public/assets/card-2.svg',
    title: 'ადილობრივი მეწარმეობა',
    linkTitle:'შეიძინე',
    isActive:true,
    hasBorder:true
  },
  { 
    imgUrl:'public/assets/card-3.svg',
    title:'სასტუმროები',
    linkTitle:'დაჯავშნე',
    isActive:false,
    hasBorder:false
  },

]
export const sectionHeaders: sectionHeaderType[] = [
  {
    title:'ჩვენს შესახებ',
    numeration:'01',
    description:'ჩვენ ვაერთიანებთ რეგიონული მასშტაბის ტურისტულ ობიექტებს, სერვისებსა და ღირსშესანიშნაობებს.'
  },
  {
    title:'სერვისები',
    numeration:'02',
    description:'ჩვენ გთავაზობთ'
  },
  {
    title:'სასტუმროები',
    numeration:'03',
    description:'დაჯავშნე სასტუმროები, ჩვენი პლათფორმის საშუალებით, სადაც ჯერ კიდევ უცნობ და საინტერესო სივრცეებს აღმოაჩენ'
  },
  {
    title:'სასტუმროები',
    numeration:'01',
    description:'დაჯავშნე სასტუმროები, ჩვენი პლათფორმის საშუალებით, სადაც ჯერ კიდევ უცნობ და საინტერესო სივრცეებს აღმოაჩენ'
  },
  {
    title:'ადგილობრივი მეწარმეობა',
    numeration:'02',
    description:'შეიძინე ადგილობრივად რაჭაში წარმოებული უნიკალური ნივთები. აღმოაჩინე ჩვენთან ერთდ!'
  },
  {
    title:'ტურები რაჭაში',
    numeration:'03',
    description:'მიიღე ინფორმაცია რაჭაში არსებული ღირსშესანიშნაობებისა და ტურისტული ობიექტების შესახებ, ეწვიე მათ ჩვენთან ერთად.'
  },
]
export const serviceCardData: serviceCardType[] = [
    {
      iconUrl: "public/assets/Icon map-travel-agency.svg",
      title: "ტურები რაჭაში",
      color: "text-primaryBlue",
      arrowIconUrl: "public/assets/goto_blue.svg",
      isLast: false
    },
    {
      iconUrl: "public/assets/Icon awesome-shopping-basket-1.svg",
      title: "ადგილობრივი მეწარმეობა",
      color: "text-primaryRed",
      arrowIconUrl: "public/assets/goto_red.svg",
      isLast:false
    },
    {
      iconUrl: "public/assets/Icon awesome-building-1.svg",
      title: "სასტუმროები",
      color: "text-primaryBlue",
      arrowIconUrl: "public/assets/goto_blue.svg",
      isLast:true
    },
];
export const hotelCards: hotelCardType[] = [
  {
    imgUrl: "public/assets/hotels-1.png",
    title:'სასტუმრო სანსეტ შოვი',
    isFirst: true,
    description: "Listings >> Pizza Place >>Restaurant",
    starNum: 4
  },
  {
    imgUrl: "public/assets/hotels-2.png",
    title:'სასტუმრო სანსეტ შოვი 2',
    isFirst: false,
    description: "Listings >> Pizza Place >>Restaurant",
    starNum: 5
  },
  {
    imgUrl: "public/assets/hotels-3.png",
    title:'სასტუმრო სანსეტ შოვი 3',
    isFirst: false,
    description: "Listings >> Pizza Place >>Restaurant",
    starNum: 3
  },
  {
    imgUrl: "public/assets/hotels-2.png",
    title:' სასტუმრო სანსეტ შოვი 4',
    isFirst: false,
    description: "Listings >> Pizza Place >>Restaurant",
    starNum: 2
  },
  {
    imgUrl: "public/assets/hotels-1.png",
    title:' სასტუმრო სანსეტ შოვი 5',
    isFirst: false,
    description: "Listings >> Pizza Place >>Restaurant",
    starNum: 3
  },
  {
    imgUrl: "public/assets/hotels-3.png",
    title:'სასტუმრო სანსეტ შოვი 7',
    isFirst: false,
    description: "Listings >> Pizza Place >>Restaurant",
    starNum: 4
  },
  
]
export const teamMembers:TeamMemType[] = [
  {
    url: "../../public/assets/teamImg.png",
    name: "ნიკო კიკვიძე",
    position: "პოზიცია"
  },
  {
    url: "../../public/assets/teamImg.png",
    name: "თეკლა ლობჟანიძე",
    position: "პოზიცია"
  },
  {
    url: "../../public/assets/teamImg.png",
    name: "თიკო სამხარაძე",
    position: "პოზიცია"
  },
  {
    url: "../../public/assets/teamImg.png",
    name: "გიორგი ლობჯანიძე",
    position: "პოზიცია"
  },
  

]