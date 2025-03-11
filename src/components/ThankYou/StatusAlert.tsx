
import React from 'react';
import { CheckCircle } from 'lucide-react';

type StatusAlertProps = {
  documentsSubmitted: boolean;
};

const StatusAlert = ({ documentsSubmitted }: StatusAlertProps) => {
  if (documentsSubmitted) {
    return (
      <div className="bg-green-50 border border-green-100 rounded-lg p-5 text-left">
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircle className="h-6 w-6 text-green-500" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">Documents Received</h3>
            <div className="mt-2 text-sm text-green-700">
              <p>
                Your documents have been successfully submitted. A funding specialist will reach out to you within 24 hours to discuss next steps. You may also schedule a consultation using the button above.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-5 text-left">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">Important</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Please upload your documents as soon as possible to avoid delays in processing your application. A funding specialist will contact you within 24 hours at the phone number you provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusAlert;
