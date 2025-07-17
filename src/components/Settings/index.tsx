import { useCallback, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { checkPath, selectFolder } from "../../utils/desktopTools";

import "./style.css";

export function Settings({
  updateConfig
}: {
  updateConfig: (configName: string, value: string) => void;
}) {
  const [appDataPathValid, setAppDataPathValid] = useState(false);

  const scrollUp = useCallback(() => {
    document.getElementById("hero")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, []);

  const scrollDown = useCallback(() => {
    document.getElementById("install")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, []);

  const searchFolder = useCallback(async () => {
    const path = (await selectFolder()) || "";
    updateConfig("datapath", path);
    setAppDataPathValid(await checkPath(path));
    
    (document.getElementById("AppDataPath") as HTMLInputElement)!
      .value = path;
  }, [updateConfig]);

  return (<>
    <div id="settings" className="settings">
      <button className="settings-scroll scroll-up" onClick={scrollUp}>
        <ChevronUp className="settings-scroll-icon" />

        <span className="settings-scroll-text">
          Welcome
        </span>
        
        <ChevronUp className="settings-scroll-icon" />
      </button>

      <div className="settings-content">
        <label htmlFor="AppDataPath" className="settings-label">
          <span className="settings-label-text">
            App Data Folder
          </span>
          <div className="folder-search">
            <input
              className="settings-input"
              id="AppDataPath"
              onInput={async (event) => {
                const target = event.target as HTMLInputElement;
                updateConfig("datapath", target.value);
                setAppDataPathValid(await checkPath(target.value));
              }}
            />
            <button className="settings-button" onClick={searchFolder}>
              Browse
            </button>
          </div>
        </label>
      </div>

      <button
        className="settings-scroll scroll-down"
        disabled={!appDataPathValid}
        onClick={scrollDown}
      >
        <ChevronDown className="settings-scroll-icon" />

        <span className="settings-scroll-text">
          Install
        </span>
        
        <ChevronDown className="settings-scroll-icon" />
      </button>
    </div>
  </>);
}

