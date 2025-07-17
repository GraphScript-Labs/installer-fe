from typing import Any
from os.path import exists
from json import dumps

def run_hook(_: str, datapath: str) -> None:
  laucher_json_path = f"{datapath}/data/launcher.json"
  launcher_json: dict[str, Any] = {
    "projects": [],
  }

  if not exists(laucher_json_path):
    with open(laucher_json_path, "w") as file:
      file.write(dumps(launcher_json, indent=2))

