"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const Map = () => {
  const center = {
    lat: 37.437041393899676,
    lng: -4.191635586788259,
  };

  return (
    <div className="mt-4 h-64 w-full">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
      >
        <GoogleMap
          options={{ mapId: "cac5a755419882c6" }}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={5}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
