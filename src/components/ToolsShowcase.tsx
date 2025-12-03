import { toolCategories } from '@/data/toolsData';
import { marketingTools, contentTools, businessTools } from '@/data/toolsDataPart2';

export default function ToolsShowcase() {
  const allCategories = [marketingTools, ...toolCategories, contentTools, businessTools];

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-[#0A0E27] to-[#1a1f3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
            51+ AI Tools Suite
          </h2>
          <p className="text-xl text-white/70">Everything you need to scale your marketing</p>
        </div>

        {allCategories.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h3 className={`text-3xl font-bold mb-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
              {category.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool, i) => (
                <div key={i} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-[#00D4FF]/50 transition transform hover:scale-105 hover:shadow-xl hover:shadow-[#00D4FF]/20">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{tool.name}</h4>
                  <p className="text-white/70">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
