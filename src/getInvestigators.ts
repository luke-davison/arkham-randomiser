import type { AppData } from "./getAppData";
import { investigators, type Investigator } from "./investigators";

const randomise = (
  arr: Investigator[],
  count: number,
  allowPnpDuplcates: boolean
): Investigator[] => {
  const results: Investigator[] = [];

  for (let i = 0; i < count; i++) {
    const r = Math.floor(Math.random() * arr.length);
    const item = arr.splice(r, 1)[0];
    if (
      !allowPnpDuplcates &&
      results.some((result) => result.name === item.name)
    ) {
      i--;
    } else {
      results.push(item);
    }
  }

  return results.sort((a, b) => {
    const nameA = a.name[0] === '"' ? a.name.slice(1) : a.name;
    const nameB = b.name[0] === '"' ? b.name.slice(1) : b.name;
    return nameA > nameB ? 1 : -1;
  });
};

export const getInvestigators = (appData: AppData): Investigator[] => {
  const {
    expansions,
    fullyRandom,
    playerCount,
    allowPnpDuplicates,
    recentInvestigators
  } = appData;

  let filteredInvestigators = Array.from(investigators).filter(
    (investigator) =>
      expansions.includes(investigator.expansion) &&
      recentInvestigators.every((recent) => recent !== investigator.name)
  );

  if (fullyRandom) {
    return randomise(filteredInvestigators, playerCount, allowPnpDuplicates);
  }

  filteredInvestigators = filteredInvestigators.filter(
    (investigator) => investigator.tier < 6
  );

  const chosen = randomise(
    filteredInvestigators,
    playerCount,
    allowPnpDuplicates
  );
  const fighters = chosen.reduce((sum, investigator) => {
    if (investigator.fighter === true) return sum + 2;
    if (investigator.fighter === false) return sum;
    return sum + 1;
  }, 0);
  const warders = chosen.reduce((sum, investigator) => {
    if (investigator.warder === true) return sum + 2;
    if (investigator.warder === false) return sum;
    return sum + 1;
  }, 0);

  if (playerCount === 4) {
    const fightersPlusWarders = fighters + warders;
    if (
      warders <= 2 ||
      fighters <= 3 ||
      fightersPlusWarders <= 6 ||
      chosen.every((investigator) => investigator.tier > 1)
    ) {
      return getInvestigators(appData);
    }
  }

  return chosen;
};
