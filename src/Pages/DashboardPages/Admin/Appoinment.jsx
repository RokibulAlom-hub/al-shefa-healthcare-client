import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Appoinment = () => {
  const [appoinments, setappoinments] = useState(null);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosSecure.get("/appoinments");
        setappoinments(response.data);
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    fetchUsers();
  }, [axiosSecure]);
  //status change update operation
  const handleStatusChange = async (appoinmentId, newStatus) => {
    try {
      const response = await axiosSecure.patch(`/update-appoinment/${appoinmentId}`);
      if (response.ok) {
        setappoinments(
          appoinments.map((appoinment) =>
            appoinment?._id === appoinmentId ? { ...appoinment, status: newStatus } : appoinment
          )
        );
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (!appoinments) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        All Appoinments ({appoinments.length})
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-3 text-left">#</th>
              <th className="border border-gray-300 p-3 text-left">
                Patient
              </th>
              <th className="border border-gray-300 p-3 text-left">Doctor</th>
              <th className="border border-gray-300 p-3 text-left">Date</th>
              <th className="border border-gray-300 p-3 text-left">Time</th>
              <th className="border border-gray-300 p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {appoinments.map((appoinmentData, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3">{index + 1}</td>
                <td className="border border-gray-300 p-3">
                  {appoinmentData?.patientName}
                </td>
                <td className="border border-gray-300 p-3">
                  {appoinmentData?.doctorName}
                </td>
                <td className="border border-gray-300 p-3">
                  {appoinmentData?.appointmentDate}
                </td>
                <td className="border border-gray-300 p-3">
                  {appoinmentData?.appointmentTime}
                </td>
                <td className="border border-gray-300 p-3">
                  <select
                    value={appoinmentData?.status}
                    onChange={(e) =>
                      handleStatusChange(appoinmentData?._id, e.target.value)
                    }
                    className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Pending">Pending</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {appoinments.map((appoinmentData, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
          >
            <div className="font-semibold text-lg mb-2">{appoinmentData.name}</div>
            <div className="space-y-1">
              <div>
                <span className="font-medium">#:</span> {index + 1}
              </div>
              <div>
                <span className="font-medium">Email:</span> {appoinmentData?.patientName}
              </div>
              <div>
                <span className="font-medium">Phone:</span> {appoinmentData?.doctorName}
              </div>
              <div>
                <span className="font-medium">Phone:</span> {appoinmentData?.appointmentDate}
              </div>
              <div>
                <span className="font-medium">Phone:</span> {appoinmentData?.appointmentTime}
              </div>
              <div>
                <span className="font-medium">Role:</span>
                <select
                  value={appoinmentData.status}
                  onChange={(e) => handleStatusChange(appoinmentData.id, e.target.value)}
                  className="ml-2 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appoinment;
