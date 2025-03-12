import { FileText, CheckCircle, DollarSign, ArrowRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
const HowItWorks = () => {
  const steps = [{
    icon: <FileText className="w-7 h-7 md:w-8 md:h-8 text-funding-blue" />,
    title: "1. Quick Application",
    description: "Fill out our simple application in just 2 minutes with basic business information.",
    delay: 0,
    bgGradient: "from-soft-blue/20 to-soft-green/10"
  }, {
    icon: <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-funding-blue" />,
    title: "2. Fast Approval",
    description: "Get pre-approved in as little as 1 hour with minimal documentation required.",
    delay: 0.1,
    bgGradient: "from-soft-purple/20 to-soft-pink/10"
  }, {
    icon: <DollarSign className="w-7 h-7 md:w-8 md:h-8 text-funding-blue" />,
    title: "3. Receive Funding",
    description: "Once approved, funds can be deposited into your account within 24 hours.",
    delay: 0.2,
    bgGradient: "from-soft-peach/20 to-soft-yellow/10"
  }];
  return <section id="how-it-works" className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 md:w-96 h-72 md:h-96 bg-soft-green/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 md:w-96 h-72 md:h-96 bg-soft-blue/10 rounded-full blur-3xl"></div>
        <div className="grid-pattern opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-funding-dark mb-4">Finally... A Simple Process</h2>
          <p className="text-funding-gray max-w-2xl mx-auto">
            Get pre-qualified in minutes with our simple process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => <div key={index} className={`glass-card p-6 md:p-8 flex flex-col items-center text-center animate-fade-in bg-gradient-to-br ${step.bgGradient} hover-scale`} style={{
          animationDelay: `${step.delay}s`
        }}>
              <div className="bg-white/80 p-3 md:p-4 rounded-full mb-5 md:mb-6">
                {step.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-funding-dark mb-2 md:mb-3">{step.title}</h3>
              <p className="text-funding-gray">{step.description}</p>
            </div>)}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <CustomButton size="lg" href="#apply-now">
            Get Pre-Qualified
            <ArrowRight className="ml-2 w-4 h-4" />
          </CustomButton>
        </div>
      </div>
    </section>;
};
export default HowItWorks;