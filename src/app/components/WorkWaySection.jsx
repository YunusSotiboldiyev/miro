import Image from 'next/image';

const WorkWaySection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">
        Built for the way you work
      </h2>

      <div className="flex flex-wrap gap-3 mb-8">
        {[
          'Brainstorming',
          'Diagramming',
          'Meetings & Workshops',
          'Scrum Events',
          'Mapping',
          'Research & Design',
          'Strategic Planning',
        ].map((tab, index) => (
          <button
            key={index}
            className="px-4 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-100"
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-3">Brainstorming</h3>
          <p className="text-gray-600 mb-4">
            Unleash creative ideas and build on them with the help of sticky notes,
            images, mind maps, videos, drawing capabilities — the list goes on.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Learn more →
          </a>
        </div>

        <div>
          <Image
            src="/images/brainstorm.png" 
            alt="Brainstorming Session"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkWaySection;
