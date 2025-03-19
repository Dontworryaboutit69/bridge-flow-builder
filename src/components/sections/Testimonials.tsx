
import { Star, Quote } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Franklyn D Jackson",
    business: "Action Jackson Septic LLC",
    quote: "The funding process was incredibly simple. We were approved within 24 hours and had the capital in our account the next day. This allowed us to take on a major project immediately.",
    stars: 5,
    color: "from-blue-50 to-purple-50",
    image: "/lovable-uploads/0d1efe81-a8fc-4a8c-8ee9-6c8dcc0c4701.png"
  },
  {
    name: "Arturo Rendon",
    business: "Aaffordable Landscaping LLC",
    quote: "As a small business owner, I was worried about the application process being complicated. It was actually the easiest funding application I've ever completed, and the terms were transparent.",
    stars: 5,
    color: "from-green-50 to-emerald-50",
    image: "/lovable-uploads/451acf52-90c5-4675-b014-d35c439f3382.png"
  },
  {
    name: "Robin Thomas",
    business: "Watch Me Grow, LLC",
    quote: "I needed capital quickly to purchase inventory for a large order. Not only was the approval fast, but the customer service was exceptional throughout the entire process.",
    stars: 5,
    color: "from-amber-50 to-yellow-50",
    image: "/lovable-uploads/910a0a2a-6c75-4d00-a585-e6cc0375c553.png"
  }
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-soft-blue/20 rounded-full blur-3xl transform rotate-12"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-soft-green/20 rounded-full blur-3xl transform -rotate-12"></div>
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em02IDZ2Nmg2di02aC02em0tMTItMTJ2Nmg2di02aC02eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-funding-dark mb-3 relative inline-block font-playfair">
            Client Success Stories
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-funding-blue/50 to-transparent rounded-full"></div>
          </h2>
          <p className="text-funding-gray max-w-2xl mx-auto text-sm md:text-base mt-6">
            Join thousands of businesses who have successfully secured funding with us
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className={`rounded-2xl relative overflow-hidden bg-gradient-to-br ${testimonial.color} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/80`}
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InBhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybikiLz48L3N2Zz4=')]"></div>
              
              <div className="p-8 md:p-10 relative">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-funding-blue rotate-180" />
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="mb-8 text-base md:text-lg text-funding-dark italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="pt-6 border-t border-gray-200/50 flex items-center">
                    {testimonial.image && (
                      <div className="mr-4 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-funding-dark text-lg">{testimonial.name}</p>
                      <p className="text-sm text-funding-gray">{testimonial.business}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center">
          <CustomButton 
            size="lg" 
            href="#apply-now" 
            className="bg-gradient-to-r from-funding-blue to-purple-600 hover:from-funding-blue/90 hover:to-purple-600/90 shadow-lg shadow-funding-blue/20 transform transition-all duration-300 hover:scale-105"
          >
            Get Pre-Qualified Now
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
