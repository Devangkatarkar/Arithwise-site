import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Users, Target, Sparkles, Heart, Zap, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const Connect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    cv: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, cv: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const values = [
    {
      title: "Data-Driven Excellence",
      description: "Embrace a culture of continuous improvement and excellence in data analysis, reporting, and forecasting, striving to deliver the highest quality work that drives strategic growth for our clients.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Innovation and Creativity",
      description: "Foster an environment that encourages innovation and creativity, empowering employees to think outside the box and develop ground breaking solutions that push the boundaries of what's possible in data analytics.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Collaborative Spirit",
      description: "Embody a collaborative spirit, working together as a cohesive team across cities to leverage diverse perspectives and collective expertise in delivering impactful outcomes for our clients.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Customer-Centric Focus",
      description: "Maintain a strong customer-centric focus, prioritizing the needs and objectives of our clients in all interactions and endeavours, and consistently exceeding their expectations with exceptional service and solutions.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Integrity and Ethics",
      description: "Uphold the highest standards of integrity and ethics in all aspects of our work, ensuring transparency, honesty, and accountability in every decision and action taken.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Continuous Learning and Growth",
      description: "Cultivate a culture of continuous learning and growth, providing opportunities for professional development and skill enhancement to empower employees to reach their full potential and stay at the forefront of industry trends and technologies.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const additionalValues = [
    "Adaptability and Resilience",
    "Ownership and Accountability",
    "Empowerment and Trust",
    "Work-Life Balance"
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="connect-section" className="min-h-[70vh] pt-24 md:pt-28 px-4 md:px-6 relative overflow-hidden bg-gradient-to-b from-[#FBF5EF] to-white">
        
        {/* Background Texture */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(122, 46, 138, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#7A2E8A]/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#F4A63A]/5 to-transparent blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="relative inline-block mb-8">
              <div className="absolute -left-8 top-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent to-[#7A2E8A]"></div>
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-4 md:mb-6"
                style={{ 
                  fontFamily: "'Merriweather', serif",
                  fontWeight: '700',
                  lineHeight: '1.1'
                }}
              >
                <span className="text-gray-800">Opportunity to </span>
                <span className="bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] bg-clip-text text-transparent">
                  Grow
                </span>
              </h1>
              <div className="absolute -right-8 top-1/2 w-6 h-0.5 bg-gradient-to-l from-transparent to-[#F4A63A]"></div>
            </div>
            
            <p 
              className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto px-4"
              style={{ 
                fontFamily: "'Merriweather', serif",
                lineHeight: '1.5',
                fontWeight: '600'
              }}
            >
              is Better than a Job
            </p>
            
            {/* Animated gradient line */}
            <div className="relative h-1 w-48 mx-auto overflow-hidden rounded-full mt-6 md:mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7A2E8A] to-transparent opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] animate-gradient-x"></div>
            </div>
            
            <style jsx>{`
              @keyframes gradient-x {
                0%, 100% { transform: translateX(-100%); }
                50% { transform: translateX(100%); }
              }
              .animate-gradient-x {
                animation: gradient-x 3s ease infinite;
              }
            `}</style>
          </motion.div>

        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gray-300"></div>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ 
                  fontFamily: "'Merriweather', serif",
                  background: 'linear-gradient(135deg, #7A2E8A 0%, #C94FA6 50%, #F4A63A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Apply Now!
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gray-300"></div>
            </div>
            
            <p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Send Us Your CV & We'll Respond.
            </p>
            
            <div className="w-24 md:w-32 h-0.5 rounded-full mx-auto bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A]"></div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            id="application-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden bg-gradient-to-br from-white to-purple-50/30 border border-gray-200/50"
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    className="block text-gray-700 mb-2 text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7A2E8A] focus:ring-2 focus:ring-[#7A2E8A]/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-gray-700 mb-2 text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7A2E8A] focus:ring-2 focus:ring-[#7A2E8A]/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    className="block text-gray-700 mb-2 text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7A2E8A] focus:ring-2 focus:ring-[#7A2E8A]/20 transition-all duration-300"
                    placeholder="+91 9876543210"
                  />
                </div>
                
                <div>
                  <label 
                    className="block text-gray-700 mb-2 text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Position Applied For *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7A2E8A] focus:ring-2 focus:ring-[#7A2E8A]/20 transition-all duration-300"
                    placeholder="e.g., Data Analyst, Developer"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label 
                  className="block text-gray-700 mb-2 text-sm font-medium"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Cover Letter / Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7A2E8A] focus:ring-2 focus:ring-[#7A2E8A]/20 transition-all duration-300 resize-none"
                  placeholder="Tell us why you'd be a great fit for arithwise..."
                ></textarea>
              </div>

              <div className="mb-8">
                <label 
                  className="block text-gray-700 mb-2 text-sm font-medium"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Upload CV/Resume *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#7A2E8A] transition-all duration-300">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    required
                    className="hidden"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                  />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7A2E8A]/10 to-[#C94FA6]/10 flex items-center justify-center mb-3">
                        <Send className="w-6 h-6 text-[#7A2E8A]" />
                      </div>
                      <p 
                        className="text-gray-600 mb-1"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <span className="font-medium text-[#7A2E8A]">Click to upload</span> or drag and drop
                      </p>
                      <p 
                        className="text-gray-500 text-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        PDF, DOC, DOCX up to 5MB
                      </p>
                      {formData.cv && (
                        <p className="text-sm text-green-600 mt-2">
                          ✓ {formData.cv.name}
                        </p>
                      )}
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="relative overflow-hidden group px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-lg md:text-xl text-white"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Submit Application
                    <Send className="w-5 h-5" />
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-[#FBF5EF]">
        <div className="max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gray-300"></div>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ 
                  fontFamily: "'Merriweather', serif",
                  color: '#1f2937'
                }}
              >
                Our <span className="bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] bg-clip-text text-transparent">Values</span>
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gray-300"></div>
            </div>
            
            <div className="w-24 md:w-32 h-0.5 mx-auto bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] rounded-full mb-8 md:mb-12"></div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white to-purple-50/30 border border-gray-200/50 hover:border-gray-300 transition-all duration-500">
                    <div className="p-6 md:p-8 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-[#7A2E8A]/10 to-[#C94FA6]/10">
                          {value.icon}
                        </div>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-[#7A2E8A] to-transparent"></div>
                      </div>
                      
                      <h3 
                        className="text-xl md:text-2xl font-bold mb-4 text-gray-800"
                        style={{ 
                          fontFamily: "'Merriweather', serif",
                          fontWeight: '600'
                        }}
                      >
                        {value.title}
                      </h3>
                      
                      <p 
                        className="text-gray-600 flex-grow text-base mb-4"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {value.description}
                      </p>
                      
                      <div className="w-full h-0.5 rounded-full bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] mt-auto"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Values List */}
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {additionalValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                    <p 
                      className="text-gray-700 text-lg font-medium"
                      style={{ 
                        fontFamily: "'Merriweather', serif",
                        fontWeight: '500'
                      }}
                    >
                      {value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden bg-gradient-to-br from-white to-purple-50/30 border border-gray-200/50"
          >
            <div className="p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                
                {/* Left Column - Company Info */}
                <div>
                  <div className="mb-8 md:mb-12">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl font-bold text-gray-300 font-mono">AW</div>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-[#7A2E8A] to-transparent"></div>
                    </div>
                    <h3 
                      className="text-2xl md:text-3xl font-bold text-gray-800 mb-3"
                      style={{ 
                        fontFamily: "'Merriweather', serif",
                        fontWeight: '700'
                      }}
                    >
                      Contact Info
                    </h3>
                    <div className="w-16 h-0.5 rounded-full bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6]"></div>
                  </div>

                  <div className="space-y-8">
                    {/* Company Name & Address */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-[#7A2E8A]/10 to-[#C94FA6]/10 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#7A2E8A]" />
                      </div>
                      <div>
                        <p 
                          className="font-bold text-gray-800 mb-2 text-lg"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          arithwise Solutions Pvt Ltd
                        </p>
                        <p 
                          className="text-gray-600"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          1st Floor, 'Sadguru' building, Plot No 91-D,<br />
                          Metro Pole 52, Karve Nagar road, Fetri, Somalwada,<br />
                          Nr Bank of Maharashtra, off Wardha Road<br />
                          Nagpur - 440025
                        </p>
                      </div>
                    </div>

                    {/* Email Addresses */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-[#7A2E8A]/10 to-[#C94FA6]/10 flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#7A2E8A]" />
                      </div>
                      <div>
                        <p 
                          className="font-bold text-gray-800 mb-2 text-lg"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          Email Addresses
                        </p>
                        <div className="space-y-1">
                          <a 
                            href="mailto:info@arithwise.com"
                            className="text-gray-600 hover:text-[#7A2E8A] transition-colors block"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            info@arithwise.com
                          </a>
                          <a 
                            href="mailto:career@arithwise.com"
                            className="text-gray-600 hover:text-[#7A2E8A] transition-colors block"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            career@arithwise.com
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Phone Numbers */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-[#7A2E8A]/10 to-[#C94FA6]/10 flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#7A2E8A]" />
                      </div>
                      <div>
                        <p 
                          className="font-bold text-gray-800 mb-2 text-lg"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          Phone Numbers
                        </p>
                        <div className="space-y-1">
                          <a 
                            href="tel:+919987020905"
                            className="text-gray-600 hover:text-[#7A2E8A] transition-colors block"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            +91-9987020905
                          </a>
                          <a 
                            href="tel:+919987000905"
                            className="text-gray-600 hover:text-[#7A2E8A] transition-colors block"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            +91-9987000905
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Map Placeholder */}
                <div className="lg:pl-8">
                  <div className="h-full rounded-2xl overflow-hidden border border-gray-200/50">
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7A2E8A]/20 to-[#C94FA6]/20 flex items-center justify-center mx-auto mb-4">
                          <MapPin className="w-8 h-8 text-[#7A2E8A]" />
                        </div>
                        <h4 
                          className="text-xl font-bold text-gray-800 mb-2"
                          style={{ fontFamily: "'Merriweather', serif" }}
                        >
                          Visit Our Office
                        </h4>
                        <p 
                          className="text-gray-600"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          Located in the heart of Nagpur
                        </p>
                      </div>
                      
                      {/* Simple map representation */}
                      <div className="w-full max-w-xs h-48 bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 relative overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7A2E8A]/10 to-[#C94FA6]/10 border-2 border-white"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] animate-pulse"></div>
                          </div>
                        </div>
                        
                        {/* Grid lines */}
                        <div className="absolute inset-0">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="absolute w-full h-px bg-gray-200/50 top-1/5 * i"></div>
                          ))}
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="absolute h-full w-px bg-gray-200/50 left-1/5 * i"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Connect;
