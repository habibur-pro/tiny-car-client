import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <button className="btn  btn-block mt-10" type="submit">
            <span className="text-2xl mr-3"><FcGoogle /></span> Login With Google
        </button>
    );
};

export default SocialLogin;