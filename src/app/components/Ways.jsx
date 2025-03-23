'use client';
import React from 'react';

const WorkWaysSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto flex justify-end items-center h-[600px] px-6 bg-custom">
      <div className="text-right max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The Ways <br /> We Work</h2>
        <p className="text-gray-600 mt-2">
          How has our relationship with work changed?
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          View the report →
        </button>
      </div>
    </section>
  );
};

export default WorkWaysSection;
