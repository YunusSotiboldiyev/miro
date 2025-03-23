import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-6 py-12">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Take ideas from <br /> <span className="text-blue-600">better to best</span>
        </h1>
        <p className="text-gray-600">
          Miro is your team’s visual platform to connect, collaborate, and create — together.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-full focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
            Sign up free →
          </button>
        </div>

        <p className="text-sm text-gray-500">Collaborate with your team within minutes</p>

        <div className="flex items-center space-x-4">
          <span className="text-yellow-500 text-lg">★★★★★</span>
          <p className="text-gray-600 text-sm">Based on 5149+ reviews</p>
          <Image src="/get-app.png" alt="GetApp" width={20} height={20} />
         <p>Get App</p>
         <p>Capterra</p>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <Image
          src="/hero-image.png" 
          alt="Miro Dashboard"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
