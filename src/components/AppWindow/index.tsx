import type { ReactNode } from "react";

import { AppBar } from "../AppBar";

import "./style.css";

export function AppWindow({
  children,
}: {
  children?: ReactNode;
}) {
  return (<>
    <div className="app-window">
      <AppBar />
      <div className="app-content">
        {children}
      </div>
    </div>
  </>);
};

