import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="text-center py-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Loved by the world's best teams
      </h2>
      <button className="mt-4 px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
        See all customer stories →
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto px-6">
        <div className="text-left">
          <span className="text-2xl font-bold">vmware</span>
          <div className="h-40">

          <p className="text-gray-700 mt-2">
            “When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”
          </p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/images/logo1.png" alt="User" width={40} height={40} className="rounded-full" />
            <div className="ml-3">
              <p className="font-bold text-black">Roxanne Mustafa</p>
              <p className="text-gray-500 text-sm">Design Team Lead at VMware</p>
            </div>
          </div>
        </div>

        <div className="text-left">
          <span className="text-2xl font-bold">DocuSign</span>
          <div className="h-40">
          <p className="text-gray-700 mt-2">
            “Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”
          </p>
          </div>
          <div className="flex items-center mt-4">
            <Image src="/images/logo2.png" alt="User" width={40} height={40} className="rounded-full" />
            <div className="ml-3">
              <p className="font-bold text-black">Jane Ashley</p>
              <p className="text-gray-500 text-sm">Head of Design at DocuSign</p>
            </div>
          </div>
        </div>

        <div className="text-left">
          <span className="text-2xl font-bold">frog</span>
            <div className="h-40">
          <p className="text-gray-700 mt-2">
            “As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”
          </p>
            </div>
          <div className="flex items-center mt-4">
            <Image src="/images/logo3.png" alt="User" width={40} height={40} className="rounded-full" />
            <div className="ml-3">
              <p className="font-bold text-black">Laura Baird</p>
              <p className="text-gray-500 text-sm">Associate Design Director at Frog</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-[#050038] text-white py-14 px-6 rounded-2xl max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Join 45M+ users today
        </h2>
        <p className="text-gray-300 mt-2">Start for free — upgrade anytime.</p>
        <p className="text-sm underline cursor-pointer mt-1">
          Joining as an organization? Contact Sales
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition">
          Sign up free →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
