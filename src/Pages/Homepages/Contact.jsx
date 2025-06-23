import { Clock, Phone, Mail, MapPin } from 'lucide-react';
const Contact = () => {
    return (
       <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions? We're here to help. Reach out to us anytime.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">info@healthcare.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-600">123 Medical Center Drive<br />Healthcare City, HC 12345</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">Hours</h4>
                <p className="text-gray-600">Mon-Fri: 8AM-8PM<br />Sat-Sun: 9AM-5PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
    );
};

export default Contact;

