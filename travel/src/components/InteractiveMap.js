// src/components/InteractiveMap.js
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import '../styles/InteractiveMap.css';

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const InteractiveMap = () => {
  return (
    <div className="interactive-map">
      <h2>Explore Destinations on the Map</h2>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME } = geo.properties;
                  console.log(`Hovered over: ${NAME}`);
                }}
                style={{
                  default: { fill: "#D6D6DA" },
                  hover: { fill: "#F53" },
                  pressed: { fill: "#E42" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default InteractiveMap;
