import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

const timeline = [
    { year: "1995", event: "Earned Juris Doctor from Oxford University" },
    { year: "2005", event: "Appointed Senior Counsel at Federal Court" },
    { year: "2012", event: "Founded Lex Elite International" },
    { year: "2023", event: "Named Global Advocate of the Year" }
];

const AdvocateProfile: FC = () => {
    const { theme } = useTheme();

    return (
        <section id="profile" className="py-32 bg-luxury-bg-sec text-luxury-text relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col xl:flex-row gap-20 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="xl:w-2/5 relative"
                    >
                        <div className="relative z-10 border-[20px] border-luxury-bg shadow-2xl transition-colors duration-500">
                            <img
                                src="/senior-advocate.png"
                                alt="Senior Advocate"
                                className={cn(
                                    "w-full h-auto transition-all duration-1000",
                                    theme === 'dark' ? "grayscale hover:grayscale-0" : ""
                                )}
                            />
                            <div className="absolute -bottom-10 -right-10 bg-luxury-gold p-8 shadow-2xl hidden md:block">
                                <p className="text-4xl font-serif font-bold text-white mb-1">30+</p>
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-bg">Years of Excellence</p>
                            </div>
                        </div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 border border-luxury-gold/30 -z-0"></div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="xl:w-3/5">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-subtitle">Principal Partner</span>
                            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-luxury-text">Sir William <br /><span className="text-gradient-gold">Sterling</span></h2>

                            <p className="text-luxury-text-sec text-xl leading-relaxed mb-10 max-w-2xl font-light transition-colors duration-500">
                                A visionary legal strategist specializing in high-stakes corporate litigation
                                and international treaty law. Sir William has successfully represented
                                Fortune 500 companies and sovereign states across the globe.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                <div className="flex gap-4 p-6 bg-luxury-bg border border-luxury-border hover:border-luxury-gold/30 transition-all duration-500">
                                    <GraduationCap className="w-10 h-10 text-luxury-gold flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-luxury-text">Elite Credentials</h4>
                                        <p className="text-sm text-luxury-text-sec">Oxford J.D. with First Class Honors</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-6 bg-luxury-bg border border-luxury-border hover:border-luxury-gold/30 transition-all duration-500">
                                    <Award className="w-10 h-10 text-luxury-gold flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-luxury-text">Bar Admissions</h4>
                                        <p className="text-sm text-luxury-text-sec">London, New York, Hong Kong</p>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="space-y-8">
                                <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-luxury-gold mb-8">Professional Timeline</h4>
                                {timeline.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-6 group"
                                    >
                                        <span className="text-luxury-gold font-serif font-bold text-lg w-16 pt-1">{item.year}</span>
                                        <div className="flex flex-col gap-2 flex-1 border-l border-luxury-border pl-6 pb-6 group-last:border-transparent transition-colors duration-500">
                                            <p className="text-luxury-text/80 group-hover:text-luxury-gold transition-colors">{item.event}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none text-luxury-text transition-colors duration-500">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>
        </section>
    );
};

export default AdvocateProfile;
