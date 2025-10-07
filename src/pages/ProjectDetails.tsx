import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    category: 'photography',
    image: 'https://images.pexels.com/photos/1152854/pexels-photo-1152854.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Urban Portraits',
    description: 'Capturing the essence of city life through intimate portrait photography',
    fullDescription: 'This project explores the raw beauty of urban life through candid and styled portraits. Shot across multiple cities, we captured the diverse stories of individuals who make up the modern metropolis. Using natural light and urban backdrops, each photograph tells a unique story of resilience, creativity, and humanity.',
    client: 'Urban Magazine',
    date: 'January 2024',
    gallery: [
      'https://images.pexels.com/photos/1152854/pexels-photo-1152854.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 2,
    category: 'design',
    image: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Brand Identity',
    description: 'Complete brand identity system for modern businesses',
    fullDescription: 'A comprehensive brand identity project for a tech startup. We developed everything from logo design to brand guidelines, creating a cohesive visual language that represents innovation and reliability. The color palette and typography were carefully selected to convey professionalism while maintaining approachability.',
    client: 'TechStart Inc.',
    date: 'February 2024',
    gallery: [
      'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 3,
    category: 'video',
    image: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Commercial',
    description: 'High-quality commercial video production for brands',
    fullDescription: 'A dynamic commercial video campaign showcasing product innovation and brand values. Shot in 4K with cinematic color grading, this project combines storytelling with stunning visuals. We handled everything from concept development to final post-production, delivering content optimized for both digital and broadcast platforms.',
    client: 'Global Brands Co.',
    date: 'March 2024',
    gallery: [
      'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 4,
    category: 'mural',
    image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Street Art',
    description: 'Large-scale murals transforming urban spaces',
    fullDescription: 'A large-scale mural project that transformed a bare city wall into a vibrant piece of public art. Working with weatherproof materials and bold colors, we created an artwork that celebrates community diversity and cultural heritage. The mural has become a landmark and popular photo spot in the neighborhood.',
    client: 'City Arts Council',
    date: 'April 2024',
    gallery: [
      'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 5,
    category: 'photography',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Fashion',
    description: 'Editorial fashion photography for magazines and brands',
    fullDescription: 'High-fashion editorial shoot featuring bold styling and creative concepts. Shot on location with a team of professional stylists and makeup artists, this project pushed creative boundaries while maintaining commercial appeal. The images were featured in international fashion publications and brand campaigns.',
    client: 'Fashion Forward Magazine',
    date: 'May 2024',
    gallery: [
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 6,
    category: 'design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Digital',
    description: 'Digital design solutions for web and mobile',
    fullDescription: 'A complete digital experience design for a mobile-first application. We crafted intuitive user interfaces with a focus on accessibility and user experience. The design system includes custom iconography, responsive layouts, and micro-interactions that enhance usability across all devices.',
    client: 'AppWorks Studio',
    date: 'June 2024',
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 7,
    category: 'mural',
    image: 'https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Graffiti',
    description: 'Contemporary graffiti art with bold statements',
    fullDescription: 'A contemporary graffiti project that merges traditional street art techniques with modern design principles. Created for an urban renewal initiative, this piece uses bold typography and vibrant colors to make a powerful statement. The work respects graffiti culture while bringing it into a legitimate public art context.',
    client: 'Urban Development Corp',
    date: 'July 2024',
    gallery: [
      'https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1574643/pexels-photo-1574643.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 8,
    category: 'photography',
    image: 'https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Editorial',
    description: 'Editorial photography for publications and media',
    fullDescription: 'Professional editorial photography for a lifestyle publication. This series combines artistic composition with journalistic storytelling, documenting modern living spaces and the people who inhabit them. Each image was carefully crafted to support the written narrative while standing alone as a piece of visual art.',
    client: 'Lifestyle Today',
    date: 'August 2024',
    gallery: [
      'https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="pt-24 sm:pt-32 py-16 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">Project Not Found</h2>
          <Link to="/portfolio" className="text-yellow-400 font-bold hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-32 py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-white font-bold mb-8 hover:text-yellow-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>

        <div className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl">
          <div className="relative h-[400px] sm:h-[500px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block px-4 py-1 bg-yellow-400 text-black text-xs font-bold uppercase mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">{project.title}</h1>
              <p className="text-xl text-gray-200">{project.description}</p>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pb-12 border-b border-gray-200">
              <div className="flex items-start gap-3">
                <User className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase">Client</p>
                  <p className="text-lg font-bold text-black">{project.client}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase">Date</p>
                  <p className="text-lg font-bold text-black">{project.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Tag className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase">Category</p>
                  <p className="text-lg font-bold text-black">{project.category}</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-black text-black mb-6">About This Project</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{project.fullDescription}</p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-black mb-6">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`${project.title} - ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-200 text-center">
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-yellow-400 text-white font-black uppercase hover:shadow-xl transition-shadow"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
