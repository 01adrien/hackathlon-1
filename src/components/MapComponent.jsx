/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import * as L from 'leaflet';

import styles from '../styles/map.css';
import axios from 'axios';

export default function MapComponent({ markersRef }) {
  const params = useParams();
  const lyonPosition = [45.764043, 4.835659];

  const [result, setResult] = useState([]);

  var LeafIcon = L.Icon.extend({
    options: {
      iconSize: [25, 35],
      iconAnchor: [22, 70],
      popupAnchor: [-3, -76],
    },
  });

  var greenIcon = new LeafIcon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/490/490091.png',
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL_POINT_CATEGORY}/${params.category}`)
      .then((result) => result.data)
      .then((data) => {
        setResult(data);
      })
      .catch(() => {
        alert('No search results');
      });
  }, [params]);

  return (
    <MapContainer
      center={lyonPosition}
      zoom={14}
      scrollWheelZoom={false}
      className={styles.map}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {result.map((point) => (
        <Marker
          key={point.id}
          icon={greenIcon}
          position={[point.lat, point.lon]}
          ref={(element) => {
            markersRef.current[point.id] = element;
          }}
        >
          <Popup>
            <h1>{point.nom}</h1>
            <p>{point.voie}</p>
            <p>{point.commune}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
