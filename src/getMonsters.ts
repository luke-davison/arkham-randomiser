import type { ScenarioName } from "./game.types";
import type { AppData } from "./getAppData";
import { monsters, type Monster } from "./monsters";

export const getMonsters = (
  scenario: ScenarioName,
  appData: AppData
): Monster[] => {
  return monsters.filter(
    (monster) =>
      appData.expansions.includes(monster.expansion) &&
      monster.scenarios.includes(scenario)
  );
};
