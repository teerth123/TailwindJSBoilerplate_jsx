import React, { useState } from "react";
import Constants from "../data";
import { GradientButton } from "./FancyButton";

const ITEMS_PER_PAGE = 8; // 3x3 grid

export default function Menu() {
    const [filtered, setFiltered] = useState(Constants.flatMap(category => category.items));
    const [currentPage, setCurrentPage] = useState(1);

    function handleSearch(query) {
        const upfiltered = Constants.flatMap(category =>
            category.items.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            )
        );
        setFiltered(upfiltered);
        setCurrentPage(1); // Reset to page 1 when search changes
    }

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <>
            <div className="flex text-center justify-center my-5 ">
                
                <div className="flex text-left p-5 bg-gray-50 w-auto h-full justify-center rounded-3xl">
                    <div className="w-64 pr-6 border h-fit p-5 rounded-xl mx-5 border-gray-300">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Menu</h1>
                        <input
                            type="text"
                            className="border border-gray-300 p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Search Items"
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <div className="flex justify-between mb-4">
                            <input
                                type="text"
                                placeholder="Min"
                                className="border border-gray-300 p-2 w-5/12 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <input
                                type="text"
                                placeholder="Max"
                                className="border border-gray-300 p-2 w-5/12 rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <h1 className="text-lg font-semibold text-gray-800 mb-2">Category</h1>
                        {Constants.map((item, index) => (
                            <label key={index} className="flex items-center space-x-2 mb-2" onClick={(e)=>handleSearch(e.target.value)}>
                                <input
                                    type="radio"
                                    name="category"
                                    value={item.category}
                                    className="text-black"
                                />
                                <span className="text-gray-700">{item.category}</span>
                            </label>
                        ))}
                        <GradientButton className="w-full py-2 " onClick={()=>handleSearch("")}>
                            Reset Filters
                        </GradientButton>
                    </div>

                    <div className="grid grid-cols-4 gap-6 w-full">
                        {currentItems.map((item, index) => (
                            <Card
                                itemName={item.name}
                                price={item.price}
                                key={index}
                                img={item.image}
                                className=""
                            />
                        ))}
                    </div>
                </div>

                {/* <div className="w-60 flex flex-col space-y-4">
                    <div className="w-60 h-60 bg-black ">

                    </div>

                    <div>
                        
                    </div>
                </div> */}


            </div>
            <div className="flex justify-center mb-16">
                {totalPages > 1 && Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                        key={page}
                        className={`mx-2 px-4 py-2 rounded ${page === currentPage ? "bg-black text-white" : "bg-gray-200 text-black"
                            } focus:outline-none hover:bg-black hover:text-white transition duration-200`}
                        onClick={() => setCurrentPage(page)}
                        style={{ minWidth: "40px", height: "40px" }}
                    >
                        {page}
                    </button>
                ))}
            </div>


        </>
    );
}

function Card({ itemName, price, img }) {
    return (
        <div className="w-60 h-60 border border-gray-300 p-4 text-left flex flex-col justify-between bg-white shadow-sm rounded-lg  bg-gradient-radial from-white to-transparent ">
            <img 
                src={img} 
                alt={itemName} 
                className="w-full h-32 object-cover rounded-t-lg"
            />
            <h1 className="font-semibold text-black text-base mt-2">{itemName}</h1>
            <div className="flex justify-between items-center mt-4">
                <h1 className="font-semibold text-black text-lg">₹{price}</h1> 
                <GradientButton className=" px-4 py-2   ">
                    Add
                </GradientButton>
            </div>
        </div>
    );
}