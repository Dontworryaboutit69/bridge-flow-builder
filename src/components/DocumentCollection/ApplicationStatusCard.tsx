
import React from 'react';
import { FileCheck, FileText } from 'lucide-react';

const ApplicationStatusCard = () => {
  return (
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
  );
};

export default ApplicationStatusCard;
