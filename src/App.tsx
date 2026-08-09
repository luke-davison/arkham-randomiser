import { useMemo } from "react";
import { getAppData } from "./getAppData";
import { getInvestigators } from "./getInvestigators";
import { getScenario } from "./getScenario";
import { getMonsters } from "./getMonsters";

function App() {
  const appData = useMemo(getAppData, []);

  const investigators = useMemo(() => getInvestigators(appData), [appData]);

  const scenario = useMemo(() => getScenario(appData), [appData]);

  const monsters = getMonsters(scenario, appData);

  return (
    <div className="page">
      <div className="investigators">
        {investigators.map((investigator) => (
          <div
            key={investigator.name + investigator.expansion}
            className="investigator"
          >
            <span>{investigator.name}</span>
            {investigator.expansion === "Recursive Echoes" && <span>RE</span>}
          </div>
        ))}
      </div>
      <div className="scenario-name">{scenario}</div>
      <div className="monsters">
        {monsters.map((monster) => (
          <div key={monster.name} className="monster">
            <span>{monster.name}</span>
            <span>x {monster.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
