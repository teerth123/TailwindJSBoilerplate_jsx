import { div } from "framer-motion/client";
import { GradientButton } from "./FancyButton";

export default function ThreeCards() {
  return (
    <>
      <div className="text-center flex justify-center items-center my-10">
        <div className="bg-gradient-to-l from-slate-300 to-[#f0f0f0] h-1 rounded-full  w-72 mb-5" />
        <div className="flex justify-center items-center">
          <div className="w-1 h-1 bg-slate-400 rounded-full mb-5 mx-5"></div>
          <div className="w-1 h-1 bg-slate-400 rounded-full mb-5 mx-5"></div>
          <div className="w-1 h-1 bg-slate-400 rounded-full mb-5 mx-5"></div>
          <div className="w-1 h-1 bg-slate-400 rounded-full mb-5 mx-5"></div>
        </div>
        <div className="bg-gradient-to-l to-slate-300 from-[#f0f0f0] h-1 rounded-full  w-72 mb-5" />
      </div>
      <div className="text-center">
        <h1 className="font-bold text-3xl p-2">OUR ACHIEVEMENTS</h1>
        <h3 className="text-center font-semibold p-2 text-xl">
          Curious about what we've accomplished? Let our <br />track record speak for itself.
        </h3>
        <div className="flex justify-center m-20 ">
        <Cards
            but={"default"}
            className="-rotate-6 mt-20 mx-5"
            title={"Store Locator"}
            desc={"India A Priority Market For Kiosk Kaffee"}
            image={"shop.jpeg"}
          />
          
          <Cards
            className="-rotate-2 mt-10 mx-5"
            but={"default"}
            title={"News"}
            desc={"India A Priority Market For Kiosk Kaffee"}
            image={"https://images.unsplash.com/photo-1554600740-951beab4712b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          />

          <Cards
            className=" -mt-10"
            but={"variant"}
            title={"Blogs"}
            desc={"India A Priority Market For Kiosk Kaffee"}
            image={"https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlJTIwY3VwfGVufDB8fDB8fHww"}
          />

          <Cards
            but={"default"}
            className="rotate-2 mt-10 mx-5"
            title={"Articles"}
            desc={"India A Priority Market For Kiosk Kaffee"}
            image={"https://images.unsplash.com/photo-1577805947697-89e18249d767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hha2VzfGVufDB8fDB8fHww"}
          />

          <Cards
            but={"default"}
            className="rotate-6 mt-20 mx-5"
            title={"Merchandise"}
            desc={"India A Priority Market For Kiosk Kaffee"}
            image={"https://kiosk-kaffee.com/wp-content/uploads/2023/05/MG_9541-2.jpg.webp"}
          />
        </div>
      </div>
      {/* <hr className="border-[#b1b1b1]" /> */}
      {/* <h1 className="font-bold text-4xl">Want to become <br />our Partner ? </h1> */}
    </>
  );
}

function Cards({ title, image, desc, className, but }) {
  return (
    <div
      className={`w-72 h-96 bg-gradient-to-b from-[#f0f0f0] to-white rounded-xl text-center overflow-hidden shadow-xl m-5 ${className}`} // Apply className here
    >
      <div className="flex justify-center items-center h-56 mt-2">
        <img
          src={image}
          alt=""
          className="rounded-xl w-64 h-full object-cover"
        />
      </div>
      <h1 className="font-bold text-lg text-left px-4">{title}</h1>
      <h1 className="text-[#888888] font-medium px-4 text-left">{desc}</h1>
      {but === "default" ? (
        <GradientButton className="mt-2" >Read more</GradientButton>
      ) : (
        <GradientButton variant="variant" className="mt-2">Read more</GradientButton>
      )}
    </div>
  );
}