/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  useParams
} from "react-router-dom";

import styles from '../styles/map.css'


export default function MapComponent () {
const params = useParams();
console.log(params)

const lyonPosition = [45.764043 , 4.835659]
  return (
    <MapContainer
    center={lyonPosition}
    zoom={15}
    scrollWheelZoom={false}
    className={styles.map}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />

    <Marker position={lyonPosition} >

    </Marker>
  </MapContainer>
  );
}

