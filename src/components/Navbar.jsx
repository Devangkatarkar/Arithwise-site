import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onNavigate, activePage: externalActivePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState('normal');
  const [activeItem, setActiveItem] = useState(externalActivePage || 'Home');
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMobileMenuOpen(false); // Close menu on desktop
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (isMobile) {
        setScrolled(currentScrollY > 10);
        if (currentScrollY > 50) {
          setNavbarHeight('shrinked');
        } else {
          setNavbarHeight('normal');
        }
      } else {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setNavbarHeight('shrinked');
        } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
          setNavbarHeight('normal');
        }
        setScrolled(currentScrollY > 20);
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  useEffect(() => {
    if (externalActivePage) {
      setActiveItem(externalActivePage);
    }
  }, [externalActivePage]);

  const navItems = ['Home', 'Overview', 'Solutions', 'Sign In', 'Audiowise'];

  const handleNavigation = (item) => {
    setActiveItem(item);
    onNavigate && onNavigate(item);
    setMobileMenuOpen(false); // Close menu after navigation
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className={`fixed w-full z-50 px-4 sm:px-6 lg:px-16 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#FBF5EF]/60 backdrop-blur-md shadow-sm border-b border-white/10'  
            : 'bg-[#FBF5EF]'
        }`}
        style={{
          paddingTop: navbarHeight === 'shrinked' ? (isMobile ? '0.5rem' : '0.75rem') : (isMobile ? '1rem' : '1.25rem'),
          paddingBottom: navbarHeight === 'shrinked' ? (isMobile ? '0.5rem' : '0.75rem') : (isMobile ? '1rem' : '1.25rem'),
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <motion.a 
            href="#"
            className="flex items-center cursor-pointer z-50"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('Home');
            }}
            whileHover={{ scale: 1.05 }}
            animate={{
              scale: navbarHeight === 'shrinked' ? 0.95 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            role="button"
            aria-label="Home"
          >
            <div className="relative flex items-center">
              <motion.img 
                src="/Logo.png" 
                alt="Arithwise Logo" 
                className="h-10 w-auto md:h-12 lg:h-14"
                animate={{
                  scale: navbarHeight === 'shrinked' ? 0.9 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
            animate={{
              gap: navbarHeight === 'shrinked' ? '1rem' : '1.5rem',
            }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => handleNavigation(item)}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  activeItem === item 
                    ? 'text-[#7A2E8A]' 
                    : 'text-gray-700 hover:text-[#7A2E8A]'
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                whileHover={{ y: -2 }}
              >
                {item}
                
                {activeItem === item && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            
            {/* Connect Button */}
            <motion.button
              onClick={() => handleNavigation('Connect')}
              transition={{ type: 'spring', stiffness: 400 }}
              className="relative"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              aria-label="Connect"
            >
              <div className="rounded-full p-[1.5px]">
                <div
                  className="rounded-full px-6 py-2 flex items-center justify-center"
                  style={{
                    background: 'transparent',
                  }}
                >
                  <div
                    className="rounded-full px-6 py-2 flex items-center justify-center"
                    style={{
                      background: 'transparent',
                      WebkitBackgroundClip: 'text'
                    }}
                  >
                    <span
                      className="text-sm font-bold bg-clip-text"
                      style={{
                        background: 'linear-gradient(90deg,#7A2E8A,#C94FA6,#F4A63A)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      Connect
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  padding: '1.5px',
                  background: 'linear-gradient(135deg, #7A2E8A, #C94FA6, #F4A63A)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              />
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button - Says "Matrix" */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden px-4 py-2 bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] text-white rounded-lg text-sm font-bold relative z-50 flex items-center gap-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <>
                <X className="w-4 h-4" />
                <span>Close</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4" />
                <span>Matrix</span>
              </>
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && isMobile && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {/* Menu Header */}
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-[#FBF5EF] to-white">
              <h3 className="font-bold text-lg text-gray-800 text-center">Navigation Matrix</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] mx-auto mt-2 rounded-full"></div>
            </div>
            
            {/* Menu Items */}
            <div className="p-4 space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                    activeItem === item
                      ? 'bg-gradient-to-r from-[#7A2E8A]/10 to-[#C94FA6]/10 text-[#7A2E8A]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium">{item}</span>
                  {activeItem === item && (
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6] rounded-full"></div>
                  )}
                </motion.button>
              ))}
              
              {/* Connect Button in Mobile Menu */}
              <motion.button
                onClick={() => handleNavigation('Connect')}
                className="w-full mt-4 relative"
                whileTap={{ scale: 0.98 }}
              >
                <div className="rounded-xl overflow-hidden">
                  <div className="p-[1.5px] bg-gradient-to-r from-[#7A2E8A] via-[#C94FA6] to-[#F4A63A]">
                    <div className="bg-white rounded-xl px-6 py-3 flex items-center justify-center">
                      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7A2E8A] to-[#C94FA6]">
                        Connect with Us
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            </div>
            
            {/* Menu Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50/50">
              <p className="text-xs text-gray-500 text-center">
                Your Solution Engine Navigation
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay when menu is open */}
      <AnimatePresence>
        {mobileMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
