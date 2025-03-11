
import React from 'react';

type ApplicationReferenceProps = {
  applicationId: string;
  submissionDate: string;
};

const ApplicationReference = ({ applicationId, submissionDate }: ApplicationReferenceProps) => {
  return (
    <div className="bg-funding-blue/5 rounded-xl p-6 border border-funding-blue/10 mb-8">
      <h2 className="text-xl font-bold text-funding-dark mb-4">Application Reference</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">
        <div>
          <p className="text-sm text-funding-gray">Application ID</p>
          <p className="font-medium text-funding-dark">{applicationId}</p>
        </div>
        <div>
          <p className="text-sm text-funding-gray">Submission Date</p>
          <p className="font-medium text-funding-dark">{submissionDate}</p>
        </div>
        <div>
          <p className="text-sm text-funding-gray">Funding Amount</p>
          <p className="font-medium text-funding-dark">$50,000 - $100,000</p>
        </div>
        <div>
          <p className="text-sm text-funding-gray">Status</p>
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            <span className="font-medium text-funding-dark">
              {submissionDate.includes('docs') 
                ? "Documents Under Review" 
                : "Pending Document Verification"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationReference;
