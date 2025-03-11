
import { ChevronRight, CalendarClock } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

const CTASection = ({ bgClass = "bg-white" }) => {
  const schedulingLink = "https://api.leadconnectorhq.com/widget/bookings/soniab";

  return (
    <section className={`py-12 md:py-16 ${bgClass} relative overflow-hidden`}>
      <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-funding-dark mb-6">
          Ready to Grow Your Business?
        </h2>
        <p className="text-funding-gray mb-8 md:text-lg">
          Get the funding you need with flexible options tailored to your specific business requirements.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CustomButton href="#apply-now" size="lg" fullWidth className="sm:w-auto">
            Get Pre-Qualified
            <ChevronRight className="ml-1 w-4 h-4" />
          </CustomButton>
          <CustomButton 
            href={schedulingLink} 
            target="_blank" 
            rel="noopener noreferrer"
            variant="outline" 
            size="lg"
            fullWidth
            className="sm:w-auto"
          >
            Schedule Consultation
            <CalendarClock className="ml-1 w-4 h-4" />
          </CustomButton>
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-soft-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-soft-pink/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default CTASection;
