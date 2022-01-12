import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; 
 
mapboxgl.accessToken = `${process.env.REACT_APP_TOKEN_MAPS}`;

if(!navigator.geolocation) {
  alert('Tu navegador no tiene opción de Geolocation');
  throw new Error('Tu navegador no tiene opción de Geolocation')
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);


