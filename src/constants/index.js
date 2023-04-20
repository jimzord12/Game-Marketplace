import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
  },
  /*
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "payment",
    imgUrl: payment,
    link: "/",
    disabled: true,
  },
  */
  {
    name: "withdraw",
    imgUrl: withdraw,
    link: "/withdraw",
    // disabled: true,
  },
  /*
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
    disabled: true,
  },
  */
];

// The keys (numbers) represent the Cards Template IDs
export const cardInfo = {
  1: {
    name: "Wind Turbine",
    image:
      "https://www.windsystemsmag.com/wp-content/uploads/2019/10/1019-CW-I1.jpg",
    type: "Generator",
    desc: "Utilizes the power of the wind to generate clean and pure electricity for your town's buildings. The higher the card's level or rarity, the more energy it produces. However, it requires maintenance in the form of gold per hour.",
  },
  13: {
    name: "TechStore",
    image:
      "https://static8.depositphotos.com/1035123/921/i/950/depositphotos_9214449-stock-photo-mechanical-engineering.jpg",
    type: "Building",
    desc: "Increases the rate of which your workers can gather/collect resources and gold. This is achieved by investing gold into this card, as it allows you to improve/upgrade the tools your workers use.",
  },

  7: {
    name: "Workaholism",
    image:
      "https://images.squarespace-cdn.com/content/v1/596fa1f2be659453ce8cc6a2/1516217342936-WUU33YQYA80AGAXY4XIJ/workaholism2-846x529.png?format=1500w",
    type: "Special Effect",
    desc: "Special Effect cards provide boosts that last for 12 hours. They also can not be leveled up as they do not have levels. Workaholism, increases the gathering rates of the following resources: Concrete, Metals and Crystals by a percentage derived from the card's rarity.",
  },
};

export const searchTerms = ["wind turbine", "techstore", "workaholism"];
