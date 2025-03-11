
import React from 'react';

const DocumentHeader = () => {
  return (
    <div className="flex flex-col items-center mb-6 md:mb-10">
      <h1 className="text-2xl md:text-4xl font-bold text-funding-dark mb-4">
        Document Collection
      </h1>
      <p className="text-funding-gray max-w-2xl mx-auto text-center">
        Please upload the required documents to complete your funding application
      </p>
    </div>
  );
};

export default DocumentHeader;
