import React, { useState, useEffect, useRef } from 'react';

function Cardx({ title, image, desc }) {
  const imgRef = useRef(null);

  return (
    <div className="w-64 h-80 relative">
      {/* Background Image (unblurred) */}
      <img
        ref={imgRef}
        src={image}
        alt=""
        className="w-full h-full object-cover rounded-xl absolute top-0 left-0"
        crossOrigin="Anonymous"
      />

      {/* Blurred bottom portion of the same image */}
      <div className="absolute bottom-0 w-full h-1/3 overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover absolute bottom-0 left-0"
          style={{
            filter: 'blur(8px)', // Apply blur effect
            WebkitFilter: 'blur(8px)', // For Safari support
          }}
        />
      </div>

      {/* Text overlay with higher z-index */}
      <div className="absolute bottom-0 w-full p-4 z-10">
        <h1 className="font-bold text-lg text-left text-white">{title}</h1>
        <h1 className="text-gray-200 font-medium text-left">{desc}</h1>
      </div>
    </div>
  );
}

export default Cardx;