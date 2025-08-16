import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Kiran Kumar K',
    role: 'CEO, Nandi Agrotech',
    image: 'https://tse4.mm.bing.net/th/id/OIP.lX6wmXIXG0oZxJmzTNAChAHaFq?pid=Api&P=0&h=180',
    quote: `The team's creativity and technical expertise are unmatched. They delivered a website that exceeded our expectations.`,
  },
  {
    id: 2,
    name: 'Shashi Kumar',
    role: 'Founder, Shashi Adda',
    image: 'https://tse2.mm.bing.net/th/id/OIP.IlyBAPanNZbgpzW26uYJdAHaE8?pid=Api&P=0&w=300&h=300',
    quote: `Working with this team was a game-changer for our business. Their attention to detail and innovative solutions helped us achieve our goals.`,
  },
  
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-accent">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg text-accent">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 