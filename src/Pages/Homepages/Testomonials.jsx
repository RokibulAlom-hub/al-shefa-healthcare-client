import {  Star } from 'lucide-react';
const Testomonials = () => {
    const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "The care I received was exceptional. The staff was professional, caring, and made me feel comfortable throughout my treatment.",
      rating: 5,
      role: "Patient"
    },
    {
      name: "John Roberts",
      text: "Outstanding medical services! The doctors are knowledgeable and the facilities are top-notch. Highly recommend!",
      rating: 5,
      role: "Patient"
    },
    {
      name: "Maria Garcia",
      text: "Quick response time and excellent emergency care. They truly saved my life. Forever grateful to this amazing team.",
      rating: 5,
      role: "Emergency Patient"
    }
  ];
    return (
         <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied patients who trust us with their health
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-blue-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Testomonials;