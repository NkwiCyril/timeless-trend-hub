// components/WatchCollection.js
import React from "react";
import WatchCard from "./WatchCard";

// Add watch data as an array of objects
const watchData = [

];

function WatchCollection() {
  return (
    <section className="py-10 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex space-x-4">
          {watchData.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WatchCollection;
