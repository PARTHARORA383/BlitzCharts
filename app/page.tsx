"use client";

import { DottedAreaChart } from "@/charts/areacharts/dotted-disperse-areachart";
import { SplitLineAreaChart } from "@/charts/areacharts/splitline-areachart";
import { Hero } from "@/components/ui/Hero";
import { Topbar } from "@/components/ui/topbar";

import {motion} from "motion/react";
import { useState } from "react";

export default function Home() {
  return (
    <>
    <Topbar/>
    <div className="flex flex-col items-center justify-start min-h-screen bg-background">
      <div className="w-full max-w-xl p-4 mt-32">
      </div>
    </div>
    </>
  );
}
