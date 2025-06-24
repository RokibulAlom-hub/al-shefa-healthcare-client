import React, { useState } from "react";
import { Filter, Search } from "lucide-react";
import DoctorCard from "./DoctorCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
// Main AllDoctorsToShow Component
const AllDoctorsToShow = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const axiosPublic = useAxiosPublic();

  const { data: doctors } = useQuery({
    queryKey: "doctorBio",
    queryFn: async() => {
      const response =await axiosPublic.get("/doctors");
      console.log(response);
      return response?.data;
    },
  });

  const specialties = [
    "All",
    "Cardiologist",
    "Emergency Medicine",
    "Family Medicine",
    "Orthopedic Surgery",
    "Pediatrics",
    "Dermatology",
  ];

  // Filter and sort doctors
  const filteredDoctors = doctors
    ?.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSpecialty =
        selectedSpecialty === "All" || doctor.specialty === selectedSpecialty;
      return matchesSearch && matchesSpecialty;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "rating":
          return b.rating - a.rating;
        case "experience":
          return b.experience - a.experience;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-off-cream">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Our Medical Team
            </h1>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Meet our experienced healthcare professionals dedicated to
              providing exceptional medical care
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-gray h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search doctors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-light-gray rounded-xl focus:ring-2 focus:ring-coral focus:border-coral outline-none"
                />
              </div>

              {/* Specialty Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-gray h-5 w-5" />
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-light-gray rounded-xl focus:ring-2 focus:ring-coral focus:border-coral outline-none appearance-none bg-white"
                >
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-light-gray rounded-xl focus:ring-2 focus:ring-coral focus:border-coral outline-none appearance-none bg-white"
              >
                <option value="name">Sort by Name</option>
                <option value="experience">Sort by Experience</option>
              </select>
            </div>

            {/* Results count */}
            <div className="text-center text-warm-gray mb-8">
              Showing {filteredDoctors?.length} doctor
              {filteredDoctors?.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors?.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDoctorsToShow;
