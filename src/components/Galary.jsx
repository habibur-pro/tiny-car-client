import galary from '../assets/galary.jpg'

const Galary = () => {
    return (
        <>
            <div className='max-w[1240px] px-5 mx-auto py-20'>
                <h3 className='text-3xl text-center mb-10 font-bold'>Our Upcomming toys</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='border mx-auto rounded p-3'>
                        <img className='w-60' src={galary} alt="" />
                    </div>
                    <div className='border mx-auto rounded p-3'>
                        <img className='w-60' src={galary} alt="" />
                    </div>
                    <div className='border mx-auto rounded p-3'>
                        <img className='w-60' src={galary} alt="" />
                    </div>
                    <div className='border mx-auto rounded p-3'>
                        <img className='w-60' src={galary} alt="" />
                    </div>
                </div>


            </div>
        </>
    );
};

export default Galary;