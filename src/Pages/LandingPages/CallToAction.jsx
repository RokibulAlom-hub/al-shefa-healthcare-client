import { Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted");
  };

  return (
    <section className="py-12 bg-primary-btn text-btn-text">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Stethoscope className="h-10 w-10 text-card-bg" aria-hidden="true" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Ready to Start Your Healthcare Journey?
        </h2>
        <p className="text-sm sm:text-base text-primary-text mb-6 max-w-md mx-auto">
          Book an appointment today or sign up for updates on our services.
        </p>
        <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded border border-border text-primary-text focus:outline-none focus:ring-1 focus:ring-card-bg"
          />
          <Link
            to="/appointments"
            className="bg-card-bg text-primary-btn py-2 px-6 rounded hover:bg-hover hover:text-btn-text transition"
          >
            Book Now
          </Link>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;