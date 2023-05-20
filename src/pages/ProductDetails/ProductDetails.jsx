import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
    const [toy, setToy] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://tiny-car-server.vercel.app/toys/${id}`)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [])
    const { _id, rating, name: toyName, sub_category, price, seller_name, quantity, description, image_url } = toy || {}



    return (

        <divn className='max-w-[1240px] mx-auto mt-0'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image_url} className=" md:w-1/2 rounded-lg " />
                    <div className="md:w-1/2 ">
                        <h1 className="text-3xl md:text-5xl font-bold">{toyName}</h1>
                        <p className="mt-5">
                            <span className="  bg-secondary rounded-full px-3 py-1"> # {sub_category}</span>
                        </p>
                        <p className="py-3 text-justify">{description}</p>


                        <h4 className="text-2xl font-bold text-green-500">${price} USD</h4>


                        <Rating className="mt-3"
                            placeholderRating={rating}
                            emptySymbol={<FaStar className="icon text-slate-300" />}
                            placeholderSymbol={<FaStar className="icon text-secondary" />}
                            fullSymbol={<FaStar className="icon text-secondary" />}
                        />
                        <p className=" py-1"> <span className="">{quantity}
                            /pcs Available</span></p>
                        <p className="text-xl">{seller_name}</p>



                        {/* <input type='text' value={quantity} className="rounded-full px-3 py-1.5 border" /> */}

                    </div>
                </div>
            </div>
        </divn>






















        // <div className="border  rounded-t-lg relative overflow-hidden">
        //     <span className=" w-24 h-24 bg-slate-600 absolute -top-5 -right-5 rounded-full"></span>
        //     <img className="h-40 mx-auto my-10 rounded p-3" src={car?.image_url} alt="" />
        //     <div className="flex items-center justify-between  p-3 ">
        //         <div >
        //             <h3 className="text-xl">{car?.name}</h3>
        //             <h4 className="text-primary text-md font-bold">${car?.price}</h4>
        //             <h4>Rating: {car?.rating}</h4>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ProductDetails;
