import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
const GoogleLogin = () => {
  const { googleLogin } = useContext(Authcontext);
  const navigate = useNavigate()
  const handlegoggle = () => {
    googleLogin()
      .then((result) => {
        // console.log(result.user);
        navigate("/")
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      {/* google log in */}
      <div className="mt-6">
        <button
          onClick={handlegoggle}
          className="w-full px-4 py-2 bg-blue-600 rounded-md text-white"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
