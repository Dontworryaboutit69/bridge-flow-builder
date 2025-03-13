
import React from 'react';

type DetailItem = {
  label: string;
  value: string | number | boolean | null | undefined;
};

type ApplicationDetailSectionProps = {
  title: string;
  data: DetailItem[];
};

const ApplicationDetailSection: React.FC<ApplicationDetailSectionProps> = ({ title, data }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h4 className="text-lg font-medium text-gray-900 mb-4">{title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="bg-white rounded-md p-4 shadow-sm">
            <p className="text-sm font-medium text-gray-500">{item.label}</p>
            <p className="mt-1 text-sm text-gray-900">
              {item.value !== null && item.value !== undefined && item.value !== '' 
                ? String(item.value) 
                : 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationDetailSection;
