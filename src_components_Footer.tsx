import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0E27] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="https://d64gsuwffb70l.cloudfront.net/6929245d5cbaf46091e25752_1764304011186_9d921df5.png" alt="Trivro AI" className="h-10 w-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#00FFA3] bg-clip-text text-transparent">Trivro AI</span>
            </div>
            <p className="text-white/70 mb-4">India's Best AI Marketing Tools Ecosystem</p>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/trivro_ai" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#00FFA3] transition group">
                <Instagram className="w-5 h-5 text-white group-hover:text-[#0A0E27]" />
              </a>
              <a href="https://www.facebook.com/share/17RWrP5arP/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#00FFA3] transition group">
                <Facebook className="w-5 h-5 text-white group-hover:text-[#0A0E27]" />
              </a>
              <a href="https://www.linkedin.com/company/trivro-ai/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#00FFA3] transition group">
                <Linkedin className="w-5 h-5 text-white group-hover:text-[#0A0E27]" />
              </a>
              <a href="https://www.youtube.com/watch?v=BngPWSxzF-w" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#00FFA3] transition group">
                <Youtube className="w-5 h-5 text-white group-hover:text-[#0A0E27]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Tools</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#tools" className="hover:text-[#00D4FF] transition">AI Advertising</a></li>
              <li><a href="#tools" className="hover:text-[#00D4FF] transition">Branding Suite</a></li>
              <li><a href="#tools" className="hover:text-[#00D4FF] transition">Marketing & Funnels</a></li>
              <li><a href="#tools" className="hover:text-[#00D4FF] transition">Content Creation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#about" className="hover:text-[#00D4FF] transition">About Us</a></li>
              <li><a href="#pricing" className="hover:text-[#00D4FF] transition">Pricing</a></li>
              <li><a href="#blog" className="hover:text-[#00D4FF] transition">Blog</a></li>
              <li><a href="#privacy" className="hover:text-[#00D4FF] transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@trivro.in" className="hover:text-[#00D4FF] transition">support@trivro.in</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+919274741994" className="hover:text-[#00D4FF] transition">+91 9274741994</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>© 2024 Trivro AI. All rights reserved. Powered by 51+ AI Engines. Trusted by Founders & Agencies. Built for Speed & Scale.</p>
        </div>
      </div>
    </footer>
  );
}
