'use client';

import React, { useState, useEffect } from 'react';
import {
  Phone,
  Menu,
  X,
  ShieldCheck,
  Star,
  Hammer,
  Home as HomeIcon,
  HardHat,
  Clock,
  Wallet,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Mail,
  ArrowRight,
  Ruler,
  Droplets,
  Construction,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) border-b ${scrolled
        ? 'bg-white/90 backdrop-blur-md border-slate-100 py-4 md:py-3'
        : 'bg-transparent border-transparent py-4 md:py-5'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="bg-gradient-to-br from-secondary to-orange-600 p-2 rounded-xl shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300 transform group-hover:rotate-3">
            <HomeIcon className="text-white w-5 h-5" />
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-800' : 'text-white'}`}>
            Elite<span className="text-secondary">Roofing</span>
          </span>
        </div>

        {/* Desktop Links - Ultra Smooth Glass Pill */}
        <div className={`hidden md:flex items-center rounded-full px-1.5 py-1.5 transition-all duration-300 ${scrolled
          ? 'bg-slate-50/60 backdrop-blur-md border border-slate-100'
          : 'bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl'
          }`}
        >
          {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`
                relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${scrolled
                  ? 'text-slate-600 hover:text-secondary hover:bg-white hover:shadow-sm'
                  : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button - Modern & Compact */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:+15551234567"
            className="group relative overflow-hidden bg-secondary text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Call Now</span>
            </div>
          </a>
        </div>

        {/* Mobile Menu Button - Sleek */}
        <button
          className="md:hidden p-2 text-secondary hover:bg-secondary/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />}
        </button>
      </div>

      {/* Mobile Menu - Modern Slide */}
      <div className={`md:hidden absolute top-full left-0 right-0 ${scrolled ? 'bg-white/95 border-slate-200' : 'bg-slate-900/95 border-white/10'} backdrop-blur-xl border-t shadow-2xl transition-all duration-300 origin-top transform ${isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-90 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col p-6 space-y-2">
          {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-base font-medium p-3 rounded-xl transition-all flex justify-between group ${scrolled ? 'text-slate-600 hover:bg-slate-50' : 'text-slate-300 hover:bg-white/5'}`}
              onClick={() => setIsOpen(false)}
            >
              {item}
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
            </a>
          ))}
          <a
            href="tel:+15551234567"
            className="bg-gradient-to-r from-secondary to-orange-600 text-white p-3 rounded-xl text-center font-bold shadow-lg flex justify-center items-center space-x-2 mt-4 active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-start overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/hero-bg.png"
          alt="Modern House Roof"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Superior Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent bottom-0 h-32" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 md:pt-24">
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="bg-white/10 inline-flex items-center gap-2 px-4 md:px-6 py-2 rounded-full border border-white/20 mb-6 md:mb-8 backdrop-blur-md shadow-lg">
            <Star className="w-4 h-4 md:w-5 md:h-5 text-secondary fill-secondary" />
            <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">#1 Rated in Metro City</span>
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 md:mb-8 leading-tight md:leading-[1.1] tracking-tight drop-shadow-2xl">
            Protect Your Home <br />
            With <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-300">Elite Standards</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-200 mb-8 md:mb-12 leading-relaxed font-light max-w-2xl drop-shadow-md border-l-4 border-secondary pl-6">
            The most trusted licensed & insured roofing experts. We deliver lifetime durability, premium materials, and 5-star craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
            <button className="group bg-secondary hover:bg-orange-600 text-white text-lg px-8 md:px-10 py-4 md:py-5 rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center gap-3">
              <Ruler className="w-6 h-6" />
              Get Free Estimate
              <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white text-lg px-10 py-5 rounded-lg font-bold transition-all border border-white/20 hover:border-white/40 shadow-xl flex items-center justify-center gap-3 group">
              <Phone className="w-6 h-6 group-hover:animate-bounce" />
              Emergency Service
            </button>
          </div>

          <div className="mt-16 flex items-center gap-6 text-slate-300 text-sm font-medium border-t border-white/10 pt-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-primary bg-slate-800 relative overflow-hidden">
                  <Image src={`https://randomuser.me/api/portraits/men/${i * 15}.jpg`} alt="Client" fill className="object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-primary bg-secondary flex items-center justify-center text-white text-xs font-bold shadow-lg">2k+</div>
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />)}
              </div>
              <p>Trusted by <span className="text-white font-bold">2,000+ homeowners</span> this year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const badges = [
    { icon: ShieldCheck, text: "Licensed & Fully Insured", sub: "Protection you can trust" },
    { icon: Star, text: "5-Star Google Rated", sub: "200+ Reviews" },
    { icon: CheckCircle, text: "Satisfaction Guaranteed", sub: "Or we fix it free" },
  ];

  return (
    <div className="bg-slate-900 border-b border-white/5 relative z-20 shadow-2xl">
      <div className="container mx-auto px-6 py-6 md:py-10">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center space-x-4 justify-start md:justify-start bg-white/5 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none">
              <div className="bg-white/5 p-3 md:p-4 rounded-full border border-white/10 shrink-0">
                <badge.icon className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg md:text-xl mb-1">{badge.text}</h3>
                <p className="text-slate-400 text-sm">{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop"
                alt="Roofer Working"
                width={600}
                height={450}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-4 md:p-6 rounded-xl shadow-xl z-20 hidden md:block border-l-4 border-secondary max-w-xs">
              <p className="font-bold text-primary text-lg md:text-xl mb-2">"We treat your home like our own."</p>
              <p className="text-gray-500 text-xs md:text-sm">- John Founder, CEO</p>
            </div>
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 bg-secondary/10 rounded-full blur-2xl -z-0"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-secondary font-bold tracking-wider mb-2 text-sm uppercase">About Our Company</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">Local Experts You Can Rely On</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                For over 15 years, Elite Roofing has been the backbone of safe homes in Metro City.
                We are a family-owned business dedicated to delivering superior craftsmanship using only the highest quality materials.
                We don't just fix roofs; we build lasting peace of mind.
              </p>
            </div>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {[
                "Locally Owned & Operated",
                "CertainTeed ShingleMaster™ Certified",
                "Same-Day Emergency Response",
                "Upfront Pricing - No Hidden Fees"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-medium text-primary text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <button className="text-secondary font-bold hover:text-secondary-hover inline-flex items-center gap-2 group text-base md:text-lg">
              Learn More About Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Roof Repair", desc: "Quick leak fixes, storm damage repair, and maintenance to extend your roof's life.", icon: Hammer, color: "from-orange-400 to-red-500", text: "text-orange-600" },
    { title: "Full Replacement", desc: "Complete tear-offs and expert installation of asphalt, metal, or tile roofs.", icon: HomeIcon, color: "from-blue-400 to-blue-600", text: "text-blue-600" },
    { title: "Gutter Installation", desc: "Seamless gutter systems to protect your foundation from water damage.", icon: Droplets, color: "from-cyan-400 to-teal-500", text: "text-cyan-600" },
    { title: "Commercial Roofing", desc: "Scalable solutions for businesses, warehouses, and industrial buildings.", icon: Construction, color: "from-purple-400 to-indigo-500", text: "text-purple-600" },
    { title: "Free Inspections", desc: "Detailed 21-point roof assessments with photo reports and honest advice.", icon: ShieldCheck, color: "from-emerald-400 to-green-500", text: "text-emerald-600" },
    { title: "Emergency 24/7", desc: "Immediate response teams for storm, hail, or tree damage emergencies.", icon: Clock, color: "from-amber-400 to-orange-500", text: "text-amber-600" },
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 md:mb-6">Comprehensive Roofing Solutions</h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            From minor patches to major installations, our certified team handles it all with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white border border-slate-100 p-6 md:p-8 rounded-3xl hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Gradient Border Effect */}
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>

              <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-2 md:mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base mb-4 md:mb-6">{service.desc}</p>

              <div className={`flex items-center text-sm font-bold ${service.text} transition-colors cursor-pointer group-hover:underline decoration-2 underline-offset-4`}>
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="bg-primary py-12 md:py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 text-center divide-x-0 md:divide-x divide-white/10">
          {[
            { label: "Years Experience", value: "15+" },
            { label: "Projects Completed", value: "3,500+" },
            { label: "Happy Clients", value: "100%" },
            { label: "Warranty Years", value: "50" },
          ].map((stat, idx) => (
            <div key={idx} className="p-4 flex flex-col items-center">
              <p className="text-3xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</p>
              <p className="text-white/80 font-medium text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Why Choose EliteRoofing</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">We Build Roofs That <br /><span className="text-primary">Last a Lifetime</span></h2>
              <p className="mt-4 text-slate-500 text-base md:text-lg leading-relaxed">
                Experience peace of mind with our certified experts. We don't just fix roofs; we protect your biggest investment with precision and integrity.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8">
              {[
                { title: "On-Time, Every Time", desc: "Your time is valuable. We stick to strict schedules to ensure your project is completed on deadline, no excuses.", icon: Clock },
                { title: "Transparent Pricing", desc: "Detailed, itemized quotes with zero hidden fees. You'll know exactly where every dollar goes.", icon: Wallet },
                { title: "Premium Materials", desc: "We are certified installers for top brands like GAF and Owens Corning, ensuring maximum durability.", icon: ShieldCheck },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7 text-secondary group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-secondary transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full md:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-secondary hover:shadow-secondary/30 transition-all duration-300 flex items-center justify-center gap-2 group">
              Schedule Your Free Inspection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              <Image
                src="/why-choose-us.png"
                alt="Professional Roofing Team"
                width={800}
                height={600}
                className="object-cover w-full h-[350px] md:h-[600px] hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl max-w-[250px] md:max-w-xs border border-white/50 animate-fade-in-up">
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                  <div className="bg-green-100 p-1.5 md:p-2 rounded-full">
                    <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm md:text-base">Certified Excellence</span>
                </div>
                <p className="text-xs md:text-sm text-slate-500 leading-snug">
                  "The quality of their work is unmatched. Best roofing experience I've ever had."
                </p>
                <div className="mt-2 md:mt-3 flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-current" />)}
                  </div>
                  <span className="text-[10px] md:text-xs text-slate-400 font-semibold">— Sarah Mitchell</span>
                </div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-orange-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-48 h-48 md:w-64 md:h-64 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2160&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-secondary font-bold tracking-wider mb-2">OUR WORK</h2>
            <h3 className="text-4xl font-bold text-primary">Featured Projects</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
            View Full Portfolio <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl h-64 md:h-80 cursor-pointer">
              <Image
                src={src}
                alt={`Project ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-lg">Residential Roof Replacement</p>
                <p className="text-gray-200 text-sm">Metro City Area</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="items-center gap-2 text-primary font-bold hover:text-secondary transition-colors inline-flex">
            View Full Portfolio <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">What Our Neighbors Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "They finished our roof in one day! The crew was polite, cleaned up perfectly, and the roof looks amazing. Highly recommend!",
              name: "Sarah Jenkins",
              role: "Homeowner",
              stars: 5
            },
            {
              text: "I called for an emergency leak during a storm, and they were here within an hour. Saved us thousands in water damage.",
              name: "Mike Ross",
              role: "Local Business Owner",
              stars: 5
            },
            {
              text: "Professional from quote to completion. No high-pressure sales, just honest advice and quality work.",
              name: "Emily Chen",
              role: "Property Manager",
              stars: 5
            },
          ].map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />)}
              </div>
              <p className="text-gray-600 italic mb-6 flex-grow">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden relative">
                  {/* Placeholder avatar */}
                  <div className="absolute inset-0 bg-primary flex items-center justify-center text-white font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-primary">{review.name}</h5>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">We're Here to Help</h2>
          <p className="text-slate-500 text-lg">
            Have a question or ready to start your roofing project? Reach out to us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Map */}
          <div className="flex flex-col gap-6 h-full">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Call Us 24/7</p>
                    <p className="text-xl font-bold text-slate-900">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Email Us</p>
                    <p className="text-xl font-bold text-slate-900">info@eliteroofing.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-secondary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Headquarters</p>
                    <p className="text-xl font-bold text-slate-900">123 Roof Street, Metro City, ST 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="flex-grow w-full bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12690.627725969894!2d-122.04944883477144!3d37.33230588647008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80850c95a2f584bd%3A0x6b2e3f895521e102!2sApple%20Campus!5e0!3m2!1sen!2sus!4v1709848293842!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale hover:grayscale-0 transition-all duration-500 absolute inset-0"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Needed</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-slate-500">
                  <option>Roof Repair</option>
                  <option>Full Replacement</option>
                  <option>Inspection</option>
                  <option>Commercial Roofing</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>

              <button className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
const CTA = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-12"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Fix Your Roof?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Don’t wait until a small leak becomes a big problem. Schedule your free inspection today with Metro City's trusted experts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-secondary hover:bg-secondary-hover text-white text-lg px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2">
            <Ruler className="w-5 h-5" />
            Book Free Inspection
          </button>
          <button className="bg-white hover:bg-gray-100 text-primary text-lg px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            Call (555) 123-4567
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-10">

          {/* Brand & Social */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-secondary p-2 rounded-lg">
                <HomeIcon className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Elite<span className="text-secondary">Roofing</span>
              </span>
            </div>
            <p className="opacity-70 leading-relaxed text-sm">
              Setting the standard for quality roofing since 2008. We protect what matters most with integrity and craftsmanship.
            </p>
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full"></span> Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-sm opacity-80 leading-relaxed">123 Roofing Lane, Suite 100<br />Metro City, ST 12345</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-sm opacity-80 font-semibold">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-sm opacity-80">office@eliteroofing.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full"></span> Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Our Projects', 'Client Reviews', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all flex items-center gap-2 group">
                    <ChevronRight className="w-3 h-3 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full"></span> Service Areas
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {['Metro City', 'Westville', 'North Hills', 'Lakeview', 'Sunnydale', 'Rivertown', 'Oak Park', 'Highland'].map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm opacity-70">
                  <div className="w-1 h-1 bg-secondary rounded-full"></div>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Elite Roofing & Home Services.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
