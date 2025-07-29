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
      "../charts/barcharts/hover-glow-barchart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "animated-highlighted-chart",
    path: path.join(
      __dirname,
      "../charts/area-charts/animated-highlighted-chart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "bar-pattern-chart",
    path: path.join(__dirname, "../charts/area-charts/bar-pattern-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "dotted-pattern-chart",
    path: path.join(__dirname, "../charts/area-charts/dotted-pattern-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "gradient-chart",
    path: path.join(__dirname, "../charts/area-charts/gradient-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "gradient-rounded-chart",
    path: path.join(__dirname, "../charts/area-charts/gradient-rounded-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "default-bar-chart",
    path: path.join(__dirname, "../charts/bar-charts/default-bar-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "default-multiple-bar-chart",
    path: path.join(
      __dirname,
      "../charts/bar-charts/default-multiple-bar-chart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "duotone-bar-chart",
    path: path.join(__dirname, "../charts/bar-charts/duotone-bar-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "duotone-bar-multiple-chart",
    path: path.join(
      __dirname,
      "../charts/bar-charts/duotone-bar-multiple-chart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "glowing-bar-chart",
    path: path.join(__dirname, "../charts/bar-charts/glowing-bar-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "glowing-bar-vertical-chart",
    path: path.join(
      __dirname,
      "../charts/bar-charts/glowing-bar-vertical-chart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "gradient-bar-chart",
    path: path.join(__dirname, "../charts/bar-charts/gradient-bar-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "gradient-bar-multiple-chart",
    path: path.join(
      __dirname,
      "../charts/bar-charts/gradient-bar-multiple-chart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "hatched-bar-chart",
    path: path.join(__dirname, "../charts/bar-charts/hatched-bar-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "hatched-bar-multiple-chart",
    path: path.join(
      __dirname,
      "../charts/bar-charts/hatched-bar-multiple-chart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "highlighted-bar-chart",
    path: path.join(__dirname, "../charts/bar-charts/highlighted-bar-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "highlighted-multiple-bar-chart",
    path: path.join(
      __dirname,
      "../charts/bar-charts/highlighted-multiple-bar-chart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "dotted-line",
    path: path.join(__dirname, "../charts/line-charts/dotted-line"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "dotted-multi-line",
    path: path.join(__dirname, "../charts/line-charts/dotted-multi-line"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "glowing-line",
    path: path.join(__dirname, "../charts/line-charts/glowing-line"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "number-dot-chart",
    path: path.join(__dirname, "../charts/line-charts/number-dot-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "pinging-dot-chart",
    path: path.join(__dirname, "../charts/line-charts/pinging-dot-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "rainbow-glow-gradient-line",
    path: path.join(
      __dirname,
      "../charts/line-charts/rainbow-glow-gradient-line"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "increase-size-pie-chart",
    path: path.join(__dirname, "../charts/pie-charts/increase-size-pie-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "radial-chart",
    path: path.join(__dirname, "../charts/pie-charts/radial-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "rounded-pie-chart",
    path: path.join(__dirname, "../charts/pie-charts/rounded-pie-chart"),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "glowing-multiple-stroke-radar-chart",
    path: path.join(
      __dirname,
      "../charts/radar-charts/glowing-multiple-stroke-radar-chart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },
  {
    name: "glowing-stroke-radar-chart",
    path: path.join(
      __dirname,
      "../charts/radar-charts/glowing-stroke-radar-chart"
    ),
    registryDependencies: ["chart"],
    dependencies: ["recharts"],
  },


];
