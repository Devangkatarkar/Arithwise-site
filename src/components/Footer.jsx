import { motion } from 'framer-motion';
import { Home, Users, Briefcase, BarChart3, Code, Cloud, Database, Cpu, MapPin, Mail, Phone, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FBF5EF] text-headings py-12 px-6 md:px-12 border-t border-muted/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <img 
            src="/Logo.png" 
            alt="Arithwise Logo" 
            className="h-16 w-auto mb-6 md:h-20" 
          />
          <div className="text-muted text-sm max-w-md flex items-start">
            Where Arithmetic meets Wisdom - Your Solution Engine for transformative technology.
          </div>
        </motion.div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Useful Links Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-cta flex items-center">
              <Home className="w-5 h-5 mr-2" />
              Useful Links
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Home className="w-4 h-4 mr-2 text-muted" />
                <a href="#" className="text-muted hover:text-primary-cta transition-colors duration-200">
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-muted" />
                <a href="#" className="text-muted hover:text-primary-cta transition-colors duration-200">
                  About
                </a>
              </li>
              <li className="flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-muted" />
                <a href="#" className="text-muted hover:text-primary-cta transition-colors duration-200">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-cta flex items-center">
              <Briefcase className="w-5 h-5 mr-2" />
              Services
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <BarChart3 className="w-4 h-4 mr-2 text-muted" />
                <a href="#" className="text-muted hover:text-primary-cta transition-colors duration-200">
                  Data Analytics
                </a>
              </li>
              <li className="flex items-center">
                <Code className="w-4 h-4 mr-2 text-muted" />
                <a href="#" className="text-muted hover:text-primary-cta transition-colors duration-200">
                  Programming
                </a>
              </li>
              <li className="flex items-center">
                <Cloud className="w-4 h-4 mr-2 text-muted" />
                <a href="#" className="text-muted hover:text-primary-cta transition-colors duration-200">
                  Cloud
                </a>
              </li>
              <li className="flex items-center">
                <Database className="w-4 h-4 mr-2 text-muted" />
                <a href="#" className="text-muted hover:text-primary-cta transition-colors duration-200">
                  IT Services
                </a>
              </li>
              <li className="flex items-center">
                <Cpu className="w-4 h-4 mr-2 text-muted" />
                <a href="#" className="text-muted hover:text-primary-cta transition-colors duration-200">
                  Techno Functional Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-primary-cta flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Contact Info
            </h3>
            <div className="text-muted space-y-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#7A2E8A' }} />
                <div>
                  <div className="font-semibold text-headings mb-2">arithwise Solutions Pvt Ltd</div>
                  <div className="text-sm space-y-1">
                    <div>1st Floor, 'Sadguru' building, Plot No 91-D,</div>
                    <div>Metro Pole 52, Karve Nagar road, Fetri, Somalwada,</div>
                    <div>Nr Bank of Maharashtra, off Wardha Road</div>
                    <div>Nagpur - 440025</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#7A2E8A' }} />
                  <div className="space-y-1">
                    <div>
                      <a href="mailto:info@arithwise.com" className="hover:text-primary-cta transition-colors block">
                        info@arithwise.com
                      </a>
                    </div>
                    <div>
                      <a href="mailto:career@arithwise.com" className="hover:text-primary-cta transition-colors block">
                        career@arithwise.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#7A2E8A' }} />
                  <div className="space-y-1">
                    <div>
                      <a href="tel:+919987020905" className="hover:text-primary-cta transition-colors block">
                        +91-9987020905
                      </a>
                    </div>
                    <div>
                      <a href="tel:+919987000905" className="hover:text-primary-cta transition-colors block">
                        +91-9987000905
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-muted/20 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-muted text-sm flex items-center justify-center">
          © Copyrights {currentYear} @ arithwise. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
