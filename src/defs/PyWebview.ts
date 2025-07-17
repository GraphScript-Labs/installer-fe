export interface PyWebview {
  api: {
    close: () => Promise<void>;
    select_folder: () => Promise<string | null>;
    check_path: (path: string) => Promise<boolean>;
    install: (configs: Record<string, string>) => Promise<void>;
  }
};

