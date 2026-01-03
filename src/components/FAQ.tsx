import { useState } from 'react';
import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "How do I schedule a consultation with your senior partners?",
        answer: "You can schedule a consultation by using our online booking system below or by calling our global headquarters. High-profile cases are directly handled by Sir William and our principal partners."
    },
    {
        question: "What are your professional fees and engagement models?",
        answer: "Our fees are structured based on the complexity and jurisdiction of the case. We offer fixed-fee arrangements for advisory roles and success-based models for high-stakes litigation. Transparency is our core value."
    },
    {
        question: "Do you handle international legal matters across multiple jurisdictions?",
        answer: "Yes, Lex Elite has a global network of partners and is admitted to bars in London, New York, Hong Kong, and Singapore. We specialize in cross-border disputes and international treaty law."
    },
    {
        question: "Is client confidentiality guaranteed throughout the process?",
        answer: "Absolute confidentiality is legally and ethically guaranteed. We utilize enterprise-grade secure communication channels and maintain the highest level of attorney-client privilege."
    },
    {
        question: "What is your firm's success rate in high-profile litigation?",
        answer: "While no outcome can be strictly guaranteed, our firm maintains a 95% favorable resolution rate for complex corporate and civil disputes over the past decade."
    }
];

const FAQ: FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 bg-luxury-bg-sec relative overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3">
                        <span className="section-subtitle">Clarifications</span>
                        <h2 className="section-title">Frequently Asked <br /><span className="text-luxury-gold italic">Questions</span></h2>
                        <p className="text-luxury-text-sec mb-10 text-lg">
                            Honest answers to common inquiries regarding our elite legal services.
                        </p>

                        <div className="p-8 bg-luxury-bg border border-luxury-gold/20 shadow-xl relative transition-colors duration-500">
                            <HelpCircle className="w-12 h-12 text-luxury-gold mb-6 opacity-20 absolute top-4 right-4" />
                            <h4 className="font-bold text-luxury-text text-xl mb-4">Still have questions?</h4>
                            <p className="text-luxury-text-sec text-sm mb-6">Our dedicated client relations team is available 24/7 for urgent matters.</p>
                            <a href="#contact" className="text-luxury-gold font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all inline-flex items-center gap-2">
                                Contact Support <span>&rarr;</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-2/3 space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border border-luxury-border bg-luxury-bg transition-all duration-500 overflow-hidden ${openIndex === index ? 'shadow-2xl border-luxury-gold/30' : 'hover:border-luxury-gold/20'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                                >
                                    <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-luxury-gold' : 'text-luxury-text group-hover:text-luxury-gold'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        {openIndex === index ? <Minus className="text-luxury-gold" /> : <Plus className="text-luxury-text/30" />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        >
                                            <div className="px-8 pb-8 text-luxury-text-sec leading-relaxed border-t border-luxury-border pt-6">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 -right-48 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] -z-0"></div>
        </section>
    );
};

export default FAQ;
