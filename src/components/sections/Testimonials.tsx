
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const testimonials = [
  {
    name: "Michael Davis",
    business: "Davis Construction",
    quote: "The funding process was incredibly simple. We were approved within 24 hours and had the capital in our account the next day. This allowed us to take on a major project immediately.",
    stars: 5
  },
  {
    name: "Sarah Johnson",
    business: "Organic Wellness Co.",
    quote: "As a small business owner, I was worried about the application process being complicated. It was actually the easiest funding application I've ever completed, and the terms were transparent.",
    stars: 5
  },
  {
    name: "Robert Chen",
    business: "RC Tech Solutions",
    quote: "I needed capital quickly to purchase inventory for a large order. Not only was the approval fast, but the customer service was exceptional throughout the entire process.",
    stars: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-soft-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-soft-green/10 rounded-full blur-3xl"></div>
        <div className="diagonal-pattern opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-funding-dark mb-3">What Our Clients Say</h2>
          <p className="text-funding-gray max-w-2xl mx-auto text-sm md:text-base">
            Join thousands of businesses who have successfully secured funding
          </p>
        </div>
        
        <div className="glass-card p-6 md:p-10 max-w-3xl mx-auto mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-funding-blue/10 to-transparent rounded-bl-full"></div>
          
          <div className="relative">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <blockquote className="mb-6 text-sm md:text-lg text-funding-dark italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-funding-dark">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-funding-gray">{testimonials[currentIndex].business}</p>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border border-funding-light-gray hover:bg-funding-light-gray/50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-funding-dark" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-funding-light-gray hover:bg-funding-light-gray/50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-funding-dark" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <CustomButton size="lg" href="#apply-now">
            Get Pre-Qualified Now
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
