import * as path from "path";
import type { Schema } from "./registry-schema";

type ComponentProps = Partial<
  Pick<
    Schema,
    | "dependencies"
    | "devDependencies"
    | "registryDependencies"
    | "cssVars"
    | "tailwind"
  >
> & {
  name: string;
  path: string;
};

export const components: ComponentProps[] = [
  {
    name: "hover-glow-barchart",
    path: path.join(
      __dirname,
      "../charts/barcharts/hover-glow/hover-glow-barchart"
    ),
    registryDependencies: ["card ","chart"],
    dependencies: ["recharts"],
  },
  

];
