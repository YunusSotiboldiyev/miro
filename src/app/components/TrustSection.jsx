const TrustSection = () => {
    return (
      <section className="bg-[#FFD400] text-black py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why companies large <br /> and small trust Miro
        </h2>
        <p className="mt-2 text-sm underline cursor-pointer">
          Contact Sales to request a demo
        </p>
  
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-12 max-w-5xl mx-auto px-6">
          <div>
            <h3 className="text-3xl font-bold">ISO</h3>
            <p className="text-sm mt-2">ISO-27001 enterprise-grade security compliant</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">#1</h3>
            <p className="text-sm mt-2">Visual Collaboration Platform on G2</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">99%</h3>
            <p className="text-sm mt-2">of the Fortune 100 are customers</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1,000+</h3>
            <p className="text-sm mt-2">community- and expert-built templates</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">45M+</h3>
            <p className="text-sm mt-2">users around the world</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p className="text-sm mt-2">integrations with technology partners</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustSection;
  