import React from 'react';
import { Link } from 'react-scroll';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/medhasyatechsolutions', icon: FaInstagram },
    { name: 'Youtube', url: 'https://youtube.com/@medhasyatechsolutions?si=tigGqZ2k0U_xrXJJ', icon: FaYoutube },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/medhasya-tech-solutions-41bb83378', icon: FaLinkedin },
  ];

  const footerLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Services', to: 'services' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="bg-primary py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="hero" className="text-2xl font-display font-bold text-accent cursor-pointer">
              MEDHASYA TE<span className="text-white">CH SOLUTIONS</span>
            </Link>
            <p className="text-gray-300 mt-4 max-w-md">
            We create digital experiences that empower businesses to thrive in the modern world. By combining creativity with cutting-edge technology, we turn ideas into powerful, scalable software solutions.
            </p>
          </div>

          {/* Quick Links + Follow Us side by side */}
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {footerLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="text-gray-300 hover:text-accent cursor-pointer transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex flex-col space-y-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="text-xl">{link.icon({})}</span>
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2 md:ml-8">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li>📍 Turuvekere, Tumkur(D), Karnataka, 572227</li>
              <li>📞 +(91) 6361109426 , 9483600376</li>
              <li>
                <a href="mailto:medhasyatechsolutions@gmail.com" className="flex items-center hover:text-accent transition-colors duration-300 break-all">
                  {MdEmail({ className: "w-5 h-5 mr-2" })}
                  medhasyatechsolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex justify-center">
            <p className="text-gray-300">
              © {currentYear} Medhasya Tech Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
