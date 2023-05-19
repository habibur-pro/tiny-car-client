import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { RxEyeOpen, RxEyeNone } from "react-icons/rx";
import SocialLogin from "../../components/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const [isShow, setShow] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [firebaseError, setFirebaseError] = useState("")
    const { registerUserWithEmailAndPassword } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const location = useLocation()
    const navigate = useNavigate()

    console.log('register', location)
    const from = location?.state?.from?.state?.from?.pathname || '/'



    const onSubmit = data => {
        setLoading(true)
        registerUserWithEmailAndPassword(data.email, data.password)
            .then(result => {
                console.log(result.user)
                setFirebaseError("")
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setFirebaseError(error?.code)
                setLoading(false)
            })
    };


    return (
        <div className="py-10  md:w-1/3  mx-auto shadow-lg border  my-20">
            <h3 className="font-bold text-3xl ml-10">Create Account</h3>
            <div className="p-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="relative border outline-none focus:outline-none focus:border-0 mb-5">
                        <input

                            {...register("name", { required: "name is required" })}
                            type="text"
                            placeholder="Name"
                            className="w-full px-3 rounded-md focus:outline-secondary focus:border-0 border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                        />
                    </div>

                    {/* email  */}
                    <div className="relative border outline-none focus:outline-none focus:border-0 mb-5">
                        <input
                            {...register("email", { required: "email is required" })}
                            type="email"
                            placeholder="Email"
                            className="w-full px-3 rounded-md focus:outline-secondary focus:border-0 border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                        />

                    </div>

                    {/* pass word  */}
                    <div className="relative border outline-none focus:outline-none focus:border-0 mb-5">
                        <input
                            {...register("password", {
                                required: "password is required", minLength: {
                                    value: 4,
                                    message: 'password min length 6 character and max 16'
                                },
                                maxLength: {
                                    value: 16,
                                    message: 'max password length limit 16 character'
                                }

                            })}
                            type={isShow ? "text" : "password"}

                            placeholder="Password"
                            className="px-3 w-full rounded-md focus:outline-secondary focus:border-0 border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                        />

                        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                            <button onClick={() => setShow(!isShow)}
                                type="button"
                                className=" p-0.5 text-lg"
                            >
                                {
                                    isShow ? <RxEyeNone></RxEyeNone> : <RxEyeOpen></RxEyeOpen>
                                }
                            </button>
                        </span>
                    </div>
                    <p className="text-red-500">{errors.name ? errors?.name?.message : errors?.email ? errors?.email?.message : errors?.password ? errors?.password?.message : ''}</p>
                    {
                        firebaseError ? <p className="text-red-500">{firebaseError}</p> : ''
                    }
                    <input className="btn btn-primary btn-block mt-5" type="submit" value={`${isLoading ? "Loading.." : "Register"}`}
                        disabled={isLoading}
                    />

                </form>
                <SocialLogin></SocialLogin>
                <p className="mt-3 text-center">Have an Account? <Link className="text-primary" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;