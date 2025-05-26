import React, { useEffect } from 'react';
import './Font.css'
import { Form } from 'react-router';
import Swal from 'sweetalert2';
const AddCoffee = () => {

    useEffect(()=>{
        document.title='Add | Coffee'
    })
    const handleCoffeeAddNew = (e) => {
        e.preventDefault()
        const form = e.target
        // const name = e.target.name.value
        // const chef = e.target.chef.value
        // const supplier = e.target.supplier.value
        // const taste = e.target.taste.value
        // const category = e.target.category.value
        // const details = e.target.details.value
        // const photoUrl = e.target.photoUrl.value
        // const newCoffee = {name , chef , supplier , taste , category , details , photoUrl}
        // console.log(newCoffee)
        const formData = new FormData(form)
        const coffeeData = Object.fromEntries(formData.entries())
        console.log(coffeeData)
        // Data send to the MongoDB Here code 
        fetch('https://server-side-coffee-lake.vercel.app/coffees', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
            .then(res => res.json())
            .then(data => {
                console.log("AFter data add to the DB", data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Coffee Added successfully 🍵🍵🍵",
                        icon: "success",
                        draggable: true
                    });
                }
            })

    }
    return (
        <div className='max-w-7xl mx-auto'>
            <form onSubmit={handleCoffeeAddNew}>
                <div className='bg-[#F4F3F0] grid justify-center p-10 my-[100px] rounded-lg'>
                    <h1 className='text-[#374151] rancho-font text-4xl text-center px-20'>Add New Coffee</h1>
                    <p className='opacity-60 text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    {/* Input field here  */}
                    <div className='grid md:grid-cols-2 grid-cols-1 mt-[32px] gap-2'>
                        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input w-full" placeholder="Enter coffee name" required />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">Chef</label>
                            <input type="text" name='chef' className="input w-full" placeholder="Enter coffee chef" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">Supplier</label>
                            <input type="text" name='supplier' className="input w-full" placeholder="Enter coffee supplier" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">Taste</label>
                            <input type="text" name='taste' className="input w-full" placeholder="Enter coffee taste" />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">Price</label>
                            <input type="number" name='price' className="input w-full" placeholder="Enter coffee price" required />
                        </fieldset>
                        <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">Details</label>
                            <input type="text" name='details' className="input w-full" placeholder="Enter coffee details" />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset  border-base-300 rounded-box w-full border p-4 ">
                        <label className="label">Photo</label>
                        <input type="text" name='photoUrl' className="input w-full" placeholder="Enter photo URL" />
                    </fieldset>
                    <button type="submit" className='btn bg-[#D2B48C] text-white rancho-font'>Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;