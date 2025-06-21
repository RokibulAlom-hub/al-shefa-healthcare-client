import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const Dprofile = () => {
    const {user} = useAuth()
     const {
    data: docProfile,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["docProfile"],
    queryFn: async () => {
      const response = await useAxiosSecure.get(`/appoinments?email=${user?.email}`);
      return response?.data;
    },
  });
    return (
        <>
            <h1 className="text-2xl text-center font-bold"> MyPofile </h1>
            <div>
                {
                    docProfile.map((doc, index) => {
                        <div>
                            <img src="" alt="" />
                            <h2>{doc.name}</h2>
                        </div>
                    })
                }
            </div>
        </>
    );
};

export default Dprofile;