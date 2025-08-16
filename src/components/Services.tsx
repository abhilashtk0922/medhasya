import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CodeBracketIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  PhotoIcon,
  MagnifyingGlassIcon,
  ShareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Website Development',
    description: 'Custom websites built with modern technologies and best practices.',
    icon: CodeBracketIcon,
    details: {
      features: [
        'Responsive Web Design',
        'E-commerce Solutions',
        'Content Management Systems',
        'Custom Web Applications',
        'Website Maintenance',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      process: [
        'Initial Consultation',
        'Design & Planning',
        'Development',
        'Testing & Quality Assurance',
        'Deployment',
        'Ongoing Support'
      ]
    }
  },
  {
    title: 'Content Creation',
    description: 'Engaging content that tells your story and connects with your audience.',
    icon: DocumentTextIcon,
    details: {
      features: [
        'Blog Writing',
        'Social Media Content',
        'Email Marketing',
        'Technical Writing',
        'Copywriting',
        'Content Strategy'
      ],
      technologies: ['SEO Tools', 'Content Management', 'Analytics'],
      process: [
        'Content Planning',
        'Research',
        'Writing & Creation',
        'Editing & Review',
        'Publication',
        'Performance Analysis'
      ]
    }
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing services for your marketing needs.',
    icon: VideoCameraIcon,
    details: {
      features: [
        'Commercial Videos',
        'Social Media Content',
        'Product Showcases',
        'Event Coverage',
        'Motion Graphics',
        'Color Grading'
      ],
      technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'],
      process: [
        'Project Brief',
        'Footage Review',
        'Editing',
        'Color Correction',
        'Sound Design',
        'Final Delivery'
      ]
    }
  },
  {
    title: 'Photo Editing',
    description: 'High-quality photo editing and retouching services.',
    icon: PhotoIcon,
    details: {
      features: [
        'Photo Retouching',
        'Color Correction',
        'Background Removal',
        'Product Photography',
        'Portrait Enhancement',
        'Bulk Editing'
      ],
      technologies: ['Adobe Photoshop', 'Lightroom', 'Capture One'],
      process: [
        'Image Selection',
        'Basic Editing',
        'Advanced Retouching',
        'Color Grading',
        'Quality Check',
        'Delivery'
      ]
    }
  },
  {
    title: 'SEO',
    description: 'Search engine optimization to improve your online visibility.',
    icon: MagnifyingGlassIcon,
    details: {
      features: [
        'Keyword Research',
        'On-page SEO',
        'Technical SEO',
        'Link Building',
        'Local SEO',
        'Performance Tracking'
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Screaming Frog'],
      process: [
        'SEO Audit',
        'Strategy Development',
        'Implementation',
        'Content Optimization',
        'Link Building',
        'Performance Monitoring'
      ]
    }
  },
  {
    title: 'Social Media Management',
    description: 'Comprehensive social media management and strategy.',
    icon: ShareIcon,
    details: {
      features: [
        'Content Strategy',
        'Community Management',
        'Paid Advertising',
        'Analytics & Reporting',
        'Influencer Marketing',
        'Crisis Management'
      ],
      technologies: ['Social Media Platforms', 'Analytics Tools', 'Scheduling Software'],
      process: [
        'Strategy Development',
        'Content Planning',
        'Content Creation',
        'Community Engagement',
        'Performance Analysis',
        'Strategy Refinement'
      ]
    }
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="section bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading heading-2 mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary/50 p-6 rounded-xl hover:bg-primary/70 transition-colors duration-300 cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading heading-3 mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-primary rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <selectedService.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="heading heading-2">{selectedService.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="heading heading-3 mb-4">Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.details.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <span className="text-accent">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="heading heading-3 mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.details.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="heading heading-3 mb-4">Our Process</h4>
                    <div className="space-y-3">
                      {selectedService.details.process.map((step, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent text-sm font-medium">
                            {index + 1}
                          </span>
                          <span className="text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services; 