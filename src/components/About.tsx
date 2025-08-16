import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/1200x/d7/77/b1/d777b1ae613ab78011429fb98cecfcab.jpg"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading heading-2 mb-6">About Our Agency</h2>
            <p className="text-gray-300 mb-6 text-justify">
              We are a team of passionate digital experts dedicated to helping
              businesses thrive in the digital age. With years of experience and a
              deep understanding of the latest technologies and trends, we create
              innovative solutions that drive results.
            </p>
            <p className="text-gray-300 mb-8 text-justify">
              Our mission is to empower businesses with cutting-edge digital
              solutions that not only look great but also deliver measurable
              results. We believe in building long-term partnerships with our
              clients and helping them achieve their goals through strategic
              digital solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="heading heading-3 text-accent mb-2">10+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div>
                <h3 className="heading heading-3 text-accent mb-2">5+</h3>
                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div>
                <h3 className="heading heading-3 text-accent mb-2">2+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div>
                <h3 className="heading heading-3 text-accent mb-2">5+</h3>
                <p className="text-gray-300">Team Members</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;