import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTableRow from "../../components/MyToysTableRow";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const MYToys = () => {
    useTitle('My Toys')
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        fetch(`https://tiny-car-server.vercel.app/myToys/${user?.email}?filter=${filter}`)
            .then(res => res.json())
            .then(data => setToys(data))

    }, [filter])

    const handleFilter = (event) => {

        const filterValue = event.target.value;
        setFilter(filterValue)
        console.log(filter)
    }

    return (
        <div className="bg-my-gradient bg-cover bg-no-repeat bg-center">
            <div className="max-w-[1240px] mx-auto px-5 py-16 ">
                <select onChange={handleFilter} className="select select-bordered w-full max-w-xs mb-5">
                    <option disabled >Filter by Price</option>
                    <option value='ascending'>Price Acceding</option>
                    <option value='descending'>Price Descending</option>
                </select>
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