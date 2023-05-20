import galary from '../assets/galary.jpg'

const Galary = () => {
    return (
        <>
            <div className="container mx-auto px-5 py-2  lg:pt-24">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2 hover:scale-110 duration-500">
                            <img alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2 hover:scale-110 duration-500">
                            <img alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                        </div>
                        <div className="w-full p-1 md:p-2 hover:scale-110 duration-500">
                            <img alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2 hover:scale-110 duration-500">
                            <img alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2 hover:scale-110 duration-500">
                            <img alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2 hover:scale-110 duration-500">
                            <img alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                    </div>
                </div>
            </div> */}









            {/* <div className='max-w[1240px] px-5 mx-auto py-20'>
                <h3 className='text-3xl text-center mb-10 font-bold'>Our Upcomming toys</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='border mx-auto rounded p-3'>
                        <img className='w-60' src={galary} alt="" />
                    </div/>
                    <div className='border mx-auto rounded p-3'>
                        <img className='w-60' src={galary} alt="" />
                    </div/>
                    <div className='border mx-auto rounded p-3'>
                        <img className='w-60' src={galary} alt="" />
                    </div/>
                    <div className='border mx-auto rounded p-3'>
                        <img className='w-60' src={galary} alt="" />
                    </div/>
                </div>


            </div> */}
        </>
    );
};

export default Galary;