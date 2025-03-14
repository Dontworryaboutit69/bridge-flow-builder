
import { Star } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const testimonials = [
  {
    name: "Franklyn D Jackson",
    business: "Action Jackson Septic LLC",
    quote: "The funding process was incredibly simple. We were approved within 24 hours and had the capital in our account the next day. This allowed us to take on a major project immediately.",
    stars: 5
  },
  {
    name: "Arturo Rendon",
    business: "Aaffordable Landscaping LLC",
    quote: "As a small business owner, I was worried about the application process being complicated. It was actually the easiest funding application I've ever completed, and the terms were transparent.",
    stars: 5
  },
  {
    name: "Robin Thomas",
    business: "Watch Me Grow, LLC",
    quote: "I needed capital quickly to purchase inventory for a large order. Not only was the approval fast, but the customer service was exceptional throughout the entire process.",
    stars: 5
  }
];

const Testimonials = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-funding-blue/10 to-transparent rounded-bl-full"></div>
              
              <div className="relative">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="mb-6 text-sm md:text-lg text-funding-dark italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <p className="font-medium text-funding-dark">{testimonial.name}</p>
                  <p className="text-sm text-funding-gray">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
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
