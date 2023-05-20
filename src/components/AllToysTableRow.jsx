import { Link } from "react-router-dom";


const AllToysTableRow = ({ toy }) => {
    const { _id, name: toyName, sub_category, price, seller_name, quantity, image_url } = toy || {}
    return (
        <tr className="bg-transparent">
            <td>
                <img className="w-12 h-12 bg-base-200 rounded-lg" src={image_url} alt="" />
            </td>
            <td>{toyName}</td>
            <td>{sub_category}</td>
            <td>{seller_name}</td>
            <td>{quantity}</td>
            <td className="font-bold text-green-500">${price}</td>
            <td>
                <Link to={`/toys/${_id}`}> <button className="btn btn-secondary btn-xs">details</button></Link>
            </td>
        </tr>
    );
};

export default AllToysTableRow;