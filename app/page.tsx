'use client';

import { useState, useEffect } from 'react';
import ArtDisplay from './components/ArtDisplay';
import { ArtRecord } from './types';

export default function Home() {
  const [artData, setArtData] = useState<ArtRecord[]>([]);

  useEffect(() => {
    async function fetchArt() {
      const response = await fetch('/api/getArtData');
      const data = await response.json();
      setArtData(data);
    }
  fetchArt()
    .then(()=> console.log("Yayy!! Data fetched successfully"))
    .catch((e)=>console.log("No!! This happened:" + e));

  }, []);

  return (
    <div>
      {artData.map((artRecord) => (
        <ArtDisplay key={artRecord.id} data={artRecord} />
      ))}
    </div>
  );
}
