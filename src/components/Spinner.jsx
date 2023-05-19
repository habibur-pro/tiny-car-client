import spinner from '../assets/spinner.gif'

const Spinner = () => {
    return <img className='w-40 h-40 absolute top-1/3 left-[calc(50%-50px)]' src={spinner} alt="" />
};

export default Spinner;