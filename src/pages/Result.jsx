import React from 'react';
import { Lieu } from "../components/Lieu";
import MapComponent from "../components/MapComponent";
import "../styles/result.css"

export const Result = () => {
  return (
    <>
      <div>
        <h1>Result</h1>
      </div>
        <MapComponent />
        <Lieu />
    </>
  )
}
