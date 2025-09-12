'use client';

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();

    if (pathname === "/") return null;

    const baseBtn = "w-30 h-12 flex items-center justify-center rounded text-2xl transition-colors";
    const orangeBtn = `${baseBtn} bg-[#ff5733] text-white hover:bg-[#9ca3af] `;
    const grayBtn = `${baseBtn} bg-[#9ca3af] text-black hover:text-white`;


    return (
        <header className="px-8 py-5 w-full flex items-center justify-between text-white text-center">
            <div className="flex gap-5 items-center">
                <Image src="/icons/favicon.svg" alt="logo" width={60} height={60} />
                <h1 className="text-3xl font-bold text-[#ffcc00]">SuperHero Archive</h1>
            </div>

            {pathname === "/heroes" && (
                <div className="flex gap-5 items-center">
                    <input
                        type="text"
                        className="px-4 py-2 w-70 h-10 border border-[#9ca3af] rounded hover:border-white"
                        placeholder="Search..."
                    />
                    <Link href="/create-hero"><button className={orangeBtn}>Create</button></Link>
                </div>
            )}

            {pathname.startsWith("/heroes/") && (
                <div className="flex gap-5">
                    <button className={orangeBtn}>Edit</button>
                    <button  onClick={()=> router.back()} className={grayBtn}>Back</button>
                </div>
            )}

            {pathname === "/create-hero" && (
                <button onClick={()=> router.back()} className={grayBtn}>Back</button>
            )}
        </header>
    );
};

export default Header;
