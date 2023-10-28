import Image from 'next/image';

const Home = () => {
  return (
    <main className="flex-1 h-full bg-red-light rounded-[20px] flex justify-center items-center">
      <Image
        src="/girl-and-pet.png"
        alt="Girl with pet"
        width={700}
        height={800}
      />
    </main>
  );
};

export default Home;
