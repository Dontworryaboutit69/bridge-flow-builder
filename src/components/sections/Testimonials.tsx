import { ChevronRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I was approved for $75,000 in less than 24 hours. The process was incredibly simple and straightforward.",
      author: "Franklyn Jackson",
      business: "Action Jackson Septic",
      rating: 5,
      gradient: "bg-gradient-to-br from-soft-blue/20 to-soft-purple/10"
    },
    {
      quote: "After being rejected by three banks, Growth Path Advisory got me the funding I needed to expand my business. Forever grateful!",
      author: "Arturo Rendon",
      business: "AAffordable Landscape",
      rating: 5,
      gradient: "bg-gradient-to-br from-soft-peach/20 to-soft-yellow/10"
    },
    {
      quote: "The team was professional and responsive. They found the perfect funding solution for my situation when no one else could.",
      author: "Sarah Mitchell",
      business: "Bright Ideas Marketing",
      rating: 5,
      gradient: "bg-gradient-to-br from-soft-green/20 to-soft-blue/10"
    }
  ];

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-gradient-to-br from-white to-funding-light-gray/50 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 md:w-96 h-72 md:h-96 bg-soft-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 md:w-96 h-72 md:h-96 bg-soft-yellow/10 rounded-full blur-3xl"></div>
        <div className="diagonal-pattern opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-funding-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-funding-gray max-w-2xl mx-auto">
            Hundreds of business owners have grown their businesses with our funding solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`glass-card p-6 md:p-8 animate-fade-in ${testimonial.gradient} hover-scale`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-funding-dark mb-4 italic">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-semibold text-funding-dark">{testimonial.author}</p>
                <p className="text-funding-gray text-sm">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
