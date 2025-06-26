import { useQuery } from "@tanstack/react-query";
import { BriefcaseMedical } from "lucide-react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const DoctorsInHompage = () => {
  const axiosPublic = useAxiosPublic();
  const { data: doctors = [] } = useQuery({
    queryKey: "doctorBio",
    queryFn: async () => {
      const response = await axiosPublic.get("/doctors");
      return response?.data;
    },
  });

  return (
    <section className="py-12 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-text mb-2">
            Meet Our Expert Doctors
          </h2>
          <p className="text-base sm:text-lg text-secondary-text max-w-xl mx-auto">
            Our experienced medical professionals are dedicated to providing
            exceptional care
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.slice(0, 6).map((doctor) => (
            <div
              key={doctor.id}
              className="bg-card-bg rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"
              role="article"
              aria-labelledby={`${doctor.id}-title`}
            >
              <img
                src={doctor.image}
                alt={`Dr. ${doctor.name}`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3
                id={`${doctor.id}-title`}
                className="text-lg font-semibold text-primary-text mb-2"
              >
                {doctor.name}
              </h3>
              <p className="text-sm text-link font-medium mb-4">
                {doctor.specialty}
              </p>
              <div className="flex items-center justify-center mb-4">
                <BriefcaseMedical
                  className="h-5 w-5 text-success"
                  aria-hidden="true"
                />
                <span className="ml-1 text-sm text-secondary-text">
                  {doctor.qualification}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/ourDoctors"
            className="inline-block bg-secondary-btn text-btn-text px-6 py-3 rounded hover:bg-[#805AD5] transition"
            aria-label="See more doctors"
          >
            See More Doctors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsInHompage;
