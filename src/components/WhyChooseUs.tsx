import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Shield, Rocket, Globe } from 'lucide-react';

const reasons = [
    {
        icon: <Trophy className="w-8 h-8" />,
        title: "Proven Success",
        description: "Over 95% favorable resolution rate in complex international litigation and arbitration cases."
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Absolute Integrity",
        description: "Upholding the highest ethical standards with a commitment to transparency and client trust."
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Global Reach",
        description: "A network of elite legal partners across 40+ countries, providing seamless multi-jurisdictional support."
    },
    {
        icon: <Rocket className="w-8 h-8" />,
        title: "Modern Strategy",
        description: "Leveraging cutting-edge legal technology and data-driven insights to stay ahead in every case."
    }
];

const WhyChooseUs: FC = () => {
    return (
        <section id="why-us" className="py-32 bg-luxury-bg text-luxury-text relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <span className="section-subtitle">Excellence Guaranteed</span>
                        <h2 className="section-title text-luxury-text">Why High-Profile Clients <br /><span className="text-luxury-gold italic">Choose Our Firm</span></h2>
                        <p className="text-luxury-text-sec text-lg mb-10 leading-relaxed transition-colors duration-500">
                            We don't just practice law; we define it. Our firm is built on the pillars of
                            elite representation, strategic foresight, and an unwavering commitment to
                            the success of our clients on the global stage.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="bg-luxury-bg-sec p-6 border border-luxury-border transition-colors duration-500">
                                <h4 className="text-3xl font-serif font-bold text-luxury-gold mb-1">95%</h4>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-text-sec transition-colors duration-500">Success Rate</p>
                            </div>
                            <div className="bg-luxury-bg-sec p-6 border border-luxury-border transition-colors duration-500">
                                <h4 className="text-3xl font-serif font-bold text-luxury-gold mb-1">40+</h4>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-text-sec transition-colors duration-500">Countries Served</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="p-8 bg-luxury-bg-sec border border-luxury-border hover:border-luxury-gold/30 transition-all duration-500 group"
                            >
                                <div className="text-luxury-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {reason.icon}
                                </div>
                                <h4 className="text-xl font-bold text-luxury-text mb-4 transition-colors duration-500">{reason.title}</h4>
                                <p className="text-luxury-text-sec text-sm leading-relaxed transition-colors duration-500 italic">
                                    {reason.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background design */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none text-luxury-text transition-colors duration-500">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <circle cx="100" cy="0" r="50" fill="currentColor" />
                    <circle cx="100" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
            </div>
        </section>
    );
};

export default WhyChooseUs;
