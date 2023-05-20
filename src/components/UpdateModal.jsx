// import { useEffect, useState} from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const UpdateModal = ({ toy }) => {
    const [toyData, setToyData] = useState(toy)
    console.log("update", toyData)

    const { register, handleSubmit, reset } = useForm();


    const { _id, name: toyName } = toyData



    const onSubmit = inputData => {
        console.log(inputData)
    }


    return (
        <>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div id="modal" className="modal ">
                <div className="modal-box relative bg-base-200">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold  text-center">Update your Toy</h3>
                    <h3 className="text-xl  mb-5 text-center">{toyName}{_id}</h3>




                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                            {/* reting  */}
                            <input
                                type="text"

                                placeholder="price"
                                className=" px-3 py-2 focus:outline-primary w-full border rounded-sm"
                                {...register("price", { required: true })}
                            />

                            {/* Quantity  */}
                            <input
                                type="number"
                                placeholder="Available Quantity"
                                className=" px-3 py-2 focus:outline-primary w-full border rounded-sm"
                                {...register("quantity", { required: true })}
                            />
                        </div>
                        <textarea rows="5"
                            placeholder="Description."
                            className="border w-full focus:outline-primary p-2 "
                            {...register("description", { required: true })}
                        ></textarea>
                    </form>

                </div>
            </div>
        </ >
    );
};

export default UpdateModal;