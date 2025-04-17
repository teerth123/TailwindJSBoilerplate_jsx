"use client";
import { DockIcon, Dock } from "../Components/BasicComponents/Dock0";
import MenuIcon from "../Components/icons/MenuIcon";
import CartIcon from "../Components/icons/CartIcon";
import LocationIcon from "../Components/icons/LocationIcon";

export default function Navbar() {
    return (
        <>
          
            <div className="w-full text-center flex justify-around items-center shadow-lg  bg-white p-3">
                <h1 className="text-lg font-semibold">Menu</h1>
                <h1 className="text-lg font-semibold">Store Locator</h1>
                <h1 className="text-lg font-semibold">Shop</h1>
                <div className="w-fit max-w-xs indent-4 tracking-tighter leading-tight">
                    <h1 className="font-light">REAL COFFEE</h1>
                    <h1 className="font-semibold">KIOSK KAFFEE</h1>
                </div>
                <h1 className="text-lg font-semibold">About Us</h1>
                <h1 className="text-lg font-semibold">Franchise</h1>
                <h1 className="text-lg font-semibold">Contact</h1>
            </div>
        </>
    )
}


