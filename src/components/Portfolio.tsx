import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Sample portfolio items (replace with your actual portfolio items)
const portfolioItems = [
  {
    id: 1,
    title: 'E-commerce Website',
    category: 'Web Development',
    image: 'https://i.pinimg.com/736x/63/74/67/6374679559ffaacd9909a26a60926bd1.jpg',
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'Design',
    image: 'https://i.pinimg.com/736x/66/c6/59/66c659001d7fb9eb8c3a175ab72ca003.jpg',
  },
  {
    id: 3,
    title: 'Social Media Management',
    category: 'SMM',
    image: 'https://i.pinimg.com/736x/82/97/0f/82970fb771980f551b8958bd7cf3fd92.jpg',
  },
  {
    id: 4,
    title: 'UI/UX Design',
    category: 'UI/UX',
    image: 'https://i.pinimg.com/736x/ea/25/b9/ea25b95af7a45615c15e1d2f37a50a15.jpg',
  },
  {
    id: 5,
    title: 'Video Production',
    category: 'Video',
    image: 'https://i.pinimg.com/736x/06/00/31/060031346b68afbb1ff198c745961692.jpg',
  },
  {
    id: 6,
    title: 'SEO Campaign',
    category: 'Optimization',
    image: 'https://i.pinimg.com/736x/15/ca/08/15ca088d08ac2312b5bd98a8aa8336b2.jpg',
  },
];

const categories = ['All', 'Web Development', 'Design', 'Marketing', 'UI/UX', 'Video'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading heading-2 mb-4">Our Portfolio</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-primary'
                  : 'bg-secondary text-white hover:bg-accent/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-accent text-sm font-medium mb-2">{item.category}</span>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="heading heading-3 text-white">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 