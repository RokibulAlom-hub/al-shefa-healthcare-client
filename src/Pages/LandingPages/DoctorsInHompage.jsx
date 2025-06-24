import { Star } from 'lucide-react';
const DoctorsInHompage = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      image: "👩‍⚕️",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Emergency Medicine",
      rating: 4.8,
      image: "👨‍⚕️",
    },
    {
      name: "Dr. Emily Davis",
      specialty: "Family Medicine",
      rating: 4.9,
      image: "👩‍⚕️",
    },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our experienced medical professionals are dedicated to providing
            exceptional care
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl mb-4">{doctor.image}</div>
              <h3 className="text-2xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-blue-600 font-medium mb-4">
                {doctor.specialty}
              </p>
              <div className="flex items-center justify-center mb-6">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-600">{doctor.rating}</span>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                Book Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsInHompage;
