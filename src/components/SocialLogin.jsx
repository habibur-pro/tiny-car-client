import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = ({ from }) => {
    const { loginWithGoogle } = useContext(AuthContext)

    const navigate = useNavigate()



    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log('user from social login', result.user)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <button onClick={handleGoogleLogin} className="btn  btn-block mt-10" type="submit">
            <span className="text-2xl mr-3"><FcGoogle /></span> Login With Google
        </button>
    );
};

export default SocialLogin;