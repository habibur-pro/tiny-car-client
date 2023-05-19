import { useEffect, useState } from "react";
import AllToysTableRow from "../../components/AllToysTableRow";


const AllToys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://tiny-car-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])





    return (
        <div className="max-w-[1244px] mx-auto px-5 mt-7 mb-16">
            <div className="overflow-x-auto w-full ">
                <table className="table w-full border-x border-b">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Seller</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            toys.map(toy => <AllToysTableRow
                                key={toy._id}
                                toy={toy}
                            ></AllToysTableRow>)
                        }

                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default AllToys;