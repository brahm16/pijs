import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import PolylineOverlay from "./PolylineOverlay.js";

export default function MapBox() {
  const [viewport, setViewport] = useState({
    latitude: 0 ,
    longitude: 0,
    width: "100vw",
    height: "100vh",
    zoom: 10
    
  });
  const [location, setLocation] = useState({
    position : [0 , 0 ],
    width: "100vw",
    height: "100vh",
    zoom: 10
    
  });
  /*
  console.log(viewport.latitude);
  console.log(viewport.longitude);*/

  const [selectedPark, setSelectedPark] = useState(null);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      
      setLocation({
        ...location,
        position: [pos.coords.latitude, pos.coords.longitude]
      });
      setViewport({
        ...viewport,
        latitude : pos.coords.latitude ,
        longitude : pos.coords.longitude
      });
      console.log(pos);
      
    });
    

  }, []);


  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);
  
    return () => {
      window.removeEventListener("keydown", listener);
      
    };
   
    
  }, []);

  let markers = [ // Just an example this should probably be in your state or props. 
    {
      name: "The water temple",
      position: [36.387511, 10.130815 ],
      desc: "desc the water temple hh"
    },
    {
      name: "Sidi Ali Azzouz",
      position: [36.397502,10.145531 ],
      desc: "desc tsidek ali azzouz hhhhhhhhh hhhhh   hhhhhh  hhhhhhhhhhh hhh hhhhh  hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
    },
    {
      name: "Dar Zaghouan",
      position: [36.416347,10.123901],
      desc: "desc dar zaghouan hh" 
    }
  ];
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={"pk.eyJ1IjoibWFhcmVmc2EiLCJhIjoiY2ttcWUxNHhsMWE1bTJucGV6MmJyMHBseSJ9.GNTeLMUTdx-9EDjfdws3lg"}
        mapStyle="mapbox://styles/maarefsa/ckmqj32vr15jy17nnro1134wp"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        
      >
      <Marker
            {...location}
            name={'current location'}
            latitude={location.position[0]}
            longitude={location.position[1]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(location);
              }}
            >
              <img src="/current.png" alt="Skate Park Icon" />
            </button>
          </Marker>
        {markers.map((marker,index)=> (
          <Marker
            key={index}
            name={marker.name}
            latitude={marker.position[0]}
            longitude={marker.position[1]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(marker);
              }}
            >
              <img src="/location1.svg" alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}
     
        {selectedPark ? (
          <Popup
            className="popup1"
             latitude={selectedPark.position[0]}
             longitude={selectedPark.position[1]}
            onClose={() => {
              setSelectedPark(null);

            }}
          >
            <div className="popup">
              <h2 className="hw">{selectedPark.name}</h2>
              <p className="hw">{selectedPark.desc}</p>
            </div>
          </Popup>
        ) : null}

      <PolylineOverlay points={markers.position} />
      </ReactMapGL>
    </div>
  );
}