
import { Accordion, AccordionContent, AccordionTrigger , AccordionItem} from "@/components/ui/accordion";
import React from "react";

const BlitzIntro = () => {
  return (<>
  <div className="flex flex-col">

    <div className="max-w-4xl lg:mx-12 lg:px-6 py-8 px-2  mt-8">
      <h1 className="text-3xl font-semibold text-shadow-popover"> Introduction</h1>

      <p className="text-[17px] text-foreground/80 mb-6 mt-6">
        Quickly add beautiful, customizable charts to your app at any scale with{" "}
        <strong>BlitzCharts</strong> — a modern chart library built on top of{" "}
        <strong>shadcn/ui</strong> and <strong>Recharts</strong>.
      </p>

      <p className="text-[17px] text-foreground/80 mb-6">
        BlitzCharts is a growing collection of visually consistent, accessible,
        and developer-friendly chart components you can copy and paste directly
        into your project. Built to scale and style effortlessly with your UI,
        these charts are designed to blend seamlessly into your design system.
      </p>

      <p className="text-[17px] text-foreground/80 mb-6">
        <span className="text-foreground">This is NOT your typical charting library.</span> BlitzCharts
        isn’t an installable npm package. Instead of adding a dependency, you
        directly integrate only the chart components you need — giving you full
        control and zero bloat. This means you can customize everything freely
        and keep your project clean.
      </p>
    </div>

  

    <div className="relative mx-18">
          <div className="text-2xl text-foreground pb-2">FAQ</div>
          <Accordion type="single" collapsible className="w-full max-w-4xl">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-[17px]">What is shadcn/ui and why use it?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2 text-[16px]">
            <strong>shadcn/ui</strong> is a set of beautifully-designed,
            accessible components and a code distribution platform. It works
            seamlessly with your favorite frameworks and AI models. Open Source.
            Open Code.
          </p>
          <p>
            We chose it because it gives developers complete control —
            components are copy-pasteable and customizable. It’s ideal for
            creating scalable, consistent UIs without being locked into a
            dependency.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-[17px] text-foreground">Why make this library?</AccordionTrigger>
        <AccordionContent>
          <p className="text-[16px] text-foreground">
            Our goal is to build the <strong>biggest charts component library</strong> based on{" "}
            <strong>shadcn/ui</strong> and <strong>Recharts</strong>. By offering
            customizable, accessible, and production-ready chart components, we
            aim to empower developers to create stunning data visualizations
            without reinventing the wheel — all while keeping full control of
            their code.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    </div>
      </div>
      </>
  );
};

export default BlitzIntro;
