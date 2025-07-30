// Types are picked from
// https://github.com/pqoqubbw/icons
// Go start it :3

export type RegistryType = "registry:ui";

export interface RegistryFile {
  path: string;
  content: string;
  type: RegistryType;
}

export interface TailwindConfig {
  config?: Record<string, object>;
}

export interface CssVars {
  light: Record<string, string>;
  dark: Record<string, string>;
}

export interface Schema {
  name: string;
  type: RegistryType;
  registryDependencies?: string[];
  dependencies?: string[];
  devDependencies?: string[];
  tailwind?: TailwindConfig;
  cssVars?: CssVars;
  files: RegistryFile[];
}
