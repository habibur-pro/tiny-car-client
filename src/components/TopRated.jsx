import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const TopRated = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://tiny-car-server.vercel.app/allToys/sports')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div className="max-w-[1240px] mx-auto my-20">
            <h1 className="text-center font-bold text-4xl mb-10">Trending Toys</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                {
                    toys.map(toy => <div className="shadow-xl "
                        key={toy._id}
                    >
                        <div className="relative border">
                            <div className="px-10 py-5 text-center">
                                <img className="mb-5 h-52" src={toy.image_url} alt="" />
                                <h3 className="text-xl font-bold uppercase tracking-widest text-slate-600 mb-3">{toy.name}</h3>
                                <p>Category: {toy.sub_category}</p>
                                <h3 className="font-bold text-2xl text-secondary mt-3">${toy.price}</h3>
                                <Rating className="mt-2"
                                    placeholderRating={toy.rating}
                                    emptySymbol={<FaStar className="icon text-slate-300" />}
                                    placeholderSymbol={<FaStar className="icon text-secondary" />}
                                    fullSymbol={<FaStar className="icon text-secondary" />}
                                />
                            </div>
                            <Link to={`/toys/${toy._id}`}> <button className="btn w-full btn-secondary rounded-none">View Details</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopRated;