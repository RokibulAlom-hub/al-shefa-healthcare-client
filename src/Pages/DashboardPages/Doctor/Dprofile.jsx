import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// Mock data - replace with your actual hooks
const Dprofile = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: docProfile,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["docProfile"],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/doc-pharma/${user?.email}`
      );
      // console.log(response);
      
      return response?.data;
    },
  });
  // console.log(docProfile);
  
  if (isLoading)
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin h-8 w-8 border-2 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  if (error)
    return (
      <div className="text-center py-8 text-red-500">Error loading profile</div>
    );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">My Profile</h1>

      {docProfile?.map((doc) => (
        <div key={doc.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
            <img
              src={doc.avatar || "/api/placeholder/150/150"}
              alt={doc.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold">{doc.name}</h2>
              <p className="text-gray-600">{doc.specialization}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-sm">{doc?.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm">{doc?.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm">{doc?.qualification}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm">{doc?.specialization}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm">{doc?.experience}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dprofile;
