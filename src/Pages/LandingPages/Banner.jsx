import { Heart, ArrowRight } from "lucide-react";
import bannerImg from "../../assets/bannerImg.jpg"
const Banner = () => {
  return (
    <section className="bg-[#FFF9F5] py-10 relative bg-cover bg-no-repeat " style={{
          backgroundImage: `url(${bannerImg})`,
          height: "90vh",
        }}>
      <div className="container mx-auto px-4" >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center z-20 absolute" >
          <div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Your Health, Our <span className="text-blue-600">Priority</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Experience world-class healthcare with our expert medical team. We
              provide comprehensive medical services with compassion and
              excellence.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition flex items-center">
                Book Appointment <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg hover:bg-blue-600 hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
          {/* <div className="">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-blue-100 rounded-xl p-6 mb-4">
                <Heart className="h-16 w-16 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-center mb-2">
                24/7 Care
              </h3>
              <p className="text-gray-600 text-center">
                Always here when you need us most
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
