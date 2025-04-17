import {GradientButton} from "./FancyButton"

export default function Hero() {
    return (
        <div className="relative max-h-screen bg-gradient-to-t to-[#f0f0f0] from-red-300 pb-5 overflow-hidden mb-20 mt-10 rounded-b-3xl">
            <img 
                src="pngwing.com.png" 
                alt="Coffee Image" 
                className="absolute left-1/2 top-20 transform -translate-x-1/2 w-auto h-full z-50"
            />
            <div className="relative z-10">
                <div className="justify-around flex">
                    <h1 className="text-2xl font-semibold">₹ 249.00</h1>
                    <h1 className="w-56 tracking-wide capitalize text-right font-semibold">
                        Kiosk Kaffee is your go-to spot for ethically sourced, organic Arabica and Robusta coffee. Our expert baristas are ready to serve the perfect cup—caffeinate with us on the go!
                    </h1>
                </div>
                <h1 className="w-full text-[8vw] font-bold text-center whitespace-nowrap">
                    KIOSK KAFFEE
                </h1>
                <div className="justify-around flex text-left">
                    <div className="flex">
                        {/* <h1 className="bg-white text-red-500 px-6 py-4 text-2xl font-bold rounded-3xl">
                            Order now
                        </h1> */}
                        <GradientButton variant="variant">Click Me</GradientButton>
                    </div>
                    <div className="flex">
                        <div className="mx-5">
                            <h1 className="font-bold">BISCOFF BLISS SHAKE</h1>
                            <h1>Total Calories: 613.87</h1>
                        </div>
                        <div className="text-right items-start flex">
                            <h1 className="font-bold text-4xl">4.8</h1>
                            <h1>⭐</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
