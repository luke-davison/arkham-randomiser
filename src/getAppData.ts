import type { ExpansionName, ScenarioName } from "./game.types";

export interface AppData {
  expansions: ExpansionName[];
  playerCount: number;
  fullyRandom: boolean;
  allowPnpDuplicates: boolean;
  recentScenarios: ScenarioName[];
  recentInvestigators: string[];
  separateMonsters: boolean;
}

export const getAppData = (): AppData => {
  return {
    expansions: [
      "Base Game",
      "Dead of Night",
      "Under Dark Waves",
      "Secrets of the Order",
      "Recursive Echoes"
    ],
    playerCount: 4,
    fullyRandom: false,
    allowPnpDuplicates: false,
    recentScenarios: [],
    recentInvestigators: [],
    separateMonsters: true
  };
};
