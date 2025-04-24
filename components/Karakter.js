// components/Karakter.js
import Image from 'next/image';

const Karakter = ({ nama, gambar, status }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">{nama}</h2>
      <Image src={gambar} alt={nama} width={200} height={200} />
      <p className="mt-2">Status: {status}</p>
    </div>
  );
};

export default Karakter;
export default function Karakter({ nama, gambar, status }) {
  return (
    <div className="text-center mb-6">
      <img
        src={gambar}
        alt={nama}
        className="w-48 h-48 mx-auto rounded-xl shadow-2xl border-4 border-yellow-300 hover:scale-105 transition-all duration-300"
      />
      <h2 className="text-2xl font-bold mt-4 text-gray-800">{nama}</h2>
      <p className="text-lg text-gray-700 mt-1">{status}</p>
    </div>
  );
}

