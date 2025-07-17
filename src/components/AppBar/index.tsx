import { closeWindow } from "../../utils/desktopTools";

import "./style.css";

export function AppBar() {
  return (<>
    <div className="app-bar">
      <div className="window-actions">
        <button
          className="window-action-button"
          data-action="close"
          onClick={() => closeWindow()}
        />
      </div>
    </div>
  </>);
}

