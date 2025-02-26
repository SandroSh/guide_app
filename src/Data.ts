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


]