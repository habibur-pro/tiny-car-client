import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const [car, setCar] = useState([])
    const { id } = useParams()



    // useEffect(() => {
    //     fetch(`http://localhost:5000/cars/${id}`)
    //         .then(res => res.json())
    //         .then(data => setCar(data))
    // }, [])
    return (
        <div className="border  rounded-t-lg relative overflow-hidden">
            <span className=" w-24 h-24 bg-slate-600 absolute -top-5 -right-5 rounded-full"></span>
            <img className="h-40 mx-auto my-10 rounded p-3" src={car?.image_url} alt="" />
            <div className="flex items-center justify-between  p-3 ">
                <div >
                    <h3 className="text-xl">{car?.name}</h3>
                    <h4 className="text-primary text-md font-bold">${car?.price}</h4>
                    <h4>Rating: {car?.rating}</h4>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
