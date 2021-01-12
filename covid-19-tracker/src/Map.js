import React  from 'react'
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
import './Map.css';
import { showDataOnMap } from './util';
import 'leaflet/dist/leaflet.css';
import { iconMarker } from './Icon'

function Map({ countries, casesType, center, zoom }) {
    function ChangeView({ center, zoom }) {
        const map = useMap();
        map.setView(center, zoom);
        return null;
    }

    return (
        // <div className="map">
            <MapContainer 
                casesType={casesType}
                className="map"
                center={center} 
                zoom={zoom}
                //scrollWheelZoom={false}
            >
                <ChangeView center={center} zoom={zoom} />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> 
                {/* <Marker position={center} icon={iconMarker}>
                    popup here when marker position working
                </Marker>  */}
                {showDataOnMap(countries, casesType)}     
            </MapContainer>
        // </div>
    );
}

export default Map
