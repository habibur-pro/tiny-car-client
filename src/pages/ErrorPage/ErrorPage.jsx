import { Link, useRouteError } from "react-router-dom";
import errorImage from '../../assets/erorrImage.jpg'


const ErrorPage = () => {

    const error = useRouteError()
    console.log(error?.error?.message)
    return (
        <div className="bg-white">
            <img className="h-[500px] md:w-1/2 mx-auto" src={errorImage} alt="" />
            <h1 className="text-2xl font-bold text-center">{error?.error?.message}</h1>
            <div className="flex justify-center items-center">
                <Link to='/'><button className="btn btn-primary mt-3 mb-12">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;
