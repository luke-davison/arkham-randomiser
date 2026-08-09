import type { ExpansionName, ScenarioName } from "./game.types";

export interface Monster {
  name: string;
  count: number;
  expansion: ExpansionName;
  scenarios: ScenarioName[];
}

export const monsters: Monster[] = [
  {
    name: "Abyssal Servant",
    count: 1,
    expansion: "Base Game",
    scenarios: [
      "Approach of Azathoth",
      "Feast of Umordhoth",
      "Shots in the Dark",
      "The Dead Cry Out"
    ]
  },
  {
    name: "Accursed Somnambulist",
    count: 2,
    expansion: "Under Dark Waves",
    scenarios: ["Dreams of R'lyeh", "Ithaqua's Children"]
  },
  {
    name: "Alma Hill",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Feast of Umordhoth"]
  },
  {
    name: "Altered Beast",
    count: 2,
    expansion: "Base Game",
    scenarios: ["Veil of Twilight", "Silence of Tsathogua", "Tyrants of Ruin"]
  },
  {
    name: "Altered Servant",
    count: 2,
    expansion: "Base Game",
    scenarios: [
      "Veil of Twilight",
      "Ithaqua's Children",
      "The Key and the Gate"
    ]
  },
  {
    name: "Avian Thrall",
    count: 1,
    expansion: "Base Game",
    scenarios: [
      "Veil of Twilight",
      "Ithaqua's Children",
      "The Key and the Gate"
    ]
  },
  {
    name: "Billy Cooper",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Feast of Umordhoth"]
  },
  {
    name: "Bloody Titan",
    count: 1,
    expansion: "Secrets of the Order",
    scenarios: ["The Dead Cry Out", "The Key and the Gate"]
  },
  {
    name: "Brawling Riot",
    count: 1,
    expansion: "Dead of Night",
    scenarios: ["Shots in the Dark"]
  },
  {
    name: "Brutal Goons",
    count: 2,
    expansion: "Dead of Night",
    scenarios: ["Shots in the Dark"]
  },
  {
    name: "Cantor of R'lyeh",
    count: 1,
    expansion: "Under Dark Waves",
    scenarios: ["Dreams of R'lyeh"]
  },
  {
    name: "Capricious Stalker",
    count: 1,
    expansion: "Dead of Night",
    scenarios: ["Shots in the Dark", "The Pale Lantern"]
  },
  {
    name: "Cerebral Extractor",
    count: 1,
    expansion: "Dead of Night",
    scenarios: ["Silence of Tsathogua"]
  },
  {
    name: "Corben Bouchard",
    count: 1,
    expansion: "Dead of Night",
    scenarios: ["Shots in the Dark"]
  },
  {
    name: "Corpse-Taker",
    count: 1,
    expansion: "Base Game",
    scenarios: [
      "Feast of Umordhoth",
      "Silence of Tsathogua",
      "The Key and the Gate"
    ]
  },
  {
    name: "Coursing Hound",
    count: 1,
    expansion: "Secrets of the Order",
    scenarios: [
      "Approach of Azathoth",
      "The Dead Cry Out",
      "The Key and the Gate"
    ]
  },
  {
    name: "Crawling One",
    count: 2,
    expansion: "Dead of Night",
    scenarios: ["Silence of Tsathogua"]
  },
  {
    name: "Crazed Fiend",
    count: 1,
    expansion: "Secrets of the Order",
    scenarios: ["The Dead Cry Out", "The Key and the Gate"]
  },
  {
    name: "Creeping Ghoul",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Feast of Umordhoth"]
  },
  {
    name: "Cruel Slaver",
    count: 1,
    expansion: "Under Dark Waves",
    scenarios: ["The Pale Lantern"]
  },
  {
    name: "Declan Pearce",
    count: 1,
    expansion: "Under Dark Waves",
    scenarios: ["The Pale Lantern"]
  },
  {
    name: "Dread Shadow",
    count: 1,
    expansion: "Under Dark Waves",
    scenarios: ["Ithaqua's Children"]
  },
  {
    name: "Enraged Dreamer",
    count: 2,
    expansion: "Under Dark Waves",
    scenarios: ["Dreams of R'lyeh"]
  },
  {
    name: "Entranced Hybrid",
    count: 1,
    expansion: "Under Dark Waves",
    scenarios: ["Echoes of the Deep", "Dreams of R'lyeh", "Tyrants of Ruin"]
  },
  {
    name: "Eyeless Watcher",
    count: 1,
    expansion: "Under Dark Waves",
    scenarios: [
      "Approach of Azathoth",
      "Feast of Umordhoth",
      "Shots in the Dark",
      "Silence of Tsathogua"
    ]
  },
  {
    name: "Feasting Master",
    count: 1,
    expansion: "Under Dark Waves",
    scenarios: ["The Pale Lantern"]
  },
  {
    name: "Feckless Agitator",
    count: 1,
    expansion: "Dead of Night",
    scenarios: ["Shots in the Dark"]
  },
  {
    name: "Flesh-Eater",
    count: 2,
    expansion: "Base Game",
    scenarios: ["Feast of Umordhoth", "Bound to Serve", "The Dead Cry Out"]
  },
  {
    name: "Frenzied Hunter",
    count: 1,
    expansion: "Under Dark Waves",
    scenarios: ["Echoes of the Deep", "Tyrants of Ruin"]
  },
  {
    name: "Ghoul Acolyte",
    count: 2,
    expansion: "Base Game",
    scenarios: ["Feast of Umordhoth", "Shots in the Dark"]
  },
  {
    name: "Ghoul Priest",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Feast of Umordhoth"]
  },
  {
    name: "Gluttonous Giant",
    count: 1,
    expansion: "Secrets of the Order",
    scenarios: ["The Dead Cry Out", "The Key and the Gate"]
  },
  {
    name: "Grasping Fungus",
    count: 2,
    expansion: "Dead of Night",
    scenarios: ["Silence of Tsathogua"]
  },
  {
    name: "Guardian Beast",
    count: 1,
    expansion: "Under Dark Waves",
    scenarios: ["The Pale Lantern", "Ithaqua's Children"]
  },
  {
    name: "Haunting Dead",
    count: 3,
    expansion: "Secrets of the Order",
    scenarios: ["Bound to Serve", "The Dead Cry Out"]
  },
  {
    name: "Herman Collins",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Feast of Umordhoth"]
  },
  {
    name: "High Priest",
    count: 1,
    expansion: "Base Game",
    scenarios: [
      "Approach of Azathoth",
      "Dreams of R'lyeh",
      "Ithaqua's Children",
      "Bound to Serve"
    ]
  },
  {
    name: "Hit Squad",
    count: 2,
    expansion: "Dead of Night",
    scenarios: ["Shots in the Dark"]
  },
  {
    name: "Hooded Stalker",
    count: 2,
    expansion: "Base Game",
    scenarios: [
      "Approach of Azathoth",
      "Feast of Umordhoth",
      "Echoes of the Deep"
    ]
  },
  {
    name: "Hovering Byakhee",
    count: 1,
    expansion: "Under Dark Waves",
    scenarios: ["The Pale Lantern"]
  },
  {
    name: "Hulking Thrall",
    count: 2,
    expansion: "Base Game",
    scenarios: [
      "Veil of Twilight",
      "Tyrants of Ruin",
      "Ithaqua's Children",
      "The Key and the Gate"
    ]
  },
  {
    name: "Hybrid Thug",
    count: 2,
    expansion: "Base Game",
    scenarios: ["Echoes of the Deep", "Tyrants of Ruin"]
  },
  {
    name: "Icebound Captive",
    count: 2,
    expansion: "Under Dark Waves",
    scenarios: [
      "Echoes of the Deep",
      "Ithaqua's Children",
      "The Key and the Gate"
    ]
  },
  {
    name: "Keening Hound",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Approach of Azathoth", "The Key and the Gate"]
  },
  {
    name: "Lodge Enforcer",
    count: 2,
    expansion: "Base Game",
    scenarios: ["Veil of Twilight", "Bound to Serve"]
  },
  {
    name: "Lodge Guardian",
    count: 1,
    expansion: "Secrets of the Order",
    scenarios: ["Veil of Twilight", "Bound to Serve"]
  },
  {
    name: "Lodge Loyalist",
    count: 2,
    expansion: "Base Game",
    scenarios: ["Veil of Twilight", "Bound to Serve"]
  },
  {
    name: "Lodge Seer",
    count: 1,
    expansion: "Secrets of the Order",
    scenarios: ["Veil of Twilight", "Bound to Serve"]
  },
  {
    name: "Lupine Thrall",
    count: 1,
    expansion: "Base Game",
    scenarios: [
      "Veil of Twilight",
      "Ithaqua's Children",
      "Bound to Serve",
      "The Key and the Gate"
    ]
  },
  {
    name: "Masked Hunter",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Feast of Umordhoth"]
  },
  {
    name: "Masked Ones",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Feast of Umordhoth"]
  },
  {
    name: "Menacing Bulk",
    count: 2,
    expansion: "Secrets of the Order",
    scenarios: ["The Dead Cry Out"]
  },
  {
    name: "Mob Enforcer",
    count: 2,
    expansion: "Dead of Night",
    scenarios: ["Shots in the Dark"]
  },
  {
    name: "Morphic Terror",
    count: 1,
    expansion: "Dead of Night",
    scenarios: ["Silence of Tsathogua"]
  },
  {
    name: "Mouthy Recanteur",
    count: 1,
    expansion: "Dead of Night",
    scenarios: ["Shots in the Dark"]
  },
  {
    name: "Nightmarish Fiend",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Feast of Umordhoth", "The Dead Cry Out"]
  },
  {
    name: "Occult Ritualist",
    count: 2,
    expansion: "Base Game",
    scenarios: [
      "Approach of Azathoth",
      "Echoes of the Deep",
      "Shots in the Dark",
      "Silence of Tsathogua",
      "Dreams of R'lyeh"
    ]
  },
  {
    name: "Ocean Scion",
    count: 2,
    expansion: "Base Game",
    scenarios: ["Echoes of the Deep", "Tyrants of Ruin"]
  },
  {
    name: "Pale Lord",
    count: 1,
    expansion: "Under Dark Waves",
    scenarios: ["The Pale Lantern"]
  },
  {
    name: "Prowling Abductor",
    count: 2,
    expansion: "Under Dark Waves",
    scenarios: ["The Pale Lantern", "Tyrants of Ruin"]
  },
  {
    name: "R'lyeh Guardian",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Echoes of the Deep", "Dreams of R'lyeh"]
  },
  {
    name: "Ravenous Predator",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Approach of Azathoth", "Ithaqua's Children"]
  },
  {
    name: "Raging Poltergeist",
    count: 3,
    expansion: "Secrets of the Order",
    scenarios: ["Bound to Serve", "The Key and the Gate"]
  },
  {
    name: "River Skulk",
    count: 2,
    expansion: "Base Game",
    scenarios: ["Echoes of the Deep", "Tyrants of Ruin"]
  },
  {
    name: "Robed Figure",
    count: 3,
    expansion: "Base Game",
    scenarios: ["Approach of Azathoth", "The Pale Lantern"]
  },
  {
    name: "Rough Bootlegger",
    count: 2,
    expansion: "Dead of Night",
    scenarios: ["Shots in the Dark"]
  },
  {
    name: "Ruth Turner",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Feast of Umordhoth"]
  },
  {
    name: "Sea Singer",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Echoes of the Deep", "Tyrants of Ruin", "Dreams of R'lyeh"]
  },
  {
    name: "Shallows Predator",
    count: 2,
    expansion: "Base Game",
    scenarios: ["Echoes of the Deep", "Tyrants of Ruin", "Dreams of R'lyeh"]
  },
  {
    name: "Shoreline Brute",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Echoes of the Deep", "Tyrants of Ruin", "Dreams of R'lyeh"]
  },
  {
    name: "Simon Carter",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Veil of Twilight", "Bound to Serve"]
  },
  {
    name: "Siobhan Riley",
    count: 1,
    expansion: "Dead of Night",
    scenarios: ["Shots in the Dark"]
  },
  {
    name: "Stalking Wraith",
    count: 2,
    expansion: "Secrets of the Order",
    scenarios: ["Bound to Serve", "The Key and the Gate"]
  },
  {
    name: "Swift Byakhee",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Approach of Azathoth", "The Pale Lantern", "The Dead Cry Out"]
  },
  {
    name: "Swooping Scavenger",
    count: 1,
    expansion: "Under Dark Waves",
    scenarios: ["The Pale Lantern"]
  },
  {
    name: "Taloned Cannibal",
    count: 2,
    expansion: "Secrets of the Order",
    scenarios: ["Bound to Serve", "The Dead Cry Out"]
  },
  {
    name: "Terrified Wanderer",
    count: 2,
    expansion: "Under Dark Waves",
    scenarios: ["The Pale Lantern", "Dreams of R'lyeh", "Ithaqua's Children"]
  },
  {
    name: "The Watcher",
    count: 1,
    expansion: "Under Dark Waves",
    scenarios: []
  },
  {
    name: "Tindalos Alpha",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Approach of Azathoth", "Bound to Serve"]
  },
  {
    name: "Tunneling Dhole",
    count: 1,
    expansion: "Secrets of the Order",
    scenarios: [
      "Silence of Tsathogua",
      "The Dead Cry Out",
      "The Key and the Gate"
    ]
  },
  {
    name: "Twilight Sentry",
    count: 1,
    expansion: "Secrets of the Order",
    scenarios: ["Veil of Twilight", "Bound to Serve"]
  },
  {
    name: "Twilight Supplicant",
    count: 2,
    expansion: "Base Game",
    scenarios: ["Veil of Twilight", "Bound to Serve"]
  },
  {
    name: "Undulating Mass",
    count: 2,
    expansion: "Dead of Night",
    scenarios: ["Silence of Tsathogua"]
  },
  {
    name: "Vicious Glutton",
    count: 2,
    expansion: "Base Game",
    scenarios: ["Feast of Umordhoth", "Shots in the Dark", "The Dead Cry Out"]
  },
  {
    name: "Void Touched",
    count: 2,
    expansion: "Base Game",
    scenarios: ["Veil of Twilight", "The Pale Lantern", "The Key and the Gate"]
  },
  {
    name: "Wake Titan",
    count: 1,
    expansion: "Base Game",
    scenarios: ["Echoes of the Deep", "Tyrants of Ruin"]
  },
  {
    name: "Whippoorwill",
    count: 2,
    expansion: "Base Game",
    scenarios: ["Veil of Twilight", "The Key and the Gate"]
  },
  {
    name: '"Wolf-Man" Drew',
    count: 1,
    expansion: "Base Game",
    scenarios: ["Feast of Umordhoth"]
  }
];
