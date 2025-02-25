export type navLink = {
  title: string;
  isActive: boolean;
  route: string;
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
