import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Eye, Target, Sparkles } from 'lucide-react';

const Overview = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="overview-section" className="min-h-[80vh] pt-24 md:pt-28 px-4 md:px-6 relative overflow-hidden bg-gradient-to-b from-[#FBF5EF] to-white">
        
        {/* Background Texture */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(122, 46, 138, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Animated gradient orbs */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#7A2E8A]/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#F4A63A]/5 to-transparent blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Main Headline with line accents */}
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
                <span className="text-gray-800">Your Trusted </span>
                <span className="bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] bg-clip-text text-transparent">
                  Solution Engine
                </span>
              </h1>
              <div className="absolute -right-8 top-1/2 w-6 h-0.5 bg-gradient-to-l from-transparent to-[#F4A63A]"></div>
            </div>
            
            <p 
              className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto px-4"
              style={{ 
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: '1.5'
              }}
            >
              Where innovation meets expertise, and solutions are engineered with precision to drive your strategic growth.
            </p>
            
            {/* Animated gradient line */}
            <div className="relative h-1 w-48 mx-auto overflow-hidden rounded-full mt-6 md:mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7A2E8A] to-transparent opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] animate-gradient-x"></div>
            </div>
            
            {/* CSS for gradient animation */}
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

      {/* "The Solution Engine" Philosophy Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            {/* Title with line accents */}
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
                "The Solution Engine" Philosophy
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gray-300"></div>
            </div>
            
            <div className="w-24 md:w-32 h-1.5 rounded-full mx-auto bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] mb-8 md:mb-12"></div>

            {/* Key Quote - Redesigned without quote icons */}
            <div className="max-w-4xl mx-auto mb-12 md:mb-16">
              <div className="relative">
                {/* Line accents instead of quote icons */}
                <div className="absolute -top-2 -left-4 w-12 h-0.5 bg-gradient-to-r from-[#7A2E8A] to-transparent"></div>
                <div className="absolute -top-2 -left-4 w-0.5 h-12 bg-gradient-to-b from-[#7A2E8A] to-transparent"></div>
                
                <p 
                  className="text-xl md:text-2xl italic text-gray-700 text-center px-4 md:px-8 py-6 md:py-8 rounded-2xl bg-gradient-to-r from-white to-purple-50/50 border-l-4 border-[#7A2E8A]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  "At arithwise, we don't just offer services; we embody a philosophy – we are 'The Solution Engine' your business deserves."
                </p>
                
                <div className="absolute -bottom-2 -right-4 w-12 h-0.5 bg-gradient-to-l from-[#C94FA6] to-transparent"></div>
                <div className="absolute -bottom-2 -right-4 w-0.5 h-12 bg-gradient-to-t from-[#C94FA6] to-transparent"></div>
              </div>
            </div>

            {/* Vision & Mission Cards - With Icons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-full"
              >
                <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white to-purple-50/30 border-l-4 border-[#7A2E8A] border border-gray-200/50 hover:border-gray-300 transition-all duration-500">
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    {/* Card Header with Icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#7A2E8A]/10 to-[#C94FA6]/10">
                        <Eye className="w-8 h-8 text-[#7A2E8A]" />
                      </div>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-[#7A2E8A] to-transparent"></div>
                    </div>
                    
                    <h3 
                      className="text-2xl md:text-3xl font-bold mb-4 text-gray-800"
                      style={{ 
                        fontFamily: "'Merriweather', serif",
                      }}
                    >
                      Our Vision
                    </h3>
                    
                    {/* Card Content */}
                    <div className="space-y-4 flex-grow">
                      <p 
                        className="text-gray-700 text-base md:text-lg"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        To become the trusted partner for organizations seeking actionable insights from their data, driving strategic growth and competitive advantage.
                      </p>
                      
                      <div className="pt-4 border-t border-gray-200/50 space-y-3">
                        <div className="flex items-start gap-3 group/point">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-3 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover/point:from-[#7A2E8A] group-hover/point:w-6 transition-all duration-300"></div>
                          </div>
                          <p 
                            className="text-gray-600 text-sm md:text-base"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            Revolutionize how businesses leverage data for success
                          </p>
                        </div>
                        <div className="flex items-start gap-3 group/point">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-3 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover/point:from-[#7A2E8A] group-hover/point:w-6 transition-all duration-300"></div>
                          </div>
                          <p 
                            className="text-gray-600 text-sm md:text-base"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            Comprehensive consulting services and SaaS platform
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Accent Line */}
                    <div className="w-full h-0.5 rounded-full bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] mt-6"></div>
                  </div>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-full"
              >
                <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white to-pink-50/30 border-l-4 border-[#C94FA6] border border-gray-200/50 hover:border-gray-300 transition-all duration-500">
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    {/* Card Header with Icon */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#C94FA6]/10 to-[#F4A63A]/10">
                        <Target className="w-8 h-8 text-[#C94FA6]" />
                      </div>
                      <div className="w-16 h-0.5 bg-gradient-to-r from-[#C94FA6] to-transparent"></div>
                    </div>
                    
                    <h3 
                      className="text-2xl md:text-3xl font-bold mb-4 text-gray-800"
                      style={{ 
                        fontFamily: "'Merriweather', serif",
                      }}
                    >
                      Our Mission
                    </h3>
                    
                    {/* Card Content */}
                    <div className="space-y-4 flex-grow">
                      <p 
                        className="text-gray-700 text-base md:text-lg"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        To foster long-term partnerships built on trust, reliability, and a shared dedication to driving impactful outcomes through informed decision-making.
                      </p>
                      
                      <div className="pt-4 border-t border-gray-200/50 space-y-3">
                        <div className="flex items-start gap-3 group/point">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-3 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover/point:from-[#C94FA6] group-hover/point:w-6 transition-all duration-300"></div>
                          </div>
                          <p 
                            className="text-gray-600 text-sm md:text-base"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            Excellence in data analysis, reporting, and forecasting
                          </p>
                        </div>
                        <div className="flex items-start gap-3 group/point">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-3 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover/point:from-[#C94FA6] group-hover/point:w-6 transition-all duration-300"></div>
                          </div>
                          <p 
                            className="text-gray-600 text-sm md:text-base"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            Enable organizations to unlock their full potential
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Accent Line */}
                    <div className="w-full h-0.5 rounded-full bg-gradient-to-r from-[#C94FA6] to-[#F4A63A] mt-6"></div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* "Why Choose Arithwise" Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-[#FBF5EF]">
        <div className="max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            {/* Title with line accents */}
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gray-300"></div>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Why Choose <span className="text-[#7A2E8A]">arithwise</span>
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gray-300"></div>
            </div>
            
            <p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Choosing the right service partner is crucial to achieving optimal performance.
            </p>
            
            <div className="w-24 md:w-32 h-0.5 mx-auto bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] rounded-full"></div>
          </motion.div>

          {/* Value Pillars Grid - Number indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Expertise",
                description: "Our team possesses extensive experience in data analytics, ensuring high-quality solutions tailored to your specific needs.",
                color: "border-l-[#7A2E8A]",
                number: "01",
                gradient: "bg-gradient-to-br from-white to-purple-50/30"
              },
              {
                title: "Innovation",
                description: "We stay at the forefront of technological advancements to provide innovative solutions that drive business growth.",
                color: "border-l-[#C94FA6]",
                number: "02",
                gradient: "bg-gradient-to-br from-white to-pink-50/30"
              },
              {
                title: "Client-Centric Approach",
                description: "We prioritize client satisfaction and collaborate closely to understand unique challenges and deliver customized solutions.",
                color: "border-l-[#F4A63A]",
                number: "03",
                gradient: "bg-gradient-to-br from-white to-amber-50/30"
              },
              {
                title: "Results-Driven",
                description: "Our solutions are designed to deliver tangible results, enabling clients to unlock the full potential of their data.",
                color: "border-l-[#7A2E8A]",
                number: "04",
                gradient: "bg-gradient-to-br from-white to-purple-50/30 via-pink-50/20"
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className={`h-full ${pillar.gradient} rounded-xl overflow-hidden ${pillar.color} border-l-4 border border-gray-200/50 hover:border-gray-300 transition-all duration-500`}>
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    {/* Number indicator with line */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl font-bold text-gray-300 font-mono">{pillar.number}</div>
                      <div className={`w-12 h-0.5 bg-gradient-to-r ${pillar.color.replace('border-l-', 'from-')} to-transparent`}></div>
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className="text-xl md:text-2xl font-bold mb-4 text-gray-800"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      {pillar.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className="text-gray-600 flex-grow text-base"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {pillar.description}
                    </p>
                    
                    {/* Accent Line */}
                    <div className={`w-full h-0.5 rounded-full mt-6 bg-gradient-to-r ${pillar.color.replace('border-l-', 'from-')} to-${index === 3 ? '[#F4A63A]' : pillar.color.replace('border-l-', '').replace('[', '').replace(']', '')}`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Note - Simplified single column */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden bg-gradient-to-br from-white to-purple-50/30 border border-gray-200/50"
          >
            <div className="p-8 md:p-12 lg:p-16">
              {/* Header with line design */}
              <div className="mb-8 md:mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold text-gray-300 font-mono">FD</div>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#7A2E8A] to-transparent"></div>
                  <Sparkles className="w-6 h-6 text-[#7A2E8A]" />
                </div>
                <h3 
                  className="text-2xl md:text-3xl font-bold text-gray-800"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Founder's Desk
                </h3>
                <div className="w-16 h-0.5 rounded-full bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] mt-3"></div>
              </div>
              
              <div className="space-y-6">
                <p 
                  className="text-gray-700 text-base md:text-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Welcome to arithwise, where innovation meets expertise, and solutions are not just provided; they're engineered with precision and care.
                </p>
                
                <p 
                  className="text-gray-700 text-base md:text-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  At arithwise, we don't just offer services; we embody a philosophy – we are <span className="font-bold text-[#7A2E8A]">'The Solution Engine'</span> your business deserves. Our commitment to excellence drives us to continuously push the boundaries of what's possible.
                </p>
                
                {/* Quote box with line design */}
                <div className="relative p-6 rounded-xl border-l-4 border-[#7A2E8A] bg-gradient-to-r from-white to-purple-50/50 my-8">
                  <div className="absolute -top-2 -left-4 w-8 h-0.5 bg-gradient-to-r from-[#7A2E8A] to-transparent"></div>
                  <div className="absolute -top-2 -left-4 w-0.5 h-8 bg-gradient-to-b from-[#7A2E8A] to-transparent"></div>
                  <p 
                    className="text-gray-800 text-base md:text-lg italic"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    "We believe in the power of talent and invest in our team's growth, both personally and professionally, because we understand that their success translates into our clients' success."
                  </p>
                  <div className="absolute -bottom-2 -right-4 w-8 h-0.5 bg-gradient-to-l from-[#C94FA6] to-transparent"></div>
                  <div className="absolute -bottom-2 -right-4 w-0.5 h-8 bg-gradient-to-t from-[#C94FA6] to-transparent"></div>
                </div>
                
                <p 
                  className="text-gray-700 text-base md:text-lg"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Our ethos revolves around fairness – fair prices, fair treatment, and fair opportunities. We believe that every business deserves access to top-tier technology consulting services.
                </p>
              </div>
              
              {/* Founder Signature */}
              <div className="mt-10 md:mt-12 pt-8 border-t border-gray-200/50">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-100 border-2 border-gray-300 flex items-center justify-center">
                      <span className="font-bold text-lg bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] bg-clip-text text-transparent">VA</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-0.5 bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6]"></div>
                  </div>
                  <div>
                    <p 
                      className="font-bold text-gray-800 text-lg"
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      Mr. Vishvesh Algeri
                    </p>
                    <p 
                      className="text-gray-600"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      CEO & Founder, Arithwise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-[#FBF5EF] to-white">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-12"
          >
            {/* Title with line design */}
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-gray-300"></div>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Ready to Experience <span className="text-[#7A2E8A]">The Solution Engine</span>?
              </h2>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-gray-300"></div>
            </div>
            
            <p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Join us on this journey, and let's build a brighter future together. Welcome to Arithwise – where solutions come to life.
            </p>
            
            <div className="w-24 md:w-32 h-0.5 mx-auto bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] rounded-full"></div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <button 
              className="group relative flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl text-white overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A]"></div>
              {/* Animated line overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span className="relative z-10">Partner with The Solution Engine</span>
              
              <div className="relative z-10 flex items-center ml-4">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </motion.div>
          
          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 mt-8 text-sm md:text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Connect with us today and transform your data into actionable insights.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Overview;