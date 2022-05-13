import MapComponent from '../components/MapComponent';
import { Selection } from '../components/Selection';
import React, { useEffect, useRef, useState } from 'react';
import { Lieu } from '../components/Lieu';
import '../styles/result.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Result = () => {
  const [result, setResult] = useState([]);
  const params = useParams();

  const markersRef = useRef({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/category-point/${params.category}`)
      .then((result) => result.data)
      .then((data) => {
        setResult(data);
        console.log(data);
      })
      .catch(() => {
        alert('No search results');
      });
  }, [params]);

  return (
    <div className="result">
      <MapComponent markersRef={markersRef} />
      <Selection />
      {result.map((point) => (
        <Lieu
          markersRef={markersRef}
          key={point.id}
          id={point.id}
          categorie={point.categorie}
          voie={point.voie}
          code_postal={point.code_postal}
          commune={point.commune}
          nom={point.nom}
        />
      ))}
    </div>
  );
};
