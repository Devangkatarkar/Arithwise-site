import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Target, Users, Database, Cloud, Code, BarChart3, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [flippedCards, setFlippedCards] = useState({});
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  
  // Optimized video loading
  useEffect(() => {
    if (!reduceMotion) {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [reduceMotion]);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      const video = videoRef.current;
      const handleCanPlay = () => setIsVideoLoaded(true);
      
      video.load();
      video.addEventListener('canplay', handleCanPlay);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [showVideo]);

  const handleCardFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const services = [
    {
      title: "Data Analytics",
      icon: <BarChart3 className="w-10 h-10 md:w-12 md:h-12" />,
      description: "Arithwise extracts valuable insights from data, enabling informed decision-making and a competitive edge.",
      backContent: "Transform raw data into actionable intelligence with advanced analytics and visualization tools."
    },
    {
      title: "Cloud",
      icon: <Cloud className="w-10 h-10 md:w-12 md:h-12" />,
      description: "We leverage the cloud to optimize data management, ensuring scalability and security.",
      backContent: "Seamless cloud migration, management, and optimization for maximum efficiency and security."
    },
    {
      title: "Programming",
      icon: <Code className="w-10 h-10 md:w-12 md:h-12" />,
      description: "Our skilled developers create custom software to streamline data processes and enhance efficiency.",
      backContent: "Custom software development tailored to your specific business needs and workflows."
    },
    {
      title: "IT Services",
      icon: <Database className="w-10 h-10 md:w-12 md:h-12" />,
      description: "Robust databases tailored to your needs, the backbone of data-driven success.",
      backContent: "Comprehensive IT infrastructure management and database solutions for optimal performance."
    }
  ];

  const focusAreas = [
    {
      icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Understanding Your Business Needs",
      description: "Deep dive into your unique challenges and create optimum solutions tailored to your specific goals."
    },
    {
      icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Adopting Best Technology & Methodology",
      description: "Leverage cutting-edge technology and proven methodologies to give you strategic advantage in the market."
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Harnessing Human Ingenuity",
      description: "Combine world-class talent with innovative thinking to deliver exceptional service and results."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero-section" className="min-h-screen pt-16 md:pt-20 px-4 md:px-6 relative overflow-hidden bg-gradient-to-b from-[#FBF5EF] to-white">
        
        {/* Subtle texture background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(122, 46, 138, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-6xl mx-auto relative pt-12 md:pt-16">
          
          {/* Main Headline - With Merriweather font */}
          <div className="text-center mb-6 md:mb-8">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-2 md:mb-3"
              style={{ 
                fontFamily: "'Merriweather', serif",
                fontWeight: '700',
                lineHeight: '1.1'
              }}
            >
              <span className="text-gray-800">We </span>
              <span 
                className="bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] bg-clip-text text-transparent"
              >
                Build
              </span>
              <span className="text-gray-800"> You </span>
              <span 
                className="bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] bg-clip-text text-transparent"
              >
                Save.
              </span>
            </h1>
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none"
              style={{ 
                fontFamily: "'Merriweather', serif",
                fontWeight: '700',
                lineHeight: '1.1'
              }}
            >
              <span className="text-gray-800">They </span>
              <span 
                className="bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] bg-clip-text text-transparent"
              >
                Wonder
              </span>
              <span className="text-gray-800"> How.</span>
            </h1>
          </div>

          {/* Subtitle - DM Sans (keeping DM Sans for body text) */}
          <div className="text-center mb-10 md:mb-12">
            <p 
              className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 mb-4 px-4"
              style={{ 
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: '1.5'
              }}
            >
              We deliver technology that grows business,
              <br className="hidden sm:block" />
              <span className="font-bold text-gray-800">not overheads.</span>
            </p>
            
            {/* Gradient line separator */}
            <div className="relative h-1 w-32 md:w-40 mx-auto overflow-hidden rounded-full">
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
          </div>

{/* Video Section */}
<div className="mb-10 md:mb-16 px-4">
  <div className="max-w-4xl mx-auto">
    {/* Title above video - Using Merriweather for title */}
    <div className="text-center mb-6 md:mb-8">
      <h3 
        className="text-lg md:text-xl font-medium text-gray-700 mb-2"
        style={{ 
          fontFamily: "'Merriweather', serif",
          fontWeight: '600'
        }}
      >
        See The Engine in Action
      </h3>
    </div>
    
    <div className="relative rounded-lg md:rounded-xl overflow-hidden shadow-lg bg-gray-100">
      <div className="aspect-video">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
        >
          {/* IMPORTANT: Replace this with your actual video path */}
          <source src="/AW-Video-final.mp4" type="video/mp4" />
          <source src="/AW-Video-final.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback if video fails to load */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 hidden">
          <div className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                <path d="M5 3v18l15-9L5 3z" />
              </svg>
            </div>
            <p 
              className="text-gray-600"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Video preview not available
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      </section>

      {/* Who We Are Section */}
      <section className="py-10 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-8 md:mb-12">
            {/* Section Title - Using Merriweather */}
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-[#7A2E8A]"
              style={{ 
                fontFamily: "'Merriweather', serif",
                fontWeight: '700'
              }}
            >
              Who We Are
            </h2>
            <div className="w-16 md:w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            <div className="relative">
              <div className="rounded-lg md:rounded-xl overflow-hidden shadow-md md:shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50">
                  <img
                    src="https://assets-v2.lottiefiles.com/a/6c18090e-1177-11ee-9e86-ff729e382ebf/iIYslpTKuA.gif"
                    alt="Solution Engine Animation"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="600"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div>
                {/* Title - Using Merriweather */}
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-gray-800"
                  style={{ 
                    fontFamily: "'Merriweather', serif",
                    fontWeight: '700'
                  }}
                >
                  <span className="bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] bg-clip-text text-transparent font-bold">
                    'The Solution Engine'
                  </span>{' '}
                  that your Business deserves!
                </h3>
                {/* Body text - Using DM Sans */}
                <p 
                  className="text-gray-700 text-base md:text-lg mb-4 md:mb-6"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  We're more than just a technology consulting company. Our primary mission is to empower you to achieve your goals.
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>

              <div>
                {/* Subtitle - Using Merriweather */}
                <h4 
                  className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-gray-800"
                  style={{ 
                    fontFamily: "'Merriweather', serif",
                    fontWeight: '600'
                  }}
                >
                  Our three primary focus areas:
                </h4>
                <div className="space-y-4 md:space-y-6">
                  {focusAreas.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 md:gap-4">
                      <div className={`p-2 md:p-3 rounded-lg flex-shrink-0 ${
                        index === 0 ? 'bg-purple-50 text-[#7A2E8A]' :
                        index === 1 ? 'bg-pink-50 text-[#C94FA6]' :
                        'bg-amber-50 text-[#F4A63A]'
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        {/* Item title - Using Merriweather */}
                        <h5 
                          className="font-bold text-gray-800 mb-1 md:mb-2 text-base md:text-lg"
                          style={{ 
                            fontFamily: "'Merriweather', serif",
                            fontWeight: '600'
                          }}
                        >
                          {item.title}
                        </h5>
                        {/* Item description - Using DM Sans */}
                        <p 
                          className="text-gray-600 text-sm md:text-base"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                className="flex items-center gap-2 md:gap-3 px-5 md:px-6 py-3 md:py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] hover:shadow-lg transition-all duration-300 w-fit"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="text-sm md:text-base">LEARN MORE</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-10 md:py-16 px-4 md:px-6 bg-gradient-to-b from-[#FBF5EF] to-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-8 md:mb-12">
            {/* Section Title - Using Merriweather */}
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-[#7A2E8A]"
              style={{ 
                fontFamily: "'Merriweather', serif",
                fontWeight: '700'
              }}
            >
              What We Offer
            </h2>
            <div className="w-16 md:w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] mb-4 md:mb-6"></div>
            
            {/* Subtitle - Using Merriweather */}
            <h3 
              className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4"
              style={{ 
                fontFamily: "'Merriweather', serif",
                fontWeight: '600'
              }}
            >
              Managed IT Services Customized by Industries
            </h3>
            
            <button 
              className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] mx-auto text-sm md:text-base"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span>KNOW MORE</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => handleCardFlip(index)}
              >
                <div className={`transition-all duration-300 rounded-lg md:rounded-xl overflow-hidden h-full border ${
                  flippedCards[index] 
                    ? 'bg-gradient-to-br from-[#7A2E8A] to-[#C94FA6] text-white border-transparent' 
                    : 'bg-white border-gray-200'
                } shadow-sm hover:shadow-md`}>
                  <div className="p-5 md:p-6 flex flex-col items-center text-center h-full">
                    <div className={`mb-3 md:mb-4 p-3 md:p-4 rounded-lg ${
                      flippedCards[index] 
                        ? 'bg-white/20' 
                        : 'bg-gradient-to-br from-purple-50 to-pink-50 text-[#7A2E8A]'
                    }`}>
                      {service.icon}
                    </div>
                    {/* Service title - Using Merriweather */}
                    <h3 
                      className="text-lg md:text-xl font-bold mb-2 md:mb-3"
                      style={{ 
                        fontFamily: "'Merriweather', serif",
                        fontWeight: '600'
                      }}
                    >
                      {service.title}
                    </h3>
                    {/* Service description - Using DM Sans */}
                    <p 
                      className={`text-sm md:text-base ${flippedCards[index] ? 'opacity-90' : 'text-gray-600'}`}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {flippedCards[index] ? service.backContent : service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              className="flex items-center gap-2 md:gap-3 px-5 md:px-6 py-3 md:py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#F4A63A] via-[#C94FA6] to-[#7A2E8A] hover:shadow-lg transition-all duration-300 mx-auto text-sm md:text-base"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span>EXPLORE ALL SERVICES</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-10 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-8 md:mb-12">
            {/* Main title - Using Merriweather */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-[#7A2E8A]"
              style={{ 
                fontFamily: "'Merriweather', serif",
                fontWeight: '900'
              }}
            >
              Get Started
            </h2>
            <div className="w-20 md:w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] mb-4 md:mb-6"></div>
          </div>

          <div className="text-center mb-8 md:mb-12">
            {/* Subtitle - Using Merriweather */}
            <h3 
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-gray-800"
              style={{ 
                fontFamily: "'Merriweather', serif",
                fontWeight: '700'
              }}
            >
              Connect with us
            </h3>
            {/* Body text - Using DM Sans */}
            <p 
              className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              If you have a Project in mind
            </p>
          </div>

          <div className="flex justify-center">
            <button 
              className="flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg text-white bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A] hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
