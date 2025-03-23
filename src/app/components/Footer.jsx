import Image from "next/image";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#050038] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
        <div>
          <h3 className="font-bold mb-3">Product</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Online whiteboard</li>
            <li>Apps & Integrations</li>
            <li>Templates</li>
            <li>Miloverse</li>
            <li>Miro Developer Platform</li>
            <li>Miro for Devices</li>
            <li>Security & Compliance</li>
            <li>Accessibility</li>
            <li>Changelog</li>
            <li className="text-blue-400">View demo →</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Solutions</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Meetings and Workshops</li>
            <li>Brainstorming & Ideation</li>
            <li>Agile Workflows</li>
            <li>Diagramming</li>
            <li>Research & Design</li>
            <li>Strategy & Planning</li>
            <li>Mind Map</li>
            <li>Concept Map</li>
            <li>Online Sticky Notes</li>
            <li>Flowchart</li>
            <li>Wireframing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Miro Academy</li>
            <li>Help Center</li>
            <li>Blog</li>
            <li>Status</li>
            <li>Miro Community</li>
            <li>Miro Professional Network</li>
            <li>Miro Experts Directory</li>
            <li>Miro Events</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About us</li>
            <li>Careers 🚀</li>
            <li>Miro in the News</li>
            <li>Customer Stories</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Plans and Pricing</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Pricing</li>
            <li>Business</li>
            <li>Enterprise</li>
            <li>Consultants</li>
            <li>Education</li>
            <li>Startups</li>
            <li>NPOs</li>
            <li className="text-blue-400">Contact sales →</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 my-6"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-300 text-sm">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaLinkedinIn className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaYoutube className="hover:text-white cursor-pointer" />
          <FaGlobe className="hover:text-white cursor-pointer" />
          <span>EN</span>
        </div>

        <div className="space-x-4">
          <span>© 2022 Miro</span>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Manage Cookies</span>
        </div>

        <div className="flex space-x-4">
          <Image src="/images/apple.png" alt="App Store" width={120} height={40} />
          <Image src="/images/play.png" alt="Google Play" width={120} height={40} />
          <Image src="/images/last.png" alt="logo " width={40} height={40} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
