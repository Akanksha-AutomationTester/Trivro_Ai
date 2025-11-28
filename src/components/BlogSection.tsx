import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const blogs = [
    {
      title: 'How AI is Revolutionizing Digital Marketing in 2024',
      excerpt: 'Discover how artificial intelligence is transforming the way businesses approach marketing, from ad creation to customer engagement.',
      image: 'https://d64gsuwffb70l.cloudfront.net/692924af1d5f99a872fdbc9c_1764304177722_f38f6bb4.webp',
      author: 'Akanksha Raj Trivedi',
      date: 'Nov 25, 2024',
      category: 'AI Marketing'
    },
    {
      title: 'Complete Guide to Building High-Converting Sales Funnels',
      excerpt: 'Learn the step-by-step process of creating sales funnels that convert visitors into customers using AI-powered tools.',
      image: 'https://d64gsuwffb70l.cloudfront.net/692924af1d5f99a872fdbc9c_1764304179662_12c02cb3.webp',
      author: 'Trivro AI Team',
      date: 'Nov 22, 2024',
      category: 'Funnels'
    },
    {
      title: 'AEO vs SEO: Why Answer Engine Optimization is the Future',
      excerpt: 'Understanding the shift from traditional SEO to AEO and how to optimize your content for AI-powered search engines.',
      image: 'https://d64gsuwffb70l.cloudfront.net/692924af1d5f99a872fdbc9c_1764304181973_24b0ed2c.webp',
      author: 'Akanksha Raj Trivedi',
      date: 'Nov 20, 2024',
      category: 'SEO & AEO'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-[#0A0E27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="text-xl text-white/70">Learn, grow, and stay ahead with AI marketing</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] font-bold rounded-lg hover:shadow-lg hover:shadow-[#00D4FF]/50 transition">
            Add New Blog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <div key={i} className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-[#00D4FF]/50 transition">
              <div className="relative h-48 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] text-[#0A0E27] text-sm font-semibold rounded-full">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition">{blog.title}</h3>
                <p className="text-white/70 mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 text-[#00D4FF] font-semibold group-hover:space-x-3 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
