

const SingleCar = ({ car }) => {
    const { name, price, image_url, rating } = car || {}
    console.log(car)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Rating: {rating}</p>
                <p>Price: {price}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCar;