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

