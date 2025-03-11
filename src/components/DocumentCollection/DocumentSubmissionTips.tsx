
import React from 'react';

const DocumentSubmissionTips = () => {
  return (
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
  );
};

export default DocumentSubmissionTips;
