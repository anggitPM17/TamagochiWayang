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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gunung bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="backdrop-blur-md bg-white/70 w-full h-full absolute z-0"></div>
      <div className="relative z-10 p-4 rounded-xl shadow-lg">
        <h1 className="text-5xl font-bold font-jawa mb-4 text-yellow-800">
          ꦠꦩꦒꦺꦴꦕꦶ ꦮꦪꦁ
        </h1>
        <p className="text-lg font-lora text-gray-800 mb-6">
          Tamagotchi Wayang
        </p>

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
    </div>
  );
}
