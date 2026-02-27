import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/knowva-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Categories", path: "/categories" },
  { label: "Compare", path: "/compare" },
  { label: "Newsletter", path: "/newsletter" },
  { label: "Consulting", path: "/consulting" },
  { label: "For Providers", path: "/providers" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3">
      <div className="w-full max-w-7xl">
        <div className="glass-morphism-pill flex items-center justify-between h-12 px-6">
          <Link to="/" className="flex items-center gap-2 mt-5">
            <img src={logo} alt="KNOWva" className="h-20 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-white bg-white/20 backdrop-blur-sm border border-white/30"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/try-free"
              className="px-3 py-1.5 text-xs font-medium rounded-full border border-white/30 text-white hover:bg-white/20 transition-all duration-300"
            >
              Try for free
            </Link>
            <Link
              to="/providers"
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Submit AI Tool
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-morphism-pill mt-4 mx-auto max-w-md"
          >
            <div className="p-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 text-center ${
                    location.pathname === link.path
                      ? "text-white bg-white/20 backdrop-blur-sm border border-white/30"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-3 border-t border-white/20">
                <Link
                  to="/try-free"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-1.5 text-xs font-medium rounded-full border border-white/30 text-white hover:bg-white/20 transition-all duration-300 text-center"
                >
                  Try for free
                </Link>
                <Link
                  to="/providers"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg text-center"
                >
                  Submit AI Tool
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
