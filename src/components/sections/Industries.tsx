import React from 'react';

const IndustriesWeServe = () => {
    const industries = [
      {
        name: 'Hedge Funds',
        description: 'Providing advanced analytics for superior trading strategies.',
      },
      {
        name: 'Asset Management Firms',
        description: 'Optimizing portfolios for maximum returns.',
      },
      {
        name: 'Institutional Traders',
        description: 'Delivering real-time insights for informed decision-making.',
      },
    ];
  
    return (
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default IndustriesWeServe;