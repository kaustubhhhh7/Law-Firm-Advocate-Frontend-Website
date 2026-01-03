import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Scale, Menu, X, Phone, Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

const Navbar: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Active section highlighting
            const sections = ['home', 'about', 'process', 'practice-areas', 'why-us', 'testimonials', 'faq', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Process', href: '#process', id: 'process' },
        { name: 'Practice Areas', href: '#practice-areas', id: 'practice-areas' },
        { name: 'Expertise', href: '#why-us', id: 'why-us' },
        { name: 'FAQ', href: '#faq', id: 'faq' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-6',
                isScrolled ? 'glass-nav py-4 shadow-2xl translate-y-0' : 'bg-transparent'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#home" className="flex items-center gap-3 group">
                    <div className="relative">
                        <Scale className="w-9 h-9 text-luxury-gold transition-transform duration-700 group-hover:rotate-12" />
                        <div className="absolute -inset-1 bg-luxury-gold/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className={cn(
                            "text-2xl font-serif font-bold tracking-tight leading-none transition-colors",
                            isScrolled || theme === 'dark' ? "text-white" : "text-luxury-navy"
                        )}>
                            LEX <span className="text-luxury-gold italic">ELITE</span>
                        </span>
                        <span className="text-[9px] uppercase tracking-[0.4em] font-semibold text-luxury-gold-light mt-1.5 opacity-80">
                            International Advocates
                        </span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex items-center gap-8 mr-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    'nav-link group flex items-center gap-1',
                                    activeSection === link.id ? 'text-luxury-gold active font-semibold' :
                                        (isScrolled || theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-luxury-navy/70 hover:text-luxury-navy')
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={toggleTheme}
                        className={cn(
                            "p-2 rounded-full transition-all duration-500 hover:bg-luxury-gold/10",
                            isScrolled || theme === 'dark' ? "text-white hover:text-luxury-gold" : "text-luxury-navy hover:text-luxury-gold"
                        )}
                        title={theme === 'dark' ? "Switch to Light Luxury" : "Switch to Dark Luxury"}
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <div className="h-8 w-px bg-luxury-gold/20 mx-2"></div>

                    <div className="flex items-center gap-6">
                        <a href="tel:+15551234567" className={cn(
                            "flex items-center gap-2 text-sm transition-colors font-medium",
                            isScrolled || theme === 'dark' ? "text-white/80 hover:text-luxury-gold" : "text-luxury-navy/80 hover:text-luxury-gold"
                        )}>
                            <Phone size={14} className="text-luxury-gold" />
                            <span>+1 (555) 123-4567</span>
                        </a>
                        <a
                            href="#contact"
                            className="btn-gold !px-6 !py-2.5 text-xs uppercase tracking-widest shadow-xl"
                        >
                            Consultation
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 lg:hidden">
                    <button
                        onClick={toggleTheme}
                        className={cn(
                            "p-2 rounded-full",
                            isScrolled || theme === 'dark' ? "text-white" : "text-luxury-navy"
                        )}
                    >
                        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                    </button>
                    <button
                        className={cn(
                            "transition-colors",
                            isScrolled || theme === 'dark' ? "text-white hover:text-luxury-gold" : "text-luxury-navy hover:text-luxury-gold"
                        )}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'fixed inset-0 bg-luxury-bg z-40 flex flex-col items-center justify-center gap-10 transition-all duration-700 ease-in-out lg:hidden',
                    isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                )}
            >
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="grid grid-cols-6 h-full w-full">
                        {[...Array(24)].map((_, i) => (
                            <div key={i} className="border-r border-b border-luxury-border"></div>
                        ))}
                    </div>
                </div>

                <button
                    className="absolute top-8 right-8 text-luxury-text/50 hover:text-luxury-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <X size={40} />
                </button>

                {navLinks.map((link, idx) => (
                    <a
                        key={idx}
                        href={link.href}
                        className={cn(
                            "text-3xl font-serif transition-all duration-500 hover:scale-110",
                            activeSection === link.id ? "text-luxury-gold" : "text-luxury-text"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}

                <a
                    href="#contact"
                    className="mt-6 px-12 py-4 bg-luxury-gold text-white font-bold rounded-sm text-lg shadow-2xl hover:bg-luxury-text hover:text-luxury-bg transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Book A Consultation
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
