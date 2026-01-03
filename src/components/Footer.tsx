import type { FC } from 'react';
import { Scale, Linkedin, Twitter, Facebook, Instagram, ArrowUpRight } from 'lucide-react';

const Footer: FC = () => {
    return (
        <footer className="bg-luxury-bg pt-24 pb-12 text-luxury-text border-t border-luxury-border relative overflow-hidden transition-colors duration-500">
            {/* Background Branding */}
            <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none hidden xl:block text-luxury-text transition-colors duration-500">
                <Scale size={400} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-16 mb-20 sm:mb-24 text-center sm:text-left">
                    <div className="lg:col-span-2 flex flex-col items-center sm:items-start">
                        <a href="#home" className="flex items-center gap-3 mb-8 group w-fit">
                            <Scale className="w-10 h-10 text-luxury-gold" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-serif font-bold tracking-tight text-luxury-text">
                                    LEX <span className="text-luxury-gold italic">ELITE</span>
                                </span>
                                <span className="text-[9px] uppercase tracking-[0.4em] font-semibold text-luxury-gold-light mt-1.5 opacity-80 transition-colors duration-500">
                                    International Advocates
                                </span>
                            </div>
                        </a>
                        <p className="text-luxury-text-sec leading-relaxed mb-10 text-base sm:text-lg font-light max-w-sm transition-colors duration-500 mx-auto sm:mx-0">
                            Redefining legal excellence through strategic vision and unwavering integrity.
                            Serving the global elite with unparalleled precision.
                        </p>
                        <div className="flex gap-4 sm:gap-6 justify-center sm:justify-start">
                            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm border border-luxury-border flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-500 group">
                                    <Icon size={18} className="text-luxury-text-sec group-hover:text-white transition-colors duration-500" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-luxury-gold mb-8 sm:mb-10">Offices</h4>
                        <ul className="space-y-6 text-luxury-text-sec text-sm transition-colors duration-500">
                            <li className="flex flex-col gap-1">
                                <span className="text-luxury-text font-medium transition-colors duration-500">London HQ</span>
                                123 Chancery Lane, WC2A
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-luxury-text font-medium transition-colors duration-500">New York</span>
                                One World Trade Center, NY
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-luxury-text font-medium transition-colors duration-500">Singapore</span>
                                Marina Bay Financial Centre
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-luxury-gold mb-8 sm:mb-10">Firm</h4>
                        <ul className="space-y-4 text-luxury-text-sec text-sm font-medium transition-colors duration-500">
                            <li><a href="#about" className="hover:text-luxury-gold transition-colors flex items-center gap-2 group justify-center sm:justify-start">About Us <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                            <li><a href="#profile" className="hover:text-luxury-gold transition-colors flex items-center gap-2 group justify-center sm:justify-start">Partners <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                            <li><a href="#practice-areas" className="hover:text-luxury-gold transition-colors flex items-center gap-2 group justify-center sm:justify-start">Cases <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                            <li><a href="#" className="hover:text-luxury-gold transition-colors flex items-center gap-2 group justify-center sm:justify-start">Insights <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                            <li><a href="#contact" className="hover:text-luxury-gold transition-colors flex items-center gap-2 group justify-center sm:justify-start">Contact <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-luxury-gold mb-8 sm:mb-10">Legal</h4>
                        <ul className="space-y-4 text-luxury-text-sec text-[11px] leading-relaxed transition-colors duration-500">
                            <li>Confidentiality Policy</li>
                            <li>Engagement Terms</li>
                            <li>Regulatory Information</li>
                            <li className="pt-4 border-t border-luxury-border">
                                Disclaimer: Viewing this site does not constitute an attorney-client relationship.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-luxury-border pt-12 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 transition-colors duration-500 text-center md:text-left">
                    <p className="text-luxury-text-sec opacity-30 text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-500">
                        © 2026 Lex Elite International. All Jurisdictions Reserved.
                    </p>
                    <div className="text-luxury-text-sec text-[10px] uppercase font-bold tracking-[0.2em] transition-colors duration-500 opacity-60 flex flex-col sm:flex-row gap-1 sm:gap-2 items-center">
                        <span>Designed by <span className="text-luxury-gold">CORE3</span></span>
                        <span className="hidden sm:inline">|</span>
                        <span>Contact: <span className="text-luxury-gold">Kaustubh Ghadshi - 8451851439</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
