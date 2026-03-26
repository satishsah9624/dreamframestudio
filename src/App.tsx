import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Video, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Menu, 
  X, 
  ChevronRight, 
  Heart, 
  Star,
  Calendar,
  User,
  MessageSquare,
  Send
} from 'lucide-react';
import { cn } from './lib/utils';
import { SERVICES, GALLERY } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', ...Array.from(new Set(GALLERY.map(item => item.category)))];
  const filteredGallery = activeCategory === 'All' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === activeCategory);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Booking', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-gold selection:text-dark">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-dark/90 backdrop-blur-lg shadow-xl py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-12 w-auto overflow-hidden rounded-lg bg-white p-1 group-hover:scale-105 transition-transform">
              <img 
                src="https://ais-dev-4lgt4ctdxqoitvr7nup4eq-420153344696.asia-southeast1.run.app/api/attachments/9416960d-6169-42b3-96e0-9943588979c0" 
                alt="DreamFrame Studio Logo" 
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xl font-serif font-bold tracking-wider hidden sm:inline-block">
              DREAMFRAME <span className="text-gold">STUDIO</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-gold transition-colors tracking-widest uppercase"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#booking" 
              className="px-6 py-2 bg-gold text-dark font-bold rounded-full hover:bg-gold-light transition-colors text-sm uppercase tracking-tighter"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-dark pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#booking" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-8 py-4 bg-gold text-dark font-bold rounded-full text-xl"
              >
                Book Your Date
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920" 
            alt="Wedding Photography" 
            className="w-full h-full object-cover opacity-50 scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 border border-gold text-gold text-xs tracking-[0.3em] uppercase mb-6 rounded-full">
              Professional Photography & Videography
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6 leading-tight">
              Capturing Your <br />
              <span className="text-gold-gradient italic">Precious Moments</span> Forever
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              We don't just take pictures; we tell stories. Based in Saptari, Nepal, 
              DreamFrame Studio brings cinematic excellence to your life's most beautiful events.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#booking" 
                className="group px-8 py-4 bg-gold text-dark font-bold rounded-full hover:bg-gold-light transition-all flex items-center gap-2 transform hover:scale-105"
              >
                Book Your Date Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#portfolio" 
                className="px-8 py-4 border border-white/20 hover:border-gold transition-colors rounded-full font-medium"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-dark-soft relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800" 
                alt="Photographer at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold rounded-2xl p-6 flex flex-col justify-center shadow-2xl hidden lg:flex">
              <span className="text-4xl font-serif font-bold text-dark">10+</span>
              <span className="text-dark/80 text-sm font-bold uppercase tracking-tighter">Years of Experience</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold tracking-widest uppercase text-sm">About DreamFrame</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-8">
              Where Every Frame <br /> Tells a <span className="italic text-gold">Story</span>
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                At DREAMFRAME STUDIO, we believe that photography is more than just capturing an image; 
                it's about preserving an emotion, a moment, and a legacy. Our team of creative storytellers 
                is dedicated to providing high-quality photography and videography services that exceed expectations.
              </p>
              <p>
                Specializing in wedding and event coverage, we blend traditional values with modern cinematic 
                techniques. Whether it's the intimate glance of a couple or the grand celebration of a 
                community, we are there to frame it perfectly.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Heart className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Passionate</h4>
                  <p className="text-xs text-white/50">We love what we do and it shows.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Star className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Professional</h4>
                  <p className="text-xs text-white/50">Top-tier equipment and skills.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4">Services We Offer</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glass-card"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-dark-soft">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-gold font-bold tracking-widest uppercase text-sm">Our Work</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4">Visual Masterpieces</h2>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === cat 
                      ? "bg-gold text-dark" 
                      : "border border-white/10 hover:border-gold/50"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-square overflow-hidden rounded-2xl"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                    <h4 className="text-2xl font-serif font-bold">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-widest uppercase text-sm">Reservation</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4">Book Your Date Now</h2>
            <p className="text-white/60 mt-4">Fill out the form below and we'll get back to you shortly.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 glass-card p-8 md:p-12 rounded-3xl">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gold">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gold">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input 
                  type="tel" 
                  placeholder="+977 980..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gold">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input 
                  type="email" 
                  placeholder="example@mail.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gold">Event Type</label>
              <div className="relative">
                <Camera className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option className="bg-dark">Wedding Coverage</option>
                  <option className="bg-dark">Pre-Wedding Shoot</option>
                  <option className="bg-dark">Maternity Shoot</option>
                  <option className="bg-dark">Baby Shoot</option>
                  <option className="bg-dark">Corporate Event</option>
                </select>
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gold">Event Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                <input 
                  type="date" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gold">Your Message</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/30" />
                <textarea 
                  rows={4}
                  placeholder="Tell us about your dream shoot..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors"
                ></textarea>
              </div>
            </div>
            <button className="md:col-span-2 py-5 bg-gold text-dark font-bold rounded-xl hover:bg-gold-light transition-all flex items-center justify-center gap-3 text-lg transform hover:scale-[1.02]">
              Send Booking Request
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-dark-soft">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-gold font-bold tracking-widest uppercase text-sm">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-12">Visit Our Studio</h2>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Location</h4>
                    <p className="text-white/60">Rajbiraj Panitanki Road, Saptari, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Phone</h4>
                    <p className="text-white/60">+977 9801691701</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Email</h4>
                    <p className="text-white/60">sonilmr2@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Follow Us</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61572308672907" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-dark transition-all"
                  >
                    <Facebook />
                  </a>
                  <a 
                    href="https://www.instagram.com/_so_nil?igsh=eGpvdzRja2Z4MDJv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-dark transition-all"
                  >
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="h-[500px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14300.0!2d86.75!3d26.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef3f0000000000%3A0x0!2sRajbiraj%2C%20Saptari%2C%20Nepal!5e0!3m2!1sen!2snp!4v1711450000000!5m2!1sen!2snp" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-auto overflow-hidden rounded bg-white p-1">
              <img 
                src="https://ais-dev-4lgt4ctdxqoitvr7nup4eq-420153344696.asia-southeast1.run.app/api/attachments/9416960d-6169-42b3-96e0-9943588979c0" 
                alt="DreamFrame Studio Logo" 
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-lg font-serif font-bold tracking-wider">
              DREAMFRAME <span className="text-gold">STUDIO</span>
            </span>
          </div>
          
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} DreamFrame Studio. All rights reserved.
          </p>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61572308672907" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/_so_nil?igsh=eGpvdzRja2Z4MDJv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-white/40">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
