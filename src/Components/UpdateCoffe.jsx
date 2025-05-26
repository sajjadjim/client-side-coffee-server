import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
        useEffect(()=>{
        document.title='Update | Details'
    })
    const { _id, name, photoUrl, chef, price, taste, details, supplier } = useLoaderData()
    const handleUpdateCoffee = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const updateCoffeeData = Object.fromEntries(formData.entries())
        // console.log(updateCoffeeData)
        fetch(`https://server-side-coffee-lake.vercel.app/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffeeData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Update after Data ", data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee updated successfully Done ",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <form onSubmit={handleUpdateCoffee}>
                <div className='bg-[#F4F3F0] grid justify-center p-10 my-[100px] rounded-lg'>
                    <div><Link to='/'><button className='btn mx-auto bg-[#374151] text-white'>Back To Home</button></Link></div>
                    <h1 className='text-[#374151] rancho-font text-4xl text-center px-20'>Update Coffee Details</h1>
                    <p className='opacity-60 text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    {/* Input field here  */}
                    <div className='grid md:grid-cols-2 grid-cols-1 mt-[32px] gap-2'>
                        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input w-full" defaultValue={name} placeholder="Enter coffee name" required />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">Chef</label>
                            <input type="text" name='chef' defaultValue={chef} className="input w-full" placeholder="Enter coffee chef" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">Supplier</label>
                            <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Enter coffee supplier" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">Taste</label>
                            <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="Enter coffee taste" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">Price</label>
                            <input type="number" name='price' defaultValue={price} className="input w-full" placeholder="Enter coffee price" required />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">Details</label>
                            <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Enter coffee details" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                        <label className="label">Photo</label>
                        <input type="text" name='photoUrl' defaultValue={photoUrl} className="input w-full" placeholder="Enter photo URL" />
                    </fieldset>
                    <button type="submit" className='btn bg-[#D2B48C] text-white rancho-font'>Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;