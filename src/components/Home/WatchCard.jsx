// components/WatchCard.js
import React from "react";

function WatchCard({ watch }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg flex-shrink-0 w-64">
      <img src={watch.image} alt={watch.name} className="h-48 w-full object-cover rounded-md" />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{watch.name}</h3>
        <p className="mt-2 text-lg font-bold">{watch.price}</p>
      </div>
    </div>
  );
}

export default WatchCard;
