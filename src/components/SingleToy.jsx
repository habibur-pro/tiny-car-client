import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const SingleToy = ({ car }) => {
    const { _id, name, price, image_url, rating } = car || {}

    return (
        <div data-aos='fade-up' data-aos-duration='800' className="border  rounded-t-lg relative overflow-hidden">
            <span className=" w-24 h-24 bg-slate-600 absolute -top-5 -right-5 rounded-full"></span>
            <img className="h-40 mx-auto my-10 rounded p-3" src={image_url} alt="" />
            <div className="flex items-center justify-between  p-3 ">
                <div >
                    <h3 className="text-xl">{name}</h3>
                    <h4 className="text-primary text-md font-bold">${price}</h4>
                    <h4>Rating: {rating}</h4>
                </div>
                <Link to={`/toys/${_id}`}> <button className="btn h-full border-x h-full">Details</button></Link>
            </div>
        </div>

    );
};

export default SingleToy;