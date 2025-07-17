import { ChevronDown } from "lucide-react";

import Logo from "../../assets/GraphScript.png";
import "./style.css";

export function Hero() {
  const scrollDown = () => {
    document.getElementById("settings")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (<>
    <div className="hero" id="hero">
      <div className="hero-wrapper">
        <div className="hero-logo">
          <img src={Logo} alt="GraphScript Logo" />
        </div>

        <h1 className="hero-title">
          GraphScript
        </h1>

        <h2 className="hero-subtitle">
          Installer
        </h2>
      </div>

      <button className="hero-scroll" onClick={scrollDown}>
        <ChevronDown className="hero-scroll-icon" />

        <span className="hero-scroll-text">
          Setup
        </span>
        
        <ChevronDown className="hero-scroll-icon" />
      </button>
    </div>
  </>);
}

