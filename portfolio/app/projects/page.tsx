"use client";

import { useState } from "react";
import Image from "next/image";

// Data matching the legacy projects.html structure
const websites = [
  {
    title: "Statement of Work Builder",
    description: "Custom SoW Generator for Professional Services. Includes export-to-PDF functionality. An interactive tool to quickly assemble and generate Scope of Work documents.",
    image: "/projects/SOWBuilder.png",
    link: "https://mattlambson.github.io/HaloDemoPages/DemoPages/sow-builder/index.html",
  },
  {
    title: "CM.com North America Halo Demo Hub",
    description: "A centralized portal for team members to showcase customized HALO solution demos. Features dedicated spaces for personalized chatbot demos via webpage screenshots.",
    image: "/projects/HALOHub.png",
    link: "https://mattlambson.github.io/HaloDemoPages/",
  },
  {
    title: "Industry Agents",
    description: "An interactive character selection interface showcasing industry-specific AI assistants, built for trade show touchscreen monitors.",
    image: "/projects/industryHeroes.png",
    link: "https://MattLambson.github.io/industry-agents/",
  },
  {
    title: "BitCRM",
    description: "A mock-up CRM platform pulling DummyJSON API data, demonstrating automated workflows and Email Campaigns via integration with CM.com's CDP.",
    image: "/projects/BitCRM.png",
    link: "https://mattlambson.github.io/HaloDemoPages/DemoPages/matt-lambson/BitCRM/index.html",
  },
  {
    title: "Luxurious Resort Homepage",
    description: "A luxurious resort webpage mock-up to demonstrate how easily an Agentic AI chatbot can be added to any hospitality website.",
    image: "/projects/MLResort.png",
    link: "https://mattlambson.github.io/HaloDemoPages/DemoPages/matt-lambson/Hospitality/index.html",
  }
];

const apps = [
  {
    title: "CM.com Business Messaging Demo App",
    description: "An interactive demonstration platform showcasing CM.com's business messaging capabilities across multiple channels with real-time preview functionality.",
    image: "/projects/business-messaging-detail.png",
    link: "/business-messaging-demo.html",
  },
  {
    title: "CM.com Customer Data Platform Profile Updater",
    description: "A streamlined UI for managing and enriching customer profiles via CSV batch updates.",
    image: "/projects/cdp-updater-detail.png",
    link: "/cdp-profile-updater.html",
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"websites" | "apps">("websites");
  const currentProjects = activeTab === "websites" ? websites : apps;

  return (
    <div className="w-full flex justify-center pb-24 md:pb-32 px-6 md:px-12 flex-grow">
      <div className="w-full max-w-[1000px] flex flex-col">

        {/* Physical Spacer for Navbar */}
        <div className="w-full h-32 md:h-48 shrink-0" />

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#FB5A2A] rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              What I&apos;ve Done
            </h1>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl ml-4">
            A collection of demos, tools, and interactive experiences I&apos;ve built.
          </p>
          <div className="w-full h-32 md:h-12 shrink-0" />
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("websites")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${activeTab === "websites"
              ? "bg-white/10 text-white border border-white/20 shadow-sm"
              : "text-zinc-400 hover:text-white border border-transparent"
              }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            Websites / Demo Pages
          </button>
          <button
            onClick={() => setActiveTab("apps")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${activeTab === "apps"
              ? "bg-white/10 text-white border border-white/20 shadow-sm"
              : "text-zinc-400 hover:text-white border border-transparent"
              }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            UI-Based Apps
          </button>
          <div className="w-full h-32 md:h-4 shrink-0" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentProjects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col p-8 rounded-[24px] transition-all duration-300 hover:scale-[1.02] group"
              style={{ background: "#1f1f22" }}
            >
              <div className="relative w-full aspect-video mb-6 rounded-xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm flex-grow">{project.description}</p>

              <div className="mt-8 text-[#007AFF] font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                View Project <span>→</span>
              </div>
            </a>
          ))}
        </div>
        <div className="w-full h-32 md:h-24 shrink-0" />
      </div>
    </div>
  );
}
