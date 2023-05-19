import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2'
import DeleteModal from "./DeleteModal";

const MyToysTableRow = ({ toy, toys, setToys }) => {
    const { _id, rating, name: toyName, sub_category, price, seller_name, seller_email, quantity, image_url } = toy || {}


    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://tiny-car-server.vercel.app/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toys has been deleted.',
                                'success'
                            )

                            const remaining = toys.filter(ty => ty._id !== _id)
                            setToys(remaining)
                        }
                    })

            }
        })
    }


    return (
        <>
            <tr>
                <td>
                    <img className="w-12 h-12 bg-base-200 rounded-lg" src={image_url} alt="" />
                </td>
                <td>{toyName}</td>
                <td>{sub_category}</td>
                <td>{seller_name}</td>
                <td>{seller_email}</td>
                <td>{rating}</td>
                <td>{quantity}</td>
                <td className="font-bold text-green-500">${price}</td>
                <td className="space-x-5">
                    <button title="Update" className="cursor-pointer">
                        <label htmlFor="delete-modal" className="">
                            <FaRegEdit />
                        </label>
                    </button>



                    <button title="Delete" onClick={handleDelete} className=""><RiDeleteBin6Line /></button>
                    {/* <label htmlFor="delete-modal" className="btn">open modal</label> */}
                </td>
            </tr>

        </>
    );
};

export default MyToysTableRow;