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
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },{
    name: "hover-glow-horizontal-barchart",
    path: path.join(
      __dirname,
      "../charts/barcharts/hover-glow/hover-glow-horizontal-barchart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "gradient-mixed-barchart",
    path: path.join(
      __dirname,
      "../charts/barcharts/gradient-bar/gradient-mixed-barchart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  
  {
    name: "liquid-fill-barchart",
    path: path.join(
      __dirname,
      "../charts/barcharts/liquid-effect-bar/liquid-fill-barchart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts , motion"],
  }
  ,
  
  {
    name: "intersection-areachart",
    path: path.join(
      __dirname,
      "../charts/areachart/intersection-areachart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts , motion"],
  },
  {
    name: "splitline-areachart",
    path: path.join(
      __dirname,
      "../charts/areachart/splitline-areachart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts , motion"],
  },
  {
    name: "dotted-disperse-areachart",
    path: path.join(
      __dirname,
      "../charts/areachart/dotted-disperse-areachart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts , motion"],
  }
  ,
  {
    name: "smooth-gradient-areachart",
    path: path.join(
      __dirname,
      "../charts/areachart/smooth-gradient-areachart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts , motion"],
  }
  ,


];
