'use client';
import {  SiVolvo , SiCisco,SiWalmart  } from "react-icons/si"; 
import React from 'react';

const CollaborateSection = () => {
  return (
    <section className="  px-6 py-16 text-center ">
      <p className="text-gray-500 mb-6">Trusted by 45M+ users</p>
      <div className="flex justify-center gap-6 text-gray-800 text-4xl">
        <SiWalmart  className="text-5xl"/>
        <SiCisco /> 
        <SiVolvo  />
        <p className="text-xl">doloitte . </p>
        <p className="text-xl">okta </p>
      </div>

      <div className="relative mt-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Collaborate without constraints
        </h2>
        <span className="absolute -top-2 right-20 text-xs bg-yellow-300 px-2 py-1 rounded-md text-black">
          YOUR IDEA STARTS HERE
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8 text-left">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Free forever</h3>
          <p className="text-gray-600 mt-2">
            Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates.
            <a href="#" className="text-blue-600"> See pricing plans.</a>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Easy integrations</h3>
          <p className="text-gray-600 mt-2">
            Miro has 100+ integrations with tools you already use like G Suite, Slack, and Jira.
            <a href="#" className="text-blue-600"> View Marketplace.</a>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Security first</h3>
          <p className="text-gray-600 mt-2">
            We treat your data with industry-leading security standards.
            <a href="#" className="text-blue-600"> Learn more.</a>
          </p>
        </div>
      </div>

      <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
        Sign up free →
      </button>
    </section>
  );
};

export default CollaborateSection;
