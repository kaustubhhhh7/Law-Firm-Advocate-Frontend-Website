import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        quote: "The strategic depth and international reach of Lex Elite saved our corporation during a critical acquisition. Their precision is simply unmatched.",
        author: "Marcus Aurelius",
        role: "CEO, Sterling Global",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
        quote: "Sir William is not just an advocate; he is a visionary strategist. His representation in the Hague was instrumental to our national victory.",
        author: "Helena Vane",
        role: "Minister of Justice, Europia",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
        quote: "A law firm that truly understands the value of confidentiality and the complexity of global regulations. They are our go-to for all high-risk matters.",
        author: "David Rockefeller III",
        role: "Chairman, Legacy Holdings",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
];

const Testimonials: FC = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="py-32 bg-luxury-bg relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <span className="section-subtitle">Success Stories</span>
                    <h2 className="section-title text-luxury-text">Global Endorsements</h2>
                </div>

                <div className="max-w-5xl mx-auto relative px-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.8 }}
                            className="bg-luxury-bg-sec border border-luxury-border p-12 md:p-20 relative transition-colors duration-500"
                        >
                            <Quote className="absolute top-10 left-10 w-20 h-20 text-luxury-gold/10 pointer-events-none" />

                            <div className="flex flex-col items-center text-center">
                                <p className="text-2xl md:text-4xl font-serif italic text-luxury-text mb-12 leading-relaxed transition-colors duration-500">
                                    "{testimonials[index].quote}"
                                </p>

                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full border-2 border-luxury-gold p-1 mb-6 transition-colors duration-500">
                                        <img
                                            src={testimonials[index].image}
                                            alt={testimonials[index].author}
                                            className="w-full h-full rounded-full grayscale hover:grayscale-0 transition-all duration-500 object-cover"
                                        />
                                    </div>
                                    <h4 className="text-xl font-bold text-luxury-text transition-colors duration-500">{testimonials[index].author}</h4>
                                    <p className="text-luxury-gold font-bold uppercase tracking-widest text-xs mt-1">{testimonials[index].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-luxury-bg border border-luxury-border rounded-full flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-500 shadow-xl z-20 group"
                    >
                        <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-luxury-bg border border-luxury-border rounded-full flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-500 shadow-xl z-20 group"
                    >
                        <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-4 mt-16">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-12 h-1 transition-all duration-500 ${index === i ? 'bg-luxury-gold w-24' : 'bg-luxury-border hover:bg-luxury-gold/30'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Background design */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-luxury-gold/5 pointer-events-none transition-colors duration-500"></div>
        </section>
    );
};

export default Testimonials;
