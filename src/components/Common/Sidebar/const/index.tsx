export const circleAnime = {
  targets: "#sideIcon",
  borderColor: [
    { value: "#ff0000" },
    { value: "#0df400" },
    { value: "#ffff1e" },
    { value: "#e60aff" },
    { value: "#0afffb" },
    { value: "#f49e00" }
  ],
  rotate: {
    value: "4turn",
    duration: 20000,
    easing: "easeInOutSine"
  },
  duration: 20000,
  loop: true
};

interface Menu {
  link: string;
  style: string;
  name: string;
}

export const Menus: Menu[] = [
  {
    link: "/",
    style: "redHover",
    name: "HOME"
  },
  {
    link: "/about",
    style: "greenHover",
    name: "ABOUT"
  },
  {
    link: "/works",
    style: "blueHover",
    name: "WORKS"
  },
  {
    link: "/contact",
    style: "orangeHover",
    name: "CONTACT"
  }
];
