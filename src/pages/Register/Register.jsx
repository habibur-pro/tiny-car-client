import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { RxEyeOpen, RxEyeNone } from "react-icons/rx";
import SocialLogin from "../../components/SocialLogin";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const [isShow, setShow] = useState(false)
    const { registerUserWithEmailAndPassword } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();




    const onSubmit = data => {
        registerUserWithEmailAndPassword(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error))
    };


    return (
        <div className="py-10  w-1/3  mx-auto shadow-lg border  my-20">
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
                            {...register("password", { required: "password is required" })}
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
                    <input className="btn btn-primary btn-block mt-5" type="submit" value='login' />

                </form>
                <SocialLogin></SocialLogin>
                <p className="mt-3 text-center">Have an Account? <Link className="text-primary" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;