import { useEffect, useState } from "react";
import SingleToy from "./SingleToy";


const ShopByCategory = () => {
    const [category, setCategory] = useState('sports')
    const [cars, setCars] = useState([])

    const handleCategory = event => {
        if (event.target.value) {
            setCategory(event.target.value)
        }

    }

    useEffect(() => {
        fetch(`https://tiny-car-server.vercel.app/allToys/${category}`)
            .then(res => res.json())
            .then(data => setCars(data))
            .catch(error => console.log(error))
    }, [category])




    return (


        <div className="max-w-[1240px] mx-auto py-28">
            <h3 className="text-3xl text-center font-bold mb-10">Shop by Category</h3>
            <div onClick={handleCategory} className="flex justify-center items-center gap-5  py-3">
                <button value="sports" className={`${category === 'sports' && 'btn-primary'}  border    px-5 py-2 rounded`}>
                    Sports Car</button>
                <button value="police" className={`${category === 'police' && 'btn-primary'}  border    px-5 py-2 rounded`}>
                    Police Car</button>
                <button value="fire truck" className={`${category === 'fire truck' && 'btn-primary'}  border    px-5 py-2 rounded`}>
                    Fire Track</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10">
                {
                    cars.map((car) => <SingleToy
                        key={car._id}
                        car={car}
                    ></SingleToy>)
                }
            </div>

        </div>
    );
};

export default ShopByCategory;