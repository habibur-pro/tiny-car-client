import galary1 from '../assets/Galary/galary-1.jpg'
import galary2 from '../assets/Galary/galary-2.jpg'
import galary3 from '../assets/Galary/galary-3.jpg'
import galary4 from '../assets/Galary/galary-4.jpg'
import galary5 from '../assets/Galary/galary-5.jpg'
import galary6 from '../assets/Galary/galary-6.jpg'

const Galary = () => {
    return (
        <>
            <div className="container mx-auto px-5 py-2  lg:pt-24">
                <h1 className='text-center font-bold text-4xl mb-10'>Our Toys Galary</h1>
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2 hover:scale-110 duration-500">
                            <img alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={galary1} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2 hover:scale-110 duration-500">
                            <img alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={galary2} />
                        </div>
                        <div className="w-full p-1 md:p-2 hover:scale-110 duration-500">
                            <img alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={galary3} />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2 hover:scale-110 duration-500">
                            <img alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={galary4} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2 hover:scale-110 duration-500">
                            <img alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={galary5} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2 hover:scale-110 duration-500">
                            <img alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={galary6} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Galary;