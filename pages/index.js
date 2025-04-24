import { useEffect, useState } from 'react';
import Karakter from '../components/Karakter';

export default function Home() {
  const [status, setStatus] = useState('Lapar');

  const karakterData = {
    nama: 'Bima',
    gambar: '/wayang.png',
  };

  const saveLastInteraction = () => {
    localStorage.setItem('lastInteraction', Date.now().toString());
  };

  const beriMakan = () => {
    setStatus('Kenyang 🍽️');
    saveLastInteraction();
  };

  const latihKarakter = () => {
    setStatus('Berlatih 🥋');
    saveLastInteraction();
  };

  const tidurKarakter = () => {
    setStatus('Tidur 😴');
    saveLastInteraction();

    // Setelah 8 detik, ubah status jadi Lapar
    setTimeout(() => {
      setStatus('Lapar');
    }, 8000);
  };

  useEffect(() => {
    const last = localStorage.getItem('lastInteraction');
    if (last) {
      const now = Date.now();
      const selisih = now - parseInt(last);
      const tigaJam = 3 * 60 * 60 * 1000;

      if (selisih >= tigaJam) {
        setStatus('Lapar');
      } else {
        const sisaWaktu = tigaJam - selisih;
        setTimeout(() => {
          setStatus('Lapar');
        }, sisaWaktu);
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Tamagotchi Wayang</h1>
      
      <Karakter
        nama={karakterData.nama}
        gambar={karakterData.gambar}
        status={status}
      />

      <div className="mt-6 space-x-4 flex flex-wrap justify-center">
        <button
          onClick={beriMakan}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
        >
          Beri Makan 🍚
        </button>
        <button
          onClick={latihKarakter}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
        >
          Latih Karakter 🛡️
        </button>
        <button
          onClick={tidurKarakter}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
        >
          Tidur 😴
        </button>
      </div>
    </div>
  );
}
