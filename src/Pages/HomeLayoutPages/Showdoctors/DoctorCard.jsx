import {
  Star,
  Clock,
  MapPin,
  Phone,
  Calendar,
  User,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Doctor Image */}
       <div className="relative h-32 flex items-center justify-center mt-2">
                <img
                  src={doctor.image || "https://via.placeholder.com/128"}
                  alt={`Dr. ${doctor.name}`}
                  className="w-32 h-32 rounded-full object-cover"
                />
                {doctor.isAvailable && (
                  <div
                    className="absolute top-2 right-2 bg-success text-btn-text px-2 py-1 rounded-full text-xs font-medium"
                    aria-label={`${doctor.name} is available`}
                  >
                    Available
                  </div>
                )}
              </div>

      {/* Doctor Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800 mb-1">
            {doctor.name}
          </h3>
          <p className="text-coral text-sm font-medium mb-2">
            {doctor.specialty}
          </p>
          <div className="flex items-center text-sm text-warm-gray mb-2">
            <Award className="h-4 w-4 mr-1" />
            <span>{doctor.qualification}</span>
          </div>
          <div className="flex items-center text-sm text-warm-gray">
            <User className="h-4 w-4 mr-1" />
            <span>{doctor.education}</span>
          </div>
        </div>

        {/* Experience & Location */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-warm-gray">
            <Clock className="h-4 w-4 mr-2" />
            <span>{doctor.experience} years experience</span>
          </div>
          <div className="flex items-center text-sm text-warm-gray">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{doctor.location}</span>
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <div className="flex items-center text-sm text-warm-gray">
            <Phone className="h-4 w-4 mr-2" />
            <a
              href={`mailto:${doctor.email}`}
              className="text-coral hover:underline"
            >
              {doctor.email}
            </a>
          </div>
        </div>

        {/* Available Times */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Calendar className="h-4 w-4 mr-2 text-warm-gray" />
            <span className="text-sm font-medium text-slate-800">
              Available Times
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {doctor.availableTimes.slice(0, 3).map((time, idx) => (
              <span
                key={idx}
                className="bg-off-cream text-coral text-xs px-3 py-1 rounded-full font-medium"
              >
                {time}
              </span>
            ))}
            {doctor.availableTimes.length > 3 && (
              <span className="text-xs text-warm-gray">
                +{doctor.availableTimes.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className=" gap-3">
          <Link to={`/appoinment/${doctor?._id}`} className=" bg-red-400 text-white py-2 px-3 rounded-xl font-medium  flex items-center justify-center">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
