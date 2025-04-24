// pages/index.js
import Karakter from '../components/Karakter';

export default function Home() {
  const karakterData = {
    nama: 'Bima',
    gambar: '/wayang.png', // Pastikan gambar ini ada di folder public/
    status: 'Lapar',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Tamagotchi Wayang</h1>
      <Karakter
        nama={karakterData.nama}
        gambar={karakterData.gambar}
        status={karakterData.status}
      />
    </div>
  );
}

