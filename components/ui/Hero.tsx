"use client";

import { useState, useEffect, useRef } from "react";
import { DottedAreaChart } from "@/charts/areacharts/dotted-disperse-areachart";
import { IntersectionAreaChart } from "@/charts/areacharts/intersection-areachart";
import { DelayMovementBarChart } from "@/charts/barcharts/Delay-Movement-BarChart";
import { GradientMixedBarChart } from "@/charts/barcharts/gradient-bar/gradient-mixed-barchart";
import { Github } from "lucide-react";
import Link from "next/link";
import { blitzFont } from "./typography";
import { ButtonUiVerse, GithubButton } from "./button";

export function Hero() {
  // target mouse
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  // smoothed lens position
  const [lens, setLens] = useState({ x: -9999, y: -9999 });
  // smoothed radius for fade/shrink
  const [radius, setRadius] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const rafRef = useRef<number | null>(null);
  const MAX_R = 125;
  const FOLLOW = 0.18;
  const EASE = 0.22;

  const [overCenter, setOverCenter] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      setLens((prev) => ({
        x: prev.x + (mouse.x - prev.x) * FOLLOW,
        y: prev.y + (mouse.y - prev.y) * FOLLOW,
      }));
      setRadius((r) => r + ((overCenter ? 0 : MAX_R) - r) * EASE);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    // detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", checkMobile);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mouse.x, mouse.y, overCenter]);

  const mask = `radial-gradient(${Math.max(
    0.001,
    radius
  )}px at ${lens.x}px ${lens.y}px, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 71%)`;

  return (
    <div className="relative w-screen min-h-screen max-h-screen overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-50 bg-gradient-to-br from-amber-100 via-transparent to-red-100" />

      {/* Top bar */}
      <div className="absolute top-0 w-screen flex items-center lg:justify-center px-4 py-3 border-b-2 bg-transparent">
        <Link
          href="/"
          className={`${blitzFont.className} text-2xl font-bold tracking-tight`}
        >
          BlitzCharts
        </Link>
      </div>

      {/* Mobile notification bar */}
      {isMobile && (
        <div className="fixed top-48 left-1/2 transform -translate-x-1/2 bg-red-100 text-red-800 text-md px-4 py-1 w-sm rounded-md shadow z-50">
          Mobile device detected — Use desktop for the best experience
        </div>
      )}

      {/* Charts layer */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          WebkitMaskImage: mask,
          maskImage: mask,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-[24%] left-[6%] h-[300px] w-[350px] rounded-lg overflow-hidden">
          <IntersectionAreaChart />
        </div>
        <div className="absolute top-[70%] left-[16%] h-[300px] w-[350px] rounded-lg overflow-hidden">
          <DelayMovementBarChart />
        </div>
        <div className="absolute top-[70%] right-[5%] h-[300px] w-[380px] rounded-lg overflow-hidden">
          <DottedAreaChart />
        </div>
        <div className="absolute top-20 left-[30%] h-[200px] w-[400px] rounded-lg overflow-hidden">
          <Top1 />
        </div>
        <div className="absolute top-20 right-[1%] h-[380px] w-[540px] rounded-lg overflow-hidden">
          <GradientMixedBarChart />
        </div>
      </div>

      {/* Glass Lens */}
      <div
        className="fixed pointer-events-none rounded-full border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                   before:content-[''] before:absolute before:inset-0 before:rounded-full
                   before:shadow-[inset_8px_8px_16px_rgba(255,255,255,0.3),inset_-8px_-8px_16px_rgba(0,0,0,0.15)]
                   bg-gradient-to-br from-transparent to-transparent"
        style={{
          width: radius * 2,
          height: radius * 2,
          left: lens.x - radius,
          top: lens.y - radius,
          opacity: Math.min(1, Math.max(0, radius / MAX_R)),
          transition: "opacity 120ms linear",
        }}
      />

      {/* Center Card */}
      <div
        className="absolute  md:h-[300px] md:w-[480px] lg:w-[560px] z-50 shadow-2xl border rounded-lg overflow-hidden p-4 ml-2 mr-2"
        onMouseEnter={() => setOverCenter(true)}
        onMouseLeave={() => setOverCenter(false)}
      >
        {isMobile ? <CenterMobile /> : <Center />}
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div className="text-lg font-foreground flex flex-col text-start justify-center h-full w-full bg-gradient-to-br from-neutral-50 to-background absolute bottom-0 pb-8 font-sans font-medium pl-4">
      <p>Build For Shadcn Ecosystem</p>
      <p className="text-md font-normal text-muted-foreground">
        Animated chart library for the Shadcn ecosystem.
      </p>
    </div>
  );
}

function Center() {
  return (
    <div className="font-sans cursor-default bg-transparent">
      <div className="text-2xl font-medium pt-8 pl-6 pr-4">
        Beautiful Animated Charts
      </div>
      <div className="text-muted-foreground text-lg pt-2 pl-6 pr-4 max-w-lg">
        Access an ever-growing collection of premium animated charts built for{" "}
        <span className="font-semibold">shadcn/ui ecosystem</span>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="-translate-x-8 mt-4">
          <a href={"/docs/areacharts"}>
            <ButtonUiVerse height={8} width={8} text={"Documentation"} />
          </a>
        </div>
        <a
          href="https://github.com/Partharora383/Blitzcharts"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6"
        >
          <GithubButton />
        </a>
      </div>
    </div>
  );
}

function CenterMobile() {
  return (
    <div className="font-sans cursor-default bg-transparent p-4">
      <div className="text-2xl font-medium">BlitzCharts</div>
      <div className="text-muted-foreground text-md pt-2">
        Access an ever-growing collection of premium animated charts built for shadcn ecosystem
      </div>
      <div className="mt-6 flex justify-between items-center gap-2">
        <a
          href="/docs/areacharts"
        >
        <button className=" bg-red-200 rounded-md font-medium px-auto py-2 h-9 px-6"> See Docs</button>
        </a>
        <a
          href="https://github.com/Partharora383/Blitzcharts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubButton />
        </a>
      </div>
    </div>
  );
}
