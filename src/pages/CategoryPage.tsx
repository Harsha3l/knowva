import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Search, SlidersHorizontal, Star, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import { trendingTools, recentTools, categories } from "@/data/mockData";

const allTools = [...trendingTools, ...recentTools];
const pricingFilters = ["All", "Free", "Premium", "Paid"];

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [selectedPricing, setSelectedPricing] = useState("All");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the category data
  const category = categories.find(cat => 
    cat.name.toLowerCase().replace(/\s+/g, '-') === categoryName
  );

  // Filter tools for this category
  const categoryTools = allTools.filter((tool) => {
    if (tool.category !== category?.name) return false;
    if (selectedPricing !== "All" && tool.pricing !== selectedPricing) return false;
    return true;
  });

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-20">
          <div className="section-container text-center">
            <h1 className="font-display text-3xl font-bold text-foreground mb-4">Category Not Found</h1>
            <Link to="/categories" className="text-primary hover:underline">
              ← Back to Categories
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="section-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <Link 
              to="/categories" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Categories
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{category.icon}</span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {category.name}
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              {category.count} AI tools in {category.name}
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filter Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-72 flex-shrink-0"
            >
              <div className="glass-card p-6 lg:sticky lg:top-24">
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">Filters</h3>
                </div>

                <div className="mb-6">
                  <label className="text-sm font-medium text-muted-foreground mb-3 block">Search</label>
                  <div className="flex items-center gap-2 bg-secondary rounded-xl px-3 py-2.5">
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search tools..."
                      className="bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm flex-1"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-sm font-medium text-muted-foreground mb-3 block">Pricing</label>
                  <div className="flex flex-wrap gap-2">
                    {pricingFilters.map((p) => (
                      <button
                        key={p}
                        onClick={() => setSelectedPricing(p)}
                        className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                          selectedPricing === p
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tools Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-muted-foreground">{categoryTools.length} tools found</span>
                <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground bg-secondary px-3 py-2 rounded-lg">
                  Sort by: Popular <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              {categoryTools.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {categoryTools.map((tool, i) => (
                    <ToolCard key={tool.name + i} {...tool} delay={i * 0.03} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No tools found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
