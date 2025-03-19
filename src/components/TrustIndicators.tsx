
import { Shield, Clock, Award, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustIndicators = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        damping: 12
      }
    }
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-funding-light-gray/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-soft-blue/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-soft-green/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHptMjAgMjBoMjB2MjBIMjBWMjB6TTAgMjBoMjB2MjBIMFYyMHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative">
        <motion.div 
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-funding-dark mb-3 relative inline-block font-playfair">
            Why Business Owners Trust Us
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-funding-blue/50 to-transparent rounded-full"></div>
          </h2>
          <p className="text-funding-gray max-w-2xl mx-auto text-base md:text-lg mt-6">
            Growth Path Advisory has helped thousands of businesses secure the funding they need to grow and succeed.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="relative bg-white p-7 rounded-xl flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/80 overflow-hidden group"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-bl-full opacity-50 transition-all duration-300 group-hover:opacity-80 group-hover:scale-110"></div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-full mb-4 relative z-10 shadow-inner">
              <Clock className="h-7 w-7 text-[#2F54EB]" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-funding-dark mb-2 relative z-10">Quick Approvals</h3>
            <p className="text-funding-gray text-sm md:text-base relative z-10">
              Get approved in as little as 24 hours with minimal paperwork
            </p>
          </motion.div>
          
          <motion.div 
            className="relative bg-white p-7 rounded-xl flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/80 overflow-hidden group"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-50 rounded-bl-full opacity-50 transition-all duration-300 group-hover:opacity-80 group-hover:scale-110"></div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-full mb-4 relative z-10 shadow-inner">
              <Shield className="h-7 w-7 text-[#2F54EB]" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-funding-dark mb-2 relative z-10">Secure Process</h3>
            <p className="text-funding-gray text-sm md:text-base relative z-10">
              Bank-level security protects your information at every step
            </p>
          </motion.div>
          
          <motion.div 
            className="relative bg-white p-7 rounded-xl flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/80 overflow-hidden group"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-green-50 rounded-bl-full opacity-50 transition-all duration-300 group-hover:opacity-80 group-hover:scale-110"></div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-full mb-4 relative z-10 shadow-inner">
              <BarChart className="h-7 w-7 text-[#2F54EB]" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-funding-dark mb-2 relative z-10">Flexible Terms</h3>
            <p className="text-funding-gray text-sm md:text-base relative z-10">
              Customized funding solutions that fit your business needs
            </p>
          </motion.div>
          
          <motion.div 
            className="relative bg-white p-7 rounded-xl flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/80 overflow-hidden group"
            variants={itemVariants}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-amber-50 rounded-bl-full opacity-50 transition-all duration-300 group-hover:opacity-80 group-hover:scale-110"></div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-4 rounded-full mb-4 relative z-10 shadow-inner">
              <Award className="h-7 w-7 text-[#2F54EB]" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-funding-dark mb-2 relative z-10">Expert Support</h3>
            <p className="text-funding-gray text-sm md:text-base relative z-10">
              Dedicated advisors guide you through the entire process
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white py-8 px-6 md:px-10 max-w-4xl mx-auto rounded-xl shadow-xl border border-white/80 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzR2Nmg2di02aC02em02IDZ2Nmg2di02aC02em0tMTItMTJ2Nmg2di02aC02eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
            
            <div className="relative">
              <p className="font-medium text-lg md:text-xl text-funding-dark mb-6">
                "Our lending partners have helped over 10,000 businesses secure more than $500 million in funding"
              </p>
              
              <motion.div 
                className="grid grid-cols-2 gap-6 md:flex md:flex-wrap md:justify-center md:gap-12 mt-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div className="flex flex-col items-center group" variants={statVariants}>
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-funding-blue to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">87%</span>
                  <span className="text-sm md:text-base text-funding-gray mt-1">Approval Rate</span>
                </motion.div>
                <motion.div className="flex flex-col items-center group" variants={statVariants}>
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-funding-blue to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">24 hrs</span>
                  <span className="text-sm md:text-base text-funding-gray mt-1">Average Approval Time</span>
                </motion.div>
                <motion.div className="flex flex-col items-center group" variants={statVariants}>
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-funding-blue to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">$57k</span>
                  <span className="text-sm md:text-base text-funding-gray mt-1">Average Funding Amount</span>
                </motion.div>
                <motion.div className="flex flex-col items-center group" variants={statVariants}>
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-funding-blue to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">4.9/5</span>
                  <span className="text-sm md:text-base text-funding-gray mt-1">Customer Rating</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;
