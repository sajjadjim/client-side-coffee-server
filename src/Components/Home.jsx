import React from 'react';
import { useLoaderData } from 'react-router';
import './Font.css'
import { Link } from 'react-router';
import CoffeeCard from './Coffee/CoffeeCard';
const Home = () => {
    const coffees = useLoaderData()
    // console.log(coffees)
    return (
        <div>
            {/* Hero part image here code  */}
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/VcR7LTZc/3.png)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content ">
                    <div className="md:absolute md:ml-150 md:max-w-2xl ">
                        <h1 className="mb-5 text-3xl font-bold rancho-font">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 opacity-80">
                            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                        </p>
                        <button className="btn bg-[#E3B577] rancho-font">Learn More</button>
                    </div>
                </div>

            </div>
            {/* small card section here  */}
            <div className='grid md:grid-cols-4 grid-cols-1 bg-[#ECEAE3] px-25'>
                <div className="card bg-[#ECEAE3] w-96">
                    <figure className="px-10 pt-10 grid  ">
                        <img
                            src="https://i.ibb.co/JjNLSwNV/1.png"
                            alt="Shoes"
                            className="rounded-xl text-left" />
                    </figure>
                    <div className="card-body items-left">
                        <h2 className="card-title rancho-font text-2xl">Awesome Aroma</h2>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                </div>
                <div className="card bg-[#ECEAE3] w-96">
                    <figure className="px-10 pt-10 grid  ">
                        <img
                            src="https://i.ibb.co/q3YwR6ym/2.png"
                            alt="Shoes"
                            className="rounded-xl text-left" />
                    </figure>
                    <div className="card-body items-left">
                        <h2 className="card-title rancho-font text-2xl">High Quality</h2>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                </div>
                <div className="card bg-[#ECEAE3] w-96">
                    <figure className="px-10 pt-10 grid  ">
                        <img
                            src="https://i.ibb.co/F4K0JjjX/3.png"
                            alt="Shoes"
                            className="rounded-xl text-left" />
                    </figure>
                    <div className="card-body items-left">
                        <h2 className="card-title rancho-font text-2xl">Pure Grades</h2>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                </div>
                <div className="card bg-[#ECEAE3] w-96">
                    <figure className="px-10 pt-10 grid  ">
                        <img
                            src="https://i.ibb.co/673SDyLQ/4.png"
                            alt="Shoes"
                            className="rounded-xl text-left" />
                    </figure>
                    <div className="card-body items-left">
                        <h2 className="card-title rancho-font text-2xl">Proper Roasting</h2>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
            {/* items show here  */}
            <div className='text-center md:mt-[100px] max-w-7xl mx-auto'>
                <p>--- Sip & Savor ---</p>
                <h1 className='text-3xl rancho-font my-2'>Our Popular Products</h1>
                <Link to='/addCoffee'><button className='btn rancho-font font-bold my-2 bg-[#D2B48C] text-white'>Add Coffee 🍵</button></Link>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3 my-10'>
                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Home;