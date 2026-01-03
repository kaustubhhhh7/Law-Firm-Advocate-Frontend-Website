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
        <section id="testimonials" className="py-20 sm:py-32 bg-luxury-bg relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
                    <span className="section-subtitle">Success Stories</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold transition-colors duration-500 text-luxury-text">Global Endorsements</h2>
                </div>

                <div className="max-w-5xl mx-auto relative px-0 sm:px-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.8 }}
                            className="bg-luxury-bg-sec border border-luxury-border p-8 sm:p-12 md:p-20 relative transition-colors duration-500"
                        >
                            <Quote className="absolute top-6 left-6 sm:top-10 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 text-luxury-gold/10 pointer-events-none" />

                            <div className="flex flex-col items-center text-center">
                                <p className="text-xl sm:text-2xl md:text-4xl font-serif italic text-luxury-text mb-8 sm:mb-12 leading-relaxed transition-colors duration-500">
                                    "{testimonials[index].quote}"
                                </p>

                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-luxury-gold p-1 mb-4 sm:mb-6 transition-colors duration-500">
                                        <img
                                            src={testimonials[index].image}
                                            alt={testimonials[index].author}
                                            className="w-full h-full rounded-full grayscale hover:grayscale-0 transition-all duration-500 object-cover"
                                        />
                                    </div>
                                    <h4 className="text-lg sm:text-xl font-bold text-luxury-text transition-colors duration-500">{testimonials[index].author}</h4>
                                    <p className="text-luxury-gold font-bold uppercase tracking-widest text-[10px] sm:text-xs mt-1">{testimonials[index].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex justify-between items-center mt-8 sm:mt-0 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:w-full sm:left-0 sm:px-4 z-20">
                        <button
                            onClick={prev}
                            className="w-12 h-12 sm:w-16 sm:h-16 bg-luxury-bg border border-luxury-border rounded-full flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-500 shadow-xl group"
                        >
                            <ChevronLeft size={24} className="sm:size-32 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 sm:w-16 sm:h-16 bg-luxury-bg border border-luxury-border rounded-full flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-white transition-all duration-500 shadow-xl group"
                        >
                            <ChevronRight size={24} className="sm:size-32 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
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
