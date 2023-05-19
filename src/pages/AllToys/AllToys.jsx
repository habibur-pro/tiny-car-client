import { useEffect, useState } from "react";
import AllToysTableRow from "../../components/AllToysTableRow";


const AllToys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://tiny-car-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSearch = (event) => {
        event.preventDefault()
        const searchText = event.target.search.value;



        fetch(`https://tiny-car-server.vercel.app/search?q=${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))

    }



    return (
        <div className="max-w-[1244px] mx-auto px-5 mt-7 mb-16">
            <div className="flex justify-center mb-3">
                {/* search field and button  */}
                <div className="form-control">
                    <form onSubmit={handleSearch} className="input-group">
                        <input name="search" type="text" placeholder="Search…" className="input input-bordered " />
                        <button
                            type="submit"
                            className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </form>
                </div>
            </div>

            <h3 className="text-lx mb-3"> Total Data: {toys?.length}</h3>
            {/* table  */}
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