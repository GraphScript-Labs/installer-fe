import type { PyWebview } from "../defs/PyWebview";

const setupDesktopTools = () => {
  const getApi = (): PyWebview["api"] | undefined => {
    return window.pywebview?.api;
  };

  const checkApiState = (): boolean => {
    return !!Object.keys(getApi() || {}).length;
  };

  const waitForPWV = (): Promise<void> => {
    return (new Promise((resolve) => {
      if (checkApiState()) {
        resolve();
        return;
      }

      const checkInterval = setInterval(() => {
        if (checkApiState()) {
          resolve();
          clearInterval(checkInterval);
        }
      }, 10);
    }));
  }

  const closeWindow = async () => {
    return getApi()?.close();
  }

  const checkPath = async (path: string): Promise<boolean> => {
    await waitForPWV();
    return getApi()?.check_path(path) || false;
  }

  const selectFolder = async (): Promise<string | null> => {
    await waitForPWV();
    return getApi()?.select_folder() || null;
  }

  const install = async (configs: Record<string, string>) => {
    await waitForPWV();
    return getApi()?.install(configs);
  }

  return {
    closeWindow,
    checkPath,
    selectFolder,
    install
  }
};

export const {
  closeWindow,
  checkPath,
  selectFolder,
  install,
} = setupDesktopTools();

