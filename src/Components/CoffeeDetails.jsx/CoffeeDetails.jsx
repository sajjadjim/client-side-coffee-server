import React from 'react';
import { Link } from 'react-router';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const { name, chef, supplier, price, taste, details, photoUrl } = useLoaderData()
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={photoUrl}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-2xl font-bold">Name : {name}</h1>
                        <p className="py-1">
                            Chef : {chef}
                        </p>
                        <p className="py-1">
                            Suppllier : {supplier}
                        </p>
                        <p className="py-1">
                            Taste : {taste}
                        </p>
                        <p className="py-1">
                            Price : {price}$
                        </p>
                        <p className="py-1">
                            Details : {details}
                        </p>
                       <Link to='/'> <button className="btn bg-[#D2B48C]">Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;