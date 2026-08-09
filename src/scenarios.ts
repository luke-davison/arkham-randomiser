import type { ExpansionName, ScenarioName } from "./game.types";

interface Scenario {
  name: ScenarioName;
  expansion: ExpansionName;
}

export const scenarios: Scenario[] = [
  { name: "Approach of Azathoth", expansion: "Base Game" },
  { name: "Feast of Umordhoth", expansion: "Base Game" },
  { name: "Veil of Twilight", expansion: "Base Game" },
  { name: "Echoes of the Deep", expansion: "Base Game" },
  { name: "Shots in the Dark", expansion: "Dead of Night" },
  { name: "Silence of Tsathogua", expansion: "Dead of Night" },
  { name: "The Pale Lantern", expansion: "Under Dark Waves" },
  { name: "Tyrants of Ruin", expansion: "Under Dark Waves" },
  { name: "Dreams of R'lyeh", expansion: "Under Dark Waves" },
  { name: "Ithaqua's Children", expansion: "Under Dark Waves" },
  { name: "Bound to Serve", expansion: "Secrets of the Order" },
  { name: "The Dead Cry Out", expansion: "Secrets of the Order" },
  { name: "The Key and the Gate", expansion: "Secrets of the Order" }
];
