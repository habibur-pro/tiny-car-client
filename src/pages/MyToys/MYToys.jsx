import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTableRow from "../../components/MyToysTableRow";
import { Link } from "react-router-dom";


const MYToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch(`https://tiny-car-server.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))

    }, [])

    return (
        <div className="bg-my-gradient bg-cover bg-no-repeat bg-center">
            <div className="max-w-[1240px] mx-auto px-5 py-16 ">
                <table className="table w-full border-x border-b">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            toys.map(toy => <MyToysTableRow
                                key={toy._id}
                                toy={toy}
                                toys={toys}
                                setToys={setToys}
                            ></MyToysTableRow>)
                        }
                    </tbody>


                </table>
                {
                    toys?.length < 1 && <p className="text-center text-lg mt-5">You Have not added any Toys Please <Link className="text-primary underline" to='/add_toy'> Add Your Toys</Link></p>
                }

            </div>
        </div>
    );
};

export default MYToys;