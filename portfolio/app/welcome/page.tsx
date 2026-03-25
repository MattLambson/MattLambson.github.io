export default function Welcome() {
  return (
    <div className="w-full flex justify-center pb-24 md:pb-32 px-6 md:px-12 flex-grow min-h-screen">
      <div className="w-full max-w-[900px] flex flex-col items-center justify-center text-center mt-20 md:mt-32">



        {/* GIF */}
        <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden ring-2 ring-white/10 shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjlneDljNm5neDc3NHFsZWx3MThyajVvbWNoeGpmejVlcTRoOGcwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m2Q7FEc0bEr4I/giphy.gif"
            alt="Welcome GIF - Nice QR Worked!"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-12 md:h-16 shrink-0" />

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Nice — QR worked! <span className="inline-block hover:rotate-12 transition-transform cursor-default">😎</span>
        </h1>

        <div className="w-full h-8 md:h-12 shrink-0" />

        {/* Subhead */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Go to my personal site, or visit CM.com to learn how the platform drives CX automation.
        </p>

        <div className="w-full h-16 md:h-24 shrink-0" />

        {/* Choice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          {/* Card 1 */}
          <a
            href="/?utm_source=business_card&utm_medium=qr&utm_campaign=welcome_split"
            className="flex flex-col text-left p-8 md:p-10 rounded-[5px] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group"
            style={{
              background: "#1f1f22",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="w-14 h-14 rounded-full bg-[#FB5A2A]/10 flex items-center justify-center text-[#FB5A2A] mb-8 group-hover:scale-110 group-hover:bg-[#FB5A2A]/20 transition-all duration-300">
              <span className="text-2xl">🧰</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-[#FB5A2A] transition-colors">My Site &amp; Projects</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              See what I build: demos, tools, and experiments.
            </p>
          </a>

          {/* Card 2 */}
          <a
            href="https://www.cm.com/en-us/?utm_source=business_card&utm_medium=qr&utm_campaign=welcome_split"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col text-left p-8 md:p-10 rounded-[5px] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group"
            style={{
              background: "#1f1f22",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="w-14 h-14 rounded-full bg-[#FB5A2A]/10 flex items-center justify-center text-[#FB5A2A] mb-8 group-hover:scale-110 group-hover:bg-[#FB5A2A]/20 transition-all duration-300">
              <span className="text-2xl">🏢</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-[#FB5A2A] transition-colors">Learn about CM.com</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Explore the platform powering customer engagement and automation.
            </p>
          </a>
        </div>

      </div>
    </div>
  );
}
