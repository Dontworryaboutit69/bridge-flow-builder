
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import CustomButton from '@/components/ui/CustomButton';
import { ArrowRight, Upload, FileCheck, File, FileText, CalendarClock, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

type Document = {
  id: string;
  name: string;
  description: string;
  uploaded: boolean;
  required: boolean;
};

const DocumentCollection = () => {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 'bank-statements',
      name: 'Last 3 Bank Statements',
      description: 'Most recent 3 months of business bank statements',
      uploaded: false,
      required: true,
    },
    {
      id: 'photo-id',
      name: 'Photo ID',
      description: 'Driver\'s license, passport, or government-issued photo ID',
      uploaded: false,
      required: true,
    },
    {
      id: 'business-license',
      name: 'Business License',
      description: 'Valid business license or registration',
      uploaded: false,
      required: false,
    },
    {
      id: 'tax-returns',
      name: 'Business Tax Returns',
      description: 'Most recent business tax return (if available)',
      uploaded: false,
      required: false,
    },
    {
      id: 'profit-loss',
      name: 'Profit & Loss Statement',
      description: 'Year-to-date profit and loss statement',
      uploaded: false,
      required: false,
    },
  ]);

  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const schedulingLink = "https://api.leadconnectorhq.com/widget/bookings/soniab";

  const handleUpload = (id: string) => {
    // Simulate file upload
    setUploadingId(id);
    setTimeout(() => {
      setDocuments(docs => docs.map(doc => 
        doc.id === id ? { ...doc, uploaded: true } : doc
      ));
      setUploadingId(null);
    }, 1500);
  };

  const allRequiredUploaded = documents
    .filter(doc => doc.required)
    .every(doc => doc.uploaded);

  const handleScheduleAppointment = () => {
    window.location.href = schedulingLink;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-36 pb-8 md:pb-16 bg-funding-light-gray/30 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-soft-peach/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-soft-blue/20 rounded-full blur-3xl"></div>
          <div className="dot-pattern"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-10 relative">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-funding-dark mb-4">
              Document Collection
            </h1>
            <p className="text-funding-gray max-w-2xl mx-auto">
              Please upload the required documents to complete your funding application
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-10">
            <div className="col-span-2">
              <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mb-6">
                <h2 className="text-xl font-bold text-funding-dark mb-6">Required Documents</h2>
                
                <div className="space-y-4">
                  {documents.map(doc => (
                    <div 
                      key={doc.id}
                      className={`p-4 rounded-lg border ${doc.uploaded ? 'bg-green-50 border-green-100' : 'bg-white border-funding-light-gray'}`}
                    >
                      <div className="flex items-start">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${doc.uploaded ? 'bg-green-100 text-green-600' : 'bg-funding-blue/10 text-funding-blue'}`}>
                          {doc.uploaded ? <FileCheck className="w-5 h-5" /> : <File className="w-5 h-5" />}
                        </div>
                        <div className="ml-4 flex-grow">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-funding-dark">
                              {doc.name} {doc.required && <span className="text-red-500">*</span>}
                            </h3>
                            {doc.uploaded ? (
                              <span className="text-sm text-green-600 font-medium flex items-center">
                                <FileCheck className="w-4 h-4 mr-1" />
                                Uploaded
                              </span>
                            ) : (
                              <CustomButton
                                size="sm"
                                onClick={() => handleUpload(doc.id)}
                                disabled={uploadingId === doc.id}
                                isLoading={uploadingId === doc.id}
                                className="py-1 px-3 h-auto"
                              >
                                <Upload className="w-4 h-4 mr-1" />
                                Upload
                              </CustomButton>
                            )}
                          </div>
                          <p className="text-sm text-funding-gray mt-1">{doc.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-funding-light-gray">
                  <p className="text-sm text-funding-gray mb-4">
                    <span className="text-red-500">*</span> Required documents
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">
                      {documents.filter(d => d.uploaded).length} of {documents.length} documents uploaded
                    </p>
                    {allRequiredUploaded ? (
                      <CustomButton 
                        className="group"
                      >
                        Submit Documents
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </CustomButton>
                    ) : (
                      <CustomButton 
                        disabled
                      >
                        Submit Documents
                      </CustomButton>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8">
                <h2 className="text-xl font-bold text-funding-dark mb-4">Document Submission Tips</h2>
                <ul className="space-y-3 text-funding-gray">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-funding-blue/10 text-funding-blue flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                      <span className="text-xs">1</span>
                    </div>
                    <span>Make sure all documents are clear, legible, and complete.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-funding-blue/10 text-funding-blue flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                      <span className="text-xs">2</span>
                    </div>
                    <span>File formats accepted: PDF, JPG, PNG (max 10MB per file).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-funding-blue/10 text-funding-blue flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                      <span className="text-xs">3</span>
                    </div>
                    <span>Bank statements must show your business name, account number, and transaction history.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-funding-blue/10 text-funding-blue flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                      <span className="text-xs">4</span>
                    </div>
                    <span>Your application will be processed faster with all supporting documents.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 mb-6">
                <h2 className="text-xl font-bold text-funding-dark mb-4">Need Help?</h2>
                <p className="text-funding-gray mb-6">
                  Our funding specialists are available to assist you with document collection and answer any questions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-funding-blue mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-funding-dark">Call Us</p>
                      <p className="text-sm text-funding-gray">
                        <a href="tel:+15735333894" className="hover:text-funding-blue">1-573-533-3894</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-funding-blue mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-funding-dark">Business Hours</p>
                      <p className="text-sm text-funding-gray">Mon-Fri: 9am - 6pm EST</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-funding-light-gray">
                  <p className="font-medium text-center text-funding-dark mb-4">
                    Schedule a Document Review Call
                  </p>
                  <CustomButton 
                    onClick={handleScheduleAppointment}
                    className="w-full"
                  >
                    <CalendarClock className="mr-2 w-4 h-4" />
                    Schedule Call
                  </CustomButton>
                </div>
              </div>
              
              <div className="bg-funding-blue/5 rounded-2xl p-6 md:p-8 border border-funding-blue/10">
                <h2 className="text-xl font-bold text-funding-dark mb-4">Application Status</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mr-3">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-funding-dark">Application Submitted</p>
                      <p className="text-xs text-funding-gray">May 15, 2023</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-funding-blue/10 text-funding-blue flex items-center justify-center flex-shrink-0 mr-3">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-funding-dark">Document Collection</p>
                      <p className="text-xs text-funding-gray">In Progress</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start opacity-50">
                    <div className="w-6 h-6 rounded-full bg-funding-light-gray text-funding-gray flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-xs">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-funding-dark">Review & Approval</p>
                      <p className="text-xs text-funding-gray">Pending</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start opacity-50">
                    <div className="w-6 h-6 rounded-full bg-funding-light-gray text-funding-gray flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-xs">4</span>
                    </div>
                    <div>
                      <p className="font-medium text-funding-dark">Funding</p>
                      <p className="text-xs text-funding-gray">Pending</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-funding-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo className="mb-4 justify-start" />
              <p className="text-gray-400 mb-4">
                Helping businesses grow with fast, flexible funding solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/GrowthPathAdvisory" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://twitter.com/GrowthPathAdv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/growth-path-advisory" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Funding Options</h3>
              <ul className="space-y-2">
                <li><a href="/#funding-products" className="text-gray-400 hover:text-white">Term Loans</a></li>
                <li><a href="/#funding-products" className="text-gray-400 hover:text-white">Merchant Cash Advances</a></li>
                <li><a href="/#funding-products" className="text-gray-400 hover:text-white">Lines of Credit</a></li>
                <li><a href="/#funding-products" className="text-gray-400 hover:text-white">Equipment Financing</a></li>
                <li><a href="/#funding-products" className="text-gray-400 hover:text-white">Invoice Factoring</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="/#benefits" className="text-gray-400 hover:text-white">Benefits</a></li>
                <li><a href="/#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="/#terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="/#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 mt-0.5" />
                  <span><a href="tel:+15735333894" className="hover:text-white">1-573-533-3894</a></span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 mt-0.5" />
                  <span><a href="mailto:info@growthpathadvisory.com" className="hover:text-white">info@growthpathadvisory.com</a></span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                  <span>Orlando, FL 32810</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Growth Path Advisory. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/#terms" className="hover:text-white">Terms of Service</a>
              <a href="/#privacy" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DocumentCollection;
