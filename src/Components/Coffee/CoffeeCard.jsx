import React from 'react';
import { AiFillEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router';
import { FaPen } from "react-icons/fa";
import Swal from 'sweetalert2';
const CoffeeCard = ({ coffee }) => {
    const { name, chef, photoUrl, price } = coffee
    // console.log(name)

    const handleDeleteProduct = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Delete Method here Data 
                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (

        <div className="card card-side bg-[#F5F4F1] shadow-sm">
            <figure>
                <img
                    src={photoUrl}
                    alt="Movie" />
            </figure>
            <div className="card-body md:mt-10">
                <h2 className="card-title">Name :<span className='opacity-60'>{name}</span></h2>
                <h2 className="card-title">Chef :<span className='opacity-60'>{chef}</span></h2>
                <h2 className="card-title">Price :<span className='opacity-60'>{price}$</span></h2>
            </div>
            <div className=" grid mr-5 mt-5">
                <Link><button onClick={() => handleDeleteProduct(coffee._id)} className="bg-red-400 h-[25px] w-[25px] rounded-sm grid items-center justify-center cursor-pointer"><MdDelete className='text-white' /></button></Link>
                <button className="bg-black h-[25px] w-[25px] rounded-sm grid items-center justify-center cursor-pointer"><FaPen className='text-white' /></button>
                <button className="bg-[#D2B48C] h-[25px] w-[25px] rounded-sm grid items-center justify-center cursor-pointer"><AiFillEye className='text-white' /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;