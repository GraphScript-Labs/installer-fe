import { useCallback, useState } from "react";

import { AppWindow } from "./components/AppWindow";
import { Hero } from "./components/Hero";
import { Settings } from "./components/Settings";
import { Install } from "./components/Install";

export function App() {
  const [
    installConfigs,
    setInstallConfigs,
  ] = useState<Record<string, string>>({});

  const updateConfig = useCallback((configName: string, value: string) => {
    setInstallConfigs((prevConfigs) => ({
      ...prevConfigs,
      [configName]: value,
    }));
  }, []);

  return (<>
    <div className="app">
      <AppWindow>
        <Hero />
        <Settings updateConfig={updateConfig} />
        <Install installConfigs={installConfigs} />
      </AppWindow>
    </div>
  </>);
}

