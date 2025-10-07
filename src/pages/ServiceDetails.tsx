import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Camera, Palette, Share2, Globe, Film, Mic, Paintbrush, Check } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    icon: Palette,
    title: 'Logo & Identity',
    description: 'Unique brand identities that stand out',
    fullDescription: 'We create distinctive brand identities that capture the essence of your business. Our comprehensive logo and identity design services ensure your brand makes a lasting impression across all touchpoints. From concept to final delivery, we develop cohesive visual systems that resonate with your target audience.',
    color: 'yellow',
    features: [
      'Custom logo design',
      'Brand style guide',
      'Color palette development',
      'Typography selection',
      'Business card design',
      'Brand application mockups'
    ],
    process: [
      'Discovery & Research',
      'Concept Development',
      'Design Refinement',
      'Final Delivery & Guidelines'
    ],
    examples: [
      'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 2,
    icon: Palette,
    title: 'Graphic Design',
    description: 'Eye-catching visuals for all media',
    fullDescription: 'Our graphic design services transform ideas into compelling visual communications. Whether you need marketing materials, digital graphics, or print design, we deliver creative solutions that capture attention and communicate effectively. We blend creativity with strategy to ensure your message resonates.',
    color: 'blue',
    features: [
      'Marketing collateral',
      'Social media graphics',
      'Infographic design',
      'Presentation design',
      'Print materials',
      'Digital illustrations'
    ],
    process: [
      'Brief & Objectives',
      'Creative Exploration',
      'Design Execution',
      'Review & Finalization'
    ],
    examples: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 3,
    icon: Share2,
    title: 'Social Media',
    description: 'Engaging content that drives interaction',
    fullDescription: 'We create compelling social media content that builds your online presence and engages your audience. From strategic planning to content creation, we help brands tell their story across all social platforms with consistency and creativity that drives results.',
    color: 'yellow',
    features: [
      'Content strategy',
      'Post design & graphics',
      'Story templates',
      'Video content',
      'Carousel posts',
      'Ad creative design'
    ],
    process: [
      'Platform Analysis',
      'Content Planning',
      'Creative Production',
      'Performance Optimization'
    ],
    examples: [
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 4,
    icon: Globe,
    title: 'Web Design',
    description: 'Beautiful digital experiences',
    fullDescription: 'We design modern, responsive websites that combine aesthetics with functionality. Our web design services focus on creating intuitive user experiences that look great on any device while achieving your business goals. From landing pages to full websites, we deliver digital experiences that convert.',
    color: 'blue',
    features: [
      'Responsive design',
      'UI/UX design',
      'Wireframing & prototyping',
      'Mobile-first approach',
      'Design systems',
      'Interactive elements'
    ],
    process: [
      'Discovery & Planning',
      'Wireframing & Architecture',
      'Visual Design',
      'Prototype & Testing'
    ],
    examples: [
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 5,
    icon: Camera,
    title: 'Photography',
    description: 'Stunning shots that tell your story',
    fullDescription: 'Professional photography services for all your visual needs. We capture compelling images that tell your story and showcase your products, people, or places in the best light. Our photographers combine technical expertise with artistic vision to deliver images that make an impact.',
    color: 'yellow',
    features: [
      'Product photography',
      'Portrait & headshots',
      'Event coverage',
      'Commercial shoots',
      'Photo editing & retouching',
      'Digital delivery'
    ],
    process: [
      'Concept Discussion',
      'Location & Setup',
      'Photoshoot Execution',
      'Editing & Delivery'
    ],
    examples: [
      'https://images.pexels.com/photos/1152854/pexels-photo-1152854.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 6,
    icon: Film,
    title: 'Videography',
    description: 'Compelling stories through video',
    fullDescription: 'Professional video production services that bring your stories to life. From concept to final edit, we handle all aspects of video creation including filming, editing, color grading, and sound design. Whether it\'s a commercial, documentary, or promotional video, we deliver cinematic quality.',
    color: 'blue',
    features: [
      'Commercial videos',
      'Brand storytelling',
      'Event videography',
      'Drone footage',
      'Color grading',
      'Motion graphics'
    ],
    process: [
      'Pre-production Planning',
      'Filming & Production',
      'Post-production Editing',
      'Final Review & Delivery'
    ],
    examples: [
      'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 7,
    icon: Mic,
    title: 'Audio Design',
    description: 'Immersive soundscapes and audio',
    fullDescription: 'Professional audio design and production services for various media. We create custom soundscapes, music compositions, and audio branding that enhance your content. From podcasts to commercials, we ensure your audio is crisp, clear, and impactful.',
    color: 'yellow',
    features: [
      'Sound design',
      'Music composition',
      'Voice-over production',
      'Podcast editing',
      'Audio branding',
      'Mixing & mastering'
    ],
    process: [
      'Audio Brief',
      'Recording & Production',
      'Editing & Enhancement',
      'Final Mix & Delivery'
    ],
    examples: [
      'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3784221/pexels-photo-3784221.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1481305/pexels-photo-1481305.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 8,
    icon: Paintbrush,
    title: 'Mural Art',
    description: 'Large-scale art that transforms spaces',
    fullDescription: 'Custom mural art and street art services that transform spaces into visual experiences. We work on projects of all scales, from small interior walls to large building facades. Our artists combine traditional techniques with contemporary styles to create unique, lasting artworks.',
    color: 'blue',
    features: [
      'Custom mural design',
      'Interior & exterior',
      'Large-scale artwork',
      'Street art style',
      'Weatherproof materials',
      'Site preparation'
    ],
    process: [
      'Concept & Sketch',
      'Site Assessment',
      'Painting & Execution',
      'Final Protection Coating'
    ],
    examples: [
      'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
];

export default function ServiceDetails() {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === Number(id));

  if (!service) {
    return (
      <div className="pt-24 sm:pt-32 py-16 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">Service Not Found</h2>
          <Link to="/services" className="text-yellow-400 font-bold hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="pt-24 sm:pt-32 py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-white font-bold mb-8 hover:text-yellow-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Services
        </Link>

        <div className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl">
          <div className={`relative p-12 ${service.color === 'yellow' ? 'bg-gradient-to-br from-yellow-400 to-yellow-500' : 'bg-gradient-to-br from-blue-500 to-blue-600'}`}>
            <div className="max-w-4xl">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 rounded-lg">
                <Icon className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">{service.title}</h1>
              <p className="text-xl text-white/90">{service.description}</p>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-black text-black mb-6">About This Service</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">{service.fullDescription}</p>

                <h3 className="text-2xl font-black text-black mb-4">What's Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-6 h-6 flex-shrink-0 ${service.color === 'yellow' ? 'text-yellow-400' : 'text-blue-500'}`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className={`p-8 rounded-lg ${service.color === 'yellow' ? 'bg-yellow-50 border-l-4 border-yellow-400' : 'bg-blue-50 border-l-4 border-blue-500'}`}>
                  <h3 className="text-2xl font-black text-black mb-6">Our Process</h3>
                  <div className="space-y-4">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className={`w-8 h-8 flex items-center justify-center font-black ${service.color === 'yellow' ? 'bg-yellow-400 text-black' : 'bg-blue-500 text-white'} rounded-full flex-shrink-0`}>
                          {idx + 1}
                        </span>
                        <p className="text-gray-700 pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-black text-black mb-6">Examples</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.examples.map((img, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`${service.title} example ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-12 border-t border-gray-200 text-center">
              <h3 className="text-2xl font-black text-black mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">Book a consultation to discuss your project</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking"
                  className={`inline-block px-8 py-4 font-black uppercase hover:shadow-xl transition-shadow ${
                    service.color === 'yellow'
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                  }`}
                >
                  Book Now
                </Link>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-gray-100 text-black font-black uppercase hover:bg-gray-200 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
