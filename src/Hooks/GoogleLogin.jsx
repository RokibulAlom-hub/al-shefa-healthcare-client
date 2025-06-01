import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";
const GoogleLogin = () => {
  const { googleLogin } = useContext(Authcontext);
  const handlegoggle = () => {
    googleLogin()
      .then((result) => {
        // console.log(result.user);
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
