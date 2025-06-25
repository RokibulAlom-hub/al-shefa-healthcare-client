import { ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/bannerImg.jpg";

const Banner = () => {
  return (
    <section
      className="relative bg-section-bg bg-cover bg-no-repeat py-10 sm:py-16 min-h-[70vh] md:min-h-[80vh] flex items-center"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-text bg-opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text and Buttons */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-btn-text mb-4 leading-tight">
              Your Health, Our <span className="text-link">Priority</span>
            </h1>
            <p className="text-base sm:text-lg text-btn-text mb-6 max-w-lg mx-auto md:mx-0">
              Experience world-class healthcare with our expert medical team. We
              provide comprehensive medical services with compassion and
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link
                to="/dash/appoinments"
                className="bg-primary-btn text-btn-text px-6 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-hover transition-colors flex items-center justify-center"
                aria-label="Book Appointment"
              >
                Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/ourDoctors"
                className="border-2 border-primary-btn text-primary-btn px-6 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-primary-btn hover:text-btn-text transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Rigt column: card */}
          <div className="hidden md:block">
            <div className="bg-card-bg rounded-2xl shadow-xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300 max-w-sm mx-auto">
              <div className="bg-section-bg rounded-xl p-4 mb-4">
                <Heart className="h-12 w-12 text-primary-btn mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-primary-text text-center mb-2">
                24/7 Care
              </h3>
              <p className="text-secondary-text text-center text-sm">
                Always here when you need us most
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;