export default function About() {
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
              Who I Am
            </h1>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl ml-4">
            A Sales Engineer&apos;s journey through technology, storytelling, and human connection.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-16">

          {/* Main Story column */}
          <div className="flex flex-col gap-6 text-zinc-300 leading-relaxed text-lg">
            <h2 className="text-2xl font-bold text-white mb-2">My Story</h2>
            <p>
              Hey there. I&apos;m a Sales Engineer with over 15 years of experience across pre-sales and post-sales
              roles. I&apos;ve always been drawn to technology, not just how it works, but how it can be used to
              tell better stories, solve real problems, and create impact across go-to-market teams.
            </p>
            <p>
              These days, my focus is on building scalable demo environments, internal tools, and AI-powered
              workflows that help Sales, Product, and Enablement teams show up stronger. I love turning
              complex platforms into intuitive, high-impact experiences that resonate with real buyers.
            </p>
            <p>
              Outside of work, I&apos;m usually hanging out with my three daughters, playing adult recreational
              kickball, trying new AI trends, building side projects, or experimenting with new tools just to
              see what I can create. That same curiosity drives my professional work. Whether it&apos;s testing a
              new feature, designing a custom demo, or helping a team connect the dots across a product
              launch.
            </p>
            <p>
              At the core of it all is a belief: when technical clarity meets storytelling, sales confidence
              follows. If I can help a rep walk into a meeting feeling prepared and clear on the &quot;why,&quot; that&apos;s
              a win.
            </p>
          </div>

          {/* Sidebar / Skills */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-white">What I Bring to the Table</h2>

            <div className="bg-[#1f1f22] p-6 rounded-[5px] ring-1 ring-white/10">
              <h3 className="text-[#007AFF] font-bold mb-4">Technical Expertise</h3>
              <ul className="flex flex-col gap-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2"><span className="text-white/20 mt-1">▹</span>REST API, JSON, XML</li>
                <li className="flex items-start gap-2"><span className="text-white/20 mt-1">▹</span>SaaS, CPaaS, DaaS</li>
                <li className="flex items-start gap-2"><span className="text-white/20 mt-1">▹</span>LLMs, AI, Agentic AI</li>
                <li className="flex items-start gap-2"><span className="text-white/20 mt-1">▹</span>Business Messaging (SMS/Omnichannel)</li>
              </ul>
            </div>

            <div className="bg-[#1f1f22] p-6 rounded-[5px] ring-1 ring-white/10">
              <h3 className="text-[#007AFF] font-bold mb-4">Personal Strengths</h3>
              <ul className="flex flex-col gap-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2"><span className="text-white/20 mt-1">▹</span>Strategic Communicator & Collaborator</li>
                <li className="flex items-start gap-2"><span className="text-white/20 mt-1">▹</span>Product Evangelist and Storyteller</li>
                <li className="flex items-start gap-2"><span className="text-white/20 mt-1">▹</span>Client-Focused Approach, Outcome-driven</li>
                <li className="flex items-start gap-2"><span className="text-white/20 mt-1">▹</span>Innovative Problem Solver</li>
                <li className="flex items-start gap-2"><span className="text-white/20 mt-1">▹</span>Coach & Trainer</li>
              </ul>
            </div>

            <div className="bg-[#1f1f22] p-6 rounded-[5px] ring-1 ring-white/10">
              <h3 className="text-[#007AFF] font-bold mb-4">Tools & Technology</h3>
              <ul className="flex flex-col gap-3 text-sm text-zinc-400">
                <li className="flex items-start gap-2"><span className="text-white/20 mt-1">▹</span><b className="text-white/80 font-medium lg:w-max">AI & Automation:</b> ChatGPT, Claude, HALO, Gemini, HuggingFace</li>
                <li className="flex items-start gap-2"><span className="text-white/20 mt-1">▹</span><b className="text-white/80 font-medium lg:w-max">Dev & Testing:</b> Postman, REST APIs</li>
                <li className="flex items-start gap-2"><span className="text-white/20 mt-1">▹</span><b className="text-white/80 font-medium lg:w-max">Productivity:</b> Notion, Confluence, Loom</li>
                <li className="flex items-start gap-2"><span className="text-white/20 mt-1">▹</span><b className="text-white/80 font-medium lg:w-max">Docs & Data:</b> JSON, CSV, Markdown, JIRA, Zendesk</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
