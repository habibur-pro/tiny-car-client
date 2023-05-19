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

        // <div>
        //     <nav className="relative z-0 flex border rounded-xl overflow-hidden dark:border-gray-700" aria-label="Tabs" role="tablist">
        //         <button type="button" className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 active" id="bar-with-underline-item-1" data-hs-tab="#bar-with-underline-1" aria-controls="bar-with-underline-1" role="tab">
        //             Tab 1
        //         </button>
        //         <button type="button" className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300" id="bar-with-underline-item-2" data-hs-tab="#bar-with-underline-2" aria-controls="bar-with-underline-2" role="tab">
        //             Tab 2
        //         </button>
        //         <button type="button" className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 dark:hover:text-gray-300" id="bar-with-underline-item-3" data-hs-tab="#bar-with-underline-3" aria-controls="bar-with-underline-3" role="tab">
        //             Tab 3
        //         </button>
        //     </nav>

        //     <div className="mt-3">
        //         <div id="bar-with-underline-1" role="tabpanel" aria-labelledby="bar-with-underline-item-1">
        //             <p className="text-gray-500 dark:text-gray-400">
        //                 This is the <em className="font-semibold text-gray-800 dark:text-gray-200">first</em> items tab body.
        //             </p>
        //         </div>
        //         <div id="bar-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="bar-with-underline-item-2">
        //             <p className="text-gray-500 dark:text-gray-400">
        //                 This is the <em className="font-semibold text-gray-800 dark:text-gray-200">second</em> items tab body.
        //             </p>
        //         </div>
        //         <div id="bar-with-underline-3" className="hidden" role="tabpanel" aria-labelledby="bar-with-underline-item-3">
        //             <p className="text-gray-500 dark:text-gray-400">
        //                 This is the <em className="font-semibold text-gray-800 dark:text-gray-200">third</em> items tab body.
        //             </p>
        //         </div>
        //     </div>
        // </div>

        <div className="max-w-[1240px] mx-auto py-28">
            <h3 className="text-3xl text-center font-bold mb-10">Shop by Category</h3>
            <div onClick={handleCategory} className="flex justify-center items-center gap-5 bg-base-200 py-3">
                <button value="sports" className={`${category === 'sports' && 'btn-primary'}  border border-white   px-5 py-2 rounded`}>
                    Sports Car</button>
                <button value="police" className={`${category === 'police' && 'btn-primary'}  border border-white   px-5 py-2 rounded`}>
                    Police Car</button>
                <button value="fire truck" className={`${category === 'fire truck' && 'btn-primary'}  border border-white   px-5 py-2 rounded`}>
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