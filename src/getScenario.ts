import type { ScenarioName } from "./game.types";
import type { AppData } from "./getAppData";
import { scenarios } from "./scenarios";

export const getScenario = (appData: AppData): ScenarioName => {
  const { expansions, recentScenarios } = appData;

  const filteredScenarios = Array.from(scenarios).filter(
    (scenario) =>
      expansions.includes(scenario.expansion) &&
      recentScenarios.every((recent) => recent !== scenario.name)
  );

  const r = Math.floor(Math.random() * filteredScenarios.length);
  return filteredScenarios[r].name;
};
