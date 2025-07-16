interface Menu {
  link: string;
  style: string;
  name: string;
}

export const Menus: Menu[] = [
  {
    link: "/",
    style: "redHover",
    name: "HOME",
  },
  {
    link: "/about",
    style: "greenHover",
    name: "ABOUT",
  },
  {
    link: "/works",
    style: "blueHover",
    name: "WORKS",
  },
  {
    link: "/sns",
    style: "orangeHover",
    name: "SNS",
  },
];
