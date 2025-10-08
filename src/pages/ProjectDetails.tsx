import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    category: 'design',
    image: 'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Standard Chartered Bank',
    description: 'Spatial design for activation agency managing annual reports, showcase booths, and VIP areas',
    fullDescription: 'Engaged on a project basis to deliver spatial design for the activation agency. Managed the print output to ensure on-brand color rendition. Delivered the annual reports events 2021-2023, showcase booths as well as the VIP area for SC Nairobi Marathon 2022 & 2023. The work required precise attention to brand guidelines and coordination with multiple stakeholders to create immersive brand experiences.',
    client: 'Standard Chartered Bank',
    date: '2021-2023',
    gallery: [
      'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 2,
    category: 'social-media',
    image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Momentum Credit',
    description: 'Year-long social media contract ensuring consistent brand application across sub-brands',
    fullDescription: 'Engaged on a year-long social media contract to ensure that the newly created brand is consistently applied across all the different sub-brands. Delivered 20 artworks for each of the 5 sub-brands on the 15th of every month to ensure ample time for approvals and corrections. The work included stock photo selection, stitching and manipulation, delivery of interactive carousels, and captivating holiday-themed posts.',
    client: 'Momentum Credit',
    date: '2023-2024',
    gallery: [
      'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6120205/pexels-photo-6120205.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 3,
    category: 'branding',
    image: 'https://images.pexels.com/photos/8297488/pexels-photo-8297488.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Snow International',
    description: 'Complete brand communication redesign for chemical company across African countries',
    fullDescription: 'Engaged by a chemical company based in various African countries to assist with fixing their various brand communications. Comprehensive deliverables included brand design, product labels, flyers and posters, social media content, and dealer store design. The rebrand helped establish a cohesive identity across multiple markets and standardized their visual presence throughout the region.',
    client: 'Snow International',
    date: '2023',
    gallery: [
      'https://images.pexels.com/photos/8297488/pexels-photo-8297488.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 4,
    category: 'branding',
    image: 'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'PureDrop KE',
    description: 'Full branding exercise for a new water purification company',
    fullDescription: 'Engaged on a complete branding exercise for a new water purification company. Deliverables included logo design, accompanying brand assets, communication design, and flyers and posters. The clean, modern aesthetic reflects the purity and quality of their water purification solutions, creating a trustworthy brand presence in the market.',
    client: 'PureDrop KE',
    date: '2023',
    gallery: [
      'https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 5,
    category: 'design',
    image: 'https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Chemraw EA LTD',
    description: 'Company profile design for chemical manufacturing and distribution',
    fullDescription: 'Created a comprehensive company profile for a chemical manufacturing and distributor of international chemicals. The project included document layout design and professional photography to showcase their facilities and products. The resulting profile presents a professional image that builds trust with international partners and clearly communicates their capabilities.',
    client: 'Chemraw EA LTD',
    date: '2023',
    gallery: [
      'https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 6,
    category: 'branding',
    image: 'https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Lemik Leasing Ltd',
    description: 'Complete brand architecture from logo to website for female-founded company',
    fullDescription: 'Engaged by a female founder to help craft her brand and create a solid foundation through all the creative touchpoints. Comprehensive deliverables included logo design, accompanying brand assets, communication collateral, website design, and LinkedIn brand building. The project established a strong, professional presence in the leasing industry while maintaining an approachable, modern aesthetic.',
    client: 'Lemik Leasing Ltd',
    date: '2024',
    gallery: [
      'https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 7,
    category: 'branding',
    image: 'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Aspirelle Business',
    description: 'Brand design for financial training practice targeted at women',
    fullDescription: 'Engaged on a branding exercise for a financial training practice targeted at women. They needed a brand that was able to capture their essence and empower their audience. Deliverables included logo design, accompanying brand assets, and portfolio design. The warm, approachable branding reflects their mission to make financial education accessible and empowering for women.',
    client: 'Aspirelle Business',
    date: '2024',
    gallery: [
      'https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6120213/pexels-photo-6120213.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 8,
    category: 'legal',
    image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Banja & Co. Advocates',
    description: 'Complete branding and portfolio design for a legal practice',
    fullDescription: 'Engaged by the name partner on a comprehensive branding exercise for a legal practice. They needed a strong brand and a well-laid out portfolio. Deliverables included logo design, typography and iconography, portfolio design, and website design. The sophisticated branding conveys professionalism and trustworthiness essential for a legal practice while standing out in a competitive market.',
    client: 'Banja & Co. Advocates',
    date: '2024',
    gallery: [
      'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8111848/pexels-photo-8111848.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 9,
    category: 'design',
    image: 'https://images.pexels.com/photos/6069509/pexels-photo-6069509.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Arimis',
    description: 'Self-initiated rebrand project for the famous Arimis brand',
    fullDescription: 'A self-initiated project for the rebrand of the famous Arimis brand. This passion project explored modern design approaches to refresh a well-known brand identity. Deliverables included logo redesign, brand elements, and product label designs. The rebrand maintains brand recognition while bringing a contemporary edge and demonstrating creative problem-solving abilities.',
    client: 'Self-Initiated',
    date: '2024',
    gallery: [
      'https://images.pexels.com/photos/6069509/pexels-photo-6069509.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3738369/pexels-photo-3738369.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?auto=compress&cs=tinysrgb&w=800'
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
