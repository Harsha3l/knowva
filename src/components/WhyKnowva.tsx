import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeftRight,
  Lightbulb,
  Mail,
  ShieldCheck,
  Upload,
  Star,
  Sparkles,
  MessageCircle,
  Bell,
  ArrowRight,
} from "lucide-react";

interface WhyCard {
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
  floatingIcons: React.ReactNode[];
  cta: string;
  ctaLink: string;
  accentColor: string;
}

const cards: WhyCard[] = [
  {
    title: "Discover & Compare Instantly",
    description:
      "Explore, filter, and compare AI tools in seconds  - all in one place.",
    badge: "Comparison Engine · Fast",
    icon: <ArrowLeftRight className="w-7 h-7" />,
    floatingIcons: [
      <Sparkles key="s" className="w-4 h-4" />,
      <Star key="st" className="w-3.5 h-3.5" />,
    ],
    cta: "Explore Tools",
    ctaLink: "/categories",
    accentColor: "from-orange-500/20 to-amber-500/10",
  },
  {
    title: "Personalized AI Recommendations",
    description:
      "Personalized AI tool matches based on your goals, budget,            industry.",
    badge: "Smart Recommendations",
    icon: <Lightbulb className="w-7 h-7" />,
    floatingIcons: [
      <Sparkles key="s" className="w-4 h-4" />,
      <Star key="st" className="w-3.5 h-3.5" />,
    ],
    cta: "Get Matched",
    ctaLink: "/categories",
    accentColor: "from-cyan-500/20 to-blue-500/10",
  },
  {
    title: "Stay Ahead with Updates",
    description:
      "Get the newest AI tools, trends, and insights straight to your inbox.",
    badge: "Fresh Content · Newsletter",
    icon: <Mail className="w-7 h-7" />,
    floatingIcons: [
      <Bell key="b" className="w-4 h-4" />,
      <MessageCircle key="m" className="w-3.5 h-3.5" />,
    ],
    cta: "Subscribe",
    ctaLink: "/newsletter",
    accentColor: "from-purple-500/20 to-violet-500/10",
  },
  {
    title: "Enterprise-Grade Trust",
    description:
      "Make confident decisions with verified tools and authentic user ratings.",
    badge: "Trusted & Verified",
    icon: <ShieldCheck className="w-7 h-7" />,
    floatingIcons: [
      <Star key="s1" className="w-4 h-4" />,
      <ShieldCheck key="s2" className="w-3.5 h-3.5" />,
    ],
    cta: "See Reviews",
    ctaLink: "/categories",
    accentColor: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "For AI Creators",
    description:
      "Launch your tool, track performance, and reach developers and businesses instantly.",
    badge: "Provider Growth",
    icon: <Upload className="w-7 h-7" />,
    floatingIcons: [
      <Sparkles key="s" className="w-4 h-4" />,
      <ArrowRight key="a" className="w-3.5 h-3.5" />,
    ],
    cta: "Submit Now",
    ctaLink: "/providers",
    accentColor: "from-rose-500/20 to-pink-500/10",
  },
];

const ParallaxCard = ({
  card,
  index,
}: {
  card: WhyCard;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouse({ x, y });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className="relative flex-shrink-0 w-[300px] sm:w-[320px] lg:w-[280px] xl:w-[300px] h-full flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "800px" }}
    >
      <motion.div
        className="relative h-full rounded-2xl overflow-hidden border border-[#f0f0f0] shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
        animate={{
          rotateY: mouse.x * 8,
          rotateX: -mouse.y * 6,
          scale: hovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Background layer — white background */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 border border-[#f0f0f0]" />

        {/* Glow on hover */}
        <motion.div
          className="absolute -inset-px rounded-2xl"
          animate={{
            boxShadow: hovered
              ? "0 0 40px 4px hsl(38 95% 54% / 0.25), 0 0 80px 8px hsl(190 100% 50% / 0.1)"
              : "0 0 0px 0px transparent",
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Floating icons — foreground parallax (move more) */}
        {card.floatingIcons.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/30"
            animate={{
              x: mouse.x * (20 + i * 10),
              y: mouse.y * (15 + i * 8),
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            style={{
              top: i === 0 ? "12%" : "auto",
              bottom: i === 1 ? "15%" : "auto",
              right: i === 0 ? "10%" : "auto",
              left: i === 1 ? "8%" : "auto",
            }}
          >
            {icon}
          </motion.div>
        ))}

        {/* Mid-layer content — slight parallax */}
        <motion.div
          className="relative z-10 p-6 flex flex-col h-full min-h-[320px] flex-1"
          animate={{
            x: mouse.x * 4,
            y: mouse.y * 3,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Badge */}
          <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB347]/15 border border-[#FFB347]/30 text-[#FFB347] text-xs font-medium mb-5">
            <Sparkles className="w-3 h-3" />
            {card.badge}
          </span>

          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-[#FFB347]/10 border border-[#FFB347]/20 flex items-center justify-center text-[#FFB347] mb-4">
            {card.icon}
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-bold text-gray-900 mb-2 leading-snug">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
            {card.description}
          </p>

          {/* CTA */}
          <Link
            to={card.ctaLink}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#FFB347] hover:text-[#FFB347]/80 transition-colors group"
          >
            {card.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Border shine sweep on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, hsl(38 95% 54% / 0.08) 45%, transparent 50%)",
            backgroundSize: "200% 100%",
          }}
          animate={{ backgroundPosition: hovered ? "100% 0" : "0% 0" }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
};

const WhyKnowva = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-[#E0F2FE]">
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Why KNOWva
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Your AI <span className="text-gradient">Discovery Hub</span>
          </h2>
          <p className="text-slate-900 max-w-xl mx-auto">
            Everything you need to find, compare, and trust the right AI tools
          </p>
        </motion.div>
        {/* Cards — horizontal scroll on desktop, vertical on mobile */}
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0 lg:items-stretch">
            {cards.map((card, i) => (
              <div key={card.title} className="snap-center lg:h-full lg:flex lg:flex-col">
                <div className="flex-1">
                  <ParallaxCard card={card} index={i} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKnowva;
