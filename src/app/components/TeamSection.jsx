import Image from 'next/image';
import { FaFigma, FaSketch } from "react-icons/fa";
import { SiAdobexd, SiNotion } from 'react-icons/si';
const TeamsSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        Built for all kinds of teams
      </h2>

      <div className="flex flex-wrap gap-3 mb-8">
        {[
          'UX & Design',
          'Marketing',
          'Product Management',
          'Engineering',
          'Consultants',
          'Agile Coaches',
          'Sales',
        ].map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-100 ${
              index === 0 ? 'bg-gray-900 text-white' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <ul className="text-gray-600 space-y-2 mb-4">
            {[
              'Build low-fi wireframes',
              'Involve stakeholders in the design process',
              'Run engaging design workshops',
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                {item}
              </li>
            ))}
          </ul>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Learn more →
          </a>

          <div className="mt-6 flex gap-4">
          <FaSketch />
          <SiAdobexd />
          <FaFigma />
          <SiNotion />
          </div>
        </div>

        <div>
          <Image
            src="/images/div.png" 
            alt="UX & Design"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
