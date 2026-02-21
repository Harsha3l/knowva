import { Link } from "react-router-dom";
import { Mail, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import logo from "@/assets/knowva-logo.png";
import footer from "@/assets/footer.jpg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-300">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 z-0" 
           style={{backgroundImage: `url(${footer})`, minHeight: '100%'}} />
      
      <div className="relative section-container py-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <img src={logo} alt="KNOWva" className="h-10 w-auto mb-4" />
            <p className="text-slate-700 text-sm leading-relaxed max-w-sm">
              Discover, compare, and evaluate AI tools — all in one place. Your centralized AI intelligence platform for smarter decisions.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Instagram, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-white border border-slate-300 rounded-lg flex items-center justify-center text-slate-700 hover:text-slate-900 hover:border-slate-400 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-display font-semibold text-slate-900 mb-6">Platform</h4>
            <ul className="space-y-3">
              {["Categories", "Compare Tools", "Newsletter", "Consulting"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-slate-800 hover:text-slate-900 transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Provider Links */}
          <div>
            <h4 className="font-display font-semibold text-slate-900 mb-6">For Providers</h4>
            <ul className="space-y-3">
              {["Submit Tool", "Featured Listing", "Analytics", "Pricing"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-slate-800 hover:text-slate-900 transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-slate-800 hover:text-slate-900 transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-slate-300">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 max-w-lg">
              <h4 className="font-display font-semibold text-slate-900 mb-2">Stay Updated</h4>
              <p className="text-slate-700 text-sm">
                Get the latest AI tools and industry insights delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-500 outline-none focus:border-[#FFB347] focus:ring-2 focus:ring-[#FFB347]/20 text-sm shadow-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#FFB347] to-[#F39C12] text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#FFB347]/20 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-700">
            © 2026 KNOWva. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link key={item} to="#" className="text-xs text-slate-800 hover:text-slate-900 transition-colors duration-300">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
