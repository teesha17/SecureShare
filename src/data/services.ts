import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'on-site-maintenance',
    name: 'On-Site Maintenance',
    description: 'Professional maintenance service at your facility, minimizing downtime and ensuring optimal performance of your homogenizers and processing equipment.',
    features: [
      'Equipment inspection and diagnostics',
      'Preventive maintenance procedures',
      'Component replacement and repairs',
      'Performance testing and calibration',
      'Operator training and recommendations',
      'Documentation and service reports'
    ],
    imageUrl: 'https://images.pexels.com/photos/8961438/pexels-photo-8961438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'off-site-service',
    name: 'Off-Site Service & Repairs',
    description: 'Comprehensive repair and overhaul services at our specialized workshop, offering thorough inspection, repair, and testing of your equipment.',
    features: [
      'Complete disassembly and inspection',
      'Thorough cleaning of all components',
      'Precision machining and repairs',
      'Component replacement with OEM parts',
      'Complete reassembly and testing',
      'Detailed service documentation'
    ],
    imageUrl: 'https://images.pexels.com/photos/3846033/pexels-photo-3846033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'amc-contracts',
    name: 'Annual Maintenance Contracts (AMC)',
    description: 'Customized maintenance programs to ensure continuous operation and extend equipment lifespan with scheduled preventive maintenance.',
    features: [
      'Scheduled preventive maintenance visits',
      'Priority emergency response',
      'Discounted spare parts and labor',
      'Regular performance reports',
      'Extended warranty coverage',
      'Operator training sessions'
    ],
    imageUrl: 'https://images.pexels.com/photos/5324964/pexels-photo-5324964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'spare-parts',
    name: 'Spare Parts Availability',
    description: 'Quick access to genuine spare parts for all major homogenizer brands, ensuring minimal downtime and maintaining equipment performance.',
    features: [
      'Extensive inventory of OEM parts',
      'Cross-reference compatibility database',
      'Express shipping options',
      'Bulk order discounts',
      'Parts warranty program',
      'Technical documentation'
    ],
    imageUrl: 'https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];