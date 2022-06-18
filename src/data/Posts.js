import { Users } from "./Users";
export const Posts = [
  {
    imageUrl:
      "https://p4.wallpaperbetter.com/wallpaper/12/827/723/kentaro-miura-berserk-guts-wallpaper-preview.jpg",
    user: Users[0].user,
    likes: 1459,
    caption: "Anime that will make you lose faith in friendship ⚔️",
    profile_picture: Users[0].image,
    comments: [
      {
        user: "Anastasia",
        comment: "Whaaaatt?? What did you say ??",
      },
    ],
  },
  {
    imageUrl:
      "https://images-gmi-pmc.edge-generalmills.com/2586d951-a46a-4091-aec6-eca3adefb409.jpg",
    user: Users[1].user,
    likes: 2059,
    caption: "When life gives you a lemon, make a lemonade",
    profile_picture: Users[1].image,
    comments: [
      {
        user: "Zosi",
        comment: "Congratulations!! AnastationSquere ",
      },
    ],
  },
];
