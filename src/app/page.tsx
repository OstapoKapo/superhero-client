import Link from "next/dist/client/link";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl text-[#ffcc00] font-bold">Welcome to SuperHero Archive</h1>
      <div className="flex flex-col gap-5">
        <Link href="/heroes">
          <button className="transition-[0.4s] mt-4 py-2 px-4 w-50 h-15 bg-[#9ca3af] text-black text-2xl rounded hover:scale-105">All Heroes</button>
        </Link>
        <Link href="/create-hero">
          <button className="transition-[0.4s] mt-4 py-2 px-4 w-50 h-15 bg-[#ff5733] text-white text-2xl rounded hover:scale-105">Create Hero</button>
        </Link>
      </div>
      <p className="mt-4 text-[#ffcc00] text-lg">Find or create your own superheroes</p>
    </main>
  );
};

export default Home;
