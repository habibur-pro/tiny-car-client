import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
    const { user } = useContext(AuthContext)

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = inputData => {


        fetch('https://tiny-car-server.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Added',
                        'Your Toy has been Added.',
                        'success'
                    )
                    reset()
                }


            })
            .catch(err => console.log(err))
    };

    // console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className="bg-my-gradient bg-cover bg-center bg-no-repeat">
            <div className=" max-w-[1240px] mx-auto px-5 my-20 md:p-10 bg-white bg-opacity-60 md:px-20  shadow-xl border">
                <h1 className="text-center font-bold mb-8 text-3xl">Add A Toy</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        {/* toy name  */}
                        <input
                            type="text"
                            placeholder="Toy Name"
                            className=" px-3 py-2 focus:outline-primary w-full border rounded-sm"
                            {...register("name", { required: true })}
                        />

                        {/* toy image  */}
                        <input
                            type="text"
                            placeholder="Toy Photo URL"
                            className=" px-3 py-2 focus:outline-primary w-full border rounded-sm"
                            {...register("image_url", { required: true })}
                        />
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        {/* toy sub category  */}

                        <select
                            className=" px-3 py-2 focus:outline-primary w-full border rounded-sm"
                            {...register("sub_category", { required: true })}
                        >
                            <option value="sports">Sports Car</option>
                            <option value="police">Police Car</option>
                            <option value="fire truck">Fire Truck</option>
                        </select>
                        {/* <input
                            type="text"
                            placeholder="Sub Category"
                            className=" px-3 py-2 focus:outline-primary w-full border rounded-sm"
                            {...register("sub_category", { required: true })}
                        /> */}

                        {/* price  */}
                        <input
                            type="number"
                            placeholder="Price"
                            className=" px-3 py-2 focus:outline-primary w-full border rounded-sm"
                            {...register("price", { required: true })}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        {/* reting  */}
                        <input
                            type="text"
                            placeholder="Rating"
                            className=" px-3 py-2 focus:outline-primary w-full border rounded-sm"
                            {...register("rating", { required: true })}
                        />

                        {/* Quantity  */}
                        <input
                            type="number"
                            placeholder="Available Quantity"
                            className=" px-3 py-2 focus:outline-primary w-full border rounded-sm"
                            {...register("quantity", { required: true })}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                        <input
                            type="text"
                            placeholder="Seller Name"
                            className=" px-3 py-2 focus:outline-primary w-full border rounded-sm"
                            {...register("seller_name", { required: true })}
                            value={user?.displayName}
                        />

                        <input
                            type="email"
                            placeholder="Seller Email"
                            className=" px-3 py-2 focus:outline-primary w-full border rounded-sm"
                            {...register("seller_email", { required: true })}
                            value={user?.email}
                        />
                    </div>
                    <textarea rows="5"
                        placeholder="Description."
                        className="border w-full focus:outline-primary p-2 "
                        {...register("description", { required: true })}
                    ></textarea>
                    <div className="text-center mt-5">
                        <input
                            type="submit"
                            className="btn btn-secondary "
                            value="Add Toys"
                        ></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;