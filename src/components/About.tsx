import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';

const About: FC = () => {
    const { theme } = useTheme();

    return (
        <section id="about" className="py-16 sm:py-24 bg-luxury-bg overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative z-10 border-8 sm:border-[12px] border-luxury-bg-sec shadow-2xl transition-colors duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200"
                                alt="Professional Advocate"
                                className={cn(
                                    "w-full h-auto transition-all duration-700",
                                    theme === 'dark' ? "grayscale hover:grayscale-0" : ""
                                )}
                            />
                        </div>
                        {/* Decorative Box */}
                        <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-32 h-32 sm:w-64 sm:h-64 bg-luxury-gold/10 -z-0"></div>
                        <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 rotate-90 hidden xl:block">
                            <span className="text-luxury-gold/10 text-8xl font-serif font-black tracking-widest uppercase">TRUSTED</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 text-center lg:text-left"
                    >
                        <span className="section-subtitle">Since 1995</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 sm:mb-8 text-luxury-text leading-[1.2] sm:leading-tight">Defending Your Rights <br className="hidden sm:block" />With Unwavering Integrity</h2>
                        <p className="text-luxury-text-sec text-base sm:text-lg mb-8 leading-relaxed transition-colors duration-500 max-w-2xl mx-auto lg:mx-0">
                            With over 25 years of experience in the highest courts of law, we provide unmatched
                            legal expertise tailored to your unique challenges. Our approach combines traditional legal
                            wisdom with modern strategic thinking.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 text-left">
                            {[
                                "Confidentiality Guaranteed",
                                "Proven Track Record",
                                "Strategic Advisory",
                                "Client-Centric Approach",
                                "Innovative Solutions",
                                "Global Legal Network"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-luxury-gold" />
                                    </div>
                                    <span className="text-luxury-text font-medium text-sm sm:text-base">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-row items-center justify-center lg:justify-start gap-6 sm:gap-12 border-t border-luxury-border pt-10 transition-colors duration-500">
                            <div className="text-center sm:text-left">
                                <h4 className="text-2xl sm:text-3xl font-serif font-bold text-luxury-text">25+</h4>
                                <p className="text-luxury-text-sec text-[10px] sm:text-sm uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div className="w-px h-12 bg-luxury-gold/30"></div>
                            <div className="text-center sm:text-left">
                                <h4 className="text-2xl sm:text-3xl font-serif font-bold text-luxury-text">1500+</h4>
                                <p className="text-luxury-text-sec text-[10px] sm:text-sm uppercase tracking-wider">Cases Won</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
