import type { FC } from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    ShieldCheck,
    Gavel,
    Users,
    Home,
    Briefcase,
    ArrowRight
} from 'lucide-react';

const practices = [
    {
        title: "Corporate Governance",
        icon: <Building2 className="w-8 h-8" />,
        description: "Advising multinational boards on complex regulatory landscapes and fiduciary duties.",
        delay: 0.1
    },
    {
        title: "White Collar Defense",
        icon: <ShieldCheck className="w-8 h-8" />,
        description: "Global representation in high-stakes investigations and criminal enforcement actions.",
        delay: 0.2
    },
    {
        title: "Complex Litigation",
        icon: <Gavel className="w-8 h-8" />,
        description: "Resolving mission-critical disputes through sophisticated courtroom advocacy.",
        delay: 0.3
    },
    {
        title: "Private Equity",
        icon: <Users className="w-8 h-8" />,
        description: "Strategic legal counsel for transformative acquisitions and capital deployments.",
        delay: 0.4
    },
    {
        title: "Global Real Estate",
        icon: <Home className="w-8 h-8" />,
        description: "Navigating international property portfolios and high-value asset structures.",
        delay: 0.5
    },
    {
        title: "IP Strategy",
        icon: <Briefcase className="w-8 h-8" />,
        description: "Defending intellectual capital and maximizing value in the knowledge economy.",
        delay: 0.6
    }
];

const PracticeAreas: FC = () => {
    return (
        <section id="practice-areas" className="py-32 bg-luxury-bg relative transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-24">
                    <span className="section-subtitle">Scope of Practice</span>
                    <h2 className="section-title text-luxury-text">Institutional Expertise</h2>
                    <div className="section-divider"></div>
                    <p className="max-w-3xl mx-auto text-luxury-text-sec mt-2 text-lg font-light leading-relaxed transition-colors duration-500">
                        We provide multi-jurisdictional legal services to global corporations and sovereign entities,
                        delivering strategic solutions at the intersection of law and global business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                    {practices.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: item.delay }}
                            className="group p-12 bg-luxury-bg-sec border border-luxury-border hover:bg-luxury-bg transition-all duration-700 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-0 bg-luxury-gold group-hover:h-full transition-all duration-700"></div>

                            <div className="w-16 h-16 bg-luxury-bg flex items-center justify-center text-luxury-gold mb-10 group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500 shadow-lg border border-luxury-border">
                                {item.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-luxury-text mb-6 group-hover:text-luxury-gold transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-luxury-text-sec mb-10 leading-relaxed transition-colors group-hover:text-luxury-text-sec">
                                {item.description}
                            </p>

                            <a href="#" className="flex items-center gap-3 text-luxury-text font-bold text-xs uppercase tracking-[0.2em] group-hover:text-luxury-gold transition-all">
                                Explore Detail <ArrowRight className="w-4 h-4" />
                            </a>

                            {/* Decorative background number */}
                            <div className="absolute -bottom-10 -right-6 text-luxury-text/5 font-serif font-black text-9xl transition-colors pointer-events-none">
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
