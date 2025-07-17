import { useCallback, useEffect, useState } from "react";
import { ChevronUp, Download } from "lucide-react";
import { install } from "../../utils/desktopTools";

import "./style.css";

export function Install({
  installConfigs
}: {
  installConfigs: Record<string, string>;
}) {
  const [installing, setInstalling] = useState(false);
  const [spinValue, setSpinValue] = useState(0);

  const scrollUp = useCallback(() => {
    document.getElementById("settings")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, []);

  const startInstall = useCallback(() => {
    setInstalling(true);
    install(installConfigs);
  }, [installConfigs]);

  useEffect(() => {
    if (!installing) return;
    const spinnerInterval = setInterval(() => {
      setSpinValue(prev => ++prev);
    }, 200);

    return () => clearInterval(spinnerInterval);
  }, [installing]);

  return (<>
    <div id="install" className="install">
      <button
        className="install-scroll scroll-up"
        onClick={scrollUp}
        disabled={installing}
      >
        <ChevronUp className="install-scroll-icon" />

        <span className="install-scroll-text">
          Setup
        </span>
        
        <ChevronUp className="install-scroll-icon" />
      </button>

      <div className="install-content">
        <button
          className="install-button"
          onClick={startInstall}
          disabled={installing}
        >
          <Download className="install-button-icon" />

          <span className="install-button-text">
            Install GraphScript
          </span>
        </button>
      </div>

      <div
        className={[
          "installing-text",
          installing ? "active" : "",
        ].join(" ")}
      >
        Installing
      </div>

      {
        [0, 1, 2, 3, 4].map((spinnerId) => <span
          key={spinnerId}
          className={[
            "install-spinner",
            installing ? "active" : "",
            `spin-${(spinValue + spinnerId) % 5}`,
          ].join(" ")}
          style={{
            left: `calc(50% + ${((Math.random() * 5) - 2.5)}rem)`,
            top: `calc(50% + ${((Math.random() * 5) - 2.5)}rem)`,
          }}
        />)
      }
    </div>
  </>);
}

