import { FaCheck } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: 'Custom Endmill Manufacturing',
      description: 'State-of-the-art manufacturing of custom endmills tailored to your specifications',
      features: [
        'Custom geometries',
        'Specialized coating',
        'Precision grinding',
        'Quality assurance'
      ],
      image: 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80'
    },
    {
      title: 'Tool Reconditioning',
      description: 'Expert reconditioning services to extend tool life and maintain precision',
      features: [
        'Edge restoration',
        'Surface treatment',
        'Performance testing',
        'Quality control'
      ],
      image: 'https://images.unsplash.com/photo-1589792923962-537704632910?auto=format&fit=crop&q=80'
    },
    {
      title: 'Engineering Consultation',
      description: 'Expert guidance for optimal tool selection and process optimization',
      features: [
        'Process analysis',
        'Tool selection',
        'Performance optimization',
        'Technical support'
      ],
      image: 'https://images.unsplash.com/photo-1589793080380-6089f6eb360e?auto=format&fit=crop&q=80'
    },
    {
      title: 'Surface Treatment',
      description: 'Advanced coating solutions for enhanced tool performance',
      features: [
        'PVD coating',
        'Surface finishing',
        'Wear resistance',
        'Enhanced durability'
      ],
      image: 'https://images.unsplash.com/photo-1590959651057-aaa98cd04fb2?auto=format&fit=crop&q=80'
    },
    {
      title: 'Quality Testing',
      description: 'Comprehensive quality control and performance testing',
      features: [
        'Dimensional inspection',
        'Material analysis',
        'Performance testing',
        'Documentation'
      ],
      image: 'https://images.unsplash.com/photo-1590959651057-aaa98cd04fb2?auto=format&fit=crop&q=80'
    },
    {
      title: 'Custom Solutions',
      description: 'Specialized solutions for unique manufacturing challenges',
      features: [
        'Custom design',
        'Prototype development',
        'Process integration',
        'Ongoing support'
      ],
      image: 'https://images.unsplash.com/photo-1590959651057-aaa98cd04fb2?auto=format&fit=crop&q=80'
    }
  ];

  const specifications = [
    'Diameter range: 0.1mm - 25mm',
    'Length-to-diameter ratio: Up to 30:1',
    'Surface roughness: Ra 0.1 μm',
    'Geometric tolerance: ±0.002mm',
    'Cutting edge radius: 0.003mm - 0.015mm',
    'Multiple flute configurations',
    'Various helix angles available',
    'Custom relief angles'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565439371467-61a8857372e3?auto=format&fit=crop&q=80"
            alt="Manufacturing"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-2">Our Services</h1>
          <p className="text-xl text-gray-300">
            Precision Engineering Solutions for Modern Manufacturing
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <FaCheck className="text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Capabilities */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">Technical Capabilities</h2>
              <img
                src="https://images.unsplash.com/photo-1589793080380-6089f6eb360e?auto=format&fit=crop&q=80"
                alt="Technical Specifications"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <ul className="space-y-3">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Enhance Your Manufacturing Process?
          </h2>
          <p className="text-gray-100 mb-8">Contact our experts for personalized solutions</p>
          <button className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition">
            Contact Our Experts →
          </button>
        </div>
      </div>
    </div>
  );
}