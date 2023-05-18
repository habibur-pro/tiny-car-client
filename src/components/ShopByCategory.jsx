import { useEffect, useState } from "react";
import SingleCar from "./SingleCar";


const ShopByCategory = () => {
    const [category, setCategory] = useState('sport')
    const [cars, setCars] = useState([])

    const handleCategory = event => {
        if (event.target.value) {
            setCategory(event.target.value)
        }

    }
    useEffect(() => {
        fetch('car.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])


    return (
        <div className="max-w-[1240px] mx-auto py-28">
            <h3 className="text-3xl text-center font-bold mb-10">Shop by Category</h3>
            <div onClick={handleCategory} className="flex justify-center items-center gap-5 bg-base-200 py-3">
                <button value="sports" className={`${category === 'sports' && 'btn-primary'}  border border-white   px-5 py-2 rounded`}>
                    Sports</button>
                <button value="police" className={`${category === 'police' && 'btn-primary'}  border border-white   px-5 py-2 rounded`}>
                    Police</button>
                <button value="truck" className={`${category === 'truck' && 'btn-primary'}  border border-white   px-5 py-2 rounded`}>
                    Track</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10">
                {
                    cars.map((car, i) => <SingleCar
                        key={i}
                        car={car}
                    ></SingleCar>)
                }
            </div>

        </div>
    );
};

export default ShopByCategory;