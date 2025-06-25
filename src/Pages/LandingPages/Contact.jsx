import { Clock, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: Mail, label: "Email", value: "info@healthcare.com" },
    { icon: MapPin, label: "Address", value: "123 Medical Center Dr, HC 12345" },
    { icon: Clock, label: "Hours", value: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM" },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="py-12 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-text mb-2">
            Get In Touch
          </h2>
          <p className="text-secondary-text max-w-md mx-auto">
            Have questions? Reach out to us anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start p-3 hover:bg-card-bg rounded-lg">
                <item.icon className="h-5 w-5 text-primary-btn mr-3" aria-hidden="true" />
                <div>
                  <h4 className="text-sm font-semibold text-primary-text">{item.label}</h4>
                  <p className="text-sm text-secondary-text">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-card-bg rounded-lg p-5">
            <form onSubmit={onSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-3 py-2 rounded border border-border focus:outline-none focus:ring-1 focus:ring-primary-btn"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-3 py-2 rounded border border-border focus:outline-none focus:ring-1 focus:ring-primary-btn"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded border border-border focus:outline-none focus:ring-1 focus:ring-primary-btn"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full px-3 py-2 rounded border border-border focus:outline-none focus:ring-1 focus:ring-primary-btn"
              />
              <button
                type="submit"
                className="w-full bg-primary-btn text-btn-text py-2 rounded hover:bg-hover transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;