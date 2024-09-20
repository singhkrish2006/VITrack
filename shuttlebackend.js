// src/ShuttleMap.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { db } from './firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const ShuttleMap = () => {
  const [shuttles, setShuttles] = useState([]);

  // Fetch shuttle data from Firebase Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'shuttles'), (snapshot) => {
      const shuttleData = snapshot.docs.map(doc => doc.data());
      setShuttles(shuttleData);
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <MapContainer center={[12.9716, 79.1583]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {shuttles.map((shuttle, idx) => (
        <Marker key={idx} position={[shuttle.latitude, shuttle.longitude]}>
          <Popup>{shuttle.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ShuttleMap;