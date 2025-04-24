// pages/index.js
import { useState } from 'react';
import Karakter from '../components/Karakter';

export default function Home() {
  const [status, setStatus] = useState('Lapar');

  const karakterData = {
    nama: 'Bima',
    gambar: '/wayang.png', // Pastikan gambar ada di public/
  };

  // Fungsi interaksi
  const beriMakan = () => setStatus('Kenyang 🍽️');
  const latihKarakter = () => setStatus('Berlatih 🥋');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Tamagotchi Wayang</h1>
      
      <Karakter
        nama={karakterData.nama}
        gambar={karakterData.gambar}
        status={status}
      />

      <div className="mt-6 space-x-4">
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
      </div>
    </div>
  );
}
