const ProductsServices = () => {
  const services = [
    {
      icon: '🤖',
      title: 'AI-Driven Trading Signals',
      description: 'Harness the power of AI to receive real-time trading signals based on comprehensive market analysis.',
    },
    {
      icon: '📉',
      title: 'Risk Assessment',
      description: 'Identify and mitigate potential risks with our advanced risk assessment tools.',
    },
    {
      icon: '📈',
      title: 'Portfolio Optimization',
      description: 'Optimize your investment portfolio with data-driven strategies designed to maximize returns.',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsServices;