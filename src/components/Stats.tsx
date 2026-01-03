import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Award, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

const stats = [
    {
        icon: <Briefcase className="w-10 h-10" />,
        value: "2,500+",
        label: "Cases Handled",
        desc: "Precision in complex litigation."
    },
    {
        icon: <Users className="w-10 h-10" />,
        value: "1,200+",
        label: "Elite Clients",
        desc: "Trusted by sovereign states."
    },
    {
        icon: <Award className="w-10 h-10" />,
        value: "150+",
        label: "Global Awards",
        desc: "Excellence in advocacy."
    },
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        value: "25+",
        label: "Expert Attorneys",
        desc: "Top legal minds worldwide."
    }
];

const Stats: FC = () => {
    return (
        <section className="py-16 sm:py-24 bg-luxury-bg text-luxury-text relative border-y border-luxury-border transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 lg:gap-0">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={cn(
                                "text-center group px-4 sm:px-8 transition-colors duration-500",
                                // Only show border-right on larger screens where it makes sense
                                index % 2 === 0 && "sm:border-r border-luxury-border",
                                index < 2 && "border-b pb-12 sm:border-b-0 sm:pb-0 border-luxury-border", // Bottom border on mobile for first two
                                "lg:border-r lg:border-b-0 lg:pb-0 lg:last:border-transparent"
                            )}
                        >
                            <div className="flex justify-center text-luxury-gold mb-6 sm:mb-8 transition-all duration-700 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(197,160,89,0.5)]">
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl sm:text-5xl font-serif font-bold text-luxury-text mb-2 tabular-nums transition-colors duration-500">{stat.value}</h3>
                            <p className="text-luxury-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4 sm:mb-6">{stat.label}</p>
                            <p className="text-luxury-text-sec text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto transition-colors duration-500">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
