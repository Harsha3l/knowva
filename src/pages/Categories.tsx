import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, Star, ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import { trendingTools, recentTools, categories } from "@/data/mockData";
import categoriehomepage from "@/assets/categoriehomepage.jpg";
import compareaitools from "@/assets/compareaitools.jpg";
import AIToolCategoriesBackground from "@/assets/AIToolCategoriesBackground.jpg";

const allTools = [...trendingTools, ...recentTools];

const pricingFilters = ["All", "Free", "Premium", "Paid"];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPricing, setSelectedPricing] = useState("All");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredTools = allTools.filter((t) => {
    if (selectedCategory !== "All" && t.category !== selectedCategory) return false;
    if (selectedPricing !== "All" && t.pricing !== selectedPricing) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${categoriehomepage})` }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative section-container max-w-6xl mx-auto z-10">
          <div className="flex flex-col items-center text-center min-h-[40vh] justify-center">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#FFB347]/30 bg-[#FFB347]/10 backdrop-blur-sm mb-9"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-xs font-bold text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>AI Tool Categories</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Browse & Discover AI Tools
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="text-xl md:text-2xl text-[#AAAAAA] max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Explore our comprehensive collection of AI tools organized by category. Find the perfect AI solution for your workflow.
            </motion.p>
          </div>
        </div>
      </section>

      <section
        className="relative py-20"
        style={{
          backgroundImage: `url(${AIToolCategoriesBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 w-full flex flex-col items-center text-center"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">AI Tool Categories</h1>
            <p className="text-gray-200">Browse and filter 12+ AI tools across all categories</p>
          </motion.div>

          <div className="flex justify-center">
            {/* Categories List */}
            <div className="w-full max-w-2xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-200">{categories.length} categories</span>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-0">
                  {categories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="group"
                    >
                      <Link 
                        to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between p-4 hover:bg-secondary/50 transition-all duration-300 hover:pl-6 border-b border-border/20 last:border-b-0"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{category.icon}</span>
                          <span className="font-medium text-foreground">{category.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{category.count} tools</span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Categories;
