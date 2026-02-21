import { Check, X, Star } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { comparisonTools } from "@/data/mockData";
import compareaitools from "@/assets/compareaitools.jpg";
import chatgptlogo from "@/assets/chatgptlogo.png";
import claudelogo from "@/assets/claude ai logo.png";
import geminilogo from "@/assets/geminilogo.png";

const features = [
  { label: "Pricing", key: "pricing" },
  { label: "Rating", key: "rating" },
  { label: "Best For", key: "bestFor" },
  { label: "Context Window", key: "contextWindow" },
  { label: "Speed", key: "speed" },
  { label: "API Access", key: "apiAccess", boolean: true },
  { label: "Free Trial", key: "freeTrial", boolean: true },
  { label: "Code Generation", key: "codeGen", boolean: true },
  { label: "Image Generation", key: "imageGen", boolean: true },
];

const Compare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 relative overflow-hidden" 
           style={{
             backgroundImage: `url(${compareaitools})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat'
           }}>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="relative section-container z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Compare AI Tools <span className="text-gradient">Side by Side</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">Evaluate features, pricing, and capabilities to find the perfect tool</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-6 justify-center flex-wrap"
          >
            {comparisonTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 text-center"
              >
                {/* Card Header with Gradient */}
                <div className={`h-28 ${
                  tool.name === 'ChatGPT' ? 'bg-gradient-to-r from-teal-400 to-teal-600' :
                  tool.name === 'Claude' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                  'bg-gradient-to-r from-orange-400 to-pink-600'
                } rounded-b-[50%]`}>
                  <div className="flex items-center justify-center h-full">
                    {tool.name === 'ChatGPT' ? <img src={chatgptlogo} alt="ChatGPT" className="w-8 h-8 object-contain" /> : 
                     tool.name === 'Claude' ? <img src={claudelogo} alt="Claude" className="w-8 h-8 object-contain" /> : 
                     tool.name === 'Gemini' ? <img src={geminilogo} alt="Gemini" className="w-8 h-8 object-contain" /> : 
                     tool.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg font-semibold text-gray-900">{tool.rating}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {features.map((feature) => {
                      const val = (tool as any)[feature.key];
                      return (
                        <div key={feature.label} className="flex items-center gap-2 text-sm text-gray-600">
                          {feature.boolean ? (
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          )}
                          <span>{feature.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Get Started Button */}
                  <button className={`w-full py-3 rounded-full font-semibold text-sm transition-colors ${
                    tool.name === 'ChatGPT' ? 'bg-teal-500 hover:bg-teal-600 text-white' :
                    tool.name === 'Claude' ? 'bg-purple-500 hover:bg-purple-600 text-white' :
                    'bg-orange-500 hover:bg-orange-600 text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Compare;
