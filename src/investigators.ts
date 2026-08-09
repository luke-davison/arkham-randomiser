import type { ExpansionName } from "./game.types";

export interface Investigator {
  name: string;
  expansion: ExpansionName;
  tier: number;
  warder?: boolean;
  fighter?: boolean;
}

export const investigators: Investigator[] = [
  {
    name: "Zoey Samaras",
    fighter: true,
    warder: true,
    tier: 2,
    expansion: "Under Dark Waves"
  },
  { name: "Tommy Muldoon", fighter: true, tier: 2, expansion: "Base Game" },
  {
    name: "Marie Lambeau",
    warder: true,
    fighter: false,
    tier: 1,
    expansion: "Base Game"
  },
  {
    name: "Diana Stanley",
    warder: true,
    fighter: true,
    tier: 1,
    expansion: "Dead of Night"
  },
  {
    name: "Mark Harrigan",
    warder: false,
    fighter: true,
    tier: 3,
    expansion: "Secrets of the Order"
  },
  {
    name: "Charlie Kane",
    fighter: false,
    tier: 3,
    expansion: "Under Dark Waves"
  },
  {
    name: "Patrice Hathaway",
    warder: true,
    fighter: false,
    tier: 1,
    expansion: "Under Dark Waves"
  },
  {
    name: "Jenny Barnes",
    warder: false,
    fighter: true,
    tier: 2,
    expansion: "Base Game"
  },
  {
    name: "Winifred Habbamock",
    warder: true,
    fighter: true,
    tier: 1,
    expansion: "Secrets of the Order"
  },
  { name: "Michael McGlen", fighter: true, tier: 3, expansion: "Base Game" },
  {
    name: "Wendy Adams",
    warder: true,
    fighter: false,
    tier: 3,
    expansion: "Base Game"
  },
  {
    name: "Silas Marsh",
    warder: false,
    tier: 4,
    expansion: "Under Dark Waves"
  },
  {
    name: "Norman Withers",
    warder: true,
    fighter: false,
    tier: 5,
    expansion: "Base Game"
  },
  { name: "Roland Banks", fighter: true, tier: 1, expansion: "Base Game" },
  {
    name: "Minh Thi Phan",
    warder: true,
    fighter: false,
    tier: 2,
    expansion: "Recursive Echoes"
  },
  {
    name: "Dexter Drake",
    warder: true,
    fighter: false,
    tier: 5,
    expansion: "Base Game"
  },
  {
    name: "Calvin Wright",
    warder: true,
    fighter: true,
    tier: 1,
    expansion: "Base Game"
  },
  {
    name: "Wendy Adams",
    warder: true,
    fighter: false,
    tier: 2,
    expansion: "Recursive Echoes"
  },
  {
    name: "Rex Murphy",
    warder: false,
    fighter: false,
    tier: 6,
    expansion: "Base Game"
  },
  {
    name: '"Skids" O\'Toole',
    fighter: true,
    tier: 3,
    expansion: "Dead of Night"
  },
  {
    name: "Carson Sinclair",
    fighter: false,
    tier: 2,
    expansion: "Under Dark Waves"
  },
  {
    name: "Kate Winthrop",
    warder: true,
    fighter: false,
    tier: 2,
    expansion: "Dead of Night"
  },
  {
    name: "Daniela Reyes",
    warder: true,
    fighter: true,
    tier: 3,
    expansion: "Base Game"
  },
  { name: "Preston Fairmont", expansion: "Secrets of the Order", tier: 3 },
  {
    name: '"Ashcan" Pete',
    warder: true,
    tier: 2,
    expansion: "Under Dark Waves"
  },
  {
    name: "Agatha Crane",
    warder: true,
    fighter: false,
    tier: 1,
    expansion: "Secrets of the Order"
  },
  {
    name: "Rex Murphy",
    fighter: false,
    tier: 1,
    expansion: "Recursive Echoes"
  },
  {
    name: "Father Mateo",
    warder: true,
    fighter: false,
    tier: 4,
    expansion: "Under Dark Waves"
  },
  {
    name: "Minh Thi Phan",
    warder: true,
    fighter: false,
    tier: 4,
    expansion: "Base Game"
  },
  {
    name: "Dexter Drake",
    warder: true,
    fighter: false,
    tier: 2,
    expansion: "Recursive Echoes"
  },
  {
    name: "Agnes Baker",
    warder: true,
    fighter: true,
    tier: 2,
    expansion: "Base Game"
  },
  {
    name: "Stella Clark",
    warder: true,
    fighter: false,
    tier: 2,
    expansion: "Under Dark Waves"
  }
];
