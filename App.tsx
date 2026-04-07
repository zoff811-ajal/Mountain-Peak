/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { BookOpen, Star, GraduationCap, Menu, X, CheckCircle2, Mail, Phone, ArrowRight, Quote } from 'lucide-react';
import { Service } from './types';

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Orton-Gillingham Tutoring',
    description: 'Specialized, multi-sensory approach for students with dyslexia and other reading challenges. Proven techniques to build strong literacy foundations.',
    icon: 'BookOpen',
    image: '/Prevent the Summer Slide.png'
  },
  {
    id: '2',
    title: 'Early Education Support',
    description: 'With 23 years of experience in early education, we provide the nurturing guidance young learners need to develop a lifelong love for reading.',
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Character Development',
    description: 'Beyond academics, we focus on Christ-centered character development, helping children grow in virtue and dutifulness to God\'s commandments.',
    icon: 'Star',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000&auto=format&fit=crop'
  }
];

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ parentName: '', email: '', studentAge: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fcfaff] text-gray-800 overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <img src="/logo.png" alt="Mountain Peak Christian Tutoring Logo" className="h-12 w-auto object-contain" />
          <span className="text-xl md:text-2xl tracking-wide text-gray-900 font-augustea">
            Mountain Peak Christian Tutoring
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
          {['About', 'Services', 'Mission', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-purple-200"
        >
          Partner With Us
        </button>

        <button className="md:hidden text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['About', 'Services', 'Mission', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-3xl font-serif font-bold text-gray-900 hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="mt-4 bg-primary text-white px-10 py-4 rounded-full text-lg font-bold"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ opacity: heroOpacity, scale: heroScale }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-primary text-sm font-bold mb-6 border border-purple-100">
              <Star size={16} className="fill-primary" />
              <span>Orton-Gillingham Certified</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Shepherding Children to their <span className="text-primary italic">Peak</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Christ-centered academic guidance, character development, and personalized learning for every child.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all shadow-xl shadow-purple-200"
              >
                Explore Programs <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-white text-gray-700 border-2 border-gray-100 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all"
              >
                Meet the Tutor
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl -z-10" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/Prevent the Summer Slide.png" 
                alt="Child reading happily" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Quote size={24} />
                  </div>
                  <p className="text-sm font-medium text-gray-700 italic">
                    "The multi-sensory approach changed everything for our son's reading journey."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <img 
                  src="/kids-reading.jpg" 
                  alt="Children reading together" 
                  className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl text-white shadow-2xl hidden md:block">
                  <div className="text-4xl font-bold mb-1">23+</div>
                  <div className="text-sm font-medium opacity-90 uppercase tracking-widest">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
                Expert Guidance with a <br/><span className="text-primary">Nurturing Heart</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As an Orton-Gillingham certified tutor with over two decades in early education, I understand that every child learns differently. My approach combines scientific literacy methods with a deep commitment to Christ-centered character development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {[
                  'Orton-Gillingham Certified',
                  '23 Years in Early Education',
                  'Multi-Sensory Learning',
                  'Dyslexia Specialist',
                  'Christ-Centered Approach',
                  'Personalized Curriculum'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary" size={20} />
                    <span className="font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
              >
                Learn more about our approach <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#fcfaff] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tailored educational support designed to stimulate and tutor students in a nurturing environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-purple-50 group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <button onClick={() => scrollToSection('contact')} className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn Details <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="mission" className="py-24 bg-primary text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Our Vision</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed italic">
              "Our Vision is to shepherd children to their peak with Christ centered academic guidance, character development, and personalized learning, by partnering with families to provide an environment that stimulates and tutors students."
            </p>
          </div>
          
          <div className="w-24 h-1 bg-white/30 mx-auto mb-16" />
          
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Mission Statement</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              "To partner with families in fulfilling the Great Commission (Matthew 28:19-20) by educating and equipping students as Christ's disciples, instructing them in dutifulness to God's commandments, and fostering academic excellence and character development."
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 text-white">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Start Your Child's <br/><span className="text-primary">Journey Today</span></h2>
              <p className="text-gray-400 mb-12 text-lg">We are currently accepting new students for the upcoming semester. Reach out to schedule a consultation.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Email Us</div>
                    <div className="text-lg font-medium">tutoring@mt-peak.org</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Call Us</div>
                    <div className="text-lg font-medium">(719) 357-8271</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-white p-12 md:p-20">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12">
                  <CheckCircle2 size={48} className="text-green-500" />
                  <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. We'll get back to you soon.</p>
                  <button
                    onClick={() => { setFormSubmitted(false); setFormData({ parentName: '', email: '', studentAge: '', message: '' }); }}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const subject = encodeURIComponent(`Inquiry from ${formData.parentName}`);
                const body = encodeURIComponent(
                  `Parent Name: ${formData.parentName}\nEmail: ${formData.email}\nStudent Age / Grade: ${formData.studentAge}\n\nMessage:\n${formData.message}`
                );
                window.open(`mailto:tutoring@mt-peak.org?subject=${subject}&body=${body}`, '_self');
                setFormSubmitted(true);
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Parent Name</label>
                    <input type="text" required value={formData.parentName} onChange={(e) => setFormData({ ...formData, parentName: e.target.value })} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Student Age / Grade</label>
                  <input type="text" required value={formData.studentAge} onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="7 years old / 2nd Grade" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
                  <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="How can we help your child?" />
                </div>
                <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl shadow-purple-100">
                  Send Message
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gray-50 border-t border-gray-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Mountain Peak Christian Tutoring Logo" className="h-8 w-auto object-contain" />
            <span className="text-lg tracking-wide text-gray-900 font-augustea">
              Mountain Peak Christian Tutoring
            </span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 Mountain Peak Christian Tutoring. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary text-sm font-medium transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm font-medium transition-colors">Terms</a>
            <a href="https://www.facebook.com/profile.php?id=61583667848191" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary text-sm font-medium transition-colors">Facebook</a>
            <a href="https://www.instagram.com/mountain_peak_christian/#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary text-sm font-medium transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
