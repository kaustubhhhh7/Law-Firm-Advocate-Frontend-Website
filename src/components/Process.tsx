import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Gavel, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        icon: <Search className="w-8 h-8" />,
        title: "Free Consultation",
        description: "Initial analysis of your legal standing and objective assessment.",
        details: ["Case review", "Strategy session", "Legal feasibility"]
    },
    {
        icon: <FileText className="w-8 h-8" />,
        title: "Strategy Planning",
        description: "Tailoring an elite legal framework specifically for your requirements.",
        details: ["Evidence collection", "Timeline drafting", "Risk assessment"]
    },
    {
        icon: <Gavel className="w-8 h-8" />,
        title: "Active Advocacy",
        description: "Aggressive and sophisticated representation in and out of court.",
        details: ["Mediation", "Litigation", "Conflict resolution"]
    },
    {
        icon: <CheckCircle2 className="w-8 h-8" />,
        title: "Final Resolution",
        description: "Achieving justice through excellence and unwavering integrity.",
        details: ["Settlement", "Court verdict", "Ongoing advisory"]
    }
];

const Process: FC = () => {
    return (
        <section id="process" className="py-32 bg-luxury-bg relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="section-subtitle">Our Seamless Workflow</span>
                        <h2 className="section-title !mb-0 text-luxury-text">The Path to Justice</h2>
                    </div>
                    <div className="text-luxury-text-sec font-medium max-w-sm border-l-2 border-luxury-gold/30 pl-6 py-2 transition-colors duration-500">
                        A structured, international-standard approach to legal representation for high-trust results.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="absolute top-1/4 left-0 w-full h-px bg-luxury-gold/10 -z-0 hidden lg:block"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="relative z-10 group"
                        >
                            <div className="w-16 h-16 bg-luxury-bg-sec text-luxury-gold flex items-center justify-center rounded-sm mb-8 transition-all duration-500 group-hover:bg-luxury-gold group-hover:text-white shadow-xl relative overflow-hidden border border-luxury-border">
                                <div className="absolute -top-4 -right-4 text-luxury-text/5 font-serif font-black text-6xl">0{index + 1}</div>
                                {step.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-luxury-text mb-4 group-hover:text-luxury-gold transition-colors">{step.title}</h3>
                            <p className="text-luxury-text-sec mb-6 leading-relaxed">{step.description}</p>

                            <ul className="space-y-3 border-t border-luxury-border pt-6 transition-colors duration-500">
                                {step.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-luxury-text-sec font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold/50"></div>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        </section>
    );
};

export default Process;
