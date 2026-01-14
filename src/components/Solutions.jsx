import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Play, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Solutions = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  
  // Core Services Array - Clean design-focused
  const coreServices = [
    {
      title: "Data Analytics & Business Intelligence",
      shortDesc: "Transform raw data into actionable intelligence with advanced analytics and visualization tools.",
      overview: "Unlock the full potential of your data with our comprehensive analytics solutions. We help you make informed decisions through predictive modeling, interactive dashboards, and real-time reporting that drives measurable business outcomes.",
      features: ["Predictive Analytics & Modeling", "Interactive BI Dashboards", "Real-time Data Visualization", "KPI & Performance Tracking"],
      color: "border-l-[#7A2E8A]",
      bgGradient: "bg-gradient-to-br from-white to-purple-50/30",
      accentStyle: "bg-gradient-to-r from-[#7A2E8A] to-transparent h-0.5 w-16"
    },
    {
      title: "Cloud & Infrastructure Solutions",
      shortDesc: "Scalable, secure cloud infrastructure designed for modern business demands.",
      overview: "Modernize your operations with our end-to-end cloud solutions. From strategic migration to ongoing optimization, we ensure your infrastructure is robust, secure, and cost-effective while maintaining peak performance.",
      features: ["Strategic Cloud Migration", "Infrastructure Optimization", "Cost & Performance Management", "Security & Compliance Frameworks"],
      color: "border-l-[#C94FA6]",
      bgGradient: "bg-gradient-to-br from-white to-pink-50/30",
      accentStyle: "bg-gradient-to-r from-[#C94FA6] to-transparent h-0.5 w-16"
    },
    {
      title: "Custom Software Development",
      shortDesc: "Tailored applications engineered for your unique business challenges.",
      overview: "Build powerful, scalable software solutions that address specific business challenges. Our full-stack development delivers innovative applications that drive efficiency, enhance user experience, and create competitive advantages.",
      features: ["Web & Mobile Application Development", "API & System Integration", "Process Automation Solutions", "UI/UX Design & Optimization"],
      color: "border-l-[#F4A63A]",
      bgGradient: "bg-gradient-to-br from-white to-amber-50/30",
      accentStyle: "bg-gradient-to-r from-[#F4A63A] to-transparent h-0.5 w-16"
    },
    {
      title: "Managed IT & Database Services",
      shortDesc: "Comprehensive IT management ensuring reliability and performance.",
      overview: "Ensure your technology backbone runs smoothly with proactive IT management. We handle everything from database optimization to network security, providing the reliable foundation for data-driven success with 24/7 monitoring.",
      features: ["Database Management & Optimization", "IT Infrastructure Management", "Proactive 24/7 Monitoring", "Network Security & Backup Solutions"],
      color: "border-l-[#7A2E8A]",
      bgGradient: "bg-gradient-to-br from-white to-purple-50/30 via-pink-50/20",
      accentStyle: "bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-transparent h-0.5 w-20"
    }
  ];

  // Process steps - visualized with lines
  const solutionProcess = [
    { step: "01", title: "Discovery & Analysis", desc: "Understanding your unique challenges and objectives" },
    { step: "02", title: "Solution Design", desc: "Architecting tailored technology strategies" },
    { step: "03", title: "Development & Implementation", desc: "Building and deploying robust solutions" },
    { step: "04", title: "Optimization & Support", desc: "Continuous improvement and dedicated support" }
  ];

  // Video controls
  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Autoplay video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked by browser policy
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <>
      {/* Hero Section - Off-white to White gradient */}
      <section className="min-h-[80vh] pt-24 md:pt-28 px-4 md:px-6 relative overflow-hidden bg-gradient-to-b from-[#FBF5EF] to-white">
        {/* Geometric background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#7A2E8A]/5 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#F4A63A]/5 to-transparent blur-3xl"></div>

          {/* Line grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(122, 46, 138, 0.03) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(122, 46, 138, 0.03) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            {/* Creative title with line accents */}
            <div className="relative inline-block mb-8">
              <div className="absolute -left-8 top-1/2 w-6 h-0.5 bg-gradient-to-r from-transparent to-[#7A2E8A]"></div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none"
                style={{
                  fontFamily: "'Merriweather', serif",
                  lineHeight: "1.1",
                }}
              >
                <span className="text-gray-800">Technology</span>
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <div className="absolute -right-8 top-1/2 w-6 h-0.5 bg-gradient-to-l from-transparent to-[#F4A63A]"></div>
            </div>

            <p
              className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto px-4 mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: "1.5" }}
            >
              Engineered technology services that transform challenges into
              measurable growth opportunities.
            </p>

            {/* Creative gradient line separator */}
            <div className="relative h-1 w-48 mx-auto overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7A2E8A] to-transparent opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] animate-gradient-x"></div>
            </div>

            {/* CSS for gradient animation */}
            <style jsx>{`
              @keyframes gradient-x {
                0%,
                100% {
                  transform: translateX(-100%);
                }
                50% {
                  transform: translateX(100%);
                }
              }
              .animate-gradient-x {
                animation: gradient-x 3s ease infinite;
              }
            `}</style>
          </motion.div>

          {/* VIDEO Section - Simplified version */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-2xl md:rounded-3xl overflow-hidden mx-auto mb-16 md:mb-20 max-w-5xl border border-gray-200/50 bg-gray-100"
          >
            {/* Corner accents - lines instead of icons */}
            <div className="absolute top-0 left-0 w-16 h-16 z-10">
              <div className="absolute top-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#7A2E8A] to-transparent"></div>
              <div className="absolute top-0 left-0 w-0.5 h-8 bg-gradient-to-b from-[#7A2E8A] to-transparent"></div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 z-10">
              <div className="absolute top-0 right-0 w-8 h-0.5 bg-gradient-to-l from-[#C94FA6] to-transparent"></div>
              <div className="absolute top-0 right-0 w-0.5 h-8 bg-gradient-to-b from-[#C94FA6] to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 z-10">
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#F4A63A] to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-0.5 h-8 bg-gradient-to-t from-[#F4A63A] to-transparent"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 z-10">
              <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-gradient-to-l from-[#7A2E8A] to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-8 bg-gradient-to-t from-[#7A2E8A] to-transparent"></div>
            </div>

            {/* Video Container - SIMPLIFIED */}
            <div className="relative w-full aspect-video">
              {/* Simple Video Element */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                preload="auto"
                onLoadedData={() => setIsVideoLoaded(true)}
                onError={() => setIsVideoLoaded(false)}
              >
                {/* IMPORTANT: Update these paths to your actual video files */}
                <source src="/AW-Video-final.webm" type="video/webm" />
                <source src="/AW-Video-final.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Loading/Error State */}
              {!isVideoLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <div className="w-12 h-12 border-2 border-[#7A2E8A] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <p
                      className="text-gray-700 text-lg font-medium mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Loading Solution Engine...
                    </p>
                    <p
                      className="text-gray-500 text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      If video doesn't load, check file path in public folder
                    </p>
                  </div>
                </div>
              )}
              
              {/* Video controls overlay - Only show if video is loaded */}
              {isVideoLoaded && (
                <div className="absolute bottom-6 right-6 z-20">
                  <button
                    onClick={toggleVideoPlayback}
                    className="p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 group shadow-lg hover:shadow-xl"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-[#7A2E8A] group-hover:scale-110 transition-transform" />
                    ) : (
                      <Play className="w-5 h-5 text-[#7A2E8A] group-hover:scale-110 transition-transform" />
                    )}
                  </button>
                </div>
              )}
              
              {/* Video title overlay - Only show if video is loaded */}
              {isVideoLoaded && (
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-white/80 to-transparent"></div>
                    <p
                      className="text-white/90 text-sm font-medium tracking-wider uppercase"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      THE SOLUTION ENGINE IN ACTION
                    </p>
                  </div>
                  <p
                    className="text-white text-lg md:text-xl font-semibold"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    Transforming Data into Strategic Advantage
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section - All boxes same size */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-[#FBF5EF] to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            {/* Section title with line design */}
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-gray-300"></div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Core <span className="text-[#7A2E8A]">Services</span>
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-gray-300"></div>
            </div>

            <p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Four pillars of technological excellence, designed with precision
              and clarity.
            </p>

            {/* Minimal line separator */}
            <div className="w-24 md:w-32 h-0.5 mx-auto bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full"></div>
          </motion.div>

          {/* Core Services Grid - ALL BOXES SAME SIZE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full" // Ensure all boxes take full height
              >
                <div
                  className={`h-full ${service.bgGradient} rounded-2xl overflow-hidden border-l-4 ${service.color} border border-gray-200/50 hover:border-gray-300 transition-all duration-500 flex flex-col`}
                >
                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    {/* Service header with number indicator */}
                    <div className="mb-6">
                      {/* Number indicator with line */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-3xl md:text-4xl font-bold text-gray-300 font-mono">
                          0{index + 1}
                        </div>
                        <div className={service.accentStyle}></div>
                      </div>

                      <h3
                        className="text-xl md:text-2xl font-bold text-gray-800 mb-3"
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        {service.title}
                      </h3>

                      <p
                        className="text-gray-600 text-base font-medium mb-4"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Service overview - Fixed height for consistency */}
                    <div className="mb-6 flex-grow">
                      <p
                        className="text-gray-700 text-sm md:text-base leading-relaxed line-clamp-4"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {service.overview}
                      </p>
                    </div>

                    {/* Features - Clean list with lines */}
                    <div className="mb-6">
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 group/feature"
                          >
                            {/* Minimal line indicator */}
                            <div className="flex-shrink-0 mt-2">
                              <div className="w-3 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover/feature:from-[#7A2E8A] group-hover/feature:w-6 transition-all duration-300"></div>
                            </div>
                            <span
                              className="text-gray-600 text-sm md:text-base"
                              style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* LEARN MORE BUTTON - Bottom aligned for all cards */}
                    <div className="mt-auto pt-6 border-t border-gray-200/50">
                      <button className="group/btn w-full flex items-center justify-between p-4 rounded-xl bg-white hover:bg-gray-50 transition-all duration-300 border border-gray-300 hover:border-[#7A2E8A] shadow-sm hover:shadow-md">
                        <div className="text-left flex-grow">
                          <span
                            className="font-semibold text-gray-800 text-base md:text-lg block"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            Learn More About This Solution
                          </span>
                        </div>
                        {/* Arrow only - line removed */}
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover/btn:text-[#7A2E8A] group-hover/btn:translate-x-2 transition-all duration-300 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Visualized with lines */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-[#FBF5EF]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Our <span className="text-[#C94FA6]">Solution</span> Process
            </h2>
            <div className="w-24 md:w-32 h-0.5 mx-auto bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full mb-8"></div>
          </motion.div>

          {/* Process steps with connecting lines */}
          <div className="relative">
            {/* Connecting line - desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 -translate-y-1/2"></div>

            {/* Connecting line - mobile */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 -translate-x-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {solutionProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 group h-full">
                    {/* Step number with connecting point */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-gray-100 border-2 border-gray-300 flex items-center justify-center group-hover:border-[#7A2E8A] transition-all duration-300">
                        <span className="text-gray-700 font-bold text-sm group-hover:text-[#7A2E8A] transition-colors">
                          {step.step}
                        </span>
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <h3
                        className="text-xl font-bold text-gray-800 mb-3"
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-gray-600 text-base"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {step.desc}
                      </p>
                    </div>

                    {/* Step indicator line */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 group-hover:from-[#7A2E8A] group-hover:to-[#C94FA6] transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean, single button */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-[#FBF5EF] to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-12"
          >
            {/* Creative title design */}
            <div className="inline-block relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#7A2E8A]/5 to-[#F4A63A]/5 rounded-2xl blur-xl opacity-50"></div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold relative z-10"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                <span className="text-gray-800">Ready to </span>
                <span className="bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] bg-clip-text text-transparent">
                  Transform
                </span>
                <span className="text-gray-800"> Your Business?</span>
              </h2>
            </div>

            <p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Let's engineer solutions that drive measurable growth and create
              lasting impact.
            </p>

            {/* Minimal line separator */}
            <div className="w-20 h-0.5 mx-auto bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full"></div>
          </motion.div>

          {/* Single CTA Button - Clean design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <button
              className="group relative flex items-center justify-center gap-3 px-10 md:px-12 py-5 md:py-6 rounded-full font-bold text-xl md:text-2xl text-white overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A]"></div>
              {/* Animated line overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <span className="relative z-10">
                Start Your Solution Journey Today
              </span>

              <div className="relative z-10 flex items-center ml-4">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
          </motion.div>

          {/* Additional line decoration */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-12"
          ></motion.div>
        </div>
      </section>
    </>
  );
};

export default Solutions;