'use client';
import React from 'react';
import Image from 'next/image';

const WorkTogetherSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-12">
      <div>
        <h2 className="text-4xl font-bold text-gray-900">
          Work together, <br /> wherever you work
        </h2>
        <p className="text-gray-600 mt-4">
          In the office, remote, or a mix of the two, with Miro, your team can connect,
          collaborate, and co-create in one space no matter where you are.
        </p>
        <a href="#" className="text-blue-600 mt-6 inline-block font-medium">
          Learn more →
        </a>
      </div>

      <div className="flex justify-center gap-4 relative">
          <Image src="/hybridwork.png" alt="Remote work" width={500} height={300}  />



      </div>
    </section>
  );
};

export default WorkTogetherSection;
