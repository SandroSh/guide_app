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