import React from 'react';
import { FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const AvailablePlayers = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card */}
        <div className="bg-base-100 shadow-md rounded-xl overflow-hidden">

          {/* Image Top */}
          <img
            src="https://i.ibb.co.com/Gf3yNZ0p/images.webp"
            alt="Shakib Al Hasan"
            className="w-full h-60 object-contain"
          />

          {/* Info Section */}
          <div className="p-6 space-y-3">

            <h2 className="flex items-center gap-2 text-xl font-bold">
              <FaUser />
              Shakib Al Hasan
            </h2>

            <div className="flex justify-between items-center">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="font-semibold"></span> Bangladesh
              </p>

              <p className="font-semibold">
                All-Rounder
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p>
                <span className="font-semibold"></span> Right Hand Bat
              </p>

              <p className="font-semibold">
                 Slow Left-arm Orthodox
              </p>
            </div>

            <p><span className="font-semibold">Rating:</span> ⭐ 9.5</p>
            <p className="font-bold text-green-600">$68,182</p>

            <button className="btn btn-primary w-full mt-4">
              Buy Now
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AvailablePlayers;