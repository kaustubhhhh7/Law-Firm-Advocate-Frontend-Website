import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactForm: FC = () => {
    return (
        <section id="contact" className="py-32 bg-luxury-bg-sec transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3 p-12 bg-luxury-bg border border-luxury-border shadow-2xl relative overflow-hidden transition-colors duration-500"
                    >
                        <h3 className="text-3xl font-serif font-bold text-luxury-text mb-8">Direct Channels</h3>

                        <div className="space-y-12">
                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-luxury-bg-sec border border-luxury-border flex items-center justify-center text-luxury-gold transition-colors duration-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold mb-1">Global Hotline</p>
                                    <p className="text-xl font-bold text-luxury-text">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-luxury-bg-sec border border-luxury-border flex items-center justify-center text-luxury-gold transition-colors duration-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold mb-1">Secure Email</p>
                                    <p className="text-xl font-bold text-luxury-text">advisory@lexelite.com</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-luxury-bg-sec border border-luxury-border flex items-center justify-center text-luxury-gold transition-colors duration-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-luxury-gold mb-1">Headquarters</p>
                                    <p className="text-xl font-bold text-luxury-text">123 Chancery Lane, London</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-12 border-t border-luxury-border transition-colors duration-500">
                            <p className="text-luxury-text-sec text-sm italic">
                                For urgent matters, our emergency response legal team is available 24/7.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-2/3"
                    >
                        <span className="section-subtitle">Confidential Engagement</span>
                        <h2 className="section-title text-luxury-text">Initiate Strategy Session</h2>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold text-luxury-text-sec">Legal Name</label>
                                <input type="text" className="w-full p-4 bg-luxury-bg border-transparent border-b-2 border-b-luxury-gold/20 focus:border-b-luxury-gold outline-none transition-all placeholder:text-luxury-text-sec/30 text-luxury-text" placeholder="Johnathan Sterling" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold text-luxury-text-sec">Professional Email</label>
                                <input type="email" className="w-full p-4 bg-luxury-bg border-transparent border-b-2 border-b-luxury-gold/20 focus:border-b-luxury-gold outline-none transition-all placeholder:text-luxury-text-sec/30 text-luxury-text" placeholder="j.sterling@example.com" />
                            </div>
                            <div className="space-y-2 lg:col-span-2">
                                <label className="text-[10px] uppercase font-bold text-luxury-text-sec">Legal Matter Subject</label>
                                <input type="text" className="w-full p-4 bg-luxury-bg border-transparent border-b-2 border-b-luxury-gold/20 focus:border-b-luxury-gold outline-none transition-all placeholder:text-luxury-text-sec/30 text-luxury-text" placeholder="Corporate acquisition, Arbitration, etc." />
                            </div>
                            <div className="lg:col-span-2 space-y-2">
                                <label className="text-[10px] uppercase font-bold text-luxury-text-sec">Brief Summary of Engagement</label>
                                <textarea className="w-full p-4 bg-luxury-bg border-transparent border-b-2 border-b-luxury-gold/20 focus:border-b-luxury-gold outline-none transition-all placeholder:text-luxury-text-sec/30 resize-none h-48 text-luxury-text" placeholder="Describe your legal requirements..."></textarea>
                            </div>

                            <div className="lg:col-span-2 flex justify-end">
                                <button type="submit" className="btn-gold !px-16 flex items-center gap-4 group">
                                    Send Confidential Request <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
