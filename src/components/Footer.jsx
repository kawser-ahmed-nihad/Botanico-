import { Facebook, Instagram, Send, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-5 text-sm">
        {/* Company */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Careers</li>
           
          </ul>
        </div>

       
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Support</h3>
          <ul className="space-y-2">
            <li>Help + FAQs</li>
            <li>Returns</li>
            <li>Contact Support</li>
          </ul>
        </div>

        <div className=" flex gap-2 mt-6"> 
            <Youtube />
            <Facebook/>
            <Instagram />
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Stay in the loop</h3>
          <p className="mb-4 text-sm text-gray-600">
             plant-parenting tips, and more.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-b border-gray-400 py-2 pr-10 bg-transparent focus:outline-none"
            />
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2">
              <Send/>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
